import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CarFront,
  Check,
  Cookie,
  CreditCard,
  Database,
  Eye,
  FileText,
  Fingerprint,
  Globe2,
  LockKeyhole,
  Mail,
  MapPinned,
  PackageCheck,
  Scale,
  ShieldCheck,
  Smartphone,
  Trash2,
  UserCheck,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const EFFECTIVE_DATE = "July 31, 2026";
const LAST_UPDATED = "July 31, 2026";
const CONTACT_EMAIL = "akigo678@gmail.com";

const tableOfContents = [
  { id: "scope", label: "1. Scope of This Policy" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "location-data", label: "3. Location and Journey Data" },
  { id: "driver-data", label: "4. Driver and Courier Information" },
  { id: "business-data", label: "5. Business and Merchant Information" },
  { id: "payments", label: "6. Payment and Financial Information" },
  { id: "communications", label: "7. Communications and Support" },
  { id: "automatic-data", label: "8. Device and Automatic Data" },
  { id: "cookies", label: "9. Cookies and Similar Technologies" },
  { id: "uses", label: "10. How We Use Information" },
  { id: "sharing", label: "11. How We Share Information" },
  { id: "sale-sharing", label: "12. Sale and Targeted Advertising" },
  { id: "retention", label: "13. Data Retention" },
  { id: "security", label: "14. Data Security" },
  { id: "choices", label: "15. Your Choices and Controls" },
  { id: "rights", label: "16. Privacy Rights" },
  { id: "sensitive-data", label: "17. Sensitive Personal Information" },
  { id: "children", label: "18. Children’s Privacy" },
  { id: "third-party", label: "19. Third-Party Services" },
  { id: "international", label: "20. International Data Transfers" },
  { id: "changes", label: "21. Changes to This Policy" },
  { id: "contact", label: "22. Contact Us" },
];

function PrivacySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-white/[0.07] py-10 first:pt-0 last:border-b-0"
    >
      <div className="flex items-start gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#96ed08]/25 bg-[#96ed08]/[0.07] text-sm font-extrabold text-[#96ed08]">
          {number}
        </span>

        <div className="min-w-0">
          <h2 className="font-display text-2xl font-extrabold tracking-[-0.035em] text-white sm:text-3xl">
            {title}
          </h2>

          <div className="mt-5 space-y-5 text-[15px] leading-7 text-white/58">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 pl-1">{children}</ul>;
}

function PrivacyItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <Check
        size={16}
        strokeWidth={2.6}
        className="mt-1.5 shrink-0 text-[#96ed08]"
      />
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[610px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO privacy
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                Privacy
                <br />
                <span className="text-[#96ed08]">Policy.</span>
              </h1>

              <p className="mt-6 max-w-[630px] text-lg leading-8 text-white/60">
                This Policy explains how AkiGO collects, uses, shares, retains,
                and protects information across our websites, rider and driver
                applications, delivery services, business tools, payments,
                safety systems, and support experiences.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#scope" className={primaryButton}>
                  Read the Policy
                  <ArrowRight size={18} />
                </a>

                <Link href="/terms" className={secondaryButton}>
                  Terms of Service
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/48">
                <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2">
                  Effective: {EFFECTIVE_DATE}
                </span>
                <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2">
                  Last updated: {LAST_UPDATED}
                </span>
              </div>
            </div>

            {/* PRIVACY OVERVIEW */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Privacy overview
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Information should be used responsibly.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <LockKeyhole size={25} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Users, label: "Account data" },
                      { icon: MapPinned, label: "Location data" },
                      { icon: CreditCard, label: "Payment data" },
                      { icon: Smartphone, label: "Device data" },
                      { icon: ShieldCheck, label: "Safety data" },
                      { icon: Building2, label: "Business data" },
                    ].map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/50 p-4"
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

                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                    <AlertTriangle
                      className="mt-0.5 shrink-0 text-[#96ed08]"
                      size={19}
                    />
                    <p className="text-sm leading-6 text-white/55">
                      This draft must be reviewed against AkiGO’s final data
                      flows, analytics tools, advertising practices, vendors,
                      retention schedules, launch states, and mobile-platform
                      disclosures before publication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POLICY CONTENT */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container grid items-start gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                      Contents
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Privacy Policy
                    </p>
                  </div>
                </div>

                <nav
                  aria-label="Privacy Policy sections"
                  className="mt-5 max-h-[62vh] space-y-1 overflow-y-auto pr-2"
                >
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-xl px-3 py-2 text-xs leading-5 text-white/42 transition hover:bg-white/[0.04] hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex items-start gap-3">
                  <Scale
                    size={18}
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                  />
                  <p className="text-xs leading-5 text-white/42">
                    Privacy rights vary by location. AkiGO should confirm which
                    state, federal, and international laws apply before launch.
                  </p>
                </div>
              </div>
            </aside>

            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#090909] px-6 py-8 sm:px-10 sm:py-10">
              <div className="mb-10 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-5">
                <p className="text-sm leading-7 text-white/62">
                  AkiGO Technologies LLC (“AkiGO,” “we,” “us,” or “our”)
                  respects your privacy. This Policy describes our information
                  practices when you access or use the AkiGO Platform. It does
                  not apply to information handled solely under a separate
                  privacy notice or agreement.
                </p>
              </div>

              <PrivacySection id="scope" number="1" title="Scope of This Policy">
                <p>
                  This Privacy Policy applies to AkiGO websites, mobile
                  applications, rider services, driver and courier services,
                  delivery services, business and merchant tools, administrative
                  systems, customer support, safety workflows, marketing pages,
                  and related services that link to this Policy (collectively,
                  the “Platform”).
                </p>

                <p>
                  This Policy applies to riders, drivers, couriers, delivery
                  customers, merchants, business users, website visitors,
                  applicants, prospective partners, support contacts, and other
                  individuals whose information AkiGO processes.
                </p>

                <p>
                  Separate notices may apply to employees, job applicants,
                  contractors, healthcare programs, enterprise customers, or
                  other specialized relationships.
                </p>
              </PrivacySection>

              <PrivacySection
                id="information-collected"
                number="2"
                title="Information We Collect"
              >
                <p>
                  The information we collect depends on how you interact with
                  AkiGO. Categories may include:
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Account and identity information, such as name, username,
                    email address, telephone number, profile image, date of
                    birth, authentication information, and account identifiers.
                  </PrivacyItem>
                  <PrivacyItem>
                    Ride and delivery information, such as pickup, destination,
                    route, requested service, passenger or item details,
                    instructions, timestamps, status, communications, and
                    completion records.
                  </PrivacyItem>
                  <PrivacyItem>
                    Location information, including precise or approximate
                    device location, driver location, courier location, pickup
                    and drop-off coordinates, route progress, and background
                    location where enabled and permitted.
                  </PrivacyItem>
                  <PrivacyItem>
                    Payment and transaction information, including payment
                    method details handled by payment providers, wallet
                    activity, charges, refunds, tips, payouts, taxes, and
                    transaction history.
                  </PrivacyItem>
                  <PrivacyItem>
                    Driver, courier, vehicle, and eligibility information,
                    including licenses, registrations, insurance, vehicle
                    details, background-review information, tax information, and
                    uploaded documents.
                  </PrivacyItem>
                  <PrivacyItem>
                    Business and merchant information, including organization,
                    ownership, location, team, tax, banking, inventory, menu,
                    order, and operational information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Communications, support requests, safety reports, ratings,
                    reviews, photographs, recordings, attachments, and feedback.
                  </PrivacyItem>
                  <PrivacyItem>
                    Device, browser, network, application, usage, security,
                    diagnostics, and analytics information.
                  </PrivacyItem>
                </PrivacyList>
              </PrivacySection>

              <PrivacySection
                id="location-data"
                number="3"
                title="Location and Journey Data"
              >
                <p>
                  Location is central to transportation and delivery services.
                  Depending on your role, device settings, permissions, and
                  active service, AkiGO may collect precise or approximate
                  location information.
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Riders may provide pickup and destination locations and may
                    permit device location to improve pickup accuracy.
                  </PrivacyItem>
                  <PrivacyItem>
                    Drivers and couriers may provide foreground and background
                    location while online, receiving offers, navigating,
                    completing services, or supporting safety and recovery
                    workflows.
                  </PrivacyItem>
                  <PrivacyItem>
                    Location data may be used to calculate routes, distance,
                    estimated time, eligibility, pricing inputs, dispatch
                    recommendations, pickup and drop-off status, safety events,
                    fraud signals, and support investigations.
                  </PrivacyItem>
                </PrivacyList>

                <p>
                  You can control device-level location permissions, but
                  disabling required location access may prevent certain
                  Platform features from working.
                </p>
              </PrivacySection>

              <PrivacySection
                id="driver-data"
                number="4"
                title="Driver and Courier Information"
              >
                <p>
                  For driver and courier onboarding, eligibility, safety,
                  compliance, payment, and account management, AkiGO may collect
                  or receive:
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Driver’s license, identity document, photograph, address,
                    date of birth, and contact information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Vehicle make, model, year, color, license plate,
                    registration, inspection, and insurance information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Background, motor-vehicle, identity, eligibility, and fraud
                    review results obtained from authorized service providers.
                  </PrivacyItem>
                  <PrivacyItem>
                    Tax forms, payout information, bank or debit-card
                    information processed by payment providers, and earnings
                    records.
                  </PrivacyItem>
                  <PrivacyItem>
                    Online status, offer activity, acceptance or decline events,
                    navigation, trip and delivery performance, safety reports,
                    support activity, and account-review history.
                  </PrivacyItem>
                </PrivacyList>

                <p>
                  AkiGO may periodically request updated documents or re-review
                  eligibility when permitted or required.
                </p>
              </PrivacySection>

              <PrivacySection
                id="business-data"
                number="5"
                title="Business and Merchant Information"
              >
                <p>
                  AkiGO may collect information from restaurants, retailers,
                  healthcare organizations, hospitality providers, professional
                  services, and other business partners, including:
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Business name, ownership, registration, licenses, tax
                    identifiers, addresses, contact information, and authorized
                    representatives.
                  </PrivacyItem>
                  <PrivacyItem>
                    Team-member names, roles, permissions, account activity, and
                    location assignments.
                  </PrivacyItem>
                  <PrivacyItem>
                    Banking, payout, billing, invoice, transaction, order,
                    inventory, menu, product, delivery, and service information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Operational records, scheduled requests, support cases,
                    compliance documents, agreements, and partnership
                    communications.
                  </PrivacyItem>
                </PrivacyList>
              </PrivacySection>

              <PrivacySection
                id="payments"
                number="6"
                title="Payment and Financial Information"
              >
                <p>
                  AkiGO and payment providers may process payment-card details,
                  bank-account information, debit-card information, payment
                  tokens, billing addresses, transaction identifiers, wallet
                  balances, charges, refunds, tips, fees, payouts, and tax
                  information.
                </p>

                <p>
                  Complete card and bank credentials may be collected and stored
                  directly by authorized payment processors rather than AkiGO.
                  AkiGO may receive limited information, such as payment method
                  type, last four digits, token, status, and transaction result.
                </p>

                <p>
                  Financial information may be used to process transactions,
                  prevent fraud, resolve disputes, comply with law, maintain
                  records, and administer driver, courier, merchant, and
                  business payouts.
                </p>
              </PrivacySection>

              <PrivacySection
                id="communications"
                number="7"
                title="Communications and Support"
              >
                <p>
                  AkiGO may collect communications sent through the Platform or
                  to AkiGO, including rider-driver messages, customer-courier
                  messages, support chats, emails, call metadata, safety
                  reports, incident descriptions, attachments, photographs,
                  ratings, reviews, and feedback.
                </p>

                <p>
                  Where legally permitted and clearly disclosed, communications
                  may be monitored or recorded for safety, quality, fraud
                  prevention, dispute resolution, training, and support.
                  AkiGO should not activate call recording without the required
                  notice and consent.
                </p>
              </PrivacySection>

              <PrivacySection
                id="automatic-data"
                number="8"
                title="Device and Automatically Collected Data"
              >
                <p>
                  When you use the Platform, AkiGO and authorized service
                  providers may automatically collect:
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Device model, operating system, app version, browser type,
                    language, identifiers, notification token, and settings.
                  </PrivacyItem>
                  <PrivacyItem>
                    Internet Protocol address, network information, carrier,
                    connection status, and approximate location derived from
                    network information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Feature usage, screens viewed, clicks, session times,
                    navigation paths, referrals, and interaction events.
                  </PrivacyItem>
                  <PrivacyItem>
                    Crash logs, performance information, diagnostics, errors,
                    security events, and fraud indicators.
                  </PrivacyItem>
                </PrivacyList>
              </PrivacySection>

              <PrivacySection
                id="cookies"
                number="9"
                title="Cookies and Similar Technologies"
              >
                <p>
                  AkiGO websites may use cookies, local storage, pixels, software
                  development kits, and similar technologies to operate the
                  website, remember preferences, maintain security, understand
                  usage, measure performance, prevent fraud, and support
                  communications.
                </p>

                <p>
                  Before using nonessential analytics or advertising
                  technologies, AkiGO should confirm applicable consent,
                  opt-out, and disclosure requirements. Users may be able to
                  manage cookies through browser controls and any consent tools
                  provided on the website.
                </p>

                <p>
                  A separate Cookie Policy may provide additional details about
                  specific technologies, providers, purposes, and retention.
                </p>
              </PrivacySection>

              <PrivacySection
                id="uses"
                number="10"
                title="How We Use Information"
              >
                <p>AkiGO may use information to:</p>

                <PrivacyList>
                  <PrivacyItem>
                    Create, authenticate, secure, maintain, and support accounts.
                  </PrivacyItem>
                  <PrivacyItem>
                    Provide rides, deliveries, dispatch, routing, navigation,
                    tracking, business tools, payments, payouts, and support.
                  </PrivacyItem>
                  <PrivacyItem>
                    Match riders, drivers, couriers, customers, merchants, and
                    businesses.
                  </PrivacyItem>
                  <PrivacyItem>
                    Calculate or support pricing, distance, duration,
                    eligibility, availability, fees, incentives, and payments.
                  </PrivacyItem>
                  <PrivacyItem>
                    Communicate service updates, receipts, safety alerts,
                    security notices, support messages, policy changes, and
                    marketing where permitted.
                  </PrivacyItem>
                  <PrivacyItem>
                    Detect, investigate, prevent, and respond to fraud, abuse,
                    account compromise, unsafe conduct, payment risk, and
                    violations.
                  </PrivacyItem>
                  <PrivacyItem>
                    Verify identity, documents, vehicles, insurance,
                    eligibility, tax information, and business information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Improve, test, analyze, troubleshoot, secure, and develop
                    Platform features and operations.
                  </PrivacyItem>
                  <PrivacyItem>
                    Comply with legal obligations, enforce agreements, protect
                    rights, and respond to lawful requests.
                  </PrivacyItem>
                </PrivacyList>
              </PrivacySection>

              <PrivacySection
                id="sharing"
                number="11"
                title="How We Share Information"
              >
                <p>
                  AkiGO may share information as necessary to operate and protect
                  the Platform, including with:
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Riders, drivers, couriers, customers, merchants, and
                    businesses involved in a requested service.
                  </PrivacyItem>
                  <PrivacyItem>
                    Payment processors, banks, card networks, payout providers,
                    and fraud-prevention services.
                  </PrivacyItem>
                  <PrivacyItem>
                    Maps, navigation, communications, cloud hosting, analytics,
                    security, customer-support, identity, background-review, and
                    other service providers.
                  </PrivacyItem>
                  <PrivacyItem>
                    Insurers, claims administrators, professional advisers,
                    auditors, and compliance providers.
                  </PrivacyItem>
                  <PrivacyItem>
                    Government agencies, courts, law enforcement, regulators, or
                    other parties when required or permitted by law.
                  </PrivacyItem>
                  <PrivacyItem>
                    Parties to a merger, acquisition, financing, restructuring,
                    asset sale, or similar business transaction, subject to
                    appropriate protections.
                  </PrivacyItem>
                  <PrivacyItem>
                    Other parties at your direction or with your consent.
                  </PrivacyItem>
                </PrivacyList>

                <p>
                  AkiGO should contractually require service providers to handle
                  personal information only for authorized purposes and with
                  appropriate safeguards where required.
                </p>
              </PrivacySection>

              <PrivacySection
                id="sale-sharing"
                number="12"
                title="Sale, Sharing, and Targeted Advertising"
              >
                <p>
                  AkiGO does not intend to sell personal information for money.
                  However, some privacy laws define “sale,” “sharing,” or
                  “targeted advertising” broadly and may cover certain
                  advertising, analytics, or cross-context behavioral
                  activities.
                </p>

                <p>
                  Before launch, AkiGO must inventory its analytics,
                  advertising, attribution, social-media, and website
                  technologies and update this section to state accurately
                  whether any activity qualifies as a sale, sharing, or targeted
                  advertising under applicable law.
                </p>

                <p>
                  Where required, AkiGO will provide a method to opt out of
                  covered sale, sharing, or targeted advertising and will
                  process recognized preference signals when legally required.
                </p>
              </PrivacySection>

              <PrivacySection
                id="retention"
                number="13"
                title="Data Retention"
              >
                <p>
                  AkiGO retains personal information for as long as reasonably
                  necessary for the purposes described in this Policy, including
                  providing services, maintaining accounts, processing
                  transactions, preventing fraud, supporting safety,
                  investigating incidents, resolving disputes, enforcing
                  agreements, and complying with legal, tax, accounting,
                  insurance, and regulatory obligations.
                </p>

                <p>
                  Retention periods vary by category. Account, transaction,
                  safety, driver, tax, payment, and legal records may need to be
                  retained longer than ordinary usage or marketing information.
                </p>

                <p>
                  AkiGO should adopt a written retention schedule before launch
                  and securely delete or deidentify information when it is no
                  longer reasonably needed, unless continued retention is
                  required or permitted by law.
                </p>
              </PrivacySection>

              <PrivacySection
                id="security"
                number="14"
                title="Data Security"
              >
                <p>
                  AkiGO uses or intends to use administrative, technical, and
                  organizational safeguards designed to protect personal
                  information. These may include authentication, role-based
                  access, encrypted transmission, restricted backend actions,
                  logging, monitoring, vendor review, incident response,
                  backups, and secure development practices.
                </p>

                <p>
                  No method of transmission, storage, or security is completely
                  risk-free. AkiGO cannot guarantee absolute security.
                </p>

                <p>
                  Users are responsible for protecting their passwords,
                  verification codes, devices, and account access and for
                  notifying AkiGO of suspected unauthorized activity.
                </p>
              </PrivacySection>

              <PrivacySection
                id="choices"
                number="15"
                title="Your Choices and Controls"
              >
                <PrivacyList>
                  <PrivacyItem>
                    Update certain profile and account information through the
                    Platform where available.
                  </PrivacyItem>
                  <PrivacyItem>
                    Control device permissions for location, notifications,
                    camera, microphone, photos, and contacts through device
                    settings.
                  </PrivacyItem>
                  <PrivacyItem>
                    Manage certain promotional communications through
                    unsubscribe links or preferences.
                  </PrivacyItem>
                  <PrivacyItem>
                    Manage cookies through browser settings and available
                    consent controls.
                  </PrivacyItem>
                  <PrivacyItem>
                    Request account closure, subject to outstanding obligations,
                    legal retention, safety, fraud, and transaction records.
                  </PrivacyItem>
                </PrivacyList>

                <p>
                  Disabling information or permissions required for a service
                  may limit or prevent that service from functioning.
                </p>
              </PrivacySection>

              <PrivacySection id="rights" number="16" title="Privacy Rights">
                <p>
                  Depending on where you live and subject to legal exceptions,
                  you may have the right to request:
                </p>

                <PrivacyList>
                  <PrivacyItem>
                    Confirmation of whether AkiGO processes your personal
                    information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Access to or a copy of certain personal information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Correction of inaccurate personal information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Deletion of certain personal information.
                  </PrivacyItem>
                  <PrivacyItem>
                    Portability of certain information in a usable format.
                  </PrivacyItem>
                  <PrivacyItem>
                    Information about categories of data, purposes, sources, and
                    recipients.
                  </PrivacyItem>
                  <PrivacyItem>
                    Opt-out of covered sale, sharing, targeted advertising, or
                    certain profiling.
                  </PrivacyItem>
                  <PrivacyItem>
                    Appeal a denied privacy request where applicable.
                  </PrivacyItem>
                  <PrivacyItem>
                    Limit certain uses or disclosures of sensitive personal
                    information where required.
                  </PrivacyItem>
                </PrivacyList>

                <p>
                  AkiGO may verify your identity and authority before processing
                  a request. Authorized agents may submit requests where
                  permitted, subject to verification. AkiGO will not unlawfully
                  discriminate against you for exercising privacy rights.
                </p>

                <p>
                  To submit a request, contact{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Privacy%20Request`}
                    className="font-semibold text-[#96ed08] hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  or use the Contact page. A dedicated privacy-request form
                  should be added before launch.
                </p>
              </PrivacySection>

              <PrivacySection
                id="sensitive-data"
                number="17"
                title="Sensitive Personal Information"
              >
                <p>
                  Depending on your role and service, AkiGO may process
                  information considered sensitive under applicable law,
                  including precise geolocation, identity documents,
                  driver-license information, financial information, account
                  credentials, background-review information, safety reports,
                  and accessibility or accommodation information.
                </p>

                <p>
                  AkiGO uses sensitive information only for purposes reasonably
                  necessary to provide services, verify eligibility, process
                  payments and payouts, protect users, prevent fraud, comply
                  with law, support accommodations, and operate authorized
                  features.
                </p>

                <p>
                  AkiGO should obtain consent for sensitive-data processing when
                  required and provide applicable withdrawal or limitation
                  controls.
                </p>
              </PrivacySection>

              <PrivacySection
                id="children"
                number="18"
                title="Children’s Privacy"
              >
                <p>
                  The Platform is not directed to children under thirteen, and
                  AkiGO does not knowingly collect personal information directly
                  from children under thirteen without legally required parental
                  consent.
                </p>

                <p>
                  Adults may request transportation or other eligible services
                  involving minors where permitted, but the responsible adult
                  must provide appropriate supervision and comply with child
                  safety, restraint, and account rules.
                </p>

                <p>
                  If AkiGO learns that it collected a child’s personal
                  information in violation of applicable law, it will take
                  reasonable steps to delete or otherwise address the
                  information.
                </p>
              </PrivacySection>

              <PrivacySection
                id="third-party"
                number="19"
                title="Third-Party Services"
              >
                <p>
                  The Platform may integrate with third-party services,
                  including app stores, maps, navigation, payment processors,
                  banks, communications providers, analytics providers,
                  background-screening providers, identity-verification
                  services, insurers, cloud platforms, merchants, and business
                  partners.
                </p>

                <p>
                  Third parties may process information under their own privacy
                  policies. AkiGO is not responsible for privacy practices of
                  services it does not control. Review third-party policies
                  before using those services.
                </p>
              </PrivacySection>

              <PrivacySection
                id="international"
                number="20"
                title="International Data Transfers"
              >
                <p>
                  AkiGO is based in the United States. If information is
                  transferred from another country to the United States or
                  another jurisdiction, it may be subject to different privacy
                  laws.
                </p>

                <p>
                  If AkiGO offers services to individuals outside the United
                  States, it will evaluate and implement legally required
                  transfer mechanisms, notices, contracts, and safeguards before
                  processing covered information.
                </p>
              </PrivacySection>

              <PrivacySection
                id="changes"
                number="21"
                title="Changes to This Policy"
              >
                <p>
                  AkiGO may update this Privacy Policy to reflect changes in
                  services, technologies, data practices, vendors, legal
                  requirements, or operations. The updated Policy will display a
                  revised “Last Updated” date.
                </p>

                <p>
                  Where required, AkiGO will provide additional notice or obtain
                  consent before materially changing how previously collected
                  personal information is used.
                </p>
              </PrivacySection>

              <PrivacySection id="contact" number="22" title="Contact Us">
                <p>
                  Questions, concerns, and privacy requests may be directed to:
                </p>

                <div className="rounded-2xl border border-white/[0.09] bg-black/45 p-5">
                  <p className="font-bold text-white">
                    AkiGO Technologies LLC
                  </p>
                  <p className="mt-2">
                    Privacy email:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Privacy`}
                      className="font-semibold text-[#96ed08] hover:underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p className="mt-2">
                    Contact page:{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-[#96ed08] hover:underline"
                    >
                      /contact
                    </Link>
                  </p>
                </div>

                <p>
                  Before public launch, AkiGO should add its complete legal
                  mailing address, privacy-request workflow, authorized-agent
                  instructions, and any legally required toll-free number or
                  state-specific disclosures.
                </p>
              </PrivacySection>
            </article>
          </div>
        </section>

        {/* PRIVACY PRINCIPLES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Privacy principles
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Build privacy into the platform.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: Database,
                  title: "Collect responsibly",
                  text: "Collect information that supports real product, safety, legal, and operational needs.",
                },
                {
                  icon: LockKeyhole,
                  title: "Protect access",
                  text: "Use authentication, permissions, and protected backend workflows.",
                },
                {
                  icon: Eye,
                  title: "Be transparent",
                  text: "Explain data practices clearly and keep disclosures aligned with actual systems.",
                },
                {
                  icon: Trash2,
                  title: "Retain carefully",
                  text: "Keep information only as long as reasonably necessary or legally required.",
                },
              ].map(({ icon: Icon, title, text }) => (
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

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Privacy questions
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Need information about your data?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Contact AkiGO to ask a privacy question or begin a privacy
                    request.
                  </p>
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Privacy%20Request`}
                  className={`${primaryButton} shrink-0`}
                >
                  Submit a privacy request
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
