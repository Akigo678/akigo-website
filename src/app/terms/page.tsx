import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CarFront,
  Check,
  CreditCard,
  FileText,
  Gavel,
  LockKeyhole,
  PackageCheck,
  Scale,
  ShieldCheck,
  UserCheck,
  WalletCards,
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
  { id: "acceptance", label: "1. Acceptance of These Terms" },
  { id: "platform", label: "2. The AkiGO Platform" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "accounts", label: "4. Accounts and Security" },
  { id: "marketplace", label: "5. Marketplace Relationship" },
  { id: "rider-terms", label: "6. Rider Terms" },
  { id: "driver-terms", label: "7. Driver and Courier Terms" },
  { id: "delivery-terms", label: "8. Delivery Terms" },
  { id: "business-terms", label: "9. Business and Merchant Terms" },
  { id: "payments", label: "10. Payments, Wallets, and Payouts" },
  { id: "pricing", label: "11. Pricing, Fees, and Promotions" },
  { id: "cancellations", label: "12. Cancellations and Refunds" },
  { id: "conduct", label: "13. Community Standards" },
  { id: "prohibited", label: "14. Prohibited Conduct" },
  { id: "safety", label: "15. Safety and Emergencies" },
  { id: "verification", label: "16. Verification and Screening" },
  { id: "ratings", label: "17. Ratings, Reviews, and Feedback" },
  { id: "communications", label: "18. Electronic Communications" },
  { id: "privacy", label: "19. Privacy and Data" },
  { id: "intellectual-property", label: "20. Intellectual Property" },
  { id: "third-party", label: "21. Third-Party Services" },
  { id: "automation", label: "22. Automated Features" },
  { id: "availability", label: "23. Availability and Changes" },
  { id: "disclaimers", label: "24. Disclaimers" },
  { id: "liability", label: "25. Limitation of Liability" },
  { id: "indemnification", label: "26. Indemnification" },
  { id: "suspension", label: "27. Suspension and Termination" },
  { id: "disputes", label: "28. Governing Law and Disputes" },
  { id: "general", label: "29. General Provisions" },
  { id: "contact", label: "30. Contact Information" },
];

function LegalSection({
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

function LegalList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-3 pl-1">
      {children}
    </ul>
  );
}

