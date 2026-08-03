import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarClock,
  CarFront,
  Check,
  Clock3,
  FileCheck2,
  Headphones,
  MapPinned,
  Navigation,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";

import {
  LaunchListForm,
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const driverBenefits = [
  {
    icon: Clock3,
    title: "Drive on your schedule",
    text: "Go online when you are ready and manage your availability from the driver app.",
  },
  {
    icon: Route,
    title: "Clear trip details",
    text: "Review pickup, destination, route, and driver-pay information before accepting.",
  },
  {
    icon: ShieldCheck,
    title: "Driver safety tools",
    text: "Access support, reporting, trip sharing, and safety features designed for the road.",
  },
  {
    icon: WalletCards,
    title: "Earnings visibility",
    text: "Track completed trips, earnings activity, incentives, and payout progress in one place.",
  },
];

const onboardingSteps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Create your profile",
    text: "Provide your contact information and set up your AkiGO Driver account.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Submit your documents",
    text: "Upload the required driver, vehicle, insurance, and eligibility documents.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Complete review",
    text: "AkiGO reviews your information and confirms whether your account is ready.",
  },
  {
    number: "04",
    icon: CarFront,
    title: "Start driving",
    text: "Go online when your market is active and begin receiving eligible trip offers.",
  },
];

const requirements = [
  {
    label: "Driver’s license",
    detail: "Valid and current",
  },
  {
    label: "Vehicle registration",
    detail: "Eligible vehicle information",
  },
  {
    label: "Insurance",
    detail: "Current required coverage",
  },
  {
    label: "Identity review",
    detail: "Completed verification",
  },
  {
    label: "Background review",
    detail: "Required eligibility screening",
  },
  {
    label: "Market documents",
    detail: "Local requirements where applicable",
  },
];

const driverJourney = [
  {
    number: "01",
    icon: Zap,
    title: "Go online",
    text: "Choose when you are available to receive eligible trip opportunities.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Review the offer",
    text: "See pickup, destination, route, and driver-pay details before accepting.",
  },
  {
    number: "03",
    icon: Navigation,
    title: "Navigate to pickup",
    text: "Use live navigation and trip progress tools inside the driver app.",
  },
  {
    number: "04",
    icon: CarFront,
    title: "Complete the trip",
    text: "Follow the ride workflow from pickup through safe completion.",
  },
  {
    number: "05",
    icon: WalletCards,
    title: "View your earnings",
    text: "Review recorded driver pay and completed-trip activity in one place.",
  },
];

const tripWorkflow = [
  {
    icon: Zap,
    title: "Offer received",
    text: "A trip opportunity appears when you are online and eligible.",
  },
  {
    icon: MapPinned,
    title: "Details reviewed",
    text: "Pickup, destination, route, and driver pay are presented before acceptance.",
  },
  {
    icon: Navigation,
    title: "Ride completed",
    text: "Navigation and trip-status tools support the journey through completion.",
  },
  {
    icon: WalletCards,
    title: "Pay recorded",
    text: "Driver pay is added to earnings activity after the trip is completed.",
  },
];

const approvalStages = [
  "Identity and license review",
  "Vehicle and insurance review",
  "Background and eligibility review",
  "Market activation and final approval",
];

