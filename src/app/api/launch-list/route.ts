import {
  createHash,
  randomBytes,
} from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_SOURCES = new Set([
  "ride_page",
  "drive_page",
  "deliver_page",
  "business_page",
  "download_page",
  "home_page",
  "newsletter_page",
  "footer",
  "general",
]);

type LaunchListPayload = {
  name?: unknown;
  email?: unknown;
  city?: unknown;
  state?: unknown;
  source?: unknown;
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

function getInterestFromSource(source: string): string {
  switch (source) {
    case "ride_page":
      return "rider";
    case "drive_page":
      return "driver";
    case "deliver_page":
      return "delivery";
    case "business_page":
      return "business";
    case "download_page":
      return "app_availability";
    default:
      return "general";
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as LaunchListPayload;

    const name = normalizeText(payload.name, 120);
    const email = normalizeText(payload.email, 254).toLowerCase();
    const city = normalizeText(payload.city, 100);
    const state = normalizeText(payload.state, 100);
    const rawSource = normalizeText(payload.source, 80);
    const source = ALLOWED_SOURCES.has(rawSource)
      ? rawSource
      : "general";
    const privacyConsent = payload.privacyConsent === true;
    const website = normalizeText(payload.website, 200);

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

    if (!privacyConsent) {
      return NextResponse.json(
        {
          ok: false,
          message: "Consent is required before subscribing.",
        },
        { status: 400 },
      );
    }

    const db = getAdminDb();
    const now = new Date();
    const ipHash = hashValue(getClientIp(request));
    const emailHash = hashValue(email);
    const interest = getInterestFromSource(source);

    const rateLimitRef = db
      .collection("websiteRateLimits")
      .doc(`launch_${ipHash}_${emailHash}`);

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

      if (currentCount >= 4) {
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

    const subscriberRef = db
      .collection("websiteLaunchList")
      .doc(emailHash);

    const existing = await subscriberRef.get();
    const existingData = existing.data() as
      | {
          status?: string;
          sources?: string[];
          interests?: string[];
        }
      | undefined;

    if (existingData?.status === "confirmed") {
      await subscriberRef.set(
        {
          name,
          city: city || null,
          state: state || null,
          sources: FirebaseFirestore.FieldValue.arrayUnion(source),
          interests:
            FirebaseFirestore.FieldValue.arrayUnion(interest),
          lastRequestedAt:
            FirebaseFirestore.FieldValue.serverTimestamp(),
          updatedAt:
            FirebaseFirestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );

      return NextResponse.json({
        ok: true,
        message:
          "You are already subscribed. Your update preferences were refreshed.",
      });
    }

    const confirmationToken = randomBytes(32).toString("hex");
    const confirmationTokenHash = hashValue(confirmationToken);
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    await subscriberRef.set(
      {
        email,
        emailHash,
        name,
        city: city || null,
        state: state || null,
        sources: FirebaseFirestore.FieldValue.arrayUnion(source),
        interests:
          FirebaseFirestore.FieldValue.arrayUnion(interest),
        privacyConsent: true,
        consentTextVersion: "launch-list-v1",
        status: "pending_confirmation",
        confirmationTokenHash,
        confirmationExpiresAt:
          FirebaseFirestore.Timestamp.fromDate(expiresAt),
        ipHash,
        userAgent: request.headers.get("user-agent") ?? null,
        lastRequestedAt:
          FirebaseFirestore.FieldValue.serverTimestamp(),
        createdAt:
          existing.exists
            ? existing.get("createdAt") ??
              FirebaseFirestore.FieldValue.serverTimestamp()
            : FirebaseFirestore.FieldValue.serverTimestamp(),
        updatedAt:
          FirebaseFirestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const confirmationUrl = new URL(
      "/api/launch-list/confirm",
      siteUrl,
    );

    confirmationUrl.searchParams.set("token", confirmationToken);
    confirmationUrl.searchParams.set("email", email);

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !fromEmail) {
      console.error(
        "Launch-list confirmation email is not configured.",
      );

      return NextResponse.json(
        {
          ok: false,
          message:
            "Subscription email delivery is not configured. Please try again later.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(resendApiKey);

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Confirm your AkiGO launch-list subscription",
      text: [
        `Hello ${name},`,
        "",
        "Confirm your AkiGO launch-list subscription using the link below:",
        confirmationUrl.toString(),
        "",
        "This link expires in 24 hours.",
        "",
        "You will not be subscribed unless you confirm.",
        "",
        "AkiGO",
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;background:#050505;color:#ffffff;padding:32px;">
          <div style="max-width:560px;margin:0 auto;border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:32px;background:#0b0b0b;">
            <div style="font-size:28px;font-weight:800;margin-bottom:24px;">Aki<span style="color:#96ed08;">GO</span></div>
            <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px;">Confirm your subscription</h1>
            <p style="color:rgba(255,255,255,.65);line-height:1.7;">Hello ${name}, confirm that you want to receive the AkiGO launch and availability updates you requested.</p>
            <a href="${confirmationUrl.toString()}" style="display:inline-block;margin-top:18px;background:#96ed08;color:#000000;text-decoration:none;font-weight:800;padding:15px 22px;border-radius:999px;">Confirm subscription</a>
            <p style="margin-top:24px;color:rgba(255,255,255,.42);font-size:13px;line-height:1.6;">This confirmation link expires in 24 hours. You will not be subscribed unless you confirm.</p>
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error(
        "Launch-list confirmation email failed",
        emailResult.error,
      );

      return NextResponse.json(
        {
          ok: false,
          message:
            "The confirmation email could not be sent. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Check your email and confirm your subscription within 24 hours.",
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many subscription requests were submitted. Wait before trying again.",
        },
        { status: 429 },
      );
    }

    console.error("Launch-list subscription failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "Your subscription could not be submitted. Please try again later.",
      },
      { status: 500 },
    );
  }
}
