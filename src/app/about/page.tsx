import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  Compass,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPinned,
  PackageCheck,
  Route,
  ShieldCheck,
  Sparkles,
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

export default function AboutPage() {
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
                About AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[770px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Building a more connected way to
                <br />
                <span className="text-[#96ed08]">move locally.</span>
              </h1>

              <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/60">
                AkiGO Technologies is building one connected platform for rides,
                driver opportunities, local delivery, business logistics, and
                safety-focused support.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/ride" className={primaryButton}>
                  Explore AkiGO
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="mailto:akigo678@gmail.com?subject=AkiGO%20Partnership"
                  className={secondaryButton}
                >
                  Contact partnerships
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Route, label: "Connected mobility" },
                  { icon: PackageCheck, label: "Local delivery" },
                  { icon: Store, label: "Business tools" },
                  { icon: ShieldCheck, label: "Safety systems" },
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

            {/* COMPANY PREVIEW */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        AkiGO Technologies
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        One platform. Multiple local experiences.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Sparkles size={24} />
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: CarFront, title: "Rider", text: "Trips and mobility" },
                      { icon: Users, title: "Driver", text: "Flexible earning tools" },
                      { icon: PackageCheck, title: "Delivery", text: "Local logistics" },
                      { icon: Building2, title: "Business", text: "Operational support" },
                    ].map(({ icon: Icon, title, text }) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-white/[0.08] bg-black/50 p-5"
                      >
                        <Icon className="text-[#96ed08]" size={22} />
                        <h3 className="mt-4 font-bold text-white">{title}</h3>
                        <p className="mt-2 text-sm text-white/42">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                    <div className="flex items-start gap-3">
                      <MapPinned
                        className="mt-0.5 shrink-0 text-[#96ed08]"
                        size={19}
                      />
                      <p className="text-sm leading-6 text-white/58">
                        AkiGO is being prepared for responsible launch and market
                        expansion. Availability will depend on product,
                        operational, and local readiness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY AKIGO */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Why AkiGO
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Local movement should feel more connected.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Transportation, delivery, driver tools, and local-business
                logistics are often separated into disconnected experiences.
                AkiGO is being built to bring those needs together through one
                coordinated platform.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                The goal is not simply to add another app. It is to create a
                clearer, more responsible system for people and organizations
                that need to move locally.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[110px]" />

              <div className="relative">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  The opportunity
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Riders need clear choices and trip visibility",
                    "Drivers need flexible tools and clear trip information",
                    "Customers need practical local delivery",
                    "Businesses need organized mobility and logistics",
                    "Communities need responsible platform operations",
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
              </div>
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

        {/* FOUNDER LETTER */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="relative min-h-[560px] overflow-hidden bg-[#080808] sm:min-h-[620px] lg:min-h-[680px]">
            <img
              src="/images/founder/sunday-akinnusi-founder-wide.png"
              alt="Sunday Akinnusi, Founder of AkiGO Technologies"
              className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[64%_center] lg:object-center"
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

                <a
                  href="mailto:akigo678@gmail.com?subject=AkiGO%20Partnership"
                  className={`${primaryButton} shrink-0`}
                >
                  Contact AkiGO
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