export default function DrivePage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_24%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[720px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Drive with AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[720px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.15rem]">
                Opportunity that
                <br />
                <span className="text-[#96ed08]">moves with you.</span>
              </h1>

              <p className="mt-6 max-w-[600px] text-lg leading-8 text-white/60">
                A driver experience built around flexibility, clear trip
                information, driver safety, and practical tools for the road.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#driver-waitlist" className={primaryButton}>
                  Join the driver waitlist
                  <ArrowRight size={18} />
                </a>

                <Link href="/driver-requirements" className={secondaryButton}>
                  Driver Requirements
                  <ArrowRight size={18} />
                </Link>

                <Link href="/faq/drivers" className={secondaryButton}>
                  Driver FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: CalendarClock, label: "Flexible schedule" },
                  { icon: Route, label: "Clear trip details" },
                  { icon: ShieldCheck, label: "Driver safety" },
                  { icon: WalletCards, label: "Earnings tools" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-[#96ed08]/25 hover:bg-white/[0.035]"
                  >
                    <Icon className="text-[#96ed08]" size={21} />
                    <p className="mt-3 text-sm font-semibold text-white/72">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DRIVER APP PREVIEW */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Driver app preview
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Your day, clearly organized.
                      </h2>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#96ed08]/25 bg-[#96ed08]/10 px-4 py-2">
                      <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_12px_rgba(150,237,8,.9)]" />
                      <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#96ed08]">
                        Online
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[#96ed08]/20 bg-black/55 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#96ed08]">
                          Trip opportunity
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-white">
                          Review before accepting
                        </h3>
                      </div>

                      <div className="grid size-11 place-items-center rounded-xl bg-[#96ed08] text-black">
                        <MapPinned size={22} />
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <div className="mt-0.5 size-3 shrink-0 rounded-full border-[3px] border-[#96ed08] bg-black" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-white/35">
                            Pickup
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white/72">
                            Pickup details shown in app
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <MapPinned
                          className="mt-0.5 shrink-0 text-[#96ed08]"
                          size={17}
                        />
                        <div>
                          <p className="text-xs uppercase tracking-[0.1em] text-white/35">
                            Destination
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white/72">
                            Destination and route available
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="text-xs uppercase tracking-[0.1em] text-white/35">
                          Driver pay
                        </p>
                        <p className="mt-2 text-sm font-bold text-white">
                          Shown before acceptance
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <p className="text-xs uppercase tracking-[0.1em] text-white/35">
                          Route
                        </p>
                        <p className="mt-2 text-sm font-bold text-white">
                          Preview available
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button
                        type="button"
                        disabled
                        className="min-h-11 flex-1 cursor-default rounded-full border border-white/[0.1] bg-white/[0.025] px-5 text-sm font-bold text-white/45"
                      >
                        Decline
                      </button>

                      <button
                        type="button"
                        disabled
                        className="min-h-11 flex-1 cursor-default rounded-full bg-[#96ed08] px-5 text-sm font-extrabold text-black opacity-90"
                      >
                        Accept trip
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        icon: Navigation,
                        label: "Navigation",
                        value: "Live route tools",
                      },
                      {
                        icon: WalletCards,
                        label: "Earnings",
                        value: "Trip pay activity",
                      },
                      {
                        icon: Headphones,
                        label: "Support",
                        value: "Help when needed",
                      },
                    ].map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-white/[0.08] bg-black/45 p-4"
                      >
                        <Icon className="text-[#96ed08]" size={19} />
                        <p className="mt-3 text-xs uppercase tracking-[0.1em] text-white/35">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/68">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-center text-xs text-white/28">
                    Illustrative driver-app preview. Live details appear only
                    when an eligible trip is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Driver experience
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tools that support you on the road.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                AkiGO is building a driver experience that keeps trip details,
                availability, safety, earnings, and support in one place.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {driverBenefits.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35"
                >
                  <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.045] blur-[70px]" />

                  <div className="relative">
                    <div className="grid size-12 place-items-center rounded-2xl border border-[#96ed08]/15 bg-[#96ed08]/10 text-[#96ed08]">
                      <Icon size={23} />
                    </div>

                    <h3 className="font-display mt-8 text-2xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/50">{text}</p>

                    <div className="mt-7 h-px w-full bg-gradient-to-r from-[#96ed08]/25 to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DRIVER JOURNEY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Driver journey
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  From online to earnings.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                The driver app is designed to keep every major step visible,
                from receiving a trip opportunity through recorded driver pay.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                {driverJourney.map(({ number, icon: Icon, title, text }) => (
                  <article
                    key={number}
                    className="relative rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08] text-black shadow-[0_0_24px_rgba(150,237,8,.12)]">
                        <Icon size={22} />
                      </div>

                      <span className="font-display text-3xl font-extrabold text-white/[0.06]">
                        {number}
                      </span>
                    </div>

                    <h3 className="font-display mt-7 text-xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ONBOARDING */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Driver onboarding
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  A clear path to getting started.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Driver approval depends on completed documents, eligibility,
                vehicle readiness, and the requirements of the market where you
                plan to drive.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {onboardingSteps.map(({ number, icon: Icon, title, text }) => (
                <article
                  key={number}
                  className="relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <span className="font-display text-5xl font-extrabold text-white/[0.05]">
                    {number}
                  </span>

                  <div className="mt-[-0.75rem] grid size-12 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.96fr_1.04fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Driver requirements
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Professional standards for every driver.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Requirements can vary by state and launch market. AkiGO will
                confirm the documents and eligibility standards that apply to
                your location during onboarding.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {requirements.map((requirement) => (
                  <div
                    key={requirement.label}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-[#96ed08]/22"
                  >
                    <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Check size={15} strokeWidth={3} />
                    </div>

                    <div>
                      <p className="font-semibold leading-6 text-white/76">
                        {requirement.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/38">
                        {requirement.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOCUMENT REVIEW DASHBOARD */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-7 shadow-[0_25px_80px_rgba(0,0,0,.4)]">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[110px]" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                    <BadgeCheck size={28} />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      Review process
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-bold">
                      Ready means fully reviewed.
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {approvalStages.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/45 p-4"
                    >
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#96ed08]/25 bg-[#96ed08]/[0.06] text-[#96ed08]">
                        {index < 3 ? (
                          <FileCheck2 size={20} />
                        ) : (
                          <BadgeCheck size={20} />
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-white/74">{item}</p>
                        <p className="mt-1 text-xs text-white/35">
                          Required before final driver activation
                        </p>
                      </div>

                      <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/38">
                        Required
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-5 text-white/30">
                  This is an overview of the review process, not a live approval
                  status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRIP WORKFLOW */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                On the road
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Clear information before you accept.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Drivers should understand the opportunity before committing to
                a trip. AkiGO presents the important details in the driver app.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#080808_72%)] shadow-[0_28px_90px_rgba(0,0,0,.38)]">
              <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.06] blur-[110px]" />

                <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-8">
                  {tripWorkflow.map(({ icon: Icon, title, text }, index) => (
                    <article
                      key={title}
                      className="group relative rounded-[1.5rem] border border-white/[0.07] bg-black/20 p-5 transition duration-300 hover:border-[#96ed08]/25 hover:bg-white/[0.02] lg:border-0 lg:bg-transparent lg:p-0 lg:hover:bg-transparent"
                    >
                      {index < tripWorkflow.length - 1 ? (
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute left-12 right-[-2rem] top-6 z-0 hidden h-[2px] bg-[linear-gradient(90deg,rgba(150,237,8,.82)_0%,rgba(150,237,8,.48)_100%)] shadow-[0_0_16px_rgba(150,237,8,.16)] lg:block"
                        />
                      ) : null}

                      <div className="relative z-10 flex items-center gap-4 lg:block">
                        <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#96ed08]/55 bg-[#96ed08] text-black shadow-[0_0_0_6px_rgba(150,237,8,0.025),0_0_24px_rgba(150,237,8,0.13)] transition duration-300 group-hover:shadow-[0_0_0_7px_rgba(150,237,8,0.035),0_0_30px_rgba(150,237,8,0.18)]">
                          <Icon size={22} strokeWidth={2.2} />
                        </div>

                        <div className="min-w-0 lg:mt-5">
                          <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                            Step {index + 1}
                          </span>

                          <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.025em] text-white">
                            {title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 leading-7 text-white/50 lg:mt-3">
                        {text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY + EARNINGS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <ShieldCheck size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Driver safety
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Safety and support for the road.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Access incident reporting, emergency workflows, rider
                  communication, trip sharing, and support from the driver app.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Emergency workflows",
                    "Trip sharing",
                    "Incident reporting",
                    "Driver support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <Check className="text-[#96ed08]" size={16} />
                      <span className="text-sm font-semibold text-white/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/safety"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
                >
                  Explore driver safety
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <WalletCards size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Earnings visibility
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Your driver pay, clearly presented.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  AkiGO is designed to show driver pay and earnings activity
                  without exposing rider fare, platform margin, or internal
                  commission details.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Trip pay activity",
                    "Completed trips",
                    "Incentive activity",
                    "Payout progress",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <Sparkles className="text-[#96ed08]" size={16} />
                      <span className="text-sm font-semibold text-white/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-3 rounded-xl border border-[#96ed08]/15 bg-[#96ed08]/[0.05] p-4 text-sm font-semibold text-white/62">
                  <Banknote className="shrink-0 text-[#96ed08]" size={18} />
                  Driver pay and earnings information remain separate from rider
                  fare.
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* DRIVER REQUIREMENTS CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/20 bg-[#0b0b0b] px-8 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />
              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Before you apply
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Review the Driver Requirements
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Learn about eligibility, vehicle standards, required documents,
                  background checks, approval, and market-dependent requirements
                  before creating your driver account.
                </p>

                <Link
                  href="/driver-requirements"
                  className={`${primaryButton} mt-8 inline-flex`}
                >
                  View Driver Requirements
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DRIVER FAQ CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0b0b0b] px-8 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.035)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#0a1005_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute left-1/2 top-[-9rem] size-72 -translate-x-1/2 rounded-full bg-[#96ed08]/[0.08] blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Driver questions
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Find answers before you start driving.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Review registration, approval, going online, trip offers,
                  earnings, payouts, safety, and driver-support guidance.
                </p>

                <Link
                  href="/faq/drivers"
                  className={`${primaryButton} mt-8 inline-flex`}
                >
                  View Driver FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section
          id="driver-waitlist"
          className="scroll-mt-28 border-t border-white/[0.06] py-16 sm:py-20"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-8 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Drive with AkiGO
                  </p>

                  <h2 className="font-display mt-2 text-2xl font-bold">
                    Join the driver waitlist.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/48">
                    Receive onboarding information, launch-market updates, and
                    driver availability notices.
                  </p>
                </div>

                <LaunchListForm
                  source="drive_page"
                  buttonLabel="Join the Driver Waitlist"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
