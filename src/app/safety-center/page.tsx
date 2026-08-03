import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BellRing,
  CarFront,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Eye,
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

const quickActions = [
  {
    icon: PhoneCall,
    title: "Emergency assistance",
    text: "Contact local emergency services when immediate help is required.",
    href: "#emergency-guidance",
  },
  {
    icon: Route,
    title: "Share your journey",
    text: "Share active trip or delivery details with a trusted contact.",
    href: "#journey-sharing",
  },
  {
    icon: FileWarning,
    title: "Report a concern",
    text: "Document a safety, conduct, pickup, delivery, or account concern.",
    href: "#incident-reporting",
  },
  {
    icon: Headphones,
    title: "Contact support",
    text: "Reach AkiGO for non-emergency platform support and follow-up.",
    href: "mailto:akigo678@gmail.com?subject=AkiGO%20Safety%20Support",
  },
];

const riderTools = [
  "Driver and vehicle information",
  "Pickup and trip progress",
  "Rider-driver communication",
  "Trip sharing",
  "Emergency safety workflow",
  "Incident and conduct reporting",
];

const driverTools = [
  "Trip and rider information",
  "Unsafe pickup reporting",
  "Emergency assistance workflow",
  "Active-trip sharing",
  "Safety check-in tools",
  "Incident reporting and support",
];

const deliveryTools = [
  "Pickup and courier visibility",
  "Customer-courier communication",
  "Drop-off confirmation",
  "Delivery issue reporting",
  "Journey sharing",
  "Support escalation",
];

const reportingSteps = [
  {
    number: "01",
    icon: AlertTriangle,
    title: "Choose the concern",
    text: "Select the safety, conduct, trip, delivery, payment, or account issue that best matches the situation.",
  },
  {
    number: "02",
    icon: FileWarning,
    title: "Provide accurate details",
    text: "Include relevant journey information, messages, photos, locations, and a clear description.",
  },
  {
    number: "03",
    icon: ShieldAlert,
    title: "Submit for review",
    text: "The report enters the appropriate AkiGO safety or support workflow.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Continue follow-up",
    text: "Respond to requests for additional information and preserve relevant evidence.",
  },
];

const trustedContactTools = [
  {
    icon: Users,
    title: "Trusted contacts",
    text: "Choose people who may receive journey information when sharing is enabled.",
  },
  {
    icon: Route,
    title: "Journey details",
    text: "Share available pickup, destination, driver, vehicle, and progress information.",
  },
  {
    icon: BellRing,
    title: "Safety check-ins",
    text: "Use available check-in workflows when a journey needs additional attention.",
  },
  {
    icon: LockKeyhole,
    title: "Controlled sharing",
    text: "Journey information should be shared only through intended safety and support workflows.",
  },
];

const privacyControls = [
  "Authenticated account access",
  "Role-based platform permissions",
  "Restricted trip and delivery information",
  "Protected backend actions",
  "Controlled document access",
  "Support and safety audit activity",
];

const faqItems = [
  {
    question: "What should I do during an immediate emergency?",
    answer:
      "Move to a safer location when possible and contact the appropriate local emergency service. AkiGO support is not a replacement for police, fire, ambulance, or other emergency responders.",
  },
  {
    question: "How do I report a rider, driver, courier, or delivery concern?",
    answer:
      "Use the available in-app report or support workflow and provide accurate journey details. Before active app support is available, contact AkiGO using the safety-support email on this page.",
  },
  {
    question: "Can I share my trip with another person?",
    answer:
      "AkiGO is designed to support journey sharing through the rider and driver experiences. Availability can depend on the app version, journey type, and launch market.",
  },
  {
    question: "Does AkiGO guarantee that every journey will be risk-free?",
    answer:
      "No platform can eliminate every risk. AkiGO is designed to provide visibility, controls, support, reporting, and continuous safety improvements.",
  },
  {
    question: "How is driver eligibility reviewed?",
    answer:
      "Driver activation depends on required identity, document, vehicle, insurance, background, and market-specific eligibility reviews.",
  },
];

