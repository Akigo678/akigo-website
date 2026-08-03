import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BellRing,
  CarFront,
  Check,
  FileWarning,
  Headphones,
  HeartHandshake,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  PackageCheck,
  PhoneCall,
  Route,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";
import { SafetyConcernForm } from "./SafetyConcernForm";

const safetyPillars = [
  {
    icon: UserCheck,
    title: "Identity and eligibility",
    text: "Account, driver, document, and eligibility controls support responsible platform access.",
  },
  {
    icon: MapPinned,
    title: "Trip visibility",
    text: "Important ride and delivery progress can remain visible throughout the journey.",
  },
  {
    icon: BellRing,
    title: "Safety actions",
    text: "Access trip sharing, communication, reporting, and emergency workflows when needed.",
  },
  {
    icon: Headphones,
    title: "Support workflows",
    text: "Reach support for ride, delivery, driver, payment, and safety-related concerns.",
  },
  {
    icon: LockKeyhole,
    title: "Platform protection",
    text: "Permissions, backend controls, and protected data access are part of AkiGO’s design.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous improvement",
    text: "Safety systems are reviewed and strengthened as the platform develops.",
  },
];

const riderSafety = [
  "Trip sharing with trusted contacts",
  "Driver and vehicle information",
  "In-app rider-driver communication",
  "Trip progress and status visibility",
  "Incident reporting",
  "Support access",
];

const driverSafety = [
  "Rider and trip information before pickup",
  "Emergency and incident workflows",
  "Trip sharing and check-in tools",
  "Unsafe pickup reporting",
  "Support during active trips",
  "Document and eligibility review",
];

const deliverySafety = [
  "Pickup and drop-off status",
  "Courier progress visibility",
  "Delivery issue reporting",
  "Customer-courier communication",
  "Completion confirmation",
  "Support when a delivery needs attention",
];

const responseFlow = [
  {
    number: "01",
    icon: AlertTriangle,
    title: "Recognize the issue",
    text: "Use the relevant safety, support, or reporting option available in the app.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Share the details",
    text: "Provide accurate trip, delivery, rider, driver, or incident information.",
  },
  {
    number: "03",
    icon: ShieldAlert,
    title: "Escalate when needed",
    text: "Use emergency services for immediate danger and AkiGO support for platform-related follow-up.",
  },
  {
    number: "04",
    icon: FileWarning,
    title: "Document the concern",
    text: "Reports can support review, investigation, and account or trip follow-up.",
  },
];

const platformControls = [
  {
    icon: BadgeCheck,
    title: "Driver review",
    text: "Driver activation depends on identity, document, vehicle, and eligibility review.",
  },
  {
    icon: LockKeyhole,
    title: "Access control",
    text: "Platform permissions are designed to limit access to authorized users and systems.",
  },
  {
    icon: Smartphone,
    title: "Protected app flows",
    text: "Sensitive actions are routed through authenticated app and backend workflows.",
  },
  {
    icon: Route,
    title: "Activity visibility",
    text: "Trip and delivery status information supports clearer platform accountability.",
  },
];

const emergencyGuidance = [
  "Move to a safer location when possible",
  "Contact local emergency services for immediate danger",
  "Use the in-app safety or support option",
  "Share accurate trip or delivery details",
  "Preserve relevant messages or evidence",
  "Follow up through the appropriate AkiGO workflow",
];

