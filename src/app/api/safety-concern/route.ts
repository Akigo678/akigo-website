import { createHash, randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ROLES = new Set([
  "Rider",
  "Driver",
  "Courier",
  "Business",
  "Recipient",
  "Website visitor",
  "Other",
]);

const CONCERN_TYPES = new Set([
  "Trip safety concern",
  "Delivery safety concern",
  "Driver conduct",
  "Rider conduct",
  "Courier conduct",
  "Unsafe pickup or drop-off",
  "Harassment or discrimination",
  "Threat or violence",
  "Suspicious account activity",
  "Privacy or data concern",
  "Website safety question",
  "Other",
]);

const URGENCY_OPTIONS = new Set([
  "Non-emergency",
  "Needs prompt review",
  "Follow-up to an emergency",
]);

const EMERGENCY_SERVICE_OPTIONS = new Set([
  "Yes",
  "No",
  "Not applicable",
]);

type SafetyPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  role?: unknown;
  concernType?: unknown;
  urgency?: unknown;
  reference?: unknown;
  incidentDate?: unknown;
  city?: unknown;
  state?: unknown;
  description?: unknown;
  contactedEmergencyServices?: unknown;
  privacyConsent?: unknown;
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

function isValidDate(value: string): boolean {
  if (!value) {
    return true;
  }

  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.getTime());
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as SafetyPayload;

    const name = normalizeText(payload.name, 120);
    const email = normalizeText(payload.email, 254).toLowerCase();
    const phone = normalizeText(payload.phone, 32);
    const role = normalizeText(payload.role, 80);
    const concernType = normalizeText(payload.concernType, 120);
    const urgency = normalizeText(payload.urgency, 80);
    const externalReference = normalizeText(payload.reference, 180);
    const incidentDate = normalizeText(payload.incidentDate, 10);
    const city = normalizeText(payload.city, 100);
    const state = normalizeText(payload.state, 100);
    const description = normalizeText(payload.description, 7000);
    const contactedEmergencyServices = normalizeText(
      payload.contactedEmergencyServices,
      40,
    );
    const website = normalizeText(payload.website, 200);
    const source = normalizeText(payload.source, 80) || "safety_page";
    const privacyConsent = payload.privacyConsent === true;

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

    if (!ROLES.has(role)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid role." },
        { status: 400 },
      );
    }

    if (!CONCERN_TYPES.has(concernType)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid concern type." },
        { status: 400 },
      );
    }

    if (!URGENCY_OPTIONS.has(urgency)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid urgency level." },
        { status: 400 },
      );
    }

    if (!EMERGENCY_SERVICE_OPTIONS.has(contactedEmergencyServices)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Select a valid emergency-services response.",
        },
        { status: 400 },
      );
    }

    if (!isValidDate(incidentDate)) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid incident date." },
        { status: 400 },
      );
    }

    if (description.length < 30) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Provide at least 30 characters describing the safety concern.",
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
    const rateLimitKey = `safety_${ipHash}_${emailHash}`;
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

    const referenceId = `AKG-SAFETY-${now
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;

    const submissionRef = db.collection("websiteSafetyConcerns").doc();

    await submissionRef.set({
      referenceId,
      name,
      email,
      phone: phone || null,
      role,
      concernType,
      urgency,
      externalReference: externalReference || null,
      incidentDate: incidentDate || null,
      city: city || null,
      state: state || null,
      description,
      contactedEmergencyServices,
      privacyConsent,
      source,
      status: "new",
      reviewStatus: "unreviewed",
      priority:
        urgency === "Follow-up to an emergency"
          ? "high"
          : urgency === "Needs prompt review"
            ? "medium"
            : "normal",
      ipHash,
      userAgent: request.headers.get("user-agent") ?? null,
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    await db.collection("adminNotifications").add({
      type: "website_safety_concern",
      title: "New website safety concern",
      message: `${name} submitted a ${concernType} report marked ${urgency}.`,
      referenceId,
      submissionId: submissionRef.id,
      status: "unread",
      priority:
        urgency === "Follow-up to an emergency"
          ? "high"
          : urgency === "Needs prompt review"
            ? "medium"
            : "normal",
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const adminEmail =
      process.env.SAFETY_ADMIN_EMAIL ??
      process.env.CONTACT_ADMIN_EMAIL;

    if (resendApiKey && fromEmail && adminEmail) {
      const resend = new Resend(resendApiKey);

      await Promise.allSettled([
        resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[${urgency}] [${referenceId}] ${concernType}`,
          replyTo: email,
          text: [
            `Reference: ${referenceId}`,
            `Name: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : "",
            `Role: ${role}`,
            `Concern type: ${concernType}`,
            `Urgency: ${urgency}`,
            externalReference
              ? `Related reference: ${externalReference}`
              : "",
            incidentDate ? `Incident date: ${incidentDate}` : "",
            city || state
              ? `Location: ${[city, state].filter(Boolean).join(", ")}`
              : "",
            `Emergency services contacted: ${contactedEmergencyServices}`,
            "",
            "Description:",
            description,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
        resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `AkiGO received your safety concern — ${referenceId}`,
          text: [
            `Hello ${name},`,
            "",
            "AkiGO received your safety concern.",
            `Reference: ${referenceId}`,
            `Concern type: ${concernType}`,
            `Urgency: ${urgency}`,
            "",
            "This confirmation is not an emergency response. Contact local emergency services immediately if anyone is in immediate danger.",
            "",
            "AkiGO may contact you if more information is required.",
            "",
            "AkiGO",
          ].join("\n"),
        }),
      ]);
    }

    return NextResponse.json({
      ok: true,
      referenceId,
      message: "Your safety concern was submitted successfully.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many safety concerns were submitted. Wait before trying again.",
        },
        { status: 429 },
      );
    }

    console.error("Safety concern submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your safety concern could not be submitted. Please try again later.",
      },
      { status: 500 },
    );
  }
}
