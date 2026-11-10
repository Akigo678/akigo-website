import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  Compass,
  Handshake,
  HeartHandshake,
  Lightbulb,
  PackageCheck,
  ShieldCheck,
  Store,
  Target,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const platformAreas = [
  {
    icon: CarFront,
    title: "Ride",
    text: "A rider experience for requesting trips, comparing options, reviewing pricing, and following progress.",
    href: "/ride",
  },
  {
    icon: Users,
    title: "Drive",
    text: "A driver platform focused on flexibility, trip clarity, safety, and earnings visibility.",
    href: "/drive",
  },
  {
    icon: PackageCheck,
    title: "Deliver",
    text: "Local delivery tools for meals, packages, documents, retail items, and everyday essentials.",
    href: "/deliver",
  },
  {
    icon: Building2,
    title: "Business",
    text: "Mobility, delivery, and logistics solutions designed around practical local operations.",
    href: "/business",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Visibility, reporting, communication, support, and protected platform workflows.",
    href: "/safety",
  },
];

const values = [
  {
    icon: Target,
    title: "Clarity",
    text: "People should understand what is happening, what comes next, and what information matters.",
  },
  {
    icon: ShieldCheck,
    title: "Responsibility",
    text: "Safety, permissions, review processes, and controlled access belong in the core product.",
  },
  {
    icon: HeartHandshake,
    title: "Respect",
    text: "Riders, drivers, couriers, businesses, and communities should all be treated with dignity.",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    text: "Technology should solve real transportation and delivery problems without unnecessary complexity.",
  },
  {
    icon: Handshake,
    title: "Local partnership",
    text: "AkiGO is being built to work with local businesses, organizations, drivers, and communities.",
  },
  {
    icon: Compass,
    title: "Long-term thinking",
    text: "Growth should follow product readiness, operational discipline, and responsible market preparation.",
  },
];

const technologyPrinciples = [
  "Real-time ride and delivery visibility",
  "Clear role-based experiences",
  "Protected backend actions",
  "Driver and business review workflows",
  "Payment and earnings separation",
  "Support and incident-management tools",
];

const roadmap = [
  {
    number: "01",
    title: "Build the core platform",
    text: "Develop the rider, driver, delivery, business, admin, payment, dispatch, and support experiences.",
  },
  {
    number: "02",
    title: "Strengthen production readiness",
    text: "Review security, permissions, reliability, monitoring, operational controls, and end-to-end workflows.",
  },
  {
    number: "03",
    title: "Validate in controlled markets",
    text: "Test real operations carefully before expanding availability.",
  },
  {
    number: "04",
    title: "Expand responsibly",
    text: "Grow into additional markets only when technology, operations, support, and compliance are ready.",
  },
];

const companyDetails = [
  { label: "Company", value: "AkiGO Technologies LLC" },
  { label: "Primary market", value: "Orlando, Florida" },
  { label: "Focus", value: "Rideshare, delivery, and local business mobility" },
];

const whyChooseAkigo = [
  {
    icon: CarFront,
    title: "Rider value",
    text: "Ride choices with clear information so customers can compare options and make informed decisions.",
  },
  {
    icon: Users,
    title: "Driver opportunity",
    text: "Tools designed around flexible work, earnings visibility, and fair treatment of drivers.",
  },
  {
    icon: PackageCheck,
    title: "Convenient delivery",
    text: "One platform designed to coordinate local food, package, and everyday deliveries.",
  },
  {
    icon: Store,
    title: "Local business support",
    text: "Practical transportation and delivery coordination for restaurants, merchants, and other organizations.",
  },
];