export default function SafetyCenterPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.11),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[700px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO Safety Center
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Safety tools and guidance for
                <br />
                <span className="text-[#96ed08]">every journey.</span>
              </h1>

              <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/60">
                Find emergency guidance, journey-sharing tools, reporting
                workflows, platform protections, and support information for
                riders, drivers, couriers, and businesses.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:akigo678@gmail.com?subject=AkiGO%20Safety%20Support"
                  className={primaryButton}
                >
                  Contact safety support
                  <ArrowRight size={18} />
                </a>

                <Link href="/help" className={secondaryButton}>
                  Visit Help Center
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: PhoneCall, label: "Emergency guidance" },
                  { icon: Route, label: "Journey sharing" },
                  { icon: FileWarning, label: "Incident reporting" },
                  { icon: Headphones, label: "Safety support" },
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

            {/* SAFETY DASHBOARD */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Active journey safety
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Important actions, clearly organized.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <ShieldCheck size={25} />
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[#96ed08]/18 bg-black/55 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#96ed08]">
                          Journey status
                        </p>
                        <p className="mt-2 text-lg font-bold text-white">
                          Safety tools available
                        </p>
                      </div>

                      <span className="rounded-full border border-[#96ed08]/25 bg-[#96ed08]/10 px-3 py-1.5 text-xs font-bold text-[#96ed08]">
                        Active
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        { icon: PhoneCall, label: "Emergency" },
                        { icon: Route, label: "Share journey" },
                        { icon: MessageCircle, label: "Contact" },
                        { icon: FileWarning, label: "Report issue" },
                      ].map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                        >
                          <div className="grid size-10 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                            <Icon size={19} />
                          </div>
                          <span className="text-sm font-semibold text-white/68">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/45 p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className="mt-0.5 shrink-0 text-[#96ed08]"
                        size={19}
                      />
                      <p className="text-sm leading-6 text-white/55">
                        For immediate danger, contact the appropriate local
                        emergency service first.
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs text-white/28">
                    Illustrative Safety Center preview. Available actions can
                    vary by app, journey type, and market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Quick safety actions
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Choose the action that matches the situation.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {quickActions.map(({ icon: Icon, title, text, href }) => (
                <a
                  key={title}
                  href={href}
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

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08]">
                      Open
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
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
                  Safety across AkiGO
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Tools for riders, drivers, and deliveries.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Each AkiGO experience has different safety needs, but all are
                designed around visibility, communication, reporting, and
                responsible access.
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
                  Stay informed throughout the ride.
                </h3>

                <div className="mt-7 space-y-3">
                  {riderTools.map((item) => (
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
                  Support for real driving situations.
                </h3>

                <div className="mt-7 space-y-3">
                  {driverTools.map((item) => (
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
                  Visibility from pickup to drop-off.
                </h3>

                <div className="mt-7 space-y-3">
                  {deliveryTools.map((item) => (
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

        {/* REPORTING */}
        <section
          id="incident-reporting"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Incident reporting
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Report concerns clearly and accurately.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Reports should include enough information to support appropriate
                review and follow-up without exposing passwords or complete
                payment-card details.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {reportingSteps.map(({ number, icon: Icon, title, text }) => (
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

        {/* JOURNEY SHARING */}
        <section
          id="journey-sharing"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Journey sharing
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Keep trusted people informed.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Journey-sharing tools are designed to help riders and drivers
                share relevant trip or delivery information with trusted
                contacts.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustedContactTools.map(({ icon: Icon, title, text }) => (
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
                    <Users size={27} />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      Trusted contact preview
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-bold">
                      Shared only when enabled.
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Active journey status",
                    "Pickup and destination information",
                    "Driver or courier progress",
                    "Vehicle and account information where applicable",
                    "Important safety updates",
                    "Journey completion status",
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

        {/* PRIVACY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <LockKeyhole size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Privacy and access
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Safety information should remain protected.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Safety, journey, document, and account information should be
                  available only to authorized participants and systems.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {privacyControls.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <Check className="mt-0.5 text-[#96ed08]" size={16} />
                      <span className="text-sm leading-6 text-white/62">
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
                  <BadgeCheck size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Eligibility and review
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Access depends on responsible review.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Driver and business participation can depend on identity,
                  document, vehicle, eligibility, compliance, and market
                  requirements.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Identity and account review",
                    "Driver-license and vehicle review",
                    "Insurance and required documents",
                    "Background and eligibility checks",
                    "Business and operational review",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <BadgeCheck className="text-[#96ed08]" size={17} />
                      <span className="text-sm font-semibold text-white/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* EMERGENCY */}
        <section
          id="emergency-guidance"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/20 bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8 sm:p-10">
              <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[105px]" />

              <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <div>
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <AlertTriangle size={27} />
                  </div>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Emergency guidance
                  </p>

                  <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    Immediate danger requires immediate action.
                  </h2>

                  <p className="mt-4 max-w-lg leading-7 text-white/52">
                    AkiGO support is not a replacement for police, fire,
                    ambulance, or other local emergency services.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Move to a safer location when possible",
                    "Contact the appropriate local emergency service",
                    "Use the in-app safety workflow when available",
                    "Share accurate journey and location information",
                    "Preserve relevant messages or evidence",
                    "Contact AkiGO afterward for platform follow-up",
                  ].map((item) => (
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

        {/* FAQ */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Safety questions
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Important answers about AkiGO safety.
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-3">
              {faqItems.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-white/[0.09] bg-[#0b0b0b] p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-white [&::-webkit-details-marker]:hidden">
                    {question}
                    <ChevronRight
                      size={19}
                      className="shrink-0 text-[#96ed08] transition group-open:rotate-90"
                    />
                  </summary>

                  <p className="mt-4 max-w-3xl border-t border-white/[0.07] pt-4 leading-7 text-white/50">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Safety support
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Have a non-emergency safety concern?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Contact AkiGO with the relevant account, trip, delivery, or
                    incident details. Do not include passwords or complete
                    payment-card information.
                  </p>
                </div>

                <a
                  href="mailto:akigo678@gmail.com?subject=AkiGO%20Safety%20Support"
                  className={`${primaryButton} shrink-0`}
                >
                  Contact safety support
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
