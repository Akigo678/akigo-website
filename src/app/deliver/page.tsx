import Link from "next/link";
import {
  ArrowRight,
  Box,
  Building2,
  CalendarClock,
  Check,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Navigation,
  PackageCheck,
  ReceiptText,
  Route,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  UtensilsCrossed,
} from "lucide-react";

import {
  LaunchListForm,
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const deliveryTypes = [
  {
    icon: UtensilsCrossed,
    title: "Meals",
    text: "Local meal delivery from participating restaurants and food businesses.",
  },
  {
    icon: Box,
    title: "Packages",
    text: "Move everyday packages and eligible local items from pickup to drop-off.",
  },
  {
    icon: FileText,
    title: "Documents",
    text: "Coordinate delivery for important documents and business materials.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    text: "Connect customers with eligible local retail and convenience purchases.",
  },
  {
    icon: ReceiptText,
    title: "Essentials",
    text: "Support practical local delivery needs for everyday essential items.",
  },
  {
    icon: Building2,
    title: "Business logistics",
    text: "Help local organizations coordinate recurring and on-demand delivery needs.",
  },
];

const deliverySteps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Create the delivery",
    text: "Enter the pickup, drop-off, item details, and delivery instructions.",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Confirm the request",
    text: "Review the delivery information before submitting the request.",
  },
  {
    number: "03",
    icon: Navigation,
    title: "Track progress",
    text: "Follow the courier from pickup through final delivery.",
  },
  {
    number: "04",
    icon: Check,
    title: "Complete delivery",
    text: "Receive completion updates when the delivery reaches the destination.",
  },
];

const useCases = [
  {
    icon: Store,
    title: "Restaurants",
    text: "Support eligible meal orders and local customer delivery.",
  },
  {
    icon: ShoppingBag,
    title: "Retailers",
    text: "Extend local fulfillment for participating stores and merchants.",
  },
  {
    icon: FileText,
    title: "Professional services",
    text: "Coordinate local movement of approved documents and materials.",
  },
  {
    icon: Building2,
    title: "Organizations",
    text: "Manage practical local logistics for recurring operational needs.",
  },
];

const trackingItems = [
  "Pickup confirmation",
  "Courier location and route progress",
  "Delivery status updates",
  "Drop-off confirmation",
  "In-app communication",
  "Support when an issue occurs",
];

const deliveryFlow = [
  {
    title: "Request created",
    text: "Pickup and delivery details confirmed",
    complete: true,
  },
  {
    title: "Courier assigned",
    text: "Courier is preparing for pickup",
    complete: true,
  },
  {
    title: "In transit",
    text: "Live route and delivery updates",
    complete: false,
  },
  {
    title: "Delivered",
    text: "Completion confirmation",
    complete: false,
  },
];

