import { createHash } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { getAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";

function hashValue(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function redirectToResult(
  request: NextRequest,
  result: "success" | "invalid" | "expired",
) {
  const url = new URL("/newsletter/confirmed", request.url);
  url.searchParams.set("result", result);
  return NextResponse.redirect(url);
}

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token")?.trim();
    const email = request.nextUrl.searchParams
      .get("email")
      ?.trim()
      .toLowerCase();

    if (!token || !email) {
      return redirectToResult(request, "invalid");
    }

    const db = getAdminDb();
    const emailHash = hashValue(email);
    const subscriberRef = db
      .collection("websiteLaunchList")
      .doc(emailHash);
    const snapshot = await subscriberRef.get();

    if (!snapshot.exists) {
      return redirectToResult(request, "invalid");
    }

    const data = snapshot.data() as {
      status?: string;
      name?: string;
      confirmationTokenHash?: string;
      confirmationExpiresAt?: FirebaseFirestore.Timestamp;
      sources?: string[];
      interests?: string[];
      city?: string | null;
      state?: string | null;
    };

    if (data.status === "confirmed") {
      return redirectToResult(request, "success");
    }

    if (
      data.confirmationTokenHash !== hashValue(token)
    ) {
      return redirectToResult(request, "invalid");
    }

    const expiresAt = data.confirmationExpiresAt?.toDate();

    if (!expiresAt || expiresAt.getTime() < Date.now()) {
      return redirectToResult(request, "expired");
    }

    await subscriberRef.set(
      {
        status: "confirmed",
        confirmedAt:
          FirebaseFirestore.FieldValue.serverTimestamp(),
        confirmationTokenHash:
          FirebaseFirestore.FieldValue.delete(),
        confirmationExpiresAt:
          FirebaseFirestore.FieldValue.delete(),
        updatedAt:
          FirebaseFirestore.FieldValue.serverTimestamp(),
      },
      { merge: true },
    );

    await db.collection("adminNotifications").add({
      type: "website_launch_list_confirmed",
      title: "New confirmed launch-list subscriber",
      message: `${data.name ?? email} confirmed an AkiGO launch-list subscription.`,
      subscriberId: subscriberRef.id,
      status: "unread",
      createdAt:
        FirebaseFirestore.FieldValue.serverTimestamp(),
    });

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const adminEmail =
      process.env.NEWSLETTER_ADMIN_EMAIL ??
      process.env.CONTACT_ADMIN_EMAIL;

    if (resendApiKey && fromEmail) {
      const resend = new Resend(resendApiKey);

      const messages = [
        resend.emails.send({
          from: fromEmail,
          to: email,
          subject: "Your AkiGO subscription is confirmed",
          text: [
            `Hello ${data.name ?? "there"},`,
            "",
            "Your AkiGO launch-list subscription is confirmed.",
            "",
            "You will receive only the availability and launch updates associated with your selected interests.",
            "",
            "AkiGO",
          ].join("\n"),
        }),
      ];

      if (adminEmail) {
        messages.push(
          resend.emails.send({
            from: fromEmail,
            to: adminEmail,
            subject: "New confirmed AkiGO launch-list subscriber",
            text: [
              `Name: ${data.name ?? ""}`,
              `Email: ${email}`,
              data.city || data.state
                ? `Location: ${[data.city, data.state]
                    .filter(Boolean)
                    .join(", ")}`
                : "",
              `Sources: ${(data.sources ?? []).join(", ")}`,
              `Interests: ${(data.interests ?? []).join(", ")}`,
            ]
              .filter(Boolean)
              .join("\n"),
          }),
        );
      }

      await Promise.allSettled(messages);
    }

    return redirectToResult(request, "success");
  } catch (error) {
    console.error("Launch-list confirmation failed", error);
    return redirectToResult(request, "invalid");
  }
}
