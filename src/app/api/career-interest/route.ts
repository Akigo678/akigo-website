import { createHash, randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AREAS = new Set([
  "Technology & product",
  "Operations & support",
  "Safety & trust",
  "Growth & partnerships",
  "Other",
]);

type CareerInterestPayload = {
  name?: unknown;
  email?: unknown;
  city?: unknown;
  state?: unknown;
  area?: unknown;
  experience?: unknown;
  workLink?: unknown;
  privacyConsent?: unknown;
  website?: unknown;
};

function clean(value: unknown, limit: number): string {
  return typeof value === "string"
    ? value.trim().replace(/\u0000/g, "").slice(0, limit)
    : "";
}

function hash(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 20_000) {
      return NextResponse.json({ ok: false, message: "Submission is too large." }, { status: 413 });
    }
    const body = (await request.json()) as CareerInterestPayload;
    const website = clean(body.website, 200);
    if (website) return NextResponse.json({ ok: true, message: "Thank you." });

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const city = clean(body.city, 100);
    const state = clean(body.state, 100);
    const area = clean(body.area, 80);
    const experience = clean(body.experience, 2000);
    const workLink = clean(body.workLink, 500);

    if (name.length < 2 || !EMAIL_PATTERN.test(email) || !AREAS.has(area) || experience.length < 20) {
      return NextResponse.json({ ok: false, message: "Enter your name, a valid email, an area of interest, and at least 20 characters about your experience." }, { status: 400 });
    }
    if (body.privacyConsent !== true) {
      return NextResponse.json({ ok: false, message: "Please agree to the privacy notice before sending." }, { status: 400 });
    }
    if (workLink) {
      let parsed: URL;
      try { parsed = new URL(workLink); } catch {
        return NextResponse.json({ ok: false, message: "Use a full https:// link for your portfolio or résumé." }, { status: 400 });
      }
      if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
        return NextResponse.json({ ok: false, message: "Use a secure https:// link without embedded credentials." }, { status: 400 });
      }
    }

    const db = getAdminDb();
    const now = new Date();
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const limiter = db.collection("websiteRateLimits").doc(`career_${hash(clientIp)}_${hash(email)}`);
    await db.runTransaction(async (tx) => {
      const snapshot = await tx.get(limiter);
      const data = snapshot.data() as { windowStartedAt?: FirebaseFirestore.Timestamp; count?: number } | undefined;
      const started = data?.windowStartedAt?.toDate();
      const inWindow = !!started && now.getTime() - started.getTime() < 60 * 60 * 1000;
      const count = inWindow ? data?.count ?? 0 : 0;
      if (count >= 3) throw new Error("RATE_LIMITED");
      tx.set(limiter, {
        windowStartedAt: inWindow ? data?.windowStartedAt : FirebaseFirestore.Timestamp.fromDate(now),
        count: count + 1,
        updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    });

    const referenceId = `AKG-CAREER-${now.toISOString().slice(0, 10).replaceAll("-", "")}-${randomUUID().slice(0, 8).toUpperCase()}`;
    const submission = db.collection("websiteCareerInterest").doc();
    await submission.set({
      referenceId, name, email, city: city || null, state: state || null,
      area, experience, workLink: workLink || null, privacyConsent: true,
      status: "new", reviewStatus: "unreviewed", source: "careers_page",
      ipHash: hash(clientIp), userAgent: request.headers.get("user-agent") ?? null,
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
      updatedAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });
    await db.collection("adminNotifications").add({
      type: "website_career_interest", title: "New career-interest inquiry",
      message: `${name} expressed interest in ${area}.`,
      referenceId, submissionId: submission.id, status: "unread",
      createdAt: FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const adminEmail = process.env.CAREERS_ADMIN_EMAIL ?? process.env.CONTACT_ADMIN_EMAIL;
    if (resendKey && from) {
      const resend = new Resend(resendKey);
      const requests = [
        resend.emails.send({
          from, to: email, subject: `AkiGO received your career interest — ${referenceId}`,
          text: `Hello ${name},\n\nWe received your interest in ${area}.\nReference: ${referenceId}\n\nThis is not an application for an advertised role or an offer of employment. AkiGO may contact you if a relevant opportunity becomes available.\n\nAkiGO`,
        }),
      ];
      if (adminEmail) requests.push(resend.emails.send({
        from, to: adminEmail, replyTo: email, subject: `[${referenceId}] Career interest — ${name}`,
        text: [`Name: ${name}`, `Email: ${email}`, `Location: ${city}, ${state}`, `Area: ${area}`, `Experience: ${experience}`, `Work link: ${workLink}`].join("\n"),
      }));
      const results = await Promise.allSettled(requests);
      for (const result of results) {
        if (result.status === "rejected" || result.value.error) console.error("Career-interest notification email failed", result);
      }
    }
    return NextResponse.json({ ok: true, referenceId, message: "Your career interest has been received." });
  } catch (error) {
    if (error instanceof Error && error.message === "RATE_LIMITED") {
      return NextResponse.json({ ok: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }
    console.error("Career-interest submission failed", error);
    return NextResponse.json({ ok: false, message: "We could not submit your interest right now. Please try again later." }, { status: 500 });
  }
}