export default function DeliverPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[690px] items-center gap-14 py-14 lg:grid-cols-[1.03fr_0.97fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Deliver with AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.15rem]">
                Local delivery,
                <br />
                <span className="text-[#96ed08]">made more connected.</span>
              </h1>

              <p className="mt-6 max-w-[600px] text-lg leading-8 text-white/60">
                Move meals, packages, documents, retail items, and everyday
                essentials through one flexible local delivery experience.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#delivery-launch-list" className={primaryButton}>
                  Join the delivery launch list
                  <ArrowRight size={18} />
                </a>

                <Link href="/business" className={secondaryButton}>
                  Business solutions
                  <ArrowRight size={18} />
                </Link>

                <Link href="/faq/delivery" className={secondaryButton}>
                  Delivery FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: PackageCheck, label: "Multiple delivery types" },
                  { icon: MapPin, label: "Live progress" },
                  { icon: CalendarClock, label: "Scheduled delivery" },
                  { icon: ShieldCheck, label: "Support tools" },
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

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[110px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_65%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-64 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl border border-[#96ed08]/25 bg-[#96ed08]/10 text-[#96ed08]">
                      <PackageCheck size={29} />
                    </div>

                    <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/42">
                      Delivery network
                    </span>
                  </div>

                  <h2 className="font-display mt-8 text-4xl font-bold tracking-[-0.045em]">
                    From pickup to doorstep.
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-white/55">
                    One connected experience for customers, couriers,
                    restaurants, retailers, and local organizations.
                  </p>

                  <div className="relative mt-8">
                    <div className="absolute bottom-5 left-[18px] top-5 w-px bg-gradient-to-b from-[#96ed08] via-[#96ed08]/55 to-white/10" />

                    <div className="space-y-4">
                      {[
                        "Create the request",
                        "Confirm pickup details",
                        "Track courier progress",
                        "Receive delivery confirmation",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="relative flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/45 p-4 backdrop-blur"
                        >
                          <div
                            className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-full font-extrabold ${
                              index < 2
                                ? "bg-[#96ed08] text-black"
                                : "border border-[#96ed08]/35 bg-black text-[#96ed08]"
                            }`}
                          >
                            {index < 2 ? <Check size={16} strokeWidth={3} /> : index + 1}
                          </div>

                          <div>
                            <p className="font-semibold text-white/78">{item}</p>
                            <p className="mt-1 text-xs text-white/35">
                              {index === 0 && "Delivery information entered"}
                              {index === 1 && "Pickup information reviewed"}
                              {index === 2 && "Live updates during delivery"}
                              {index === 3 && "Final completion confirmation"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY TYPES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Delivery options
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Flexible delivery for everyday needs.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Choose the delivery experience that matches the item, timing,
                customer, and local business need.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {deliveryTypes.map(({ icon: Icon, title, text }) => (
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

        {/* HOW IT WORKS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  How delivery works
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  A clear path from request to completion.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Delivery availability, item eligibility, and service rules can
                vary by launch market and delivery type.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {deliverySteps.map(({ number, icon: Icon, title, text }) => (
                <article
                  key={number}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition hover:border-[#96ed08]/30"
                >
                  <span className="font-display text-5xl font-extrabold text-white/[0.05]">
                    {number}
                  </span>

                  <div className="mt-[-0.75rem] grid size-12 place-items-center rounded-2xl bg-[#96ed08] text-black shadow-[0_0_24px_rgba(150,237,8,.12)]">
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

        {/* TRACKING */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/18 bg-[#0b0b0b] p-5 shadow-[0_30px_100px_rgba(0,0,0,.55)]">
              <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#070907]">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:42px_42px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_61%_45%,rgba(150,237,8,0.12),transparent_34%)]" />

                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 700 520"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M120 102 C178 132, 210 118, 242 170 S258 252, 319 277 S410 294, 447 346 S522 405, 604 418"
                    fill="none"
                    stroke="rgba(150,237,8,0.16)"
                    strokeWidth="17"
                    strokeLinecap="round"
                  />
                  <path
                    d="M120 102 C178 132, 210 118, 242 170 S258 252, 319 277 S410 294, 447 346 S522 405, 604 418"
                    fill="none"
                    stroke="#96ed08"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="13 10"
                  />
                </svg>

                <div className="absolute left-[14%] top-[17%] size-5 rounded-full border-[5px] border-[#96ed08] bg-black shadow-[0_0_22px_rgba(150,237,8,.6)]" />

                <MapPin
                  size={35}
                  fill="currentColor"
                  className="absolute bottom-[14%] right-[12%] text-[#96ed08] drop-shadow-[0_0_18px_rgba(150,237,8,.5)]"
                />

                <div className="absolute left-[40%] top-[45%] grid size-16 place-items-center rounded-full border border-[#96ed08]/50 bg-black shadow-[0_0_30px_rgba(150,237,8,.24)]">
                  <Navigation
                    size={27}
                    fill="currentColor"
                    className="rotate-45 text-[#96ed08]"
                  />
                </div>

                <div className="absolute left-5 top-5 w-[255px] rounded-2xl border border-[#96ed08]/25 bg-black/88 p-4 shadow-[0_18px_50px_rgba(0,0,0,.42)] backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                      <ShoppingBag size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#96ed08]">
                        Pickup confirmed
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Order collected
                      </p>
                      <p className="mt-1 text-xs text-white/42">
                        Delivery is moving to the destination
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[47%] top-[48%] w-[225px] rounded-2xl border border-white/[0.1] bg-black/92 p-4 shadow-[0_18px_50px_rgba(0,0,0,.48)] backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#96ed08] shadow-[0_0_12px_rgba(150,237,8,.9)]" />
                    <p className="font-bold text-white">Delivery in progress</p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-white/35">
                        Status
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        In transit
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-white/35">
                        Updates
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        Live
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 w-[255px] rounded-2xl border border-[#96ed08]/25 bg-black/90 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/38">
                        Delivery progress
                      </p>
                      <p className="mt-1 font-bold text-white">
                        Moving to drop-off
                      </p>
                      <p className="mt-1 text-xs text-white/42">
                        Completion confirmation follows delivery
                      </p>
                    </div>

                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Route size={20} />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/[0.09] bg-black/78 px-4 py-2 text-xs font-semibold text-white/48 backdrop-blur-md">
                  <MessageCircle size={14} className="text-[#96ed08]" />
                  Live delivery updates
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Delivery visibility
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                See the delivery progress in one place.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO is designed to keep customers and participating businesses
                informed from pickup through delivery completion.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trackingItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-[#96ed08]/22"
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

        {/* DELIVERY FLOW */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Delivery lifecycle
                </p>

                <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Every important stage stays visible.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                  A clear status flow helps customers and participating
                  businesses understand what has happened and what comes next.
                </p>
              </div>

              <div className="rounded-[1.7rem] border border-white/[0.09] bg-[#0b0b0b] p-6 sm:p-7">
                <div className="space-y-3">
                  {deliveryFlow.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/40 p-4"
                    >
                      <div
                        className={`grid size-10 shrink-0 place-items-center rounded-full ${
                          step.complete
                            ? "bg-[#96ed08] text-black"
                            : "border border-white/[0.12] bg-white/[0.03] text-white/45"
                        }`}
                      >
                        {step.complete ? (
                          <Check size={18} strokeWidth={3} />
                        ) : (
                          <span className="text-sm font-bold">{index + 1}</span>
                        )}
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-white">{step.title}</p>
                        <p className="mt-1 text-sm text-white/42">{step.text}</p>
                      </div>

                      {step.complete && (
                        <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#96ed08]">
                          Complete
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Built for local communities
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Personal delivery and business logistics.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                AkiGO delivery is being built to support practical local needs
                without claiming availability before a market is active.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {useCases.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/30"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Icon size={25} />
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

        {/* SUPPORT + SCHEDULING */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.07] blur-[95px]" />

              <div className="relative">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                  <ShieldCheck size={27} />
                </div>

                <h2 className="font-display mt-7 text-3xl font-extrabold tracking-[-0.04em]">
                  Support when delivery issues happen.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Access communication, reporting, delivery-problem workflows,
                  and support when a pickup or drop-off needs attention.
                </p>

                <Link
                  href="/safety"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
                >
                  Explore AkiGO safety
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.07] blur-[95px]" />

              <div className="relative">
                <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                  <CalendarClock size={27} />
                </div>

                <h2 className="font-display mt-7 text-3xl font-extrabold tracking-[-0.04em]">
                  Plan eligible deliveries ahead.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Scheduled delivery is intended for eligible requests where a
                  future pickup window is more practical than immediate service.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-white/62">
                  <Route className="text-[#96ed08]" size={18} />
                  Availability depends on delivery type and launch market
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* DELIVERY FAQ CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0b0b0b] px-8 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.035)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#0a1005_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute left-1/2 top-[-9rem] size-72 -translate-x-1/2 rounded-full bg-[#96ed08]/[0.08] blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Delivery questions
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Find answers before creating a delivery.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Review eligible items, prohibited goods, tracking, scheduling,
                  failed deliveries, refunds, and delivery-support guidance.
                </p>

                <Link
                  href="/faq/delivery"
                  className={`${primaryButton} mt-8 inline-flex`}
                >
                  View Delivery FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LAUNCH LIST */}
        <section
          id="delivery-launch-list"
          className="scroll-mt-28 border-t border-white/[0.06] py-16 sm:py-20"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-8 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Deliver with AkiGO
                  </p>

                  <h2 className="font-display mt-2 text-2xl font-bold">
                    Join the delivery launch list.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/48">
                    Receive delivery availability, launch-market, and
                    partnership updates.
                  </p>
                </div>

                <LaunchListForm
                  source="deliver_page"
                  buttonLabel="Join the Delivery List"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
