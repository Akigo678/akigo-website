import { createHash, randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INDUSTRIES = new Set([
  "Restaurant",
  "Retail",
  "Healthcare",
  "Hospitality",
  "Professional services",
  "Local organization",
  "Government or public agency",
  "Other",
]);

const PRIMARY_NEEDS = new Set([
  "On-demand delivery",
  "Scheduled delivery",
  "Scheduled transportation",
  "Recurring transportation",
  "Retail fulfillment",
  "Meal delivery",
  "Document delivery",
  "Guest transportation",
  "Employee transportation",
  "Healthcare transportation",
  "Team account access",
  "Other",
]);

const REQUEST_FREQUENCIES = new Set([
  "",
  "Occasional",
  "Weekly",
  "Several times per week",
  "Daily",
  "High volume",
  "Not sure",
]);

const TEAM_SIZES = new Set([
  "",
  "1–5",
  "6–20",
  "21–50",
  "51–200",
  "201+",
  "Not sure",
]);

type BusinessPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  organization?: unknown;
  industry?: unknown;
  city?: unknown;
  state?: unknown;
  locations?: unknown;
  primaryNeed?: unknown;
  requestFrequency?: unknown;
  teamSize?: unknown;
  details?: unknown;
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
    const payload = (await request.json()) as BusinessPayload;

    const name = normalizeText(payload.name, 120);
    const email = normalizeText(payload.email, 254).toLowerCase();
    const phone = normalizeText(payload.phone, 32);
    const organization = normalizeText(payload.organization, 180);
    const industry = normalizeText(payload.industry, 80);
    const city = normalizeText(payload.city, 100);
    const state = normalizeText(payload.state, 100);
    const locationsText = normalizeText(payload.locations, 12);
    const primaryNeed = normalizeText(payload.primaryNeed, 100);
    const requestFrequency = normalizeText(payload.requestFrequency, 80);
    const teamSize = normalizeText(payload.teamSize, 40);
    const details = normalizeText(payload.details, 5000);
    const website = normalizeText(payload.website, 200);
    const source = normalizeText(payload.source, 80) || "business_page";
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
        { ok: false, message: "Enter a valid business email address." },
        { status: 400 },
      );
    }

    if (organization.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Enter your organization name." },
        { status: 400 },
      );
    }

    if (!INDUSTRIES.has(industry)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid industry." },
        { status: 400 },
      );
    }

    if (city.length < 2 || state.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid city and state or region." },
        { status: 400 },
      );
    }

    if (!PRIMARY_NEEDS.has(primaryNeed)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid primary need." },
        { status: 400 },
      );
    }

    if (!REQUEST_FREQUENCIES.has(requestFrequency)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid request frequency." },
        { status: 400 },
      );
    }

    if (!TEAM_SIZES.has(teamSize)) {
      return NextResponse.json(
        { ok: false, message: "Select a valid team size." },
        { status: 400 },
      );
    }

    if (details.length < 30) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Provide at least 30 characters describing your business needs.",
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

    let locations: number | null = null;

    if (locationsText) {
      const parsed = Number.parseInt(locationsText, 10);

      if (!Number.isInteger(parsed) || parsed < 1 || parsed > 100000) {
        return NextResponse.json(
          {
            ok: false,
            message: "Enter a valid number of business locations.",
          },
          { status: 400 },
        );
      }

      locations = parsed;
    }

    const db = getAdminDb();
    const now = new Date();
    const ipHash = hashValue(getClientIp(request));
    const emailHash = hashValue(email);
    const rateLimitKey = `business_${ipHash}_${emailHash}`;
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

    const referenceId = `AKG-BUSINESS-${now
      .toISOString()
      .slice(0, 10)
      .replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;

    const submissionRef = db.collection("websiteBusinessRequests").doc();

    await submissionRef.set({
      referenceId,
      name,
      email,
      phone: phone || null,
      organization,
      industry,
      city,
      state,
      locations,
      primaryNeed,
      requestFrequency: requestFrequency || null,
      teamSize: teamSize || null,
      details,
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
      type: "website_business_request",
      title: "New business-interest request",
      message: `${organization} submitted a ${primaryNeed} request.`,
      referenceId,
      submissionId: submissionRef.id,
      status: "unread",
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const adminEmail =
      process.env.BUSINESS_ADMIN_EMAIL ??
      process.env.PARTNER_ADMIN_EMAIL ??
      process.env.CONTACT_ADMIN_EMAIL;

    if (resendApiKey && fromEmail && adminEmail) {
      const resend = new Resend(resendApiKey);

      await Promise.allSettled([
        resend.emails.send({
          from: fromEmail,
          to: adminEmail,
          subject: `[${referenceId}] Business request — ${organization}`,
          replyTo: email,
          text: [
            `Reference: ${referenceId}`,
            `Contact: ${name}`,
            `Email: ${email}`,
            phone ? `Phone: ${phone}` : "",
            `Organization: ${organization}`,
            `Industry: ${industry}`,
            `Location: ${city}, ${state}`,
            locations ? `Number of locations: ${locations}` : "",
            `Primary need: ${primaryNeed}`,
            requestFrequency
              ? `Expected frequency: ${requestFrequency}`
              : "",
            teamSize ? `Expected team size: ${teamSize}` : "",
            `Marketing consent: ${marketingConsent ? "Yes" : "No"}`,
            "",
            "Business details:",
            details,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
        resend.emails.send({
          from: fromEmail,
          to: email,
          subject: `AkiGO received your business request — ${referenceId}`,
          text: [
            `Hello ${name},`,
            "",
            "AkiGO received your business-interest request.",
            `Reference: ${referenceId}`,
            `Organization: ${organization}`,
            `Primary need: ${primaryNeed}`,
            "",
            "Submitting this request does not guarantee service availability, account approval, pricing, or commercial terms.",
            "",
            "If the request aligns with current planning and market readiness, AkiGO may contact you for additional information.",
            "",
            "AkiGO",
          ].join("\n"),
        }),
      ]);
    }

    return NextResponse.json({
      ok: true,
      referenceId,
      message:
        "Your business-interest request was submitted successfully.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many business requests were submitted. Wait before trying again.",
        },
        { status: 429 },
      );
    }

    console.error("Business-interest submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your business request could not be submitted. Please try again later.",
      },
      { status: 500 },
    );
  }
}