function LegalItem({ children }: { children: React.ReactNode }) {
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

export default function TermsPage() {
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
                AkiGO legal
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                Terms of
                <br />
                <span className="text-[#96ed08]">Service.</span>
              </h1>

              <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/60">
                These Terms govern access to and use of AkiGO websites, mobile
                applications, ride services, delivery services, driver tools,
                business services, and related platform features.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#acceptance" className={primaryButton}>
                  Read the Terms
                  <ArrowRight size={18} />
                </a>

                <Link href="/privacy" className={secondaryButton}>
                  Privacy Policy
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

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Agreement overview
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        One agreement across the AkiGO platform.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Scale size={25} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: CarFront, label: "Rides" },
                      { icon: UserCheck, label: "Drivers" },
                      { icon: PackageCheck, label: "Deliveries" },
                      { icon: Building2, label: "Businesses" },
                      { icon: CreditCard, label: "Payments" },
                      { icon: ShieldCheck, label: "Safety" },
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
                      This draft should be reviewed by qualified legal counsel
                      before launch, especially for state-specific
                      transportation, delivery, insurance, employment, privacy,
                      and dispute-resolution requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEGAL CONTENT */}
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
                      Terms of Service
                    </p>
                  </div>
                </div>

                <nav
                  aria-label="Terms of Service sections"
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
                  <Gavel
                    size={18}
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                  />
                  <p className="text-xs leading-5 text-white/42">
                    These Terms are written for AkiGO’s current platform model.
                    They should be updated as services, markets, insurance,
                    payment flows, and legal requirements change.
                  </p>
                </div>
              </div>
            </aside>

            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#090909] px-6 py-8 sm:px-10 sm:py-10">
              <div className="mb-10 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-5">
                <p className="text-sm leading-7 text-white/62">
                  Please read these Terms carefully. By accessing or using the
                  AkiGO platform, creating an account, requesting or providing a
                  ride or delivery, using a business account, or otherwise
                  interacting with AkiGO services, you agree to be bound by
                  these Terms and all policies incorporated by reference.
                </p>
              </div>

              <LegalSection
                id="acceptance"
                number="1"
                title="Acceptance of These Terms"
              >
                <p>
                  These Terms of Service (“Terms”) form a legally binding
                  agreement between you and AkiGO Technologies LLC (“AkiGO,”
                  “we,” “us,” or “our”). They govern your access to and use of
                  AkiGO websites, mobile applications, software, communications,
                  payment features, ride services, delivery services, driver
                  tools, courier tools, business services, support systems, and
                  related products or services (collectively, the “Platform”).
                </p>

                <p>
                  By accessing or using the Platform, you represent that you
                  have read, understood, and agree to these Terms. If you do not
                  agree, do not access or use the Platform.
                </p>

                <p>
                  Additional terms, policies, disclosures, fee schedules, safety
                  rules, promotional rules, driver agreements, merchant
                  agreements, or market-specific requirements may apply to
                  particular services. If additional terms conflict with these
                  Terms, the additional terms control for the applicable
                  service.
                </p>
              </LegalSection>

              <LegalSection
                id="platform"
                number="2"
                title="The AkiGO Platform"
              >
                <p>
                  AkiGO is a technology platform designed to connect riders,
                  independent drivers, couriers, customers, merchants,
                  restaurants, businesses, and other authorized users for
                  transportation, delivery, logistics, payment, support, and
                  related services.
                </p>

                <LegalList>
                  <LegalItem>
                    Rider services may include requesting rides, comparing ride
                    options, reviewing pricing, tracking drivers, communicating,
                    paying, and viewing trip history.
                  </LegalItem>
                  <LegalItem>
                    Driver services may include onboarding, eligibility review,
                    trip offers, navigation, trip management, earnings
                    visibility, payouts, and support.
                  </LegalItem>
                  <LegalItem>
                    Delivery services may include requesting, accepting,
                    tracking, transporting, and completing eligible local
                    deliveries.
                  </LegalItem>
                  <LegalItem>
                    Business services may include merchant onboarding, business
                    accounts, team access, scheduled service, deliveries,
                    transportation requests, and operational visibility.
                  </LegalItem>
                </LegalList>

                <p>
                  Services, features, availability, eligibility, and geographic
                  coverage may vary by market and may change at any time.
                </p>
              </LegalSection>

              <LegalSection id="eligibility" number="3" title="Eligibility">
                <p>
                  You must be legally capable of entering into a binding
                  agreement to use the Platform. Unless a service expressly
                  permits otherwise, you must be at least eighteen years old.
                  A parent, guardian, or other authorized adult may request
                  certain services for another person where permitted.
                </p>

                <p>
                  Drivers, couriers, merchants, business users, and other service
                  providers must satisfy all applicable onboarding,
                  documentation, licensing, insurance, vehicle, background,
                  eligibility, and market-specific requirements.
                </p>

                <p>
                  You may not use the Platform if you are prohibited from doing
                  so under applicable law, have been permanently removed for
                  serious safety or fraud reasons, or are using the Platform on
                  behalf of a person or entity without authorization.
                </p>
              </LegalSection>

              <LegalSection
                id="accounts"
                number="4"
                title="Accounts and Security"
              >
                <p>
                  You must provide accurate, current, and complete information
                  when creating or maintaining an account. You are responsible
                  for updating your information and for all activity conducted
                  through your account.
                </p>

                <LegalList>
                  <LegalItem>
                    Keep passwords, verification codes, and authentication
                    credentials confidential.
                  </LegalItem>
                  <LegalItem>
                    Do not sell, rent, transfer, share, or allow unauthorized
                    access to your account.
                  </LegalItem>
                  <LegalItem>
                    Notify AkiGO promptly if you suspect unauthorized access,
                    identity theft, or account misuse.
                  </LegalItem>
                  <LegalItem>
                    Use only one account per authorized role unless AkiGO
                    expressly permits additional accounts.
                  </LegalItem>
                </LegalList>

                <p>
                  AkiGO may require identity verification, device verification,
                  additional authentication, or updated documentation before
                  allowing access to certain features.
                </p>
              </LegalSection>

              <LegalSection
                id="marketplace"
                number="5"
                title="Marketplace Relationship"
              >
                <p>
                  Unless AkiGO expressly states otherwise in a separate written
                  agreement, the Platform facilitates connections among users
                  and independent service providers. AkiGO does not guarantee
                  that any particular driver, courier, rider, merchant,
                  customer, delivery, trip, vehicle, item, or business request
                  will be available, accepted, completed, or suitable.
                </p>

                <p>
                  Drivers and couriers may be independent contractors rather
                  than employees of AkiGO, subject to applicable law and their
                  separate agreements. Merchants and business partners remain
                  responsible for their own products, services, personnel,
                  inventory, representations, and legal obligations.
                </p>

                <p>
                  Nothing in these Terms creates a partnership, joint venture,
                  franchise, fiduciary relationship, employment relationship,
                  or agency relationship between you and AkiGO unless a separate
                  written agreement expressly provides otherwise.
                </p>
              </LegalSection>

              <LegalSection id="rider-terms" number="6" title="Rider Terms">
                <p>
                  Riders must provide accurate pickup, destination, contact,
                  passenger, accessibility, and special-request information.
                  Riders are responsible for being ready at the pickup location
                  and for following reasonable safety instructions.
                </p>

                <LegalList>
                  <LegalItem>
                    Do not request a vehicle that cannot safely accommodate the
                    number of passengers, luggage, mobility device, child seat,
                    pet, or other trip requirement.
                  </LegalItem>
                  <LegalItem>
                    Seat belts must be used as required by law, and minors must
                    be transported only in compliance with applicable child
                    restraint laws.
                  </LegalItem>
                  <LegalItem>
                    Riders must not damage, soil, threaten, distract, assault,
                    harass, discriminate against, or interfere with a driver or
                    vehicle.
                  </LegalItem>
                  <LegalItem>
                    Riders are responsible for property they bring into a
                    vehicle and for checking the vehicle before exiting.
                  </LegalItem>
                </LegalList>

                <p>
                  Pickup times, arrival estimates, routes, and trip durations are
                  estimates and may change because of traffic, weather, road
                  closures, demand, safety conditions, driver availability, or
                  other factors.
                </p>
              </LegalSection>

              <LegalSection
                id="driver-terms"
                number="7"
                title="Driver and Courier Terms"
              >
                <p>
                  Drivers and couriers must maintain all licenses, permits,
                  registrations, insurance, vehicle standards, equipment,
                  background eligibility, and other requirements applicable to
                  their role and market.
                </p>

                <LegalList>
                  <LegalItem>
                    Use only an approved account, vehicle, identity, and device.
                  </LegalItem>
                  <LegalItem>
                    Do not permit another person to perform services through your
                    account.
                  </LegalItem>
                  <LegalItem>
                    Review available trip or delivery information before
                    accepting an opportunity.
                  </LegalItem>
                  <LegalItem>
                    Operate safely, lawfully, professionally, and without
                    impairment or distraction.
                  </LegalItem>
                  <LegalItem>
                    Protect rider, customer, merchant, and delivery information.
                  </LegalItem>
                  <LegalItem>
                    Report accidents, safety incidents, suspected fraud, and
                    material vehicle or documentation changes promptly.
                  </LegalItem>
                </LegalList>

                <p>
                  Drivers and couriers are responsible for their own expenses,
                  taxes, equipment, vehicle costs, data plans, and legal
                  obligations unless a separate written agreement states
                  otherwise.
                </p>
              </LegalSection>

              <LegalSection
                id="delivery-terms"
                number="8"
                title="Delivery Terms"
              >
                <p>
                  Customers, merchants, businesses, and couriers must provide
                  accurate item descriptions, pickup and drop-off information,
                  contact details, handling instructions, and access
                  information.
                </p>

                <p>
                  Prohibited or restricted items may include illegal goods,
                  weapons, explosives, hazardous materials, controlled
                  substances, stolen property, counterfeit goods, live animals,
                  cash, high-value items, alcohol, tobacco, prescription
                  products, or other regulated items unless expressly approved
                  and lawfully supported by AkiGO.
                </p>

                <p>
                  AkiGO may reject, cancel, hold, return, or require additional
                  verification for a delivery if the item appears unsafe,
                  illegal, inaccurately described, improperly packaged,
                  inaccessible, undeliverable, or inconsistent with Platform
                  rules.
                </p>

                <p>
                  Delivery completion may be documented through location data,
                  timestamps, photographs, signatures, codes, recipient
                  confirmation, merchant confirmation, or other approved
                  methods.
                </p>
              </LegalSection>

              <LegalSection
                id="business-terms"
                number="9"
                title="Business and Merchant Terms"
              >
                <p>
                  Businesses and merchants are responsible for the accuracy,
                  legality, quality, safety, labeling, packaging, pricing,
                  availability, and fulfillment of their products and services.
                </p>

                <LegalList>
                  <LegalItem>
                    Maintain accurate business, tax, banking, licensing, menu,
                    inventory, location, and contact information.
                  </LegalItem>
                  <LegalItem>
                    Honor confirmed orders and approved service requests unless
                    cancellation is permitted.
                  </LegalItem>
                  <LegalItem>
                    Comply with food-safety, healthcare, consumer-protection,
                    accessibility, employment, privacy, and industry-specific
                    laws.
                  </LegalItem>
                  <LegalItem>
                    Control employee and team access to business accounts.
                  </LegalItem>
                  <LegalItem>
                    Resolve product-quality, inventory, preparation, and
                    merchant-originated customer issues.
                  </LegalItem>
                </LegalList>

                <p>
                  Separate business, merchant, healthcare, logistics, or
                  enterprise agreements may apply and may include additional
                  fees, service levels, data terms, and operational
                  requirements.
                </p>
              </LegalSection>

              <LegalSection
                id="payments"
                number="10"
                title="Payments, Wallets, and Payouts"
              >
                <p>
                  By providing a payment method, you authorize AkiGO and its
                  payment service providers to charge applicable fares, fees,
                  taxes, tips, adjustments, deposits, cancellation charges,
                  waiting charges, damage charges, delivery charges, and other
                  disclosed amounts.
                </p>

                <p>
                  Wallet balances, promotional credits, refunds, and other stored
                  value may be subject to separate rules, expiration limits,
                  market restrictions, refund restrictions, and applicable law.
                  Wallet value may not be redeemable for cash unless required by
                  law.
                </p>

                <p>
                  Driver and courier payouts may be subject to identity
                  verification, tax information, account review, minimum
                  thresholds, processing periods, bank or card availability,
                  payment-provider rules, fraud review, reversals, holds, and
                  applicable fees.
                </p>

                <p>
                  You are responsible for reviewing transaction details and
                  reporting suspected errors promptly. AkiGO may correct billing,
                  payout, wallet, or calculation errors.
                </p>
              </LegalSection>

              <LegalSection
                id="pricing"
                number="11"
                title="Pricing, Fees, and Promotions"
              >
                <p>
                  Pricing may consider distance, estimated time, service type,
                  pickup location, destination, market conditions, demand,
                  availability, traffic, weather, events, tolls, airport fees,
                  taxes, waiting time, special requests, delivery requirements,
                  and other disclosed factors.
                </p>

                <p>
                  Estimates are not guarantees. The final amount may change when
                  the actual trip, route, duration, destination, waiting time,
                  tolls, taxes, delivery conditions, or requested service
                  differs from the information used to generate the estimate.
                </p>

                <p>
                  Promotions, coupons, referral rewards, discounts, incentives,
                  guarantees, and credits are discretionary and may have
                  eligibility rules, usage limits, expiration dates, geographic
                  restrictions, or separate terms. They may not be transferred,
                  sold, duplicated, combined, or used fraudulently.
                </p>
              </LegalSection>

              <LegalSection
                id="cancellations"
                number="12"
                title="Cancellations and Refunds"
              >
                <p>
                  Cancellation charges, refunds, credits, or adjustments may
                  depend on service type, payment method, trip or delivery
                  status, timing, driver or courier assignment, merchant
                  preparation, waiting time, pickup progress, fraud indicators,
                  and applicable policy.
                </p>

                <p>
                  AkiGO may cancel a trip, delivery, payout, order, or account
                  action when necessary for safety, suspected fraud, payment
                  failure, item restrictions, legal compliance, service
                  availability, incorrect information, or operational reasons.
                </p>

                <p>
                  Refunds may be returned to the original payment method, an
                  AkiGO wallet, or another legally permitted method. Processing
                  times can depend on banks, card networks, payment processors,
                  and other third parties.
                </p>
              </LegalSection>

              <LegalSection
                id="conduct"
                number="13"
                title="Community Standards"
              >
                <p>
                  All users must treat others respectfully and comply with
                  applicable law. AkiGO does not permit violence, threats,
                  harassment, discrimination, sexual misconduct, retaliation,
                  stalking, intimidation, dangerous behavior, or abusive
                  communication.
                </p>

                <p>
                  Users must follow reasonable safety, pickup, delivery,
                  accessibility, property, cleanliness, and conduct rules.
                  Serious or repeated violations may result in warnings,
                  restrictions, investigation, suspension, or permanent removal.
                </p>
              </LegalSection>

              <LegalSection
                id="prohibited"
                number="14"
                title="Prohibited Conduct"
              >
                <LegalList>
                  <LegalItem>
                    Use the Platform for unlawful, fraudulent, deceptive,
                    abusive, discriminatory, or dangerous activity.
                  </LegalItem>
                  <LegalItem>
                    Manipulate dispatch, pricing, location, identity, ratings,
                    incentives, referrals, payments, payouts, or account status.
                  </LegalItem>
                  <LegalItem>
                    Use fake accounts, stolen payment methods, unauthorized
                    devices, altered documents, spoofed locations, bots,
                    scrapers, or automated abuse.
                  </LegalItem>
                  <LegalItem>
                    Circumvent Platform fees or move an AkiGO-arranged
                    transaction off-platform to avoid payment or safety
                    controls.
                  </LegalItem>
                  <LegalItem>
                    Reverse engineer, copy, interfere with, overload, attack,
                    disable, or gain unauthorized access to the Platform.
                  </LegalItem>
                  <LegalItem>
                    Collect, sell, expose, or misuse another person’s personal,
                    trip, delivery, payment, or business information.
                  </LegalItem>
                  <LegalItem>
                    Impersonate AkiGO, a driver, rider, courier, merchant,
                    employee, contractor, or another user.
                  </LegalItem>
                </LegalList>
              </LegalSection>

              <LegalSection
                id="safety"
                number="15"
                title="Safety and Emergencies"
              >
                <p>
                  AkiGO may provide safety features such as journey sharing,
                  identity and vehicle information, in-app communication,
                  emergency workflows, incident reporting, support, check-ins,
                  and account review. Availability may vary.
                </p>

                <p>
                  AkiGO is not an emergency-response provider. If there is
                  immediate danger, contact the appropriate local police, fire,
                  ambulance, or emergency service first.
                </p>

                <p>
                  You agree to cooperate in good faith with reasonable safety,
                  accident, fraud, insurance, law-enforcement, and support
                  investigations. Do not knowingly submit false reports.
                </p>
              </LegalSection>

              <LegalSection
                id="verification"
                number="16"
                title="Verification and Screening"
              >
                <p>
                  AkiGO may verify identity, age, contact information, driver
                  licenses, vehicle registration, insurance, tax information,
                  business records, background information, payment methods,
                  device information, and other eligibility data.
                </p>

                <p>
                  Verification and screening reduce certain risks but do not
                  guarantee a person’s identity, conduct, reliability,
                  qualifications, safety, or future behavior.
                </p>

                <p>
                  Users must promptly disclose information that materially
                  affects eligibility, including license suspension, expired
                  insurance, disqualifying criminal matters, unsafe vehicles,
                  business closure, or loss of required authorization.
                </p>
              </LegalSection>

              <LegalSection
                id="ratings"
                number="17"
                title="Ratings, Reviews, and Feedback"
              >
                <p>
                  AkiGO may allow users to submit ratings, reviews, comments,
                  reports, photos, or other feedback. Submissions must be based
                  on genuine experiences and must not be fraudulent,
                  retaliatory, discriminatory, harassing, defamatory,
                  irrelevant, or unlawfully disclose private information.
                </p>

                <p>
                  AkiGO may moderate, investigate, restrict, or remove content
                  that violates law or Platform policies. Nothing in these Terms
                  prohibits a consumer from providing an honest review or
                  expressing a lawful opinion about AkiGO or Platform services.
                </p>

                <p>
                  By submitting content, you grant AkiGO a nonexclusive,
                  worldwide, royalty-free license to host, reproduce, display,
                  format, moderate, and use that content for operating,
                  improving, promoting, and protecting the Platform, subject to
                  applicable law and the Privacy Policy.
                </p>
              </LegalSection>

              <LegalSection
                id="communications"
                number="18"
                title="Electronic Communications"
              >
                <p>
                  You consent to receive electronic communications related to
                  your account and Platform use, including email, text messages,
                  push notifications, in-app messages, receipts, trip updates,
                  delivery updates, security alerts, safety notices, policy
                  updates, and support communications.
                </p>

                <p>
                  Message and data rates may apply. You may adjust certain
                  notification preferences, but transactional, legal, security,
                  and safety communications may still be sent when permitted by
                  law.
                </p>

                <p>
                  You are responsible for keeping your contact information
                  current and for ensuring that your device can receive
                  communications.
                </p>
              </LegalSection>

              <LegalSection id="privacy" number="19" title="Privacy and Data">
                <p>
                  AkiGO’s collection, use, sharing, retention, and protection of
                  personal information are described in the AkiGO Privacy
                  Policy. By using the Platform, you acknowledge that Platform
                  operation may require location data, identity information,
                  account information, trip and delivery records, payment data,
                  device data, communications, safety information, and other
                  information described in that policy.
                </p>

                <p>
                  Drivers, couriers, merchants, and business users must protect
                  personal information obtained through the Platform and may use
                  it only for authorized service delivery, safety, legal, or
                  support purposes.
                </p>
              </LegalSection>

              <LegalSection
                id="intellectual-property"
                number="20"
                title="Intellectual Property"
              >
                <p>
                  The Platform, including software, interfaces, designs, text,
                  graphics, logos, trademarks, service marks, databases,
                  algorithms, audiovisual content, and other materials, is owned
                  by or licensed to AkiGO and is protected by applicable
                  intellectual-property laws.
                </p>

                <p>
                  Subject to these Terms, AkiGO grants you a limited,
                  revocable, nonexclusive, nontransferable license to access and
                  use the Platform for its intended purposes.
                </p>

                <p>
                  You may not copy, modify, distribute, sell, sublicense,
                  publish, scrape, reverse engineer, create derivative works
                  from, or commercially exploit the Platform except as
                  expressly permitted in writing.
                </p>
              </LegalSection>

              <LegalSection
                id="third-party"
                number="21"
                title="Third-Party Services"
              >
                <p>
                  The Platform may rely on or link to third-party products and
                  services, including app stores, maps, navigation, payment
                  processors, banks, card networks, identity providers,
                  background-screening providers, communication providers,
                  cloud services, insurers, and business partners.
                </p>

                <p>
                  Third-party services are governed by their own terms and
                  privacy policies. AkiGO is not responsible for third-party
                  outages, decisions, content, policies, processing times, or
                  conduct except where applicable law provides otherwise.
                </p>
              </LegalSection>

              <LegalSection
                id="automation"
                number="22"
                title="Automated and Data-Assisted Features"
              >
                <p>
                  AkiGO may use automated, algorithmic, statistical, or
                  data-assisted systems for dispatch recommendations, matching,
                  pricing support, fraud detection, risk review, identity
                  verification, route calculations, estimated times, support
                  prioritization, promotions, eligibility, and operational
                  decisions.
                </p>

                <p>
                  Automated outputs may be incomplete, delayed, or incorrect and
                  may be reviewed, overridden, or supplemented by human
                  decisions. Users remain responsible for exercising reasonable
                  judgment and following applicable law.
                </p>
              </LegalSection>

              <LegalSection
                id="availability"
                number="23"
                title="Availability and Changes"
              >
                <p>
                  The Platform may be unavailable, delayed, limited, suspended,
                  or changed because of maintenance, updates, security events,
                  network failures, demand, market conditions, weather,
                  disasters, legal requirements, third-party failures, or other
                  circumstances.
                </p>

                <p>
                  AkiGO may add, remove, modify, test, restrict, or discontinue
                  any feature, service, market, ride option, delivery type,
                  payment method, promotion, business program, or account
                  category.
                </p>

                <p>
                  AkiGO does not guarantee uninterrupted access, a particular
                  driver or courier supply, acceptance of any request, or
                  continued availability in any geographic area.
                </p>
              </LegalSection>

              <LegalSection id="disclaimers" number="24" title="Disclaimers">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE PLATFORM IS
                  PROVIDED “AS IS” AND “AS AVAILABLE.” AKIGO DISCLAIMS ALL
                  EXPRESS, IMPLIED, AND STATUTORY WARRANTIES, INCLUDING
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY,
                  RELIABILITY, AND SAFETY.
                </p>

                <p>
                  AKIGO DOES NOT WARRANT THAT THE PLATFORM WILL BE ERROR-FREE,
                  UNINTERRUPTED, SECURE, OR FREE FROM HARMFUL COMPONENTS, OR THAT
                  ESTIMATES, ROUTES, PRICES, IDENTITIES, REVIEWS, AVAILABILITY,
                  DELIVERY INFORMATION, OR THIRD-PARTY INFORMATION WILL ALWAYS
                  BE ACCURATE.
                </p>

                <p>
                  SOME JURISDICTIONS DO NOT ALLOW CERTAIN DISCLAIMERS. IN THOSE
                  JURISDICTIONS, THESE DISCLAIMERS APPLY ONLY TO THE EXTENT
                  PERMITTED BY LAW.
                </p>
              </LegalSection>

              <LegalSection
                id="liability"
                number="25"
                title="Limitation of Liability"
              >
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AKIGO AND ITS
                  AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS,
                  LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR
                  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR
                  CONSEQUENTIAL DAMAGES, OR FOR LOST PROFITS, LOST DATA, LOST
                  BUSINESS, LOSS OF GOODWILL, OR SERVICE INTERRUPTION.
                </p>

                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AKIGO’S TOTAL
                  AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE PLATFORM
                  OR THESE TERMS WILL NOT EXCEED THE GREATER OF: (A) THE AMOUNT
                  YOU PAID TO AKIGO FOR THE TRANSACTION GIVING RISE TO THE CLAIM;
                  OR (B) ONE HUNDRED U.S. DOLLARS.
                </p>

                <p>
                  THESE LIMITATIONS DO NOT APPLY TO LIABILITY THAT CANNOT
                  LAWFULLY BE LIMITED, INCLUDING LIABILITY FOR FRAUD, WILLFUL
                  MISCONDUCT, OR OTHER MATTERS WHERE EXCLUSION IS PROHIBITED.
                </p>
              </LegalSection>

              <LegalSection
                id="indemnification"
                number="26"
                title="Indemnification"
              >
                <p>
                  To the extent permitted by law, you agree to defend,
                  indemnify, and hold harmless AkiGO and its affiliates,
                  officers, directors, employees, contractors, licensors, and
                  service providers from claims, losses, liabilities, damages,
                  judgments, fines, penalties, costs, and expenses, including
                  reasonable attorneys’ fees, arising from:
                </p>

                <LegalList>
                  <LegalItem>Your violation of these Terms or applicable law.</LegalItem>
                  <LegalItem>
                    Your misuse of the Platform or another person’s information.
                  </LegalItem>
                  <LegalItem>
                    Your trip, delivery, vehicle, product, business, merchant,
                    rider, driver, courier, or account conduct.
                  </LegalItem>
                  <LegalItem>
                    Content, goods, services, or information you provide.
                  </LegalItem>
                  <LegalItem>
                    Your infringement of another person’s rights.
                  </LegalItem>
                </LegalList>
              </LegalSection>

              <LegalSection
                id="suspension"
                number="27"
                title="Suspension and Termination"
              >
                <p>
                  AkiGO may investigate, restrict, suspend, deactivate, or
                  terminate access to the Platform when reasonably necessary
                  for safety, fraud prevention, legal compliance, payment risk,
                  policy enforcement, document expiration, eligibility issues,
                  abusive conduct, technical security, or protection of users
                  and the Platform.
                </p>

                <p>
                  Where appropriate, AkiGO may provide notice or an opportunity
                  to respond. Immediate action may be taken when necessary to
                  address urgent safety, fraud, security, legal, or operational
                  concerns.
                </p>

                <p>
                  You may stop using the Platform at any time and may request
                  account closure, subject to outstanding transactions,
                  investigations, legal retention requirements, and unresolved
                  obligations.
                </p>
              </LegalSection>

              <LegalSection
                id="disputes"
                number="28"
                title="Governing Law and Disputes"
              >
                <p>
                  These Terms are governed by the laws of the State of Florida,
                  without regard to conflict-of-law principles, except where
                  another law must apply.
                </p>

                <p>
                  Before filing a formal claim, you and AkiGO agree to make a
                  good-faith effort to resolve the dispute informally by
                  providing written notice describing the issue, relevant facts,
                  requested relief, and contact information.
                </p>

                <p>
                  Unless a separate agreement or applicable law provides
                  otherwise, disputes that cannot be resolved informally may be
                  brought in a court of competent jurisdiction located in
                  Florida. Nothing in this section prevents either party from
                  seeking emergency injunctive relief or using an eligible small
                  claims court.
                </p>

                <p>
                  AkiGO has intentionally not included a mandatory arbitration
                  clause or class-action waiver in this draft. Any future
                  addition of those provisions should be reviewed and approved
                  by qualified legal counsel and presented with legally required
                  notice and consent.
                </p>
              </LegalSection>

              <LegalSection
                id="general"
                number="29"
                title="General Provisions"
              >
                <p>
                  AkiGO may update these Terms from time to time. The updated
                  Terms will state a revised “Last Updated” date. When required,
                  AkiGO will provide additional notice or request renewed
                  consent. Continued use after the effective date of updated
                  Terms constitutes acceptance where permitted by law.
                </p>

                <p>
                  If any provision is held invalid or unenforceable, that
                  provision will be enforced to the maximum lawful extent and
                  the remaining provisions will remain in effect.
                </p>

                <p>
                  AkiGO’s failure to enforce a provision is not a waiver. You
                  may not assign these Terms without AkiGO’s written consent.
                  AkiGO may assign these Terms as part of a merger,
                  reorganization, financing, sale, transfer, or operation of the
                  Platform.
                </p>

                <p>
                  These Terms and incorporated policies constitute the entire
                  agreement concerning the Platform, except for any separate
                  written agreement that applies to a particular role or
                  service.
                </p>
              </LegalSection>

              <LegalSection
                id="contact"
                number="30"
                title="Contact Information"
              >
                <p>
                  Questions about these Terms may be sent to:
                </p>

                <div className="rounded-2xl border border-white/[0.09] bg-black/45 p-5">
                  <p className="font-bold text-white">
                    AkiGO Technologies LLC
                  </p>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Terms%20of%20Service`}
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
              </LegalSection>
            </article>
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
                    Legal questions
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Need clarification about these Terms?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Contact AkiGO for general questions. Obtain independent legal
                    advice for questions about your own rights or obligations.
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
