import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  CalendarClock,
  CircleHelp,
  CreditCard,
  LifeBuoy,
  MapPinned,
  ReceiptText,
  Route,
  ShieldCheck,
  Smartphone,
  WalletCards,
  XCircle,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akigo.app";

export const metadata: Metadata = {
  title: "Rider FAQ | AkiGO Help",
  description:
    "Find answers about booking rides, pricing, payments, cancellations, safety, accessibility, and rider support with AkiGO.",
  alternates: {
    canonical: `${siteUrl}/faq/riders`,
  },
  openGraph: {
    title: "AkiGO Rider FAQ",
    description:
      "Answers for riders about booking, pricing, payments, cancellations, safety, accessibility, and support.",
    url: `${siteUrl}/faq/riders`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/social/akigo-rider-faq.png`,
        width: 1200,
        height: 630,
        alt: "AkiGO rider frequently asked questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiGO Rider FAQ",
    description:
      "Answers for riders about booking, pricing, payments, cancellations, safety, accessibility, and support.",
    images: [`${siteUrl}/images/social/akigo-rider-faq.png`],
  },
};

const categories = [
  {
    id: "booking",
    icon: Smartphone,
    title: "Booking",
    text: "Requesting, scheduling, pickup details, and ride progress.",
  },
  {
    id: "pricing",
    icon: ReceiptText,
    title: "Pricing",
    text: "Fare estimates, ride options, and market-dependent pricing.",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payments",
    text: "Cards, wallet balance, payment authorization, and refunds.",
  },
  {
    id: "cancellations",
    icon: XCircle,
    title: "Cancellations",
    text: "Trip cancellation timing, fees, and refund review.",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety",
    text: "Trip sharing, emergency guidance, and incident reporting.",
  },
  {
    id: "accessibility",
    icon: Accessibility,
    title: "Accessibility",
    text: "Ride needs, service animals, mobility devices, and feedback.",
  },
  {
    id: "support",
    icon: LifeBuoy,
    title: "Support",
    text: "Account, trip, payment, safety, and website help.",
  },
];

const faqSections = [
  {
    id: "booking",
    eyebrow: "Booking",
    title: "Requesting and managing a ride",
    icon: Smartphone,
    items: [
      {
        question: "How do I request a ride?",
        answer:
          "When rider access is available in your market, open the AkiGO rider experience, enter your pickup and destination, review the available ride options, choose a payment method, and confirm the request.",
      },
      {
        question: "Can I book a ride from the website?",
        answer:
          "The marketing website does not currently provide live web booking. Ride requests are intended to be handled through the AkiGO rider experience when available.",
      },
      {
        question: "Can I schedule a ride in advance?",
        answer:
          "Scheduled ride availability may depend on the market, service type, pickup area, and driver availability. The rider experience will show whether scheduling is available for the requested trip.",
      },
      {
        question: "Can I change my pickup or destination after booking?",
        answer:
          "Available trip changes depend on the ride status and app workflow. If an edit option is not available, the rider may need to cancel and create a new request.",
      },
      {
        question: "How will I know when a driver is assigned?",
        answer:
          "The rider experience is designed to show driver assignment, pickup progress, estimated arrival information, and trip-status updates when a driver has accepted the request.",
      },
      {
        question: "Why might a ride request take longer than expected?",
        answer:
          "Wait time can be affected by driver availability, distance, traffic, weather, special ride requirements, market coverage, and controlled-rollout limits.",
      },
    ],
  },
  {
    id: "pricing",
    eyebrow: "Pricing",
    title: "Understanding ride estimates and charges",
    icon: ReceiptText,
    items: [
      {
        question: "Will I see the price before confirming?",
        answer:
          "The rider experience is intended to present an estimated or upfront price before confirmation when the required trip information is available.",
      },
      {
        question: "Why can prices change?",
        answer:
          "Pricing may reflect distance, estimated time, ride type, demand, traffic, weather, airport or event conditions, scheduled service, and other market factors.",
      },
      {
        question: "Does the website show live ride prices?",
        answer:
          "No. The marketing website does not provide live fare quotes. Current ride pricing is shown inside the rider experience when booking is available.",
      },
      {
        question: "Are tolls, airport fees, or other charges included?",
        answer:
          "Applicable tolls, airport charges, taxes, regulatory fees, waiting charges, or other trip-related amounts may be included or added according to the booking details and applicable policy.",
      },
      {
        question: "What ride options may be available?",
        answer:
          "Available ride types can vary by market and vehicle supply. The rider experience will show the options that are actually available for the requested trip.",
      },
    ],
  },
  {
    id: "payments",
    eyebrow: "Payments",
    title: "Payment methods, wallet activity, and refunds",
    icon: WalletCards,
    items: [
      {
        question: "What payment methods can I use?",
        answer:
          "Supported methods may include eligible payment cards, AkiGO wallet balance, and device-based payment options where enabled.",
      },
      {
        question: "When is my payment method charged?",
        answer:
          "Payment timing can depend on the payment method and trip workflow. A payment may be authorized before dispatch and completed or adjusted after the trip according to the final eligible charge.",
      },
      {
        question: "Can I use wallet balance?",
        answer:
          "Eligible riders may use available AkiGO wallet balance when the wallet option is enabled and the balance is sufficient for the requested transaction.",
      },
      {
        question: "What happens if my payment fails?",
        answer:
          "The rider experience may ask for another payment method or prevent confirmation until a valid payment method is available. A failed payment can also require follow-up before future requests.",
      },
      {
        question: "How are refunds handled?",
        answer:
          "Refund eligibility depends on the trip status, cancellation timing, payment method, final charge, and applicable policy. Approved refunds may take additional time to appear depending on the payment provider.",
      },
      {
        question: "Where can I review payment activity?",
        answer:
          "Eligible wallet, payment, refund, and trip-charge activity is intended to appear in the rider account or wallet activity area.",
      },
    ],
  },
  {
    id: "cancellations",
    eyebrow: "Cancellations",
    title: "Changing plans and refund review",
    icon: XCircle,
    items: [
      {
        question: "Can I cancel a ride?",
        answer:
          "A rider may cancel through the available trip controls before or during eligible trip stages. The app should show the applicable action and any relevant warning before confirmation.",
      },
      {
        question: "Will I be charged a cancellation fee?",
        answer:
          "A cancellation fee may apply depending on when the ride is cancelled, whether a driver has been assigned, the driver’s progress, waiting time, and the applicable policy.",
      },
      {
        question: "What if I cancel before a driver is assigned?",
        answer:
          "Cancellation before driver assignment may be eligible for a full release or refund, subject to the payment status and applicable policy.",
      },
      {
        question: "What if the driver is already on the way?",
        answer:
          "Cancellation after assignment may be reviewed differently because the driver may already be traveling toward the pickup.",
      },
      {
        question: "What if the driver cancels?",
        answer:
          "The rider experience may return the request to dispatch, attempt reassignment, or end the request depending on the trip state and available coverage.",
      },
    ],
  },
  {
    id: "safety",
    eyebrow: "Safety",
    title: "Safety tools and incident guidance",
    icon: ShieldCheck,
    items: [
      {
        question: "What should I do in an emergency?",
        answer:
          "Call local emergency services immediately when there is immediate danger. Use AkiGO safety or support tools afterward when it is safe to do so.",
      },
      {
        question: "Can I share my trip?",
        answer:
          "The rider experience may provide trip-sharing tools so selected contacts can receive relevant trip information where the feature is available.",
      },
      {
        question: "How do I report a safety concern?",
        answer:
          "Use the in-app safety or support workflow and provide accurate trip details, messages, photos, and other relevant information. Do not use a standard support form for an active emergency.",
      },
      {
        question: "Are drivers reviewed before approval?",
        answer:
          "Driver onboarding may include identity, license, vehicle, insurance, driving-record, background, and market-specific review steps where applicable.",
      },
      {
        question: "What information should I verify before entering the vehicle?",
        answer:
          "Compare the driver, vehicle, plate, and trip information shown in the rider experience with the arriving vehicle before entering.",
      },
    ],
  },
  {
    id: "accessibility",
    eyebrow: "Accessibility",
    title: "Accessible ride needs and feedback",
    icon: Accessibility,
    items: [
      {
        question: "Can I request accessibility-related assistance?",
        answer:
          "Available assistance depends on the market, vehicle supply, service category, and the details provided during booking. Riders should add accurate requirements before confirming when the option is available.",
      },
      {
        question: "Can I travel with a service animal?",
        answer:
          "Service-animal handling must follow applicable law and AkiGO policy. Riders should provide relevant information through the booking or support workflow when needed.",
      },
      {
        question: "Can I bring a wheelchair or mobility device?",
        answer:
          "Vehicle compatibility depends on the size and type of mobility device, available cargo space, and whether an accessible vehicle option is available in the market.",
      },
      {
        question: "How do I report an accessibility problem?",
        answer:
          "Use the accessibility feedback or contact workflow and include the page, feature, trip, device, and assistive technology details needed to understand the issue.",
      },
      {
        question: "Does AkiGO guarantee accessible vehicle availability?",
        answer:
          "No. Availability can vary by market, time, vehicle supply, and service type. The rider experience should show only options that are currently available.",
      },
    ],
  },
  {
    id: "support",
    eyebrow: "Support",
    title: "Getting help with your rider experience",
    icon: LifeBuoy,
    items: [
      {
        question: "How do I contact rider support?",
        answer:
          "Use the AkiGO Help Center, Contact page, or in-app support workflow when available. Choose the inquiry type that best matches the account, trip, payment, or safety issue.",
      },
      {
        question: "What information should I include?",
        answer:
          "Include the rider account email, relevant trip or payment reference, date, approximate time, pickup or destination details, and a clear description of the issue. Do not send passwords or complete payment-card numbers.",
      },
      {
        question: "Where can I get help with a refund?",
        answer:
          "Use the payment or trip-support category and include the relevant transaction or trip information so the request can be reviewed.",
      },
      {
        question: "What if I cannot sign in?",
        answer:
          "Use the account-support workflow and provide the email or phone number associated with the rider account. Do not create multiple accounts to work around an access problem.",
      },
      {
        question: "Is support available 24/7?",
        answer:
          "AkiGO should not claim continuous support coverage unless that service is operational. Available support channels and response expectations will be shown in the applicable experience.",
      },
    ],
  },
];

export default function RiderFaqPage() {
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
                Rider FAQ
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Answers for every
                <br />
                <span className="text-[#96ed08]">part of your ride.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-lg leading-8 text-white/60">
                Find guidance about booking, pricing, payments, cancellations,
                safety, accessibility, and rider support.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/ride" className={primaryButton}>
                  Explore the Rider page
                  <ArrowRight size={18} />
                </Link>

                <Link href="/help" className={secondaryButton}>
                  Visit Help Center
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
                    Availability, pricing, ride types, payment options, and support
                    workflows may vary by market and release stage.
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
                  Contact AkiGO support
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Use the contact workflow for account, trip, payment,
                  accessibility, safety, or website questions.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/contact" className={primaryButton}>
                    Contact AkiGO
                    <ArrowRight size={18} />
                  </Link>

                  <Link href="/safety-center" className={secondaryButton}>
                    Safety Center
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