export default function SafetyPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[700px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Safety by design
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Thoughtful protection for
                <br />
                <span className="text-[#96ed08]">every journey.</span>
              </h1>

              <p className="mt-6 max-w-[610px] text-lg leading-8 text-white/60">
                AkiGO is being designed with safety tools, support workflows,
                visibility, reporting, and platform controls for riders,
                drivers, couriers, and businesses.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#safety-concern" className={primaryButton}>
                  Report a Safety Concern
                  <ArrowRight size={18} />
                </a>

                <Link href="/about" className={secondaryButton}>
                  Learn about AkiGO
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: ShieldCheck, label: "Safety workflows" },
                  { icon: MapPinned, label: "Trip visibility" },
                  { icon: MessageCircle, label: "Communication" },
                  { icon: Headphones, label: "Support access" },
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

            {/* SAFETY CONTROL CENTER */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Safety control center
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Help when a journey needs attention.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <ShieldCheck size={25} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        icon: PhoneCall,
                        title: "Emergency",
                        text: "Use local emergency services for immediate danger.",
                      },
                      {
                        icon: Route,
                        title: "Share journey",
                        text: "Share trip or delivery details with trusted contacts.",
                      },
                      {
                        icon: FileWarning,
                        title: "Report concern",
                        text: "Document safety or conduct issues for review.",
                      },
                      {
                        icon: Headphones,
                        title: "Contact support",
                        text: "Reach platform support for follow-up and assistance.",
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <article
                        key={title}
                        className="rounded-2xl border border-white/[0.08] bg-black/50 p-5"
                      >
                        <div className="grid size-10 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                          <Icon size={20} />
                        </div>

                        <h3 className="mt-4 font-bold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/44">
                          {text}
                        </p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className="mt-0.5 shrink-0 text-[#96ed08]"
                        size={19}
                      />

                      <p className="text-sm leading-6 text-white/58">
                        AkiGO safety tools do not replace local emergency
                        services. Call the appropriate emergency number when
                        immediate help is required.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs text-white/28">
                    Illustrative safety-center preview. Available options can
                    vary by app, journey type, and launch market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY PILLARS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                AkiGO safety
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Safety is part of the platform.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Safety depends on thoughtful product design, responsible
                platform access, clear reporting, and continuous improvement.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {safetyPillars.map(({ icon: Icon, title, text }) => (
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

        {/* RIDER DRIVER DELIVERY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Across the platform
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Safety for riders, drivers, and deliveries.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Different journeys need different tools, but they should all
                support visibility, communication, reporting, and access to
                help.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <article className="rounded-[1.7rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                  <CarFront size={24} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                  Rider safety
                </p>

                <h3 className="font-display mt-3 text-3xl font-bold">
                  Stay connected throughout the trip.
                </h3>

                <div className="mt-7 space-y-3">
                  {riderSafety.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                        <Check size={13} strokeWidth={3} />
                      </div>

                      <p className="text-sm leading-6 text-white/62">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.7rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                  <UserCheck size={24} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                  Driver safety
                </p>

                <h3 className="font-display mt-3 text-3xl font-bold">
                  Tools built for real driving situations.
                </h3>

                <div className="mt-7 space-y-3">
                  {driverSafety.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                        <Check size={13} strokeWidth={3} />
                      </div>

                      <p className="text-sm leading-6 text-white/62">{item}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[1.7rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                  <PackageCheck size={24} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                  Delivery safety
                </p>

                <h3 className="font-display mt-3 text-3xl font-bold">
                  Clear progress from pickup to drop-off.
                </h3>

                <div className="mt-7 space-y-3">
                  {deliverySafety.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                        <Check size={13} strokeWidth={3} />
                      </div>

                      <p className="text-sm leading-6 text-white/62">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* RESPONSE FLOW */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                When something goes wrong
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                A clear path for reporting and follow-up.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Immediate danger should be handled through local emergency
                services. Platform concerns can be documented through the
                appropriate AkiGO support or reporting workflow.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {responseFlow.map(({ number, icon: Icon, title, text }) => (
                  <article
                    key={number}
                    className="relative rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08] text-black">
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

        {/* PLATFORM PROTECTION */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Platform protection
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Safety also depends on secure systems.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Account safety, access controls, protected backend workflows,
                document review, and activity visibility all contribute to a
                safer platform.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {platformControls.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <Icon className="text-[#96ed08]" size={20} />
                    <h3 className="mt-3 font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/42">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[110px]" />

              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                    <LockKeyhole size={27} />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      Protected workflows
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-bold">
                      Controlled access at every level.
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Authenticated account access",
                    "Role and permission controls",
                    "Protected backend actions",
                    "Document and eligibility review",
                    "Restricted trip and delivery data",
                    "Audit and support workflows",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/45 p-4"
                    >
                      <div className="grid size-9 shrink-0 place-items-center rounded-full border border-[#96ed08]/30 text-sm font-extrabold text-[#96ed08]">
                        {index + 1}
                      </div>

                      <p className="font-semibold text-white/72">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-xs leading-5 text-white/30">
                  This section describes AkiGO’s intended safety architecture
                  and does not claim that risk can be eliminated completely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY GUIDANCE */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/20 bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8 sm:p-10">
              <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[105px]" />

              <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <div>
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <AlertTriangle size={26} />
                  </div>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Immediate safety
                  </p>

                  <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    In an emergency, act first.
                  </h2>

                  <p className="mt-4 max-w-lg leading-7 text-white/52">
                    AkiGO support is not a substitute for police, fire,
                    ambulance, or other local emergency services.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {emergencyGuidance.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/40 p-4"
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
          </div>
        </section>

        {/* SAFETY CONCERN FORM */}
        <section
          id="safety-concern"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Safety concern
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tell AkiGO what happened.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                Use this form for non-emergency platform safety concerns,
                conduct reports, trip or delivery follow-up, and safety-related
                website questions.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-[#96ed08]/20 bg-[#96ed08]/[0.035] p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                    size={21}
                  />

                  <div>
                    <h3 className="font-display text-2xl font-bold">
                      Immediate danger
                    </h3>

                    <p className="mt-3 leading-7 text-white/54">
                      Do not wait for a form response. Contact local police,
                      fire, ambulance, or another appropriate emergency service
                      first.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Provide the trip, delivery, rider, driver, or account reference when available",
                  "Describe what happened in chronological order",
                  "Do not include passwords, authentication codes, or complete payment-card numbers",
                  "Preserve relevant messages, photos, or records for later review",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-1 shrink-0 text-[#96ed08]"
                      size={17}
                    />
                    <p className="leading-7 text-white/54">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <SafetyConcernForm />
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Contact AkiGO
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Have a safety question or concern?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Contact AkiGO for platform safety questions, launch
                    information, or non-emergency concerns.
                  </p>
                </div>

                <a
                  href="#safety-concern"
                  className={`${primaryButton} shrink-0`}
                >
                  Report a Safety Concern
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
