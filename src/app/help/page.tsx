import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CarFront,
  ChevronRight,
  CircleHelp,
  Check,
  CreditCard,
  FileText,
  Headphones,
  LockKeyhole,
  MapPinned,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

import SupportRequestForm from "./SupportRequestForm";

const supportCategories = [
  {
    icon: CarFront,
    title: "Rider help",
    text: "Get help with booking, trip status, payments, cancellations, refunds, and rider safety.",
    href: "#rider-help",
  },
  {
    icon: UserCheck,
    title: "Driver help",
    text: "Find guidance for onboarding, trip offers, navigation, earnings, payouts, and driver safety.",
    href: "#driver-help",
  },
  {
    icon: PackageCheck,
    title: "Delivery help",
    text: "Review pickup, courier, tracking, drop-off, and delivery issue guidance.",
    href: "#delivery-help",
  },
  {
    icon: Building2,
    title: "Business help",
    text: "Get support for business accounts, orders, delivery activity, teams, and partnerships.",
    href: "#business-help",
  },
  {
    icon: CreditCard,
    title: "Payments",
    text: "Understand payment methods, wallet activity, refunds, driver pay, and payout support.",
    href: "#payments-help",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Access safety guidance, reporting, emergency information, and support workflows.",
    href: "#safety-help",
  },
];

const riderTopics = [
  "Requesting and confirming a ride",
  "Ride options and trip requirements",
  "Driver assignment and pickup progress",
  "Changing or canceling a ride",
  "Payment methods and wallet balance",
  "Refund and cancellation questions",
  "Trip sharing and rider safety",
  "Reporting a rider-app issue",
];

const driverTopics = [
  "Creating a driver account",
  "Submitting required documents",
  "Approval and eligibility review",
  "Going online and receiving trip offers",
  "Accepting, declining, and completing trips",
  "Navigation and active-trip support",
  "Earnings and payout activity",
  "Driver safety and incident reporting",
];

const deliveryTopics = [
  "Creating a delivery request",
  "Eligible items and delivery instructions",
  "Pickup and courier progress",
  "Live delivery tracking",
  "Changing or canceling a delivery",
  "Drop-off and completion confirmation",
  "Reporting missing or damaged items",
  "Delivery support and safety",
];

const businessTopics = [
  "Business account interest",
  "Restaurant and merchant onboarding",
  "Team and location access",
  "Creating business delivery requests",
  "Scheduled and recurring activity",
  "Order and delivery visibility",
  "Business billing and account questions",
  "Partnership and operational support",
];

const paymentTopics = [
  {
    icon: CreditCard,
    title: "Rider payments",
    text: "Supported payment methods can include eligible cards, wallet balance, and device-based payment options.",
  },
  {
    icon: WalletCards,
    title: "Wallet activity",
    text: "Review eligible top-ups, ride payments, refunds, and account activity inside the rider experience.",
  },
  {
    icon: CircleHelp,
    title: "Refund questions",
    text: "Refund eligibility depends on trip status, cancellation timing, payment method, and the applicable policy.",
  },
  {
    icon: Users,
    title: "Driver pay",
    text: "Drivers see driver-pay and earnings activity without rider fare or internal platform-margin information.",
  },
];

const safetyGuidance = [
  "Use local emergency services when there is immediate danger",
  "Move to a safer location when possible",
  "Use the in-app safety or support workflow",
  "Share accurate trip, delivery, or account details",
  "Preserve relevant messages, photos, and information",
  "Follow up through the correct AkiGO support path",
];

const commonQuestions = [
  {
    question: "Is AkiGO available in my city?",
    answer:
      "Availability depends on launch-market readiness. AkiGO will share confirmed availability through official launch updates.",
  },
  {
    question: "How do I join the rider or driver launch list?",
    answer:
      "Use the launch-list form on the Ride page or the driver waitlist form on the Drive page.",
  },
  {
    question: "How do I contact AkiGO support?",
    answer:
      "For now, use the contact options on this page. In-app support workflows will be available within active AkiGO experiences.",
  },
  {
    question: "Can I book a live ride from this website?",
    answer:
      "The marketing website does not currently provide live web booking. Ride requests are intended to be handled through the AkiGO rider experience when available.",
  },
  {
    question: "How are safety concerns handled?",
    answer:
      "Immediate danger should be reported to local emergency services. Platform-related concerns can be documented through AkiGO safety and support workflows.",
  },
  {
    question: "Where can businesses request a partnership?",
    answer:
      "Use the Business page or contact AkiGO directly with your organization and operational needs.",
  },
];

