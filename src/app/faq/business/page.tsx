import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CircleHelp,
  ClipboardList,
  CreditCard,
  FileText,
  Headphones,
  PackageCheck,
  Route,
  ShieldCheck,
  Store,
  Users,
  WalletCards,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akigo.app";

export const metadata: Metadata = {
  title: "Business FAQ | AkiGO Help",
  description:
    "Find answers about AkiGO partnerships, business account setup, delivery requests, scheduled transportation, billing, team access, and support.",
  alternates: {
    canonical: `${siteUrl}/faq/business`,
  },
  openGraph: {
    title: "AkiGO Business FAQ",
    description:
      "Answers for organizations about partnerships, account setup, transportation, delivery, billing, team access, and support.",
    url: `${siteUrl}/faq/business`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/social/akigo-business-faq.png`,
        width: 1200,
        height: 630,
        alt: "AkiGO business frequently asked questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiGO Business FAQ",
    description:
      "Answers for organizations about partnerships, account setup, transportation, delivery, billing, team access, and support.",
    images: [`${siteUrl}/images/social/akigo-business-faq.png`],
  },
};

const categories = [
  {
    id: "partnership-process",
    icon: Building2,
    title: "Partnership process",
    text: "Interest, review, follow-up, and controlled onboarding.",
  },
  {
    id: "account-setup",
    icon: Store,
    title: "Account setup",
    text: "Organization details, locations, contacts, and permissions.",
  },
  {
    id: "delivery-requests",
    icon: PackageCheck,
    title: "Delivery requests",
    text: "Eligible items, pickup details, tracking, and completion.",
  },
  {
    id: "scheduled-transportation",
    icon: CalendarClock,
    title: "Scheduled transportation",
    text: "Advance planning, recurring requests, and availability.",
  },
  {
    id: "billing",
    icon: CreditCard,
    title: "Billing",
    text: "Payment methods, invoices, charges, and adjustments.",
  },
  {
    id: "team-access",
    icon: Users,
    title: "Team access",
    text: "Users, roles, locations, approvals, and account control.",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Support",
    text: "Account, request, billing, safety, and operational help.",
  },
];

const faqSections = [
  {
    id: "partnership-process",
    eyebrow: "Partnership process",
    title: "From business interest to review",
    icon: Building2,
    items: [
      {
        question: "How do I express interest in partnering with AkiGO?",
        answer:
          "Use the Partner page to submit your organization, market, locations, primary use case, and transportation or delivery needs.",
      },
      {
        question: "Does submitting the form create a partnership?",
        answer:
          "No. A submission records business interest only. It does not create an account, guarantee service availability, confirm pricing, or establish commercial terms.",
      },
      {
        question: "What happens after I submit partnership interest?",
        answer:
          "AkiGO may review the request for operational fit, market readiness, service eligibility, volume, support needs, and technical requirements before deciding whether to follow up.",
      },
      {
        question: "How long does partnership review take?",
        answer:
          "Review time can vary based on request completeness, market status, service complexity, internal capacity, and whether additional information is required.",
      },
      {
        question: "Can AkiGO support every organization type?",
        answer:
          "No. Support depends on the use case, eligible services, market coverage, operational readiness, legal requirements, safety standards, and available business workflows.",
      },
      {
        question: "Can I register interest before my market launches?",
        answer:
          "Yes. AkiGO may collect business interest before a market opens, but registration does not guarantee launch selection or timing.",
      },
    ],
  },
  {
    id: "account-setup",
    eyebrow: "Account setup",
    title: "Preparing a business account",
    icon: Store,
    items: [
      {
        question: "What information is needed to set up a business account?",
        answer:
          "Account setup may require legal organization details, primary contacts, business locations, billing information, approved users, service needs, and operational instructions.",
      },
      {
        question: "Can one account manage multiple locations?",
        answer:
          "AkiGO business workflows may support multiple approved locations where that capability is enabled for the organization and market.",
      },
      {
        question: "Can different locations have different contacts or instructions?",
        answer:
          "Yes, where supported. Pickup notes, delivery instructions, service contacts, and location details should be configured accurately for each location.",
      },
      {
        question: "When does a business account become active?",
        answer:
          "Activation occurs only after required review, account setup, market availability, service eligibility, and any applicable commercial or compliance steps are complete.",
      },
      {
        question: "Can account information be changed later?",
        answer:
          "Approved administrators should be able to update eligible account details, users, locations, and instructions. Certain legal, billing, or compliance changes may require review.",
      },
    ],
  },
  {
    id: "delivery-requests",
    eyebrow: "Delivery requests",
    title: "Creating and managing local deliveries",
    icon: PackageCheck,
    items: [
      {
        question: "What types of delivery requests may be supported?",
        answer:
          "Potential requests may include eligible meals, retail goods, documents, packages, and other approved local items, subject to market and item restrictions.",
      },
      {
        question: "What information is needed for a delivery request?",
        answer:
          "A request may require pickup and drop-off addresses, contact names, phone numbers, eligible item details, size or handling notes, timing, and delivery instructions.",
      },
      {
        question: "Can I track a delivery?",
        answer:
          "Where available, the business experience is designed to show request status, assignment progress, pickup, route activity, and completion updates.",
      },
      {
        question: "Can I request proof of delivery?",
        answer:
          "Proof-of-delivery options may include completion status, recipient confirmation, photo evidence, signature, or other records where enabled and appropriate.",
      },
      {
        question: "What items are prohibited?",
        answer:
          "Prohibited items may include illegal goods, hazardous materials, regulated substances, weapons, cash, certain high-value goods, and any item restricted by law or AkiGO policy.",
      },
      {
        question: "What happens if a delivery cannot be completed?",
        answer:
          "The driver or support workflow may attempt contact, document the issue, follow return or failed-delivery instructions, and update the request according to the applicable policy.",
      },
    ],
  },
  {
    id: "scheduled-transportation",
    eyebrow: "Scheduled transportation",
    title: "Planning transportation in advance",
    icon: CalendarClock,
    items: [
      {
        question: "Can a business schedule transportation in advance?",
        answer:
          "Scheduled transportation may be available for eligible markets, service types, account configurations, and request details.",
      },
      {
        question: "Can we create recurring requests?",
        answer:
          "Recurring transportation or delivery may be supported for approved use cases where the account and market have the required scheduling workflow.",
      },
      {
        question: "How far in advance can requests be scheduled?",
        answer:
          "The scheduling window depends on the service, market, account configuration, and operational capacity shown in the business experience.",
      },
      {
        question: "Does scheduling guarantee a driver?",
        answer:
          "No. Scheduling records the request in advance but does not guarantee assignment. Fulfillment depends on eligibility, driver availability, coverage, and operating conditions.",
      },
      {
        question: "Can a scheduled request be changed or cancelled?",
        answer:
          "Eligible changes and cancellation options depend on the request status, assignment progress, timing, and applicable business policy.",
      },
    ],
  },
  {
    id: "billing",
    eyebrow: "Billing",
    title: "Charges, payment methods, and account records",
    icon: CreditCard,
    items: [
      {
        question: "What business payment methods may be supported?",
        answer:
          "Supported methods may include eligible cards, approved account billing, wallet balance, or other business payment arrangements where enabled.",
      },
      {
        question: "When is a business request charged?",
        answer:
          "Payment timing may depend on the request type and account setup. A charge may be authorized before fulfillment and completed or adjusted after the request is finalized.",
      },
      {
        question: "Can we receive invoices or billing records?",
        answer:
          "Business accounts may provide transaction records, receipts, statements, or invoices where that billing workflow is enabled.",
      },
      {
        question: "Can one account use multiple payment methods?",
        answer:
          "Multiple approved payment methods may be supported depending on the account configuration, user role, and billing policy.",
      },
      {
        question: "How are billing disputes handled?",
        answer:
          "Use the business support workflow and provide the request reference, charge details, date, and explanation. AkiGO will review the available records and applicable policy.",
      },
      {
        question: "Can charges be adjusted after completion?",
        answer:
          "Adjustments may occur for waiting time, route changes, approved fees, cancellations, corrections, refunds, or other request-specific review.",
      },
    ],
  },
  {
    id: "team-access",
    eyebrow: "Team access",
    title: "Managing users, roles, and locations",
    icon: Users,
    items: [
      {
        question: "Can multiple employees use one business account?",
        answer:
          "Yes, where team access is enabled. Each approved user should have an individual login and assigned role rather than sharing credentials.",
      },
      {
        question: "What roles may be available?",
        answer:
          "Possible roles may include account administrator, requester, dispatcher, billing user, viewer, or support contact, depending on the business configuration.",
      },
      {
        question: "Can access be limited by location or function?",
        answer:
          "Role and location restrictions may be supported so users can access only the requests, locations, billing information, or administrative tools they need.",
      },
      {
        question: "Who can add or remove users?",
        answer:
          "Approved account administrators should manage team access, subject to any verification or security requirements.",
      },
      {
        question: "What should we do when an employee leaves?",
        answer:
          "An administrator should promptly remove or disable access, review active sessions, and update any shared operational or billing contacts.",
      },
      {
        question: "Should employees share passwords?",
        answer:
          "No. Shared passwords reduce accountability and security. Each approved user should have a separate account with the correct role.",
      },
    ],
  },
  {
    id: "support",
    eyebrow: "Support",
    title: "Getting help with business activity",
    icon: Headphones,
    items: [
      {
        question: "How do I contact business support?",
        answer:
          "Use the Help Center, Contact page, or business support workflow when available. Choose the category that best matches the account, request, billing, technical, safety, or partnership issue.",
      },
      {
        question: "What information should I include?",
        answer:
          "Include the organization name, account email, request or charge reference, date, location, screenshots where appropriate, and a clear description of the problem.",
      },
      {
        question: "How do I report a safety concern?",
        answer:
          "Use the safety or incident workflow and provide accurate request details. Call local emergency services immediately when there is immediate danger.",
      },
      {
        question: "What if a team member cannot sign in?",
        answer:
          "An account administrator should confirm the user’s access and role. Use account support for unresolved login, verification, or permission problems.",
      },
      {
        question: "Is business support available 24/7?",
        answer:
          "AkiGO should not claim continuous support coverage unless that service is operational. Available channels and response expectations will be shown in the applicable business experience.",
      },
    ],
  },
];

export default function BusinessFaqPage() {
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
                Business FAQ
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Answers for moving
                <br />
                <span className="text-[#96ed08]">business forward.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-lg leading-8 text-white/60">
                Find guidance about partnerships, account setup, delivery
                requests, scheduled transportation, billing, team access, and
                business support.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/business" className={primaryButton}>
                  Explore Business Solutions
                  <ArrowRight size={18} />
                </Link>

                <Link href="/partners" className={secondaryButton}>
                  Partner with AkiGO
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
                    Partnership availability, account features, billing methods,
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
                  Contact AkiGO business support
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Use the contact workflow for partnership, account, request,
                  billing, team-access, safety, or website questions.
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