export default function AboutPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* The approved wide-screen artwork is shown at its original proportions.
            The navigation remains live in MarketingLayout; interactive hotspots
            preserve the hero's two calls to action. */}
        <section className="hidden pt-[88px] xl:block" aria-label="About AkiGO introduction">
          <div className="relative aspect-[1560/913] w-full overflow-hidden bg-[#050505] [container-type:inline-size]">
            <Image
              src="/images/about/akigo-about-hero.png"
              alt=""
              width={1560}
              height={1008}
              priority
              unoptimized
              sizes="100vw"
              className="pointer-events-none absolute left-0 top-[-10.405%] h-auto w-full max-w-none select-none"
            />
            {/* Cover the rasterized copy; all visible copy below is real HTML text. */}
            <div className="pointer-events-none absolute inset-0 bg-black/20" />

            <div className="absolute left-[3.9%] top-[6.2%] flex items-center gap-[1cqw] text-[1.1cqw] font-bold uppercase tracking-[.26em] text-[#96ed08]">
              <span className="size-[.8cqw] rounded-full bg-[#96ed08]" />
              About AkiGO
            </div>
            <h1 className="font-display absolute left-[3.9%] top-[11.8%] text-[4.55cqw] font-extrabold leading-[1.07] tracking-[-.055em] text-white">
              Moving people.
              <br />
              Connecting
              <br />
              <span className="text-[#96ed08]">communities.</span>
            </h1>
            <p className="absolute left-[4%] top-[38.5%] max-w-[35%] text-[1.53cqw] leading-[1.38] text-white/85">
              AkiGO brings rides, deliveries, drivers, and local businesses together through one connected platform.
            </p>
            <div className="absolute left-[3.9%] top-[52.9%] flex h-[6.4%] items-stretch gap-[1cqw] text-[1.15cqw] font-bold">
              <Link href="/ride" className="flex w-[14.75cqw] items-center justify-center rounded-full bg-[#96ed08] text-black transition-colors hover:bg-[#b1ff32] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white">
                Explore AkiGO
              </Link>
              <Link href="/partners" className="flex w-[15.65cqw] items-center justify-center rounded-full border border-white bg-black/35 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#96ed08]">
                Partner with us
              </Link>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-[27.7%] bg-[#030904] px-[3.9%]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_44%_100%,rgba(82,137,8,.18),transparent_55%)]" />
              <div className="relative h-px bg-white/35" />
              <div className="relative grid grid-cols-4 gap-[3cqw] pt-[3.1cqw]">
                {[
                  { icon: CarFront, title: "Rides", text: "Reliable, convenient rides across your city." },
                  { icon: Users, title: "Driver opportunities", text: "Flexible earning opportunities with the support you deserve." },
                  { icon: PackageCheck, title: "Local delivery", text: "Fast, dependable delivery for people and businesses nearby." },
                  { icon: Store, title: "Business solutions", text: "Mobility and delivery tools to help local businesses grow." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="min-w-0 border-r border-white/20 pr-[2cqw] last:border-r-0">
                    <Icon className="h-[2.8cqw] w-[2.8cqw] text-[#96ed08]" strokeWidth={1.8} />
                    <h2 className="mt-[.8cqw] text-[1.7cqw] font-bold leading-tight text-white">{title}</h2>
                    <p className="mt-[.6cqw] max-w-[21cqw] text-[1.28cqw] leading-[1.35] text-white/80">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px] xl:hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(150,237,8,0.09),transparent_42%)]" />
          <div className="relative mx-auto max-w-[1860px] px-6 pb-14 pt-8 sm:px-10">
            <div className="relative">
              <div className="pointer-events-none relative mb-10 aspect-[16/10] overflow-hidden rounded-[2rem] sm:aspect-[16/8]">
                <Image
                  src="/images/about/akigo-about-hero.png"
                  alt="An AkiGO driver welcoming a passenger beside a black SUV in Orlando"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover object-[55%_center]"
                />
                <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(5,5,5,.45)_0%,transparent_33%)] lg:block" />
                {/* Restrained green glass ribbon, following the image's left edge. */}
                <svg
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 hidden h-full w-[24%] lg:block"
                  viewBox="0 0 280 700"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="aboutGreenCurve" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#96ED08" stopOpacity="0.04" />
                      <stop offset="0.48" stopColor="#96ED08" stopOpacity="0.13" />
                      <stop offset="1" stopColor="#96ED08" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="aboutGreenSweep" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0" stopColor="#96ED08" stopOpacity="0.22" />
                      <stop offset="0.65" stopColor="#96ED08" stopOpacity="0.68" />
                      <stop offset="1" stopColor="#96ED08" stopOpacity="0.76" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 116 0 C 35 42 47 153 16 260 C -15 366 1 443 71 509 C 45 399 86 311 124 231 C 161 145 146 65 207 0 Z"
                    fill="url(#aboutGreenCurve)"
                  />
                  <path
                    d="M 0 659 C 94 628 180 610 280 594 L 280 614 C 170 633 92 657 0 681 Z"
                    fill="url(#aboutGreenSweep)"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#96ed08] sm:text-sm">
                  <span className="size-2.5 shrink-0 rounded-full bg-[#96ed08] shadow-[0_0_18px_rgba(150,237,8,.6)]" />
                  About AkiGO
                </p>
                <h1 className="font-display mt-8 max-w-[660px] text-[clamp(2.8rem,4vw,4.9rem)] font-extrabold leading-[1.03] tracking-[-0.06em] text-white">
                  Moving people.
                  <br />
                  Connecting
                  <br />
                  <span className="text-[#96ed08]">communities.</span>
                </h1>
                <p className="mt-7 max-w-[31rem] text-base leading-8 text-white/80 sm:text-lg">
                  AkiGO brings rides, deliveries, drivers, and local businesses
                  together through one connected platform.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/ride" className={primaryButton}>
                    Explore AkiGO <ArrowRight size={18} />
                  </Link>
                  <Link href="/partners" className={secondaryButton}>
                    Partner with us
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {[
                { icon: CarFront, title: "Rides", text: "Reliable, convenient rides across your city." },
                { icon: Users, title: "Driver opportunities", text: "Flexible earning opportunities with the support you deserve." },
                { icon: PackageCheck, title: "Local delivery", text: "Fast, dependable delivery for people and businesses nearby." },
                { icon: Store, title: "Business solutions", text: "Mobility and delivery tools to help local businesses grow." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-white/15 lg:border-r lg:pr-5 last:border-r-0">
                  <Icon className="text-[#96ed08]" size={30} strokeWidth={1.8} />
                  <h2 className="mt-4 text-lg font-bold text-white">{title}</h2>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY AKIGO */}
        <section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#020503] py-24 sm:py-28 lg:py-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_3%_3%,rgba(150,237,8,.09),transparent_32%),radial-gradient(ellipse_at_96%_92%,rgba(150,237,8,.12),transparent_33%)]" />
          <svg aria-hidden="true" className="pointer-events-none absolute -bottom-9 -left-10 hidden h-[45%] w-[60%] opacity-80 lg:block" viewBox="0 0 900 330" fill="none" preserveAspectRatio="none">
            <path d="M-20 296 C145 296 144 252 219 252 H294 C361 252 348 205 429 205 H520 C586 205 551 148 635 148 H940" stroke="#96ed08" strokeOpacity=".12" strokeWidth="2" />
            <path d="M-20 275 C135 275 142 225 231 225 H301 C362 225 350 176 439 176 H514 C589 176 574 126 646 126 H940" stroke="#96ed08" strokeOpacity=".88" strokeWidth="3" />
            <circle cx="363" cy="175" r="19" fill="#101a06" stroke="#96ed08" strokeWidth="2" />
            <path d="m354 174 16-7-5 17-4-7-7-3Z" fill="#d2ff83" />
            <path d="M0 312 250 312 320 275 500 275 610 320 860 320" stroke="#96ed08" strokeOpacity=".09" strokeWidth="2" />
          </svg>
          <svg aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-[34%] w-[42%] lg:block" viewBox="0 0 650 230" fill="none" preserveAspectRatio="none">
            <path d="M-20 15 110 100 H330 C396 100 360 48 428 48 H620" stroke="#96ed08" strokeOpacity=".15" strokeWidth="2" />
            <path d="M-20 0 125 82 H330 C396 82 364 28 428 28 H620" stroke="#96ed08" strokeOpacity=".76" strokeWidth="3" />
            <path d="M620 26a15 15 0 0 0-30 0c0 11 15 28 15 28s15-17 15-28Z" fill="#96ed08" />
            <circle cx="605" cy="25" r="5" fill="#142104" />
          </svg>

          <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1fr_1.04fr] lg:gap-16 xl:gap-24">
            <div className="relative z-10 max-w-[670px]">
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#96ed08]">Why AkiGO</p>
              <h2 className="font-display mt-8 text-[clamp(2.6rem,4.3vw,4.7rem)] font-extrabold leading-[1.08] tracking-[-0.055em] text-white">
                Local movement should feel <span className="text-[#96ed08]">more connected.</span>
              </h2>
              <p className="mt-9 max-w-[590px] text-lg leading-[1.6] text-white/85 sm:text-xl">
                Rides, deliveries, drivers, and local businesses should work together, not in separate systems.
              </p>
              <p className="mt-7 max-w-[590px] text-lg leading-[1.6] text-white/85 sm:text-xl">
                AkiGO is building one connected platform to make everyday movement simpler, clearer, and more dependable.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/30 bg-[linear-gradient(135deg,rgba(20,32,10,.87)_0%,#080b07_40%,rgba(21,36,10,.88)_100%)] p-6 shadow-[0_20px_90px_rgba(0,0,0,.35)] sm:p-9">
              <div className="pointer-events-none absolute -right-28 -top-36 size-80 rounded-full bg-[#96ed08]/10 blur-[90px]" />
              <div className="relative">
                <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#96ed08] sm:text-base">The opportunity</p>
                <div className="mt-7 space-y-3">
                  {[
                    "Clear choices for riders",
                    "Flexible tools for drivers",
                    "Everyday local delivery",
                    "Smarter solutions for businesses",
                    "Stronger community connections",
                  ].map((item, index) => (
                    <div key={item} className="flex min-h-[75px] items-center gap-5 rounded-[1.2rem] border border-white/20 bg-black/55 px-5 py-4 sm:gap-6 sm:px-6">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#96ed08] text-base font-extrabold text-[#96ed08]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-9 w-px shrink-0 bg-[#96ed08]/35" />
                      <p className="text-base font-bold leading-snug text-white sm:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY PROFILE */}
        <section className="border-t border-white/[0.06] bg-[#080a06] py-16 sm:py-20">
          <div className="site-container">
            <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">Who we are</p>
                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Rooted in Orlando. Built for local communities.
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-white/65">
                  AkiGO Technologies LLC is developing a connected rideshare and
                  delivery platform, starting with a focus on Orlando, Florida.
                  Our goal is to make transportation and local delivery easier
                  to navigate for individuals, drivers, and businesses.
                </p>
              </div>
              <dl className="grid gap-4 sm:grid-cols-3">
                {companyDetails.map(({ label, value }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#96ed08]">{label}</dt>
                    <dd className="mt-3 text-base font-bold leading-6 text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* MISSION + VISION */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <Target size={28} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Our mission
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Make local movement clearer, more connected, and more useful.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  AkiGO’s mission is to build practical mobility and delivery
                  technology that supports riders, drivers, couriers,
                  businesses, and local communities.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <Compass size={28} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Our vision
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  One trusted platform for everyday local mobility.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  The long-term vision is a connected platform where people and
                  organizations can coordinate rides, delivery, driver
                  opportunities, and business logistics in one ecosystem.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* WHAT MAKES AKIGO DIFFERENT */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">The AkiGO approach</p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Designed around people who move our communities.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-white/60">
                We are building toward affordable ride choices, fair driver
                opportunities, convenient delivery, and practical partnerships.
                Specific services depend on market availability.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whyChooseAkigo.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-[1.5rem] border border-white/10 bg-[#0b0d09] p-6">
                  <Icon size={27} className="text-[#96ed08]" />
                  <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER LETTER */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="relative min-h-[560px] overflow-hidden bg-[#080808] sm:min-h-[620px] lg:min-h-[680px]">
            <Image
              src="/images/founder/sunday-akinnusi-founder-wide.png"
              alt="Sunday Akinnusi, Founder of AkiGO Technologies"
              fill
              sizes="100vw"
              className="object-cover object-[68%_center] sm:object-[64%_center] lg:object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.92)_30%,rgba(0,0,0,0.58)_52%,rgba(0,0,0,0.08)_78%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.02)_58%,rgba(0,0,0,0.48)_100%)]" />

            <div className="site-container relative z-10 flex min-h-[560px] items-center py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[680px]">
              <div className="max-w-[650px]">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#96ed08]">
                  From the Founder
                </p>

                <h2 className="font-display mt-5 text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
                  A Letter from
                  <br />
                  our <span className="text-[#96ed08]">Founder</span>
                </h2>

                <p className="mt-7 max-w-[590px] text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                  Learn why AkiGO was created, the vision behind the company,
                  and our commitment to building one connected platform for
                  transportation, delivery, businesses, drivers, and communities.
                </p>

                <Link
                  href="/about/founder-letter"
                  className={`${primaryButton} mt-9 inline-flex`}
                >
                  Read Founder&apos;s Letter
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* PLATFORM */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                The AkiGO platform
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Separate experiences. One connected system.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Each part of AkiGO is designed around a distinct user need while
                remaining connected through shared operations, support, safety,
                and platform infrastructure.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {platformAreas.map(({ icon: Icon, title, text, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35"
                >
                  <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.045] blur-[70px]" />

                  <div className="relative">
                    <div className="grid size-12 place-items-center rounded-2xl border border-[#96ed08]/15 bg-[#96ed08]/10 text-[#96ed08]">
                      <Icon size={23} />
                    </div>

                    <h3 className="font-display mt-7 text-2xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/50">
                      {text}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08]">
                      Explore {title}
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Our values
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Principles that shape how AkiGO is built.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Product decisions, operational choices, and growth plans should
                reflect the needs of the people and communities the platform is
                intended to serve.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {values.map(({ icon: Icon, title, text }) => (
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

        {/* TECHNOLOGY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Technology and operations
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Built as a connected production platform.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO is being developed as more than a collection of marketing
                pages. The platform includes rider, driver, delivery, business,
                admin, payment, dispatch, safety, and support systems.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                Production readiness depends on secure permissions, reliable
                backend workflows, monitoring, operational processes, and
                responsible launch preparation.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[110px]" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Platform principles
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {technologyPrinciples.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/45 p-4"
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

                <p className="mt-5 text-xs leading-5 text-white/30">
                  Platform features and availability can change as development,
                  testing, compliance, and market preparation continue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Responsible growth
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Build carefully. Validate thoroughly. Expand responsibly.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                AkiGO’s launch path is based on readiness rather than unsupported
                dates, market claims, or artificial growth targets.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {roadmap.map(({ number, title, text }) => (
                  <article
                    key={number}
                    className="relative rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6"
                  >
                    <div className="relative z-10 grid size-12 place-items-center rounded-2xl bg-[#96ed08] font-extrabold text-black">
                      {number}
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


        {/* PARTNERSHIP CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Connect with AkiGO
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Interested in partnerships or launch updates?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Contact AkiGO Technologies about business partnerships,
                    community opportunities, or general company information.
                  </p>
                </div>

                <Link href="/contact" className={`${primaryButton} shrink-0`}>
                  Contact AkiGO
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
