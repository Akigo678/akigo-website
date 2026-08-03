import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  CircleDot,
  Clock3,
  Globe2,
  MapPinned,
  Route,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";
import { MarketInterestForm } from "./MarketInterestForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akigo.app";

export const metadata: Metadata = {
  title: "Launch Markets | AkiGO",
  description:
    "See AkiGO launch-market status, learn how controlled rollout decisions are made, and register interest for your city or organization.",
  alternates: {
    canonical: `${siteUrl}/launch-markets`,
  },
  openGraph: {
    title: "AkiGO Launch Markets",
    description:
      "Follow AkiGO market readiness and register interest for future rider, driver, delivery, or business availability.",
    url: `${siteUrl}/launch-markets`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/social/akigo-launch-markets.png`,
        width: 1200,
        height: 630,
        alt: "AkiGO launch markets and controlled rollout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiGO Launch Markets",
    description:
      "Learn how AkiGO evaluates launch readiness and register market interest.",
    images: [`${siteUrl}/images/social/akigo-launch-markets.png`],
  },
};

const readinessAreas = [
  {
    icon: Users,
    title: "Rider and driver readiness",
    text: "A market needs sufficient rider interest, eligible driver participation, and operational coverage before public availability expands.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and compliance",
    text: "Local requirements, account review, insurance, screening, support, and safety workflows must be ready for the services offered.",
  },
  {
    icon: Route,
    title: "Dispatch and service coverage",
    text: "AkiGO reviews pickup coverage, travel patterns, delivery needs, routing, and the ability to operate reliably.",
  },
  {
    icon: Building2,
    title: "Local partnerships",
    text: "Restaurants, retailers, healthcare providers, hospitality businesses, and community organizations can help establish practical local demand.",
  },
];

const rolloutSteps = [
  {
    number: "01",
    title: "Interest collection",
    text: "AkiGO gathers rider, driver, business, and community interest without promising a launch date.",
  },
  {
    number: "02",
    title: "Market evaluation",
    text: "Operational, safety, regulatory, support, and supply conditions are reviewed for each potential market.",
  },
  {
    number: "03",
    title: "Controlled access",
    text: "When a market is ready, access may begin with a limited group, service area, or service type.",
  },
  {
    number: "04",
    title: "Measured expansion",
    text: "Coverage can expand only after reliability, support, safety, and service quality meet launch requirements.",
  },
];

const audiences = [
  {
    icon: CircleDot,
    title: "Riders",
    text: "Register interest in future ride or delivery availability.",
  },
  {
    icon: Users,
    title: "Drivers",
    text: "Share interest in driving when onboarding opens for your market.",
  },
  {
    icon: Store,
    title: "Businesses",
    text: "Tell AkiGO about local transportation, delivery, or fulfillment needs.",
  },
  {
    icon: Globe2,
    title: "Organizations",
    text: "Community groups and local organizations can share market needs and partnership interest.",
  },
];

export default function LaunchMarketsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AkiGO Launch Markets",
    url: `${siteUrl}/launch-markets`,
    description:
      "AkiGO launch-market status, controlled rollout information, and market-interest registration.",
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

        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_22%,rgba(150,237,8,0.11),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[680px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Launch markets
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.15rem]">
                Growth that starts
                <br />
                <span className="text-[#96ed08]">with readiness.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-lg leading-8 text-white/60">
                AkiGO plans to expand through a controlled rollout. Markets are
                evaluated individually, and public availability is announced only
                after operational, safety, compliance, support, and service
                requirements are ready.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#market-interest" className={primaryButton}>
                  Register market interest
                  <ArrowRight size={18} />
                </a>

                <Link href="/download" className={secondaryButton}>
                  View app status
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-10 rounded-full bg-[#96ed08]/[0.08] blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0a0a0a] p-7 shadow-[0_30px_90px_rgba(0,0,0,.45)] sm:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      Current status
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em]">
                      Controlled rollout planning
                    </h2>
                  </div>

                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <MapPinned size={27} />
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/[0.045] p-5">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 shrink-0 text-[#96ed08]" size={20} />
                    <div>
                      <p className="font-bold text-white">No public launch dates announced</p>
                      <p className="mt-2 text-sm leading-6 text-white/52">
                        AkiGO will not publish a city or date until readiness has
                        been confirmed. Registering interest does not guarantee
                        availability or a launch timeline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "No fake cities",
                    "No estimated launch dates",
                    "No nationwide-availability claim",
                    "Official updates only after confirmation",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-full border border-[#96ed08]/45 text-[#96ed08]">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-white/68">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Market readiness
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                What AkiGO evaluates
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Interest matters, but a professional launch also requires reliable
                operations, qualified supply, safety systems, and local readiness.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {readinessAreas.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
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

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Controlled rollout
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Expansion happens in stages
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                A controlled rollout helps AkiGO validate service quality and
                support before increasing access. A market may begin with limited
                geography, limited users, or selected services.
              </p>
            </div>

            <div className="grid gap-4">
              {rolloutSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-6 sm:grid-cols-[72px_1fr] sm:items-start"
                >
                  <div className="font-display text-3xl font-extrabold text-[#96ed08]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-white/50">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Who can register
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Help AkiGO understand local demand
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {audiences.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <Icon className="text-[#96ed08]" size={26} />
                  <h3 className="font-display mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="market-interest"
          className="scroll-mt-28 border-t border-white/[0.06] py-24 sm:py-28"
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
