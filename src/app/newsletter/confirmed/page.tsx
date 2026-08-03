import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Clock3,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

export const metadata: Metadata = {
  title: "Subscription Confirmation | AkiGO",
  description:
    "Confirmation status for an AkiGO launch-list subscription.",
  robots: {
    index: false,
    follow: false,
  },
};

type PageProps = {
  searchParams: Promise<{
    result?: string;
  }>;
};

export default async function NewsletterConfirmedPage({
  searchParams,
}: PageProps) {
  const { result } = await searchParams;

  const content =
    result === "success"
      ? {
          icon: Check,
          eyebrow: "Subscription confirmed",
          title: "You are on the AkiGO launch list.",
          text: "Your email has been confirmed. You may receive relevant availability and launch updates based on the list you joined.",
        }
      : result === "expired"
        ? {
            icon: Clock3,
            eyebrow: "Confirmation expired",
            title: "This confirmation link has expired.",
            text: "Return to the page where you joined the list and submit the form again to receive a new confirmation email.",
          }
        : {
            icon: AlertTriangle,
            eyebrow: "Unable to confirm",
            title: "This confirmation link is not valid.",
            text: "The link may be incomplete, previously replaced, or no longer available. Submit the launch-list form again if you still want updates.",
          };

  const Icon = content.icon;

  return (
    <MarketingLayout>
      <main className="bg-[#050505] pt-[88px]">
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(150,237,8,0.10),transparent_36%)]" />

          <div className="site-container relative z-10">
            <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/[0.10] bg-[#0b0b0b] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,.45)] sm:p-12">
              <div className="mx-auto grid size-16 place-items-center rounded-full border border-[#96ed08]/35 bg-[#96ed08]/10 text-[#96ed08]">
                <Icon size={29} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                {content.eyebrow}
              </p>

              <h1 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                {content.title}
              </h1>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-white/55">
                {content.text}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/launch-markets" className={primaryButton}>
                  View Launch Markets
                  <ArrowRight size={18} />
                </Link>

                <Link href="/" className={secondaryButton}>
                  Return Home
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
