import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  ClipboardList,
  FileText,
  HeartPulse,
  Hotel,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";
import { BusinessInterestForm } from "./BusinessInterestForm";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    text: "Coordinate eligible meal delivery, customer orders, and local fulfillment.",
  },
  {
    icon: Store,
    title: "Retail",
    text: "Support customer convenience with practical local delivery workflows.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Coordinate approved transportation and delivery needs for local healthcare operations.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    text: "Support guest transportation, local deliveries, and scheduled service needs.",
  },
  {
    icon: FileText,
    title: "Professional services",
    text: "Move approved documents, materials, and time-sensitive local items.",
  },
  {
    icon: Building2,
    title: "Local organizations",
    text: "Manage recurring and on-demand mobility or delivery activity in one place.",
  },
];

const capabilities = [
  {
    icon: PackageCheck,
    title: "On-demand delivery",
    text: "Create eligible local delivery requests when your business needs them.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled service",
    text: "Plan transportation or delivery activity around appointments and operations.",
  },
  {
    icon: MapPinned,
    title: "Live visibility",
    text: "Follow request status, route progress, pickup, and completion updates.",
  },
  {
    icon: Users,
    title: "Team access",
    text: "Organize business activity across approved users, roles, and locations.",
  },
];

const onboardingSteps = [
  {
    number: "01",
    title: "Tell us about your business",
    text: "Share your organization type, service area, and operational needs.",
  },
  {
    number: "02",
    title: "Review the use case",
    text: "AkiGO reviews the proposed mobility, delivery, or logistics workflow.",
  },
  {
    number: "03",
    title: "Configure the account",
    text: "Set up approved users, locations, request types, and support contacts.",
  },
  {
    number: "04",
    title: "Launch when available",
    text: "Begin using the service once your market and business account are active.",
  },
];

const managementItems = [
  "Request and order visibility",
  "Pickup and drop-off progress",
  "Scheduled service tracking",
  "Team and location organization",
  "Support and issue reporting",
  "Business account activity",
];

const useCases = [
  {
    icon: Truck,
    title: "Local fulfillment",
    text: "Coordinate eligible customer orders and last-mile delivery needs.",
  },
  {
    icon: Route,
    title: "Recurring logistics",
    text: "Support repeat routes and scheduled operational activity.",
  },
  {
    icon: ClipboardList,
    title: "Business requests",
    text: "Organize transportation and delivery requests from one account.",
  },
  {
    icon: ShieldCheck,
    title: "Operational support",
    text: "Access business support and issue-resolution workflows when needed.",
  },
];

export default function BusinessPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.09),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[680px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO for business
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Mobility and delivery,
                <br />
                <span className="text-[#96ed08]">built for business.</span>
              </h1>

              <p className="mt-6 max-w-[610px] text-lg leading-8 text-white/60">
                Partner with AkiGO for restaurant delivery, courier services,
                scheduled transportation, and flexible local logistics.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/partners" className={primaryButton}>
                  Partner with AkiGO
                  <ArrowRight size={18} />
                </Link>

                <Link href="/deliver" className={secondaryButton}>
                  Explore delivery
                  <ArrowRight size={18} />
                </Link>

                <Link href="/faq/business" className={secondaryButton}>
                  Business FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: PackageCheck, label: "Delivery workflows" },
                  { icon: CalendarClock, label: "Scheduled service" },
                  { icon: MapPinned, label: "Live visibility" },
                  { icon: Users, label: "Team access" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <Icon className="text-[#96ed08]" size={21} />
                    <p className="mt-3 text-sm font-semibold text-white/72">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[110px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/20 bg-[#96ed08] p-8 text-black shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <Building2 size={52} strokeWidth={1.8} />

                <h2 className="font-display mt-12 text-4xl font-extrabold tracking-[-0.04em]">
                  One platform.
                  <br />
                  More possibilities.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-black/65">
                  Organize approved transportation, delivery, visibility, and
                  account activity around your local operations.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Restaurants",
                    "Retail",
                    "Healthcare",
                    "Hospitality",
                    "Local business",
                  ].map((industry) => (
                    <span
                      key={industry}
                      className="rounded-full border border-black/20 bg-black/[0.07] px-4 py-2 text-sm font-bold"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Business solutions
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Built for organizations that move locally.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                AkiGO is designed to support practical local mobility,
                delivery, and logistics needs across different industries.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {industries.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-display mt-8 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Platform capabilities
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Flexible tools for local operations.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Availability, service types, and account capabilities depend on
                the launch market and the approved business use case.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <Icon className="text-[#96ed08]" size={31} />

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ONBOARDING */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Business onboarding
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                A clear path from interest to launch.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Business participation depends on the use case, service area,
                operational requirements, and market availability.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {onboardingSteps.map(({ number, title, text }) => (
                <article
                  key={number}
                  className="relative rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <span className="font-display text-5xl font-extrabold text-white/[0.06]">
                    {number}
                  </span>

                  <div className="mt-[-0.5rem] h-1 w-14 rounded-full bg-[#96ed08]" />

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MANAGEMENT */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[110px]" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Business management
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em]">
                  Keep local activity organized.
                </h2>

                <div className="mt-8 space-y-4">
                  {managementItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/45 p-4"
                    >
                      <div className="grid size-9 shrink-0 place-items-center rounded-full border border-[#96ed08]/35 text-sm font-extrabold text-[#96ed08]">
                        {index + 1}
                      </div>

                      <p className="font-semibold text-white/72">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Visibility and control
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                One place for approved business activity.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO is being built to help participating businesses organize
                requests, delivery progress, transportation activity, support,
                and account information.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Clear request status",
                  "Pickup and route visibility",
                  "Scheduled activity",
                  "Team access controls",
                  "Issue reporting",
                  "Account activity",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Check size={15} strokeWidth={3} />
                    </div>

                    <p className="font-semibold leading-6 text-white/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Local operations
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Practical tools for recurring business needs.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition hover:border-[#96ed08]/30"
                >
                  <Icon className="text-[#96ed08]" size={31} />

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNER PAGE CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/20 bg-[#0b0b0b] px-7 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute right-[-8rem] top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Business partnerships
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Explore AkiGO partnership opportunities.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Learn how restaurants, retailers, healthcare providers,
                  hospitality businesses, and local organizations can share their
                  transportation, delivery, and local logistics needs with AkiGO.
                </p>

                <Link
                  href="/partners"
                  className={`${primaryButton} mt-8 inline-flex`}
                >
                  Visit Partner Page
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS FAQ CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0b0b0b] px-8 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.035)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#0a1005_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute left-1/2 top-[-9rem] size-72 -translate-x-1/2 rounded-full bg-[#96ed08]/[0.08] blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Business questions
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Find answers before setting up your account.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Review partnership, account setup, delivery requests, scheduled
                  transportation, billing, team access, and business-support
                  guidance.
                </p>

                <Link
                  href="/faq/business"
                  className={`${primaryButton} mt-8 inline-flex`}
                >
                  View Business FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS INTEREST */}
        <section
          id="business-interest"
          className="scroll-mt-28 border-t border-white/[0.06] py-16 sm:py-20"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-8 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Partner with AkiGO
                  </p>

                  <h2 className="font-display mt-2 text-2xl font-bold">
                    Tell us about your business needs.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/48">
                    Join the business-interest list for partnership,
                    launch-market, and account-availability updates.
                  </p>
                </div>

                <BusinessInterestForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
