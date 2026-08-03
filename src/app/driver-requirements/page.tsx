import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CarFront,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Gauge,
  IdCard,
  MapPinned,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Wrench,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";
import { DriverInterestForm } from "./DriverInterestForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://akigo.app";

export const metadata: Metadata = {
  title: "Driver Requirements | Drive with AkiGO",
  description:
    "Review general AkiGO driver eligibility, vehicle, document, background-check, and approval requirements. Requirements may vary by market and service type.",
  alternates: {
    canonical: `${siteUrl}/driver-requirements`,
  },
  openGraph: {
    title: "AkiGO Driver Requirements",
    description:
      "Learn about general driver eligibility, vehicle standards, documents, screening, and approval.",
    url: `${siteUrl}/driver-requirements`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/social/akigo-driver-requirements.png`,
        width: 1200,
        height: 630,
        alt: "AkiGO driver eligibility and vehicle requirements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AkiGO Driver Requirements",
    description:
      "Review general eligibility, vehicle, document, screening, and approval requirements.",
    images: [`${siteUrl}/images/social/akigo-driver-requirements.png`],
  },
};

const eligibilityItems = [
  {
    icon: UserCheck,
    title: "Minimum age",
    text: "Drivers must meet the minimum age required by AkiGO and any applicable local or service-specific rules.",
  },
  {
    icon: IdCard,
    title: "Valid driver license",
    text: "A current, valid driver license is required for the jurisdiction in which the driver is applying.",
  },
  {
    icon: CalendarCheck,
    title: "Driving experience",
    text: "AkiGO may require a minimum period of licensed driving experience depending on age, market, or service type.",
  },
  {
    icon: Smartphone,
    title: "Compatible device",
    text: "Drivers need a compatible smartphone, reliable mobile data, location services, and notification access.",
  },
];

const vehicleRequirements = [
  {
    icon: CarFront,
    title: "Eligible vehicle",
    text: "The vehicle must match the service category selected during onboarding and any market-specific operating requirements.",
  },
  {
    icon: FileCheck2,
    title: "Current registration",
    text: "Vehicle registration must be valid, readable, and associated with an eligible vehicle.",
  },
  {
    icon: ShieldCheck,
    title: "Required insurance",
    text: "Drivers must provide active insurance that satisfies applicable personal, platform, and local requirements.",
  },
  {
    icon: Wrench,
    title: "Safe operating condition",
    text: "The vehicle must be clean, maintained, free from major safety defects, and suitable for passenger or delivery service.",
  },
];

const vehicleStandards = [
  "Four working doors when required for passenger service",
  "Working seat belts for every available passenger seat",
  "Functional lights, signals, brakes, tires, and safety equipment",
  "No major body damage that affects safe operation",
  "Clean interior and cargo areas",
  "No unresolved safety recalls where prohibited",
  "Valid inspection when required by the market",
  "Vehicle age and class that match the selected service level",
];

const documents = [
  {
    icon: IdCard,
    title: "Driver license",
    text: "A clear image of the front and back when required.",
  },
  {
    icon: FileText,
    title: "Vehicle registration",
    text: "Current registration showing the eligible vehicle information.",
  },
  {
    icon: ShieldCheck,
    title: "Proof of insurance",
    text: "An active policy showing the required driver or vehicle coverage.",
  },
  {
    icon: CarFront,
    title: "Vehicle information",
    text: "Make, model, year, color, plate, VIN, and service-category details.",
  },
  {
    icon: BadgeCheck,
    title: "Profile verification",
    text: "Identity, profile photo, contact information, and account verification.",
  },
  {
    icon: ClipboardCheck,
    title: "Market-specific records",
    text: "Inspection, permit, tax, medical, accessibility, or other records only where applicable.",
  },
];

const screeningSteps = [
  {
    number: "01",
    title: "Identity review",
    text: "AkiGO verifies account ownership, identity information, and required profile details.",
  },
  {
    number: "02",
    title: "Driving-record review",
    text: "Driving history may be reviewed for license status, serious violations, and eligibility under applicable standards.",
  },
  {
    number: "03",
    title: "Background screening",
    text: "A criminal background check may be required where permitted and applicable to the service.",
  },
  {
    number: "04",
    title: "Ongoing eligibility",
    text: "Approval may be reviewed again if documents expire, safety concerns arise, or market requirements change.",
  },
];

const approvalSteps = [
  {
    number: "01",
    title: "Create a driver account",
    text: "Provide accurate contact, identity, and account information.",
  },
  {
    number: "02",
    title: "Submit documents",
    text: "Upload the required driver, vehicle, insurance, and market-specific records.",
  },
  {
    number: "03",
    title: "Complete screening",
    text: "Finish any identity, driving-record, background, inspection, or compliance review.",
  },
  {
    number: "04",
    title: "Receive a decision",
    text: "AkiGO reviews the completed application and communicates approval, additional requirements, or ineligibility.",
  },
  {
    number: "05",
    title: "Activate when available",
    text: "Approved drivers can go online only after their market, service type, and account access are active.",
  },
];

const disclosures = [
  "Requirements may vary by state, city, county, airport, or service category.",
  "Meeting the general requirements does not guarantee approval.",
  "Vehicle age, inspection, insurance, permit, and screening rules may change by market.",
  "Some services may require additional vehicle capacity, accessibility, equipment, or training.",
  "AkiGO may pause onboarding when driver supply or market access is limited.",
  "Expired, unreadable, altered, or inconsistent documents may delay review.",
];

export default function DriverRequirementsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AkiGO Driver Requirements",
    url: `${siteUrl}/driver-requirements`,
    description:
      "General eligibility, vehicle, document, screening, and approval information for prospective AkiGO drivers.",
    isPartOf: {
      "@type": "WebSite",
      name: "AkiGO",
      url: siteUrl,
    },
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

          <div className="site-container relative z-10 grid min-h-[680px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Driver requirements
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.15rem]">
                What you need to
                <br />
                <span className="text-[#96ed08]">drive with AkiGO.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-lg leading-8 text-white/60">
                Review the general eligibility, vehicle, document, screening, and
                approval requirements for prospective AkiGO drivers.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="#driver-interest" className={primaryButton}>
                  Register Driver Interest
                  <ArrowRight size={18} />
                </a>

                <Link href="/drive" className={secondaryButton}>
                  Start with the Driver page
                  <ArrowRight size={18} />
                </Link>

                <Link href="/launch-markets" className={secondaryButton}>
                  Check launch markets
                  <ArrowRight size={18} />
                </Link>
              </div>

              <p className="mt-6 max-w-[620px] text-sm leading-6 text-white/42">
                Requirements and onboarding availability vary by market and
                service type. Meeting the general standards does not guarantee
                approval.
              </p>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-10 rounded-full bg-[#96ed08]/[0.08] blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0a0a0a] p-7 shadow-[0_30px_90px_rgba(0,0,0,.45)] sm:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      General checklist
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.04em]">
                      Driver readiness starts here
                    </h2>
                  </div>

                  <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <ClipboardCheck size={27} />
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "Eligible driver account",
                    "Qualified vehicle",
                    "Current required documents",
                    "Completed screening and review",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid size-6 place-items-center rounded-full border border-[#96ed08]/45 text-[#96ed08]">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm font-medium text-white/68">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/[0.045] p-5">
                  <div className="flex items-start gap-3">
                    <MapPinned
                      className="mt-0.5 shrink-0 text-[#96ed08]"
                      size={20}
                    />
                    <p className="text-sm leading-6 text-white/52">
                      Final requirements are shown during onboarding for the
                      driver’s selected market, vehicle, and requested service
                      categories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Driver eligibility
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                General applicant requirements
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {eligibilityItems.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display mt-7 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Vehicle requirements
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                A safe, eligible, and properly documented vehicle
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                Vehicle eligibility depends on the market and the service level
                requested. Passenger, delivery, premium, accessible, and
                high-capacity categories may have different standards.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {vehicleRequirements.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <Icon className="text-[#96ed08]" size={27} />
                  <h3 className="font-display mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="site-container mt-12">
            <div className="rounded-[1.75rem] border border-white/[0.09] bg-[#0b0b0b] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <Gauge className="text-[#96ed08]" size={25} />
                <h3 className="font-display text-2xl font-bold">
                  General vehicle condition standards
                </h3>
              </div>

              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {vehicleStandards.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/30 p-4"
                  >
                    <Check className="mt-1 shrink-0 text-[#96ed08]" size={17} />
                    <p className="leading-7 text-white/54">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Required documents
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Documents used during review
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Documents must be current, complete, readable, and consistent with
                the applicant and vehicle information.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {documents.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <Icon className="text-[#96ed08]" size={28} />
                  <h3 className="font-display mt-7 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Background and driving checks
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Screening supports platform safety
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                Screening criteria and lookback periods may differ by law,
                provider, market, and service type. AkiGO will provide required
                notices and authorization steps during onboarding.
              </p>
            </div>

            <div className="grid gap-4">
              {screeningSteps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-4 rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-6 sm:grid-cols-[72px_1fr] sm:items-start"
                >
                  <div className="font-display text-3xl font-extrabold text-[#96ed08]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 leading-7 text-white/50">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Approval process
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                From application to activation
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {approvalSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <span className="font-display text-5xl font-extrabold text-white/[0.06]">
                    {step.number}
                  </span>
                  <div className="mt-[-0.5rem] h-1 w-14 rounded-full bg-[#96ed08]" />
                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/50">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[1.75rem] border border-[#96ed08]/20 bg-[#96ed08]/[0.035] p-7 sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Market-dependent disclosures
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold">
                Final requirements depend on where and how you drive
              </h2>

              <div className="mt-7 space-y-3">
                {disclosures.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-1 shrink-0 text-[#96ed08]" size={17} />
                    <p className="leading-7 text-white/54">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/[0.09] bg-[#0b0b0b] p-7 sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Before you apply
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold">
                Prepare clear and current information
              </h2>
              <p className="mt-4 leading-7 text-white/52">
                Use accurate legal, contact, driver, vehicle, and insurance
                information. Do not upload altered documents, expired records, or
                information belonging to another person or vehicle.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/drive" className={primaryButton}>
                  Go to Driver page
                  <ArrowRight size={18} />
                </Link>

                <Link href="/help" className={secondaryButton}>
                  Visit Help Center
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DRIVER INTEREST */}
        <section
          id="driver-interest"
          className="scroll-mt-28 border-t border-white/[0.06] py-24 sm:py-28"
        >
          <div className="site-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Driver interest
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tell AkiGO where you want to drive.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/56">
                Register interest for future driver onboarding and market
                availability updates. This does not create a driver account or
                guarantee approval.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-[#96ed08]/20 bg-[#96ed08]/[0.035] p-6">
                <h3 className="font-display text-2xl font-bold">
                  Before you submit
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Use accurate contact and location information",
                    "Choose the service categories you are interested in",
                    "Do not upload driver or vehicle documents through this form",
                    "Final onboarding requirements are shown only when onboarding opens",
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
            </div>

            <DriverInterestForm />
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