export default function HelpPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[650px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO Help Center
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Find the help you need,
                <br />
                <span className="text-[#96ed08]">all in one place.</span>
              </h1>

              <p className="mt-6 max-w-[610px] text-lg leading-8 text-white/60">
                Explore support information for riders, drivers, deliveries,
                businesses, payments, accounts, and safety.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:akigo678@gmail.com?subject=AkiGO%20Support"
                  className={primaryButton}
                >
                  Contact AkiGO support
                  <ArrowRight size={18} />
                </a>

                <Link href="/safety" className={secondaryButton}>
                  Visit Safety Center
                </Link>
              </div>
            </div>

            {/* SEARCH PREVIEW */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Browse support
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    What can we help you with?
                  </h2>

                  <div className="mt-6 flex min-h-14 items-center gap-3 rounded-full border border-white/[0.1] bg-black/50 px-5">
                    <Search className="text-[#96ed08]" size={20} />
                    <span className="text-sm text-white/38">
                      Choose a help category below
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: CarFront, label: "Ride support" },
                      { icon: UserCheck, label: "Driver support" },
                      { icon: PackageCheck, label: "Delivery support" },
                      { icon: Building2, label: "Business support" },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/45 p-4"
                      >
                        <div className="grid size-10 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                          <Icon size={20} />
                        </div>
                        <span className="font-semibold text-white/68">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle
                        className="mt-0.5 shrink-0 text-[#96ed08]"
                        size={19}
                      />
                      <p className="text-sm leading-6 text-white/58">
                        For immediate danger, contact local emergency services.
                        AkiGO support is not an emergency-response service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Support categories
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Start with the area that matches your question.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {supportCategories.map(({ icon: Icon, title, text, href }) => (
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
                      View help
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

        {/* RIDER + DRIVER */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article
              id="rider-help"
              className="scroll-mt-28 rounded-[1.8rem] border border-white/[0.09] bg-[#0b0b0b] p-8"
            >
              <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                <CarFront size={28} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Rider help
              </p>

              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Help before, during, and after your ride.
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {riderTopics.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                  >
                    <Check className="mt-0.5 shrink-0 text-[#96ed08]" size={16} />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/ride"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
              >
                Visit the Ride page
                <ArrowRight size={17} />
              </Link>
            </article>

            <article
              id="driver-help"
              className="scroll-mt-28 rounded-[1.8rem] border border-white/[0.09] bg-[#0b0b0b] p-8"
            >
              <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                <UserCheck size={28} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Driver help
              </p>

              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Support for onboarding and the road.
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {driverTopics.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                  >
                    <Check className="mt-0.5 shrink-0 text-[#96ed08]" size={16} />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/drive"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
              >
                Visit the Drive page
                <ArrowRight size={17} />
              </Link>
            </article>
          </div>
        </section>

        {/* DELIVERY + BUSINESS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article
              id="delivery-help"
              className="scroll-mt-28 rounded-[1.8rem] border border-white/[0.09] bg-[#0b0b0b] p-8"
            >
              <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                <PackageCheck size={28} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Delivery help
              </p>

              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Guidance from pickup to drop-off.
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {deliveryTopics.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                  >
                    <Check className="mt-0.5 shrink-0 text-[#96ed08]" size={16} />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/deliver"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
              >
                Visit the Deliver page
                <ArrowRight size={17} />
              </Link>
            </article>

            <article
              id="business-help"
              className="scroll-mt-28 rounded-[1.8rem] border border-white/[0.09] bg-[#0b0b0b] p-8"
            >
              <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                <Building2 size={28} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Business help
              </p>

              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                Support for organizations and partners.
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {businessTopics.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                  >
                    <Check className="mt-0.5 shrink-0 text-[#96ed08]" size={16} />
                    <span className="text-sm leading-6 text-white/62">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/business"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
              >
                Visit the Business page
                <ArrowRight size={17} />
              </Link>
            </article>
          </div>
        </section>

        {/* PAYMENTS */}
        <section
          id="payments-help"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Payments and account activity
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Understand payment, refund, and earnings support.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {paymentTopics.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
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

        {/* SAFETY */}
        <section
          id="safety-help"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/20 bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8 sm:p-10">
              <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[105px]" />

              <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                <div>
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <ShieldCheck size={27} />
                  </div>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Safety help
                  </p>

                  <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    Immediate danger requires emergency services.
                  </h2>

                  <p className="mt-4 max-w-lg leading-7 text-white/52">
                    AkiGO support can assist with platform reporting and
                    follow-up, but it does not replace police, fire, ambulance,
                    or other local emergency services.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {safetyGuidance.map((item) => (
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

              <Link
                href="/safety"
                className="relative mt-8 inline-flex items-center gap-2 font-bold text-[#96ed08]"
              >
                Open the Safety Center
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Common questions
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Quick answers about AkiGO.
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-3">
              {commonQuestions.map(({ question, answer }) => (
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

        {/* CONTACT CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Still need help?
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Contact AkiGO support.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Send us your question with the relevant account, trip,
                    delivery, driver, or business details. Do not include
                    passwords or complete payment-card numbers.
                  </p>
                </div>

                <a
                  href="mailto:akigo678@gmail.com?subject=AkiGO%20Support"
                  className={`${primaryButton} shrink-0`}
                >
                  Contact support
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <SupportRequestForm />
      </main>
    </MarketingLayout>
  );
}
