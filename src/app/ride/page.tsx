import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Box,
  CalendarClock,
  CarFront,
  Check,
  Clock3,
  CreditCard,
  Crown,
  Headphones,
  HeartHandshake,
  MapPinned,
  MessageCircle,
  Navigation,
  PawPrint,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import {
  LaunchListForm,
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const rideOptions = [
  {
    icon: CarFront,
    title: "Basic",
    text: "Affordable, reliable rides for everyday travel.",
    tag: "Everyday",
  },
  {
    icon: Zap,
    title: "Priority",
    text: "A faster pickup option when time matters.",
    tag: "Faster pickup",
  },
  {
    icon: Clock3,
    title: "Wait & Save",
    text: "A lower-cost option when your pickup time is flexible.",
    tag: "Best value",
  },
  {
    icon: Sparkles,
    title: "Comfort",
    text: "A more refined ride with additional comfort.",
    tag: "Extra comfort",
  },
  {
    icon: Users,
    title: "XL",
    text: "Extra room for groups, families, and luggage.",
    tag: "More space",
  },
  {
    icon: Users,
    title: "XXL",
    text: "A larger-capacity option for bigger groups and more luggage.",
    tag: "Largest groups",
  },
  {
    icon: PawPrint,
    title: "Pet",
    text: "Request a ride that can accommodate your pet.",
    tag: "Pet friendly",
  },
  {
    icon: Crown,
    title: "Executive",
    text: "Premium vehicles for work, events, and special occasions.",
    tag: "Premium",
  },
  {
    icon: ShieldCheck,
    title: "Executive SUV",
    text: "Premium SUV space for passengers and luggage.",
    tag: "Premium SUV",
  },
  {
    icon: Box,
    title: "Courier",
    text: "Send eligible local packages through the AkiGO network.",
    tag: "Local delivery",
  },
  {
    icon: Baby,
    title: "Car Seat",
    text: "Request an eligible ride with a car-seat option.",
    tag: "Family option",
  },
];

const heroBenefits = [
  {
    icon: ShieldCheck,
    title: "Safety tools",
    text: "Access trip sharing, communication, and support.",
  },
  {
    icon: MapPinned,
    title: "Live visibility",
    text: "Follow driver progress and trip updates.",
  },
  {
    icon: HeartHandshake,
    title: "Clear pricing",
    text: "Review your ride price before confirming.",
  },
  {
    icon: Headphones,
    title: "Rider support",
    text: "Get help when a trip needs attention.",
  },
];

const riderJourney = [
  {
    number: "01",
    icon: Smartphone,
    title: "Set your trip",
    text: "Enter your pickup location and destination.",
  },
  {
    number: "02",
    icon: CarFront,
    title: "Choose a ride",
    text: "Compare eligible options for your trip.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Confirm and pay",
    text: "Review the trip and select an available payment method.",
  },
  {
    number: "04",
    icon: Navigation,
    title: "Track your driver",
    text: "Follow arrival progress and important updates.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Complete the ride",
    text: "Stay connected from pickup through destination.",
  },
];

const bookingSteps = [
  {
    icon: Smartphone,
    title: "Open the rider app",
    text: "Enter your pickup and destination to begin.",
  },
  {
    icon: CarFront,
    title: "Choose and confirm",
    text: "Review ride options, pricing, and payment before confirming.",
  },
  {
    icon: Navigation,
    title: "Track and ride",
    text: "Follow your driver and trip status through completion.",
  },
];

const trackingItems = [
  "Driver location and pickup progress",
  "Route and trip status",
  "Arrival and trip updates",
  "Rider-driver communication",
  "Trip sharing",
  "Support when needed",
];

const safetyItems = [
  "Trip sharing with trusted contacts",
  "In-app emergency workflows",
  "Driver identity and vehicle details",
  "Rider-driver communication",
  "Incident reporting",
  "Support access",
];

const specialOptions = [
  {
    icon: CalendarClock,
    title: "Scheduled rides",
    text: "Plan eligible trips ahead when timing is important.",
  },
  {
    icon: Users,
    title: "Group travel",
    text: "Choose a larger ride option for passengers and luggage.",
  },
  {
    icon: PawPrint,
    title: "Pet rides",
    text: "Request an eligible ride that can accommodate your pet.",
  },
  {
    icon: Baby,
    title: "Car-seat rides",
    text: "Choose an eligible family ride option where available.",
  },
];

export default function RidePage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-16rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[720px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Ride with AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[700px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                A better way to
                <br />
                move through
                <br />
                <span className="text-[#96ed08]">your city.</span>
              </h1>

              <p className="mt-6 max-w-[580px] text-lg leading-8 text-white/60">
                Request a ride, compare your options, review pricing, and follow
                every important update from pickup to destination.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#rider-launch-list" className={primaryButton}>
                  Join the rider launch list
                  <ArrowRight size={18} />
                </a>

                <Link href="/faq/riders" className={secondaryButton}>
                  Rider FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {heroBenefits.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-[#96ed08]/25 hover:bg-white/[0.035]"
                  >
                    <Icon className="text-[#96ed08]" size={22} />
                    <h2 className="mt-3 text-sm font-bold text-white">
                      {title}
                    </h2>
                    <p className="mt-2 text-xs leading-5 text-white/42">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIDER APP PREVIEW */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Rider app preview
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Your trip, clearly organized.
                      </h2>
                    </div>

                    <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <CarFront size={23} />
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[#96ed08]/18 bg-black/55 p-5">
                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <div className="size-3 shrink-0 rounded-full border-[3px] border-[#96ed08] bg-black" />
                      <div>
                        <p className="text-xs uppercase tracking-[0.1em] text-white/35">
                          Pickup
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/72">
                          Enter your pickup location
                        </p>
                      </div>
                    </div>

                    <div className="mx-5 h-6 border-l border-dashed border-[#96ed08]/35" />

                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                      <MapPinned
                        className="shrink-0 text-[#96ed08]"
                        size={18}
                      />
                      <div>
                        <p className="text-xs uppercase tracking-[0.1em] text-white/35">
                          Destination
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/72">
                          Enter where you are going
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {[
                        { label: "Ride type", value: "Choose option" },
                        { label: "Pricing", value: "Review before booking" },
                        { label: "Payment", value: "Select method" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                        >
                          <p className="text-[10px] uppercase tracking-[0.1em] text-white/32">
                            {item.label}
                          </p>
                          <p className="mt-2 text-xs font-semibold leading-5 text-white/64">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      disabled
                      className="mt-4 inline-flex min-h-12 w-full cursor-default items-center justify-center gap-2 rounded-full bg-[#96ed08] px-5 font-extrabold text-black opacity-90"
                    >
                      Review ride
                      <ArrowRight size={17} />
                    </button>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        icon: MapPinned,
                        label: "Tracking",
                        value: "Live trip updates",
                      },
                      {
                        icon: MessageCircle,
                        label: "Communication",
                        value: "Contact your driver",
                      },
                      {
                        icon: ShieldCheck,
                        label: "Safety",
                        value: "Trip safety tools",
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
                    Illustrative rider-app preview. Live ride details appear
                    only when a trip is requested and available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIDE OPTIONS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Ride options
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Options for every kind of trip.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Compare eligible ride options based on timing, comfort, group
                size, and special trip needs.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rideOptions.map(({ icon: Icon, title, text, tag }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35"
                >
                  <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.045] blur-[70px]" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid size-12 place-items-center rounded-2xl border border-[#96ed08]/15 bg-[#96ed08]/10 text-[#96ed08]">
                        <Icon size={23} />
                      </div>

                      <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white/38">
                        {tag}
                      </span>
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

        {/* RIDER JOURNEY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Rider journey
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  From request to destination.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                The rider experience keeps every major step visible before,
                during, and after your trip.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                {riderJourney.map(({ number, icon: Icon, title, text }) => (
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

        {/* HOW IT WORKS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                How it works
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Requesting a ride stays simple.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/50">
                Open the rider app, choose your ride, and follow every important
                update through completion.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#080808_72%)] shadow-[0_28px_90px_rgba(0,0,0,.38)]">
              <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.06] blur-[110px]" />

                <div className="relative grid gap-8 lg:grid-cols-3 lg:gap-10">
                  {bookingSteps.map(({ icon: Icon, title, text }, index) => (
                    <article
                      key={title}
                      className="group relative rounded-[1.5rem] border border-white/[0.07] bg-black/20 p-5 transition duration-300 hover:border-[#96ed08]/25 hover:bg-white/[0.02] lg:border-0 lg:bg-transparent lg:p-0 lg:hover:bg-transparent"
                    >
                      {index < bookingSteps.length - 1 ? (
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute left-16 right-[-2.5rem] top-8 z-0 hidden h-[2px] bg-[linear-gradient(90deg,rgba(150,237,8,.82)_0%,rgba(150,237,8,.48)_100%)] shadow-[0_0_16px_rgba(150,237,8,.16)] lg:block"
                        />
                      ) : null}

                      <div className="relative z-10 flex items-center gap-4 lg:block">
                        <div className="grid size-16 shrink-0 place-items-center rounded-full border border-[#96ed08]/55 bg-[#0b1008] text-[#96ed08] shadow-[0_0_0_7px_rgba(150,237,8,0.025),0_0_28px_rgba(150,237,8,0.12)] transition duration-300 group-hover:border-[#96ed08]/85 group-hover:bg-[#10170b] group-hover:shadow-[0_0_0_8px_rgba(150,237,8,0.035),0_0_34px_rgba(150,237,8,0.17)]">
                          <Icon size={27} strokeWidth={2.1} />
                        </div>

                        <div className="min-w-0 lg:mt-6">
                          <span className="block text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                            Step {index + 1}
                          </span>

                          <h3 className="font-display mt-2 text-2xl font-bold tracking-[-0.025em] text-white">
                            {title}
                          </h3>
                        </div>
                      </div>

                      <p className="mt-4 max-w-sm leading-7 text-white/50 lg:mt-3">
                        {text}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-9 flex justify-center">
                  <Link href="/download#rider" className={primaryButton}>
                    Get the Rider App
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
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
                    d="M118 105 C180 140, 215 118, 250 172 S268 255, 330 278 S420 300, 455 350 S530 407, 610 420"
                    fill="none"
                    stroke="rgba(150,237,8,0.16)"
                    strokeWidth="17"
                    strokeLinecap="round"
                  />
                  <path
                    d="M118 105 C180 140, 215 118, 250 172 S268 255, 330 278 S420 300, 455 350 S530 407, 610 420"
                    fill="none"
                    stroke="#96ed08"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="13 10"
                  />
                </svg>

                <div className="absolute left-[14%] top-[17%] size-5 rounded-full border-[5px] border-[#96ed08] bg-black shadow-[0_0_22px_rgba(150,237,8,.6)]" />

                <MapPinned
                  size={35}
                  fill="currentColor"
                  className="absolute bottom-[14%] right-[12%] text-[#96ed08] drop-shadow-[0_0_18px_rgba(150,237,8,.5)]"
                />

                <div className="absolute left-[40%] top-[45%] grid size-16 place-items-center rounded-full border border-[#96ed08]/50 bg-black shadow-[0_0_30px_rgba(150,237,8,.24)]">
                  <CarFront size={27} className="text-[#96ed08]" />
                </div>

                <div className="absolute left-5 top-5 w-[255px] rounded-2xl border border-[#96ed08]/25 bg-black/88 p-4 shadow-[0_18px_50px_rgba(0,0,0,.42)] backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                      <CarFront size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#96ed08]">
                        Driver assigned
                      </p>
                      <p className="mt-1 font-semibold text-white">
                        Pickup progress available
                      </p>
                      <p className="mt-1 text-xs text-white/42">
                        Driver and vehicle details appear in the app
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[47%] top-[48%] w-[225px] rounded-2xl border border-white/[0.1] bg-black/92 p-4 shadow-[0_18px_50px_rgba(0,0,0,.48)] backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#96ed08] shadow-[0_0_12px_rgba(150,237,8,.9)]" />
                    <p className="font-bold text-white">Trip tracking active</p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-white/35">
                        Pickup
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">
                        In progress
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                      <p className="text-[11px] uppercase tracking-[0.1em] text-white/35">
                        Updates
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">Live</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 w-[255px] rounded-2xl border border-[#96ed08]/25 bg-black/90 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/38">
                        Trip visibility
                      </p>
                      <p className="mt-1 font-bold text-white">
                        Route and status
                      </p>
                      <p className="mt-1 text-xs text-white/42">
                        Follow important updates in one place
                      </p>
                    </div>

                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Route size={20} />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/[0.09] bg-black/78 px-4 py-2 text-xs font-semibold text-white/48 backdrop-blur-md">
                  <MessageCircle size={14} className="text-[#96ed08]" />
                  Rider-driver communication
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Live trip visibility
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Stay informed throughout the ride.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO is designed to keep riders informed from driver assignment
                through pickup, trip progress, and destination arrival.
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

        {/* PRICING + PAYMENTS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <WalletCards size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Clear pricing
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Review your price before confirming.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  The rider experience is designed to present the available ride
                  option and trip price before you complete the booking.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Ride option shown",
                    "Trip price reviewed",
                    "Payment method selected",
                    "Booking confirmed",
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
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <CreditCard size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Payment options
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Choose an available way to pay.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Available payment choices can include supported cards, wallet
                  balance, and eligible device-based payment options.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: CreditCard, label: "Card" },
                    { icon: WalletCards, label: "Wallet" },
                    { icon: Smartphone, label: "Device payment" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      <Icon className="text-[#96ed08]" size={19} />
                      <p className="mt-3 text-sm font-semibold text-white/65">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SAFETY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Rider safety
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tools designed to support your journey.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Rider safety features are designed to help you stay connected,
                share trip details, report concerns, and reach support.
              </p>

              <Link
                href="/safety"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
              >
                Explore rider safety
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {safetyItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-5"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                    {index === 0 && <Route size={20} />}
                    {index === 1 && <ShieldCheck size={20} />}
                    {index === 2 && <CarFront size={20} />}
                    {index === 3 && <MessageCircle size={20} />}
                    {index === 4 && <Headphones size={20} />}
                    {index === 5 && <HeartHandshake size={20} />}
                  </div>

                  <p className="font-semibold text-white/72">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL OPTIONS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                More ways to ride
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Options for everyday plans and special needs.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {specialOptions.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/30"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Icon size={24} />
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

        {/* RIDER FAQ CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/20 bg-[#0b0b0b] px-8 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute right-[-8rem] top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Rider questions
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Find answers before your first ride.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Learn about booking, pricing, payments, cancellations, safety,
                  accessibility, and rider support before using the AkiGO rider
                  experience.
                </p>

                <Link
                  href="/faq/riders"
                  className={`${primaryButton} mt-8 inline-flex`}
                >
                  View Rider FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section
          id="rider-launch-list"
          className="scroll-mt-28 border-t border-white/[0.06] py-16 sm:py-20"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-8 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Be the first to ride
                  </p>

                  <h2 className="font-display mt-2 text-2xl font-bold">
                    Be among the first to ride with AkiGO.
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-white/48">
                    Join the rider list for early access, launch-market updates,
                    and availability information.
                  </p>
                </div>

                <LaunchListForm source="ride_page" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
