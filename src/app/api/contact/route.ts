import { createHash, randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INQUIRY_TYPES = new Set([
  "General support",
  "Rider support",
  "Driver support",
  "Delivery support",
  "Business partnership",
  "Safety support",
  "Media or press",
  "Careers",
  "Other",
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  inquiryType?: unknown;
  reference?: unknown;
  message?: unknown;
  privacyConsent?: unknown;
  website?: unknown;
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
    const payload = (await request.json()) as ContactPayload;

    const name = normalizeText(payload.name, 120);
    const email = normalizeText(payload.email, 254).toLowerCase();
    const phone = normalizeText(payload.phone, 32);
    const inquiryType = normalizeText(payload.inquiryType, 80);
    const reference = normalizeText(payload.reference, 160);
    const message = normalizeText(payload.message, 5000);
    const website = normalizeText(payload.website, 200);
    const privacyConsent = payload.privacyConsent === true;

    // Honeypot: return a generic success response without storing spam.
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

    if (!ALLOWED_INQUIRY_TYPES.has(inquiryType)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid inquiry type." },
        { status: 400 },
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        {
          ok: false,
          message: "Provide at least 20 characters describing your request.",
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

    const db = getAdminDb();
    const now = new Date();
    const ipHash = hashValue(getClientIp(request));
    const emailHash = hashValue(email);
    const rateLimitKey = `${ipHash}_${emailHash}`;
    const rateLimitRef = db.collection("websiteRateLimits").doc(rateLimitKey);

    await db.runTransaction(async (transaction) => {
      const snapshot = await transaction.get(rateLimitRef);
      const data = snapshot.data() as
        | { windowStartedAt?: FirebaseFirestore.Timestamp; count?: number }
        | undefined;

      const windowStartedAt = data?.windowStartedAt?.toDate();
      const withinWindow =
        windowStartedAt &&
        now.getTime() - windowStartedAt.getTime() < 60 * 60 * 1000;

      const currentCount = withinWindow ? data?.count ?? 0 : 0;

      if (currentCount >= 5) {
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

    const referenceId = `AKG-${now
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;

    const submissionRef = db.collection("websiteContactSubmissions").doc();

    await submissionRef.set({
      referenceId,
      name,
      email,
      phone: phone || null,
      inquiryType,
      externalReference: reference || null,
      message,
      privacyConsent,
      status: "new",
      source: "contact_page",
      ipHash,
      userAgent: request.headers.get("user-agent") ?? null,
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    await db.collection("adminNotifications").add({
      type: "website_contact_submission",
      title: "New website contact request",
      message: `${name} submitted a ${inquiryType} request.`,
      referenceId,
      submissionId: submissionRef.id,
      status: "unread",
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const adminEmail = process.env.CONTACT_ADMIN_EMAIL;

    if (resendApiKey && fromEmail && adminEmail) {
      const resend = new Resend(resendApiKey);

      await Promise.allSettled([
        resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[${referenceId}] ${inquiryType} — ${name}`,
          replyTo: email,
          text: [
            `Reference: ${referenceId}`,
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : "",
            `Inquiry type: ${inquiryType}`,
            reference ? `Related reference: ${reference}` : "",
            "",
            message,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
        resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `AkiGO received your message — ${referenceId}`,
          text: [
            `Hello ${name},`,
            "",
            "AkiGO received your message.",
            `Reference: ${referenceId}`,
            `Inquiry type: ${inquiryType}`,
            "",
            "Response timing depends on the inquiry type, message volume, and information required for review.",
            "",
            "Do not reply with passwords, authentication codes, or complete payment-card numbers.",
            "",
            "AkiGO",
          ].join("\n"),
        }),
      ]);
    }

    return NextResponse.json({
      ok: true,
      referenceId,
      message: "Your message was submitted successfully.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many requests were submitted. Wait before trying again.",
        },
        { status: 429 },
      );
    }

    console.error("Contact submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your message could not be submitted. Please try again later.",
      },
      { status: 500 },
    );
  }
}
