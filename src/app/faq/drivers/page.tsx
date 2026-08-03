import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BellRing,
  CarFront,
  CircleHelp,
  Clock3,
  FileCheck2,
  Headphones,
  MapPinned,
  Navigation,
  ShieldCheck,
  Smartphone,
  WalletCards,
  Zap,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akigo.app";

export const metadata: Metadata = {
  title: "Driver FAQ | AkiGO Help",
  description:
    "Find answers about driver registration, approval, going online, trip offers, earnings, payouts, safety, and support with AkiGO.",
  alternates: {
    canonical: `${siteUrl}/faq/drivers`,
  },
  openGraph: {
    title: "AkiGO Driver FAQ",
    description:
      "Answers for drivers about registration, approval, trip offers, earnings, payouts, safety, and support.",
    url: `${siteUrl}/faq/drivers`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/social/akigo-driver-faq.png`,
        width: 1200,
        height: 630,
        alt: "AkiGO driver frequently asked questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiGO Driver FAQ",
    description:
      "Answers for drivers about registration, approval, trip offers, earnings, payouts, safety, and support.",
    images: [`${siteUrl}/images/social/akigo-driver-faq.png`],
  },
};

const categories = [
  {
    id: "registration",
    icon: Smartphone,
    title: "Registration",
    text: "Creating an account and submitting driver information.",
  },
  {
    id: "approval",
    icon: BadgeCheck,
    title: "Approval",
    text: "Documents, screening, review, and account activation.",
  },
  {
    id: "going-online",
    icon: Zap,
    title: "Going online",
    text: "Availability, account readiness, and receiving opportunities.",
  },
  {
    id: "trip-offers",
    icon: BellRing,
    title: "Trip offers",
    text: "Offer details, accepting, declining, and expiration.",
  },
  {
    id: "earnings",
    icon: WalletCards,
    title: "Earnings",
    text: "Driver pay, completed trips, incentives, and adjustments.",
  },
  {
    id: "payouts",
    icon: Banknote,
    title: "Payouts",
    text: "Payout methods, timing, status, and failed transfers.",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety",
    text: "Incident reporting, emergency guidance, and trip safety.",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Support",
    text: "Account, trip, document, earnings, payout, and safety help.",
  },
];

const faqSections = [
  {
    id: "registration",
    eyebrow: "Registration",
    title: "Creating and preparing your driver account",
    icon: Smartphone,
    items: [
      {
        question: "How do I register to drive with AkiGO?",
        answer:
          "Start from the AkiGO Driver page or driver experience, create an account, provide accurate identity and contact information, and complete the required onboarding steps for your selected market.",
      },
      {
        question: "What information do I need to provide?",
        answer:
          "Driver onboarding may require identity details, contact information, driver-license information, vehicle details, insurance, registration, profile verification, and market-specific records.",
      },
      {
        question: "Can I register before AkiGO launches in my market?",
        answer:
          "AkiGO may collect driver interest before onboarding opens. Registering interest does not guarantee approval, activation, or a launch date.",
      },
      {
        question: "Can I use someone else’s documents or vehicle information?",
        answer:
          "No. Information and documents must be accurate, current, readable, and associated with the applicant or eligible vehicle as required.",
      },
      {
        question: "Where can I review driver requirements?",
        answer:
          "Visit the Driver Requirements page for general eligibility, vehicle, document, screening, and market-dependent information.",
      },
    ],
  },
  {
    id: "approval",
    eyebrow: "Approval",
    title: "Documents, screening, and activation",
    icon: BadgeCheck,
    items: [
      {
        question: "What happens after I submit my application?",
        answer:
          "AkiGO reviews the submitted account, identity, license, vehicle, insurance, and other required information. Additional screening or clarification may be requested.",
      },
      {
        question: "How long does approval take?",
        answer:
          "Review time can vary based on document completeness, screening providers, market requirements, applicant volume, and whether additional information is needed.",
      },
      {
        question: "Does meeting the requirements guarantee approval?",
        answer:
          "No. Meeting general requirements does not guarantee approval. Final eligibility depends on completed review, applicable standards, market access, and account status.",
      },
      {
        question: "Why is my application still pending?",
        answer:
          "An application may remain pending because a document is missing, expired, unreadable, under review, inconsistent with other information, or because market onboarding is not yet active.",
      },
      {
        question: "Can my approval be reviewed again later?",
        answer:
          "Yes. AkiGO may review eligibility again when documents expire, account information changes, safety concerns arise, or market requirements are updated.",
      },
    ],
  },
  {
    id: "going-online",
    eyebrow: "Going online",
    title: "Availability and driver status",
    icon: Zap,
    items: [
      {
        question: "When can I go online?",
        answer:
          "A driver can go online only after the account is approved, required documents are current, the selected market is active, and the driver is eligible for the available service type.",
      },
      {
        question: "Why can’t I go online?",
        answer:
          "Possible reasons include pending approval, expired documents, an account restriction, an active trip, unsupported market access, connectivity issues, or a temporary system problem.",
      },
      {
        question: "Can I choose when I drive?",
        answer:
          "The driver experience is designed to let eligible drivers control when they go online, subject to market access, account status, and operational restrictions.",
      },
      {
        question: "Can I go online in another city or state?",
        answer:
          "Market access may depend on local requirements, approved documents, vehicle eligibility, insurance, permits, and account configuration. Approval in one market does not automatically authorize another.",
      },
      {
        question: "What happens if I lose internet or location access?",
        answer:
          "The driver experience may show a connection warning, pause updates, or prevent online activity until reliable network and location access are restored.",
      },
    ],
  },
  {
    id: "trip-offers",
    eyebrow: "Trip offers",
    title: "Receiving, reviewing, and responding to offers",
    icon: BellRing,
    items: [
      {
        question: "How do trip offers work?",
        answer:
          "When an eligible trip is assigned or offered, the driver experience is designed to show the available pickup, destination, route, driver-pay, timing, and request details before acceptance.",
      },
      {
        question: "Do all online drivers receive every offer?",
        answer:
          "No. Offers may depend on admin dispatch, distance, service eligibility, vehicle type, rider requirements, driver status, market rules, and other operational criteria.",
      },
      {
        question: "Can I decline a trip offer?",
        answer:
          "Eligible offers can generally be accepted or declined within the time shown. Repeated behavior may still be subject to applicable driver standards and account policy.",
      },
      {
        question: "What happens if the offer expires?",
        answer:
          "An expired offer is no longer available to accept. It may be reassigned, cancelled, or returned to dispatch depending on the trip workflow.",
      },
      {
        question: "Can I accept the same trip twice?",
        answer:
          "No. The platform should protect against duplicate acceptance and confirm only one eligible assignment.",
      },
      {
        question: "Why did a trip disappear?",
        answer:
          "A trip may disappear because it expired, was reassigned, was cancelled, no longer matched eligibility, or the account lost online or connection status.",
      },
    ],
  },
  {
    id: "earnings",
    eyebrow: "Earnings",
    title: "Driver pay and completed-trip activity",
    icon: WalletCards,
    items: [
      {
        question: "What earnings information will I see?",
        answer:
          "The driver experience is designed to show driver pay, completed-trip activity, incentives, adjustments, and payout progress without displaying rider fare, platform margin, or internal commission information.",
      },
      {
        question: "Will I see driver pay before accepting?",
        answer:
          "AkiGO is designed to present driver-pay information with eligible trip offers before acceptance.",
      },
      {
        question: "When is trip pay added to earnings?",
        answer:
          "Driver pay is generally recorded after the trip or delivery reaches an eligible completed state and required payment or review steps are satisfied.",
      },
      {
        question: "Why was my final pay adjusted?",
        answer:
          "Adjustments may result from approved waiting time, cancellation handling, incentives, route changes, corrections, disputes, or other trip-specific review.",
      },
      {
        question: "Where can I review completed trips?",
        answer:
          "Completed-trip and earnings activity should appear in the driver earnings, trip history, or wallet sections when available.",
      },
    ],
  },
  {
    id: "payouts",
    eyebrow: "Payouts",
    title: "Receiving your eligible driver balance",
    icon: Banknote,
    items: [
      {
        question: "What payout methods may be available?",
        answer:
          "Supported methods may include an eligible bank account and an eligible debit card for faster payout where available.",
      },
      {
        question: "How long do payouts take?",
        answer:
          "Timing depends on the payout method, account verification, banking network, processing schedule, weekends, holidays, reviews, and provider availability.",
      },
      {
        question: "Why is my payout pending?",
        answer:
          "A payout may remain pending because it is processing, under review, waiting for bank settlement, affected by a weekend or holiday, or blocked by an account or payment-method issue.",
      },
      {
        question: "Why did my payout fail?",
        answer:
          "A payout can fail because of invalid bank or debit-card information, an unsupported account, provider rejection, verification issues, balance restrictions, or a temporary processing problem.",
      },
      {
        question: "Can I cash out instantly?",
        answer:
          "Instant or faster payout may be available only for eligible drivers, supported debit cards, qualifying balances, and active markets. Fees or limits may apply where disclosed.",
      },
      {
        question: "What should I do if a payout is missing?",
        answer:
          "Check the payout status, payment method, account details, processing date, and bank activity. Contact driver support with the payout reference if additional review is needed.",
      },
    ],
  },
  {
    id: "safety",
    eyebrow: "Safety",
    title: "Safety tools and incident reporting",
    icon: ShieldCheck,
    items: [
      {
        question: "What should I do in an emergency?",
        answer:
          "Call local emergency services immediately when there is immediate danger. Use AkiGO safety or support tools afterward when it is safe to do so.",
      },
      {
        question: "How do I report a rider or trip concern?",
        answer:
          "Use the in-app safety or support workflow and include accurate trip details, messages, photos, and any other relevant information.",
      },
      {
        question: "Can I end or refuse an unsafe trip?",
        answer:
          "Drivers should prioritize immediate safety and follow applicable law and AkiGO safety guidance. Use the appropriate trip, cancellation, or support workflow and move to a safe location when possible.",
      },
      {
        question: "What safety tools may be available?",
        answer:
          "Available tools may include trip sharing, emergency workflows, rider communication, incident reporting, unsafe-pickup reporting, trusted contacts, and support access.",
      },
      {
        question: "How should I handle a lost item?",
        answer:
          "Use the approved lost-item or support workflow. Do not share unnecessary personal contact information or arrange unsafe handoffs.",
      },
    ],
  },
  {
    id: "support",
    eyebrow: "Support",
    title: "Getting help with your driver account",
    icon: Headphones,
    items: [
      {
        question: "How do I contact driver support?",
        answer:
          "Use the Help Center, Contact page, or in-app driver support workflow when available. Choose the category that best matches the account, trip, document, earnings, payout, or safety issue.",
      },
      {
        question: "What information should I include?",
        answer:
          "Include the driver account email, relevant trip or payout reference, date, approximate time, screenshots where appropriate, and a clear description of the problem. Do not send passwords or complete payment-card numbers.",
      },
      {
        question: "How do I update an expired document?",
        answer:
          "Use the driver document or account workflow to upload the current replacement. The account may remain restricted until the document is reviewed and accepted.",
      },
      {
        question: "What if I cannot sign in?",
        answer:
          "Use the account-support workflow and provide the email or phone number associated with the driver account. Do not create duplicate accounts to work around an access problem.",
      },
      {
        question: "Is support available 24/7?",
        answer:
          "AkiGO should not claim continuous support coverage unless that service is operational. Available channels and response expectations will be shown in the applicable experience.",
      },
    ],
  },
];

export default function DriverFaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[650px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Driver FAQ
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Answers for every
                <br />
                <span className="text-[#96ed08]">step of driving.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-lg leading-8 text-white/60">
                Find guidance about registration, approval, going online, trip
                offers, earnings, payouts, safety, and driver support.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/drive" className={primaryButton}>
                  Explore the Driver page
                  <ArrowRight size={18} />
                </Link>

                <Link href="/driver-requirements" className={secondaryButton}>
                  Driver Requirements
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
                      Quick guidance
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em]">
                      Start with the right topic
                    </h2>
                  </div>

                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <CircleHelp size={27} />
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {categories.map(({ id, icon: Icon, title }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="flex min-h-14 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm font-bold text-white/68 transition hover:border-[#96ed08]/30 hover:bg-[#96ed08]/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                    >
                      <Icon size={19} className="text-[#96ed08]" />
                      {title}
                    </a>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/[0.045] p-5">
                  <p className="text-sm leading-6 text-white/52">
                    Onboarding, market access, trip availability, payout options,
                    and support workflows may vary by market and release stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {categories.slice(0, 4).map(({ id, icon: Icon, title, text }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition hover:-translate-y-1 hover:border-[#96ed08]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  <Icon className="text-[#96ed08]" size={28} />
                  <h2 className="font-display mt-6 text-2xl font-bold">{title}</h2>
                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {faqSections.map(({ id, eyebrow, title, icon: Icon, items }) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
          >
            <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                  <Icon size={24} />
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  {eyebrow}
                </p>

                <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  {title}
                </h2>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-[1.4rem] border border-white/[0.09] bg-[#0b0b0b] px-6 py-5 open:border-[#96ed08]/25"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/[0.10] text-[#96ed08] transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-3xl border-t border-white/[0.07] pt-4 leading-7 text-white/52">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/20 bg-[#0b0b0b] px-8 py-10 text-center shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Still need help?
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Contact AkiGO driver support
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Use the contact workflow for account, trip, document, earnings,
                  payout, safety, or website questions.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/contact" className={primaryButton}>
                    Contact AkiGO
                    <ArrowRight size={18} />
                  </Link>

                  <Link href="/help" className={secondaryButton}>
                    Visit Help Center
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
