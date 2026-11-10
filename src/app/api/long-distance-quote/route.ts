import { createHash, randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const tripTypes = new Set(["one_way", "round_trip"]);
const vehicleTypes = new Set(["Any suitable vehicle", "Basic", "Comfort", "XL", "XXL", "Executive", "Executive SUV"]);

type Payload = Record<string, unknown>;
function field(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().replace(/\u0000/g, "").slice(0, max) : "";
}
function hash(value: string) { return createHash("sha256").update(value).digest("hex"); }

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 16_000) {
      return NextResponse.json({ ok: false, message: "Request is too large." }, { status: 413 });
    }
    const data = (await request.json()) as Payload;
    if (field(data.website, 200)) return NextResponse.json({ ok: true, message: "Thank you." });

    const name = field(data.name, 120);
    const email = field(data.email, 254).toLowerCase();
    const phone = field(data.phone, 32);
    const pickup = field(data.pickup, 250);
    const destination = field(data.destination, 250);
    const departureDate = field(data.departureDate, 10);
    const departureTime = field(data.departureTime, 5);
    const tripType = field(data.tripType, 20);
    const returnDate = field(data.returnDate, 10);
    const returnTime = field(data.returnTime, 5);
    const vehicleType = field(data.vehicleType, 50);
    const notes = field(data.notes, 1500);
    const passengers = Number(data.passengers);
    const date = new Date(`${departureDate}T12:00:00Z`);

    if (
      name.length < 2 || !emailPattern.test(email) ||
      pickup.length < 5 || destination.length < 5 || pickup.toLowerCase() === destination.toLowerCase() ||
      !/^\d{4}-\d{2}-\d{2}$/.test(departureDate) ||
      Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== departureDate ||
      departureDate < new Date().toISOString().slice(0, 10) ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(departureTime) ||
      !tripTypes.has(tripType) || !vehicleTypes.has(vehicleType) ||
      (tripType === "round_trip" && (
        !/^\d{4}-\d{2}-\d{2}$/.test(returnDate) ||
        Number.isNaN(new Date(`${returnDate}T12:00:00Z`).getTime()) ||
        new Date(`${returnDate}T12:00:00Z`).toISOString().slice(0, 10) !== returnDate ||
        returnDate < departureDate ||
        !/^([01]\d|2[0-3]):[0-5]\d$/.test(returnTime)
      )) ||
      !Number.isInteger(passengers) || passengers < 1 || passengers > 20
    ) {
      return NextResponse.json({ ok: false, message: "Please check your contact information, locations, departure date and time, passengers, and ride preferences." }, { status: 400 });
    }
    if (data.privacyConsent !== true) {
      return NextResponse.json({ ok: false, message: "Please agree to the privacy notice." }, { status: 400 });
    }

    const db = getAdminDb();
    const now = new Date();
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limiter = db.collection("websiteRateLimits").doc(`long_quote_${hash(ip)}_${hash(email)}`);
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(limiter);
      const record = snap.data() as { windowStartedAt?: FirebaseFirestore.Timestamp; count?: number } | undefined;
      const started = record?.windowStartedAt?.toDate();
      const within = !!started && now.getTime() - started.getTime() < 60 * 60 * 1000;
      const count = within ? record?.count ?? 0 : 0;
      if (count >= 3) throw new Error("RATE_LIMITED");
      tx.set(limiter, {
        windowStartedAt: within ? record?.windowStartedAt : FirebaseFirestore.Timestamp.fromDate(now),
        count: count + 1, updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    });

    const referenceId = `AKG-QUOTE-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;
    const ref = db.collection("websiteLongDistanceQuotes").doc();
    await ref.set({
      referenceId, name, email, phone: phone || null, pickup, destination,
      departureDate, departureTime, tripType, vehicleType, passengers, notes: notes || null,
      returnDate: tripType === "round_trip" ? returnDate : null,
      returnTime: tripType === "round_trip" ? returnTime : null,
      privacyConsent: true, status: "new", reviewStatus: "unreviewed",
      quoteAmountMinor: null, quoteCurrency: "USD", quoteApproved: false,
      bookingId: null, paymentIntentId: null, source: "long_distance_quote_page",
      ipHash: hash(ip), createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });
    await db.collection("adminNotifications").add({
      type: "website_long_distance_quote", title: "New long-distance ride quote request",
      message: `${name} requested a quote from ${pickup} to ${destination}.`,
      referenceId, submissionId: ref.id, status: "unread",
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const admin = process.env.QUOTE_ADMIN_EMAIL ?? process.env.CONTACT_ADMIN_EMAIL;
    if (apiKey && from) {
      const resend = new Resend(apiKey);
      const messages = [
        resend.emails.send({
          from, to: email,
          subject: `AkiGO received your long-distance quote request — ${referenceId}`,
          text: `Hello ${name},\n\nWe received your request for a long-distance ride quote.\nReference: ${referenceId}\nRoute: ${pickup} to ${destination}\nTravel date: ${departureDate}\n\nThis is not a confirmed booking or a fare offer. No payment has been taken and availability is not guaranteed. AkiGO may contact you after reviewing the details.\n\nAkiGO`,
        }),
      ];
      if (admin) messages.push(resend.emails.send({
        from, to: admin, replyTo: email,
        subject: `[${referenceId}] Long-distance quote request`,
        text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`,
          `Pickup: ${pickup}`, `Destination: ${destination}`,
          `Date/time (local): ${departureDate} ${departureTime}`,
          `Return date/time: ${tripType === "round_trip" ? `${returnDate} ${returnTime}` : "Not applicable"}`,
          `Trip: ${tripType}`, `Passengers: ${passengers}`,
          `Vehicle: ${vehicleType}`, `Notes: ${notes}`].join("\n"),
      }));
      const results = await Promise.allSettled(messages);
      for (const result of results) {
        if (result.status === "rejected" || result.value.error) console.error("Long-distance quote email notification failed", result);
      }
    }

    return NextResponse.json({ ok: true, referenceId, message: "Your quote request was received. AkiGO will review the details." });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }
    console.error("Long-distance quote request failed", error);
    return NextResponse.json({ ok: false, message: "We could not submit your request right now. Please try again later." }, { status: 500 });
  }
}
