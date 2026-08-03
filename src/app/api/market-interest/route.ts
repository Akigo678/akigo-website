import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MARKET_INTEREST_FUNCTION_URL =
  process.env.MARKET_INTEREST_FUNCTION_URL ||
  "https://us-central1-akigo-9ad3b.cloudfunctions.net/submitWebsiteMarketInterest";

type MarketInterestPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  state?: unknown;
  zipCode?: unknown;
  audience?: unknown;
  organization?: unknown;
  serviceInterest?: unknown;
  expectedUse?: unknown;
  needs?: unknown;
  privacyConsent?: unknown;
  marketingConsent?: unknown;
  companyWebsiteField?: unknown;
  source?: unknown;
};

type FunctionResponse = {
  ok?: boolean;
  message?: string;
  referenceId?: string;
  submissionId?: string;
};

function normalizeText(value: unknown, maxLength: number): string {
  return typeof value === "string"
    ? value.trim().replace(/\u0000/g, "").slice(0, maxLength)
    : "";
}

async function sendConfirmationEmails(
  payload: MarketInterestPayload,
  referenceId: string,
) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const adminEmail =
    process.env.MARKET_ADMIN_EMAIL ??
    process.env.CONTACT_ADMIN_EMAIL;

  if (!resendApiKey || !fromEmail || !adminEmail) return;

  const name = normalizeText(payload.name, 120);
  const email = normalizeText(payload.email, 254).toLowerCase();
  const phone = normalizeText(payload.phone, 32);
  const city = normalizeText(payload.city, 100);
  const state = normalizeText(payload.state, 100);
  const zipCode = normalizeText(payload.zipCode, 10);
  const audience = normalizeText(payload.audience, 100);
  const organization = normalizeText(payload.organization, 180);
  const serviceInterest = normalizeText(payload.serviceInterest, 120);
  const expectedUse = normalizeText(payload.expectedUse, 80);
  const needs = normalizeText(payload.needs, 4000);
  const marketingConsent = payload.marketingConsent === true;

  if (!email) return;

  const resend = new Resend(resendApiKey);
  const results = await Promise.allSettled([
    resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `[${referenceId}] Market interest — ${city}, ${state}`,
      replyTo: email,
      text: [
        `Reference: ${referenceId}`,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        `Market: ${city}, ${state}`,
        zipCode ? `ZIP code: ${zipCode}` : "",
        `Audience: ${audience}`,
        organization ? `Organization: ${organization}` : "",
        `Service interest: ${serviceInterest}`,
        expectedUse ? `Expected use: ${expectedUse}` : "",
        `Marketing consent: ${marketingConsent ? "Yes" : "No"}`,
        needs ? "" : "",
        needs ? "Local needs:" : "",
        needs,
      ].filter(Boolean).join("\n"),
    }),
    resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `AkiGO received your market interest — ${referenceId}`,
      text: [
        `Hello ${name},`,
        "",
        "AkiGO received your market-interest submission.",
        `Reference: ${referenceId}`,
        `Market: ${city}, ${state}`,
        `Service interest: ${serviceInterest}`,
        "",
        "This submission helps AkiGO evaluate local demand. It does not guarantee launch selection, service availability, or a launch date.",
        "",
        marketingConsent
          ? "You may receive relevant market and availability updates."
          : "You did not opt in to marketing updates.",
        "",
        "AkiGO",
      ].join("\n"),
    }),
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(
        index === 0
          ? "Market-interest Admin email failed"
          : "Market-interest confirmation email failed",
        result.reason,
      );
    }
  });
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/market-interest",
    method: "POST",
    backend: "Firebase HTTPS Function",
  });
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as MarketInterestPayload;
    const functionResponse = await fetch(MARKET_INTEREST_FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": request.headers.get("user-agent") || "AkiGO-Website-Server",
        "X-Forwarded-For": request.headers.get("x-forwarded-for") || "",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(25_000),
    });

    let result: FunctionResponse;
    try {
      result = (await functionResponse.json()) as FunctionResponse;
    } catch {
      result = { ok: false, message: "The AkiGO backend returned an invalid response." };
    }

    if (!functionResponse.ok || !result.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: result.message || "Your market-interest request could not be submitted.",
        },
        { status: functionResponse.status || 502 },
      );
    }

    if (result.referenceId) {
      await sendConfirmationEmails(payload, result.referenceId).catch((emailError) => {
        console.error("Market-interest email processing failed", emailError);
      });
    }

    return NextResponse.json({
      ok: true,
      referenceId: result.referenceId,
      submissionId: result.submissionId,
      message: result.message || "Your market-interest request was submitted successfully.",
    });
  } catch (error) {
    console.error("Market-interest proxy failed", error);
    const timedOut = error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "AbortError");

    return NextResponse.json(
      {
        ok: false,
        message: timedOut
          ? "The AkiGO backend took too long to respond. Please try again."
          : "Your market-interest request could not be submitted. Please try again later.",
      },
      { status: timedOut ? 504 : 500 },
    );
  }
}
