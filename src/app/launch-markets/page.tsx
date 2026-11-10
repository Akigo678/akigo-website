import type { Metadata } from "next";
import {
  ArrowRight,
  Building2,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
} from "@/components/marketing";
import { MarketInterestForm } from "./MarketInterestForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akigo.org";

export const metadata: Metadata = {
  title: "Launch Markets | AkiGO",
  description:
    "Bring AkiGO to your city. Register your interest in rides, driving, delivery, or local business partnerships.",
  alternates: {
    canonical: `${siteUrl}/launch-markets`,
  },
  openGraph: {
    title: "AkiGO Launch Markets",
    description:
      "Tell AkiGO where you'd like to see rides, delivery, and driver opportunities next.",
    url: `${siteUrl}/launch-markets`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/social/akigo-launch-markets.png`,
        width: 1200,
        height: 630,
        alt: "AkiGO launch markets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiGO Launch Markets",
    description:
      "Help bring AkiGO rides and delivery to your city.",
    images: [`${siteUrl}/images/social/akigo-launch-markets.png`],
  },
};

const readinessAreas = [
  {
    icon: Users,
    title: "Rider and driver readiness",
    text: "We look for rider interest and enough qualified drivers to provide dependable service.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and compliance",
    text: "We prepare the safety, support, and local requirements needed to operate responsibly.",
  },
  {
    icon: Route,
    title: "Dispatch and service coverage",
    text: "We evaluate pickup coverage, local travel patterns, and delivery demand.",
  },
  {
    icon: Building2,
    title: "Local partnerships",
    text: "Restaurants, businesses, and community organizations help us understand local needs.",
  },
];

export default function LaunchMarketsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AkiGO Launch Markets",
    url: `${siteUrl}/launch-markets`,
    description:
      "Register interest in bringing AkiGO rides, driving opportunities, and delivery to your city.",
    isPartOf: {
      "@type": "WebSite",
      name: "AkiGO",
      url: siteUrl,
    },
  };

  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="relative isolate overflow-hidden pt-[88px] text-[#111b0d]">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[#f6eedc]">
            <img src="/images/launch-markets/akigo-launch-markets-hero-v5.png" alt="" aria-hidden="true" className="h-full w-full object-cover object-[60%_center]" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,250,239,.94)_0%,rgba(255,250,239,.78)_36%,rgba(255,250,239,.09)_65%,transparent_100%)]" />

          <div className="site-container relative z-10 flex min-h-[730px] items-center py-16 lg:py-24">
            <div className="max-w-[720px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4a690d]/20 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-[#477100] shadow-sm">
                <span className="size-2 rounded-full bg-[#75b500]" />
                Launch markets
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.15rem]">
                Great journeys begin
                <br />
                <span className="text-[#538700]">in your city.</span>
              </h1>

              <p className="mt-6 max-w-[630px] text-lg font-medium leading-8 text-[#35412f]">
                We’re building a better way to ride, drive, and deliver—one
                community at a time. Tell us where you’d like to see AkiGO next.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#market-interest" className={primaryButton}>
                  Register market interest
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#96ed08]/15 bg-[#081108] py-24 sm:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Market readiness
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                What AkiGO evaluates
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                We consider local demand and service readiness when choosing where AkiGO expands.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {readinessAreas.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-[#96ed08]/15 bg-[linear-gradient(145deg,#182314,#0c130b)] p-7"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display mt-7 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="market-interest"
          className="scroll-mt-28 border-t border-[#96ed08]/10 bg-[#0b100a] py-24 sm:py-28"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Market interest
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tell us where AkiGO is needed
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                Submit one market-interest request for yourself or your
                organization. This information helps with planning and does not
                guarantee launch selection, availability, or timing.
              </p>
            </div>

            <MarketInterestForm />
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
