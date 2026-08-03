import { createHash, randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VEHICLE_ACCESS_OPTIONS = new Set([
  "I have access to a vehicle",
  "I plan to obtain a vehicle",
  "I am interested in delivery only",
  "Not sure yet",
]);

const SERVICE_OPTIONS = new Set([
  "Passenger rides",
  "Delivery",
  "Passenger rides and delivery",
  "Premium ride categories",
  "Accessible transportation",
  "Scheduled transportation",
  "Not sure yet",
]);

const AVAILABILITY_OPTIONS = new Set([
  "",
  "Full-time",
  "Part-time",
  "Weekdays",
  "Weekends",
  "Evenings",
  "Flexible",
  "Not sure yet",
]);

type DriverInterestPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  state?: unknown;
  ageConfirmation?: unknown;
  licensedYears?: unknown;
  vehicleAccess?: unknown;
  vehicleYear?: unknown;
  vehicleMake?: unknown;
  vehicleModel?: unknown;
  serviceInterest?: unknown;
  availability?: unknown;
  notes?: unknown;
  privacyConsent?: unknown;
  marketingConsent?: unknown;
  website?: unknown;
  source?: unknown;
};

function normalizeText(value: unknown, maxLength: number): string {
  return typeof value === "string"
    ? value.trim().replace(/\u0000/g, "").slice(0, maxLength)
    : "";
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function hashValue(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as DriverInterestPayload;

    const name = normalizeText(payload.name, 120);
    const email = normalizeText(payload.email, 254).toLowerCase();
    const phone = normalizeText(payload.phone, 32);
    const city = normalizeText(payload.city, 100);
    const state = normalizeText(payload.state, 100);
    const licensedYearsText = normalizeText(payload.licensedYears, 3);
    const vehicleAccess = normalizeText(payload.vehicleAccess, 100);
    const vehicleYearText = normalizeText(payload.vehicleYear, 4);
    const vehicleMake = normalizeText(payload.vehicleMake, 80);
    const vehicleModel = normalizeText(payload.vehicleModel, 80);
    const serviceInterest = normalizeText(payload.serviceInterest, 100);
    const availability = normalizeText(payload.availability, 80);
    const notes = normalizeText(payload.notes, 3000);
    const website = normalizeText(payload.website, 200);
    const source =
      normalizeText(payload.source, 80) || "driver_requirements_page";
    const ageConfirmation = payload.ageConfirmation === true;
    const privacyConsent = payload.privacyConsent === true;
    const marketingConsent = payload.marketingConsent === true;

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Enter your full name." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid email address." },
        { status: 400 },
      );
    }

    if (city.length < 2 || state.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid city and state." },
        { status: 400 },
      );
    }

    if (!VEHICLE_ACCESS_OPTIONS.has(vehicleAccess)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid vehicle-access option." },
        { status: 400 },
      );
    }

    if (!SERVICE_OPTIONS.has(serviceInterest)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid service interest." },
        { status: 400 },
      );
    }

    if (!AVAILABILITY_OPTIONS.has(availability)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid availability option." },
        { status: 400 },
      );
    }

    if (!ageConfirmation) {
      return NextResponse.json(
        {
          ok: false,
          message: "Age confirmation is required before submitting.",
        },
        { status: 400 },
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        {
          ok: false,
          message: "Privacy consent is required before submitting.",
        },
        { status: 400 },
      );
    }

    let licensedYears: number | null = null;

    if (licensedYearsText) {
      const parsed = Number.parseInt(licensedYearsText, 10);

      if (!Number.isInteger(parsed) || parsed < 0 || parsed > 80) {
        return NextResponse.json(
          { ok: false, message: "Enter valid licensed-driving experience." },
          { status: 400 },
        );
      }

      licensedYears = parsed;
    }

    let vehicleYear: number | null = null;

    if (vehicleYearText) {
      const parsed = Number.parseInt(vehicleYearText, 10);

      if (!Number.isInteger(parsed) || parsed < 1980 || parsed > 2100) {
        return NextResponse.json(
          { ok: false, message: "Enter a valid vehicle year." },
          { status: 400 },
        );
      }

      vehicleYear = parsed;
    }

    const db = getAdminDb();
    const now = new Date();
    const ipHash = hashValue(getClientIp(request));
    const emailHash = hashValue(email);
    const rateLimitKey = `driver_${ipHash}_${emailHash}`;
    const rateLimitRef = db.collection("websiteRateLimits").doc(rateLimitKey);

    await db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(rateLimitRef);
      const data = snapshot.data() as
        | {
            windowStartedAt?: FirebaseFirestore.Timestamp;
            count?: number;
          }
        | undefined;

      const windowStartedAt = data?.windowStartedAt?.toDate();
      const withinWindow =
        windowStartedAt &&
        now.getTime() - windowStartedAt.getTime() < 60 * 60 * 1000;

      const currentCount = withinWindow ? data?.count ?? 0 : 0;

      if (currentCount >= 3) {
        throw new Error("RATE_LIMITED");
      }

      transaction.set(
        rateLimitRef,
        {
          windowStartedAt: withinWindow
            ? data?.windowStartedAt
            : FirebaseFirestore.Timestamp.fromDate(now),
          count: currentCount + 1,
          updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );
    });

    const referenceId = `AKG-DRIVER-${now
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;

    const submissionRef = db.collection("websiteDriverInterest").doc();

    await submissionRef.set({
      referenceId,
      name,
      email,
      phone: phone || null,
      city,
      state,
      licensedYears,
      vehicleAccess,
      vehicleYear,
      vehicleMake: vehicleMake || null,
      vehicleModel: vehicleModel || null,
      serviceInterest,
      availability: availability || null,
      notes: notes || null,
      ageConfirmation,
      privacyConsent,
      marketingConsent,
      source,
      status: "new",
      reviewStatus: "unreviewed",
      ipHash,
      userAgent: request.headers.get("user-agent") ?? null,
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    await db.collection("adminNotifications").add({
      type: "website_driver_interest",
      title: "New driver-interest request",
      message: `${name} registered interest in ${serviceInterest} for ${city}, ${state}.`,
      referenceId,
      submissionId: submissionRef.id,
      status: "unread",
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const adminEmail =
      process.env.DRIVER_ADMIN_EMAIL ??
      process.env.CONTACT_ADMIN_EMAIL;

    if (resendApiKey && fromEmail && adminEmail) {
      const resend = new Resend(resendApiKey);

      await Promise.allSettled([
        resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[${referenceId}] Driver interest — ${name}`,
          replyTo: email,
          text: [
            `Reference: ${referenceId}`,
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : "",
            `Market: ${city}, ${state}`,
            licensedYears !== null
              ? `Licensed years: ${licensedYears}`
              : "",
            `Vehicle access: ${vehicleAccess}`,
            vehicleYear ? `Vehicle year: ${vehicleYear}` : "",
            vehicleMake ? `Vehicle make: ${vehicleMake}` : "",
            vehicleModel ? `Vehicle model: ${vehicleModel}` : "",
            `Service interest: ${serviceInterest}`,
            availability ? `Availability: ${availability}` : "",
            `Marketing consent: ${marketingConsent ? "Yes" : "No"}`,
            notes ? "" : "",
            notes ? "Additional information:" : "",
            notes,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
        resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `AkiGO received your driver interest — ${referenceId}`,
          text: [
            `Hello ${name},`,
            "",
            "AkiGO received your driver-interest submission.",
            `Reference: ${referenceId}`,
            `Market: ${city}, ${state}`,
            `Service interest: ${serviceInterest}`,
            "",
            "This submission does not create a driver account, guarantee approval, or confirm onboarding availability.",
            "",
            "AkiGO may contact you when relevant onboarding or launch-market information becomes available.",
            "",
            "AkiGO",
          ].join("\n"),
        }),
      ]);
    }

    return NextResponse.json({
      ok: true,
      referenceId,
      message: "Your driver-interest request was submitted successfully.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many driver-interest requests were submitted. Wait before trying again.",
        },
        { status: 429 },
      );
    }

    console.error("Driver-interest submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your driver-interest request could not be submitted. Please try again later.",
      },
      { status: 500 },
    );
  }
}
