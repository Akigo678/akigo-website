import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Ban,
  Building2,
  CarFront,
  Check,
  ChevronRight,
  CircleHelp,
  FileWarning,
  Handshake,
  HeartHandshake,
  LockKeyhole,
  MessageCircle,
  PackageCheck,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Store,
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
  { id: "purpose", label: "1. Purpose and Scope" },
  { id: "respect", label: "2. Respectful Conduct" },
  { id: "discrimination", label: "3. No Discrimination" },
  { id: "safety", label: "4. Safety First" },
  { id: "violence", label: "5. Violence, Threats, and Harassment" },
  { id: "sexual-misconduct", label: "6. Sexual Misconduct" },
  { id: "rider-rules", label: "7. Rider Responsibilities" },
  { id: "driver-rules", label: "8. Driver and Courier Responsibilities" },
  { id: "delivery-rules", label: "9. Delivery Standards" },
  { id: "business-rules", label: "10. Business and Merchant Conduct" },
  { id: "fraud", label: "11. Fraud and Platform Manipulation" },
  { id: "property", label: "12. Property, Cleanliness, and Damage" },
  { id: "privacy", label: "13. Privacy and Personal Information" },
  { id: "communications", label: "14. Communications and Content" },
  { id: "accessibility", label: "15. Accessibility and Service Animals" },
  { id: "substances", label: "16. Alcohol, Drugs, and Impairment" },
  { id: "weapons", label: "17. Weapons and Dangerous Items" },
  { id: "prohibited-items", label: "18. Prohibited Delivery Items" },
  { id: "children", label: "19. Minors and Family Safety" },
  { id: "emergencies", label: "20. Emergencies and Incident Reporting" },
  { id: "enforcement", label: "21. Enforcement and Account Action" },
  { id: "appeals", label: "22. Reviews and Appeals" },
  { id: "changes", label: "23. Updates to These Guidelines" },
  { id: "contact", label: "24. Contact AkiGO" },
];

const corePrinciples = [
  {
    icon: HeartHandshake,
    title: "Treat people with respect",
    text: "Harassment, discrimination, intimidation, retaliation, and abusive behavior are not acceptable.",
  },
  {
    icon: ShieldCheck,
    title: "Protect safety",
    text: "Follow the law, avoid dangerous conduct, and use safety tools when a journey needs attention.",
  },
  {
    icon: Handshake,
    title: "Act honestly",
    text: "Use accurate information and do not manipulate accounts, payments, ratings, location, or dispatch.",
  },
  {
    icon: LockKeyhole,
    title: "Respect privacy",
    text: "Use personal, trip, delivery, and business information only for authorized purposes.",
  },
];

const prohibitedConduct = [
  "Violence, threats, intimidation, stalking, or retaliation",
  "Harassment, bullying, hate speech, or discriminatory conduct",
  "Sexual comments, unwanted contact, exposure, or sexual activity",
  "Driving or providing services while impaired or dangerously fatigued",
  "Fraud, identity misuse, false documents, payment abuse, or account sharing",
  "Location spoofing, dispatch manipulation, or incentive abuse",
  "Unauthorized recording, surveillance, or disclosure of private information",
  "Transporting or delivering illegal, dangerous, or prohibited items",
];

const enforcementLevels = [
  {
    number: "01",
    title: "Education or warning",
    text: "Minor or first-time concerns may be addressed with guidance, reminders, or a formal warning.",
  },
  {
    number: "02",
    title: "Temporary restriction",
    text: "AkiGO may limit features, pause access, or require updated information while a concern is reviewed.",
  },
  {
    number: "03",
    title: "Suspension or investigation",
    text: "Serious, repeated, safety-related, fraud-related, or legally significant concerns may result in suspension.",
  },
  {
    number: "04",
    title: "Permanent removal",
    text: "Severe misconduct, violence, fraud, identity misuse, or repeated violations may lead to permanent deactivation.",
  },
];

const reportingSteps = [
  {
    icon: AlertTriangle,
    title: "Address immediate danger",
    text: "Contact the appropriate local emergency service when immediate help is required.",
  },
  {
    icon: FileWarning,
    title: "Document the concern",
    text: "Record accurate trip, delivery, account, location, message, and incident details.",
  },
  {
    icon: MessageCircle,
    title: "Report through AkiGO",
    text: "Use the available in-app safety, support, or reporting workflow.",
  },
  {
    icon: Scale,
    title: "Cooperate with review",
    text: "Provide requested information and preserve relevant evidence during follow-up.",
  },
];

function GuidelineSection({
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

function GuidelineList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 pl-1">{children}</ul>;
}

function GuidelineItem({ children }: { children: React.ReactNode }) {
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

export default function CommunityGuidelinesPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[640px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO Community Guidelines
              </div>

              <h1 className="font-display mt-6 max-w-[780px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                Respect and safety for
                <br />
                <span className="text-[#96ed08]">every interaction.</span>
              </h1>

              <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/60">
                These Guidelines explain the conduct expected from riders,
                drivers, couriers, customers, businesses, merchants, and anyone
                using the AkiGO platform.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#purpose" className={primaryButton}>
                  Read the Guidelines
                  <ArrowRight size={18} />
                </a>

                <Link href="/safety-center" className={secondaryButton}>
                  Safety Center
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

            {/* OVERVIEW */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Community promise
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Everyone shares responsibility.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Users size={25} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: CarFront, label: "Riders" },
                      { icon: UserCheck, label: "Drivers" },
                      { icon: PackageCheck, label: "Couriers" },
                      { icon: Store, label: "Businesses" },
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

                  <div className="mt-4 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                    <div className="flex items-start gap-3">
                      <ShieldAlert
                        className="mt-0.5 shrink-0 text-[#96ed08]"
                        size={19}
                      />
                      <p className="text-sm leading-6 text-white/55">
                        Serious safety, violence, harassment, discrimination,
                        fraud, identity, or illegal-conduct concerns may result
                        in immediate suspension while AkiGO reviews the matter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Core principles
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                The standard for every AkiGO interaction.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {corePrinciples.map(({ icon: Icon, title, text }) => (
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

        {/* GUIDELINES CONTENT */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container grid items-start gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                    <FileWarning size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                      Contents
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Community Guidelines
                    </p>
                  </div>
                </div>

                <nav
                  aria-label="Community Guidelines sections"
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
                  <CircleHelp
                    size={18}
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                  />

                  <p className="text-xs leading-5 text-white/42">
                    These Guidelines supplement the Terms of Service and other
                    role-specific or market-specific policies.
                  </p>
                </div>
              </div>
            </aside>

            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#090909] px-6 py-8 sm:px-10 sm:py-10">
              <div className="mb-10 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-5">
                <p className="text-sm leading-7 text-white/62">
                  By using AkiGO, you agree to follow these Guidelines, the Terms
                  of Service, applicable law, safety instructions, and any
                  additional rules that apply to your role or service.
                </p>
              </div>

              <GuidelineSection id="purpose" number="1" title="Purpose and Scope">
                <p>
                  These Community Guidelines establish minimum standards of
                  conduct across the AkiGO Platform. They apply to riders,
                  drivers, couriers, customers, merchants, businesses, account
                  holders, guests, employees of participating businesses, and
                  anyone interacting through AkiGO.
                </p>

                <p>
                  The Guidelines apply during rides, deliveries, pickups,
                  drop-offs, business transactions, support contacts, account
                  onboarding, communications, and other Platform-related
                  interactions, including conduct outside the Platform when it
                  creates a meaningful safety or trust risk.
                </p>
              </GuidelineSection>

              <GuidelineSection id="respect" number="2" title="Respectful Conduct">
                <p>
                  Treat every person with dignity, patience, and respect. Do not
                  insult, humiliate, threaten, intimidate, retaliate against, or
                  intentionally provoke another person.
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Use professional and appropriate language.
                  </GuidelineItem>
                  <GuidelineItem>
                    Respect personal boundaries and reasonable requests.
                  </GuidelineItem>
                  <GuidelineItem>
                    Avoid aggressive arguments and escalating conflict.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not retaliate against someone for reporting a concern or
                    exercising a legal right.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="discrimination"
                number="3"
                title="No Discrimination"
              >
                <p>
                  AkiGO does not permit discrimination based on race, color,
                  ethnicity, national origin, ancestry, religion, sex, gender,
                  gender identity, gender expression, sexual orientation,
                  pregnancy, age, disability, medical condition, marital or
                  family status, military or veteran status, genetic
                  information, citizenship, or any other characteristic
                  protected by law.
                </p>

                <p>
                  Drivers and couriers may not decline, cancel, avoid, delay, or
                  provide inferior service because of a protected
                  characteristic. Riders and customers may not request or reject
                  a service provider for a discriminatory reason.
                </p>

                <p>
                  Legitimate safety, vehicle-capacity, service-eligibility, or
                  legal concerns must be based on actual circumstances and not
                  stereotypes or prejudice.
                </p>
              </GuidelineSection>

              <GuidelineSection id="safety" number="4" title="Safety First">
                <p>
                  Everyone must act in a manner that supports safe rides,
                  deliveries, pickups, drop-offs, and interactions.
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Follow traffic, parking, seat-belt, child-restraint,
                    accessibility, delivery, and other applicable laws.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not pressure a driver or courier to speed, drive
                    dangerously, use an illegal route, or violate the law.
                  </GuidelineItem>
                  <GuidelineItem>
                    Keep entrances, exits, loading areas, and pickup points
                    reasonably safe and accessible.
                  </GuidelineItem>
                  <GuidelineItem>
                    Report accidents, emergencies, threats, suspected
                    impairment, and serious safety incidents promptly.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="violence"
                number="5"
                title="Violence, Threats, and Harassment"
              >
                <p>
                  Violence, attempted violence, threats, stalking, intimidation,
                  coercion, harassment, bullying, and retaliation are
                  prohibited.
                </p>

                <p>
                  This includes physical assault, threatening gestures, credible
                  threats of harm, blocking someone from leaving, following
                  someone after a journey, attempting to locate someone outside
                  the service, or using personal information to intimidate or
                  harass.
                </p>

                <p>
                  Weapons or objects used to threaten another person may result
                  in immediate removal and referral to law enforcement.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="sexual-misconduct"
                number="6"
                title="Sexual Misconduct"
              >
                <p>
                  Sexual assault, sexual contact without consent, exposure,
                  sexual activity during a ride or delivery, sexual harassment,
                  unwanted flirting, explicit comments, requests for sexual
                  contact, displaying sexual content, or asking intrusive
                  questions about another person’s body or relationships are
                  prohibited.
                </p>

                <p>
                  Consent must be voluntary, informed, specific, and ongoing.
                  Silence, intoxication, fear, or inability to respond is not
                  consent.
                </p>

                <p>
                  A service request, tip, rating, payment, or personal
                  conversation never creates an obligation for romantic or
                  sexual interaction.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="rider-rules"
                number="7"
                title="Rider Responsibilities"
              >
                <GuidelineList>
                  <GuidelineItem>
                    Provide accurate pickup, destination, passenger, luggage,
                    accessibility, pet, and special-request information.
                  </GuidelineItem>
                  <GuidelineItem>
                    Request a vehicle type that can safely and legally
                    accommodate the trip.
                  </GuidelineItem>
                  <GuidelineItem>
                    Be ready at the pickup location and avoid unreasonable
                    delays.
                  </GuidelineItem>
                  <GuidelineItem>
                    Wear seat belts and properly secure children as required by
                    law.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not distract, touch, threaten, harass, or interfere with
                    the driver.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not smoke, vape, consume prohibited substances, or damage
                    the vehicle.
                  </GuidelineItem>
                  <GuidelineItem>
                    Take personal belongings when leaving the vehicle.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="driver-rules"
                number="8"
                title="Driver and Courier Responsibilities"
              >
                <GuidelineList>
                  <GuidelineItem>
                    Use only your approved account, identity, vehicle, and
                    device.
                  </GuidelineItem>
                  <GuidelineItem>
                    Maintain required licenses, documents, insurance, vehicle
                    condition, and eligibility.
                  </GuidelineItem>
                  <GuidelineItem>
                    Drive safely, follow the law, and remain free from
                    impairment and dangerous distraction.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not discriminate, retaliate, pressure, harass, or make
                    inappropriate comments.
                  </GuidelineItem>
                  <GuidelineItem>
                    Protect rider, customer, merchant, and delivery information.
                  </GuidelineItem>
                  <GuidelineItem>
                    Follow pickup, navigation, waiting, delivery, completion,
                    and support procedures.
                  </GuidelineItem>
                  <GuidelineItem>
                    Report accidents, unsafe conditions, account compromise, and
                    serious incidents promptly.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="delivery-rules"
                number="9"
                title="Delivery Standards"
              >
                <p>
                  Customers, merchants, businesses, and couriers must provide
                  accurate item descriptions, pickup and drop-off information,
                  handling instructions, access details, and recipient
                  information.
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Items must be lawfully eligible, properly packaged, and safe
                    to transport.
                  </GuidelineItem>
                  <GuidelineItem>
                    Couriers must not open, consume, replace, tamper with, or
                    misuse delivery contents.
                  </GuidelineItem>
                  <GuidelineItem>
                    Customers and merchants must not conceal dangerous,
                    regulated, illegal, or restricted items.
                  </GuidelineItem>
                  <GuidelineItem>
                    Completion evidence must be accurate and must not be
                    fabricated.
                  </GuidelineItem>
                  <GuidelineItem>
                    Missing, damaged, unsafe, inaccessible, or undeliverable
                    items should be reported through the approved workflow.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="business-rules"
                number="10"
                title="Business and Merchant Conduct"
              >
                <p>
                  Businesses and merchants must provide accurate product,
                  service, inventory, menu, pricing, preparation, pickup,
                  delivery, location, licensing, and account information.
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Treat customers, drivers, couriers, and AkiGO personnel
                    respectfully.
                  </GuidelineItem>
                  <GuidelineItem>
                    Maintain safe, lawful, and reasonably accessible pickup
                    locations.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not falsify preparation, order, delivery, inventory, or
                    completion information.
                  </GuidelineItem>
                  <GuidelineItem>
                    Control team access and remove unauthorized users promptly.
                  </GuidelineItem>
                  <GuidelineItem>
                    Comply with food safety, consumer protection, privacy,
                    accessibility, healthcare, and industry-specific laws.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="fraud"
                number="11"
                title="Fraud and Platform Manipulation"
              >
                <p>
                  Fraud, deception, account misuse, and manipulation of Platform
                  systems are prohibited.
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Do not create fake accounts, use another person’s identity,
                    or share an account.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not submit false documents, insurance, tax information,
                    photographs, completion records, or incident reports.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not use stolen payment methods, chargeback abuse, fake
                    refunds, payout fraud, or wallet manipulation.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not spoof location, manipulate dispatch, coordinate fake
                    trips, abuse promotions, or generate artificial activity.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not move AkiGO-arranged activity off-platform to avoid
                    fees, records, payment protections, or safety controls.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="property"
                number="12"
                title="Property, Cleanliness, and Damage"
              >
                <p>
                  Respect vehicles, packages, food, merchandise, homes,
                  businesses, pickup locations, devices, and other property.
                </p>

                <p>
                  Users may be responsible for documented damage, excessive
                  cleaning, unauthorized use, theft, tampering, or loss caused
                  by their conduct, subject to review and applicable law.
                </p>

                <p>
                  Drivers and couriers must keep approved vehicles and equipment
                  reasonably clean, safe, and suitable for service.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="privacy"
                number="13"
                title="Privacy and Personal Information"
              >
                <p>
                  Personal, trip, delivery, payment, location, business, and
                  contact information may be used only for authorized Platform,
                  safety, legal, or support purposes.
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Do not post, sell, expose, or share another person’s
                    information without authorization.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not contact someone after a journey for an unrelated or
                    unwanted purpose.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not photograph, record, track, or surveil another person
                    unlawfully or without required notice.
                  </GuidelineItem>
                  <GuidelineItem>
                    Do not use addresses, phone numbers, routes, or account
                    details to harass, locate, or retaliate against someone.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="communications"
                number="14"
                title="Communications and Content"
              >
                <p>
                  Messages, calls, reviews, ratings, photographs, instructions,
                  and other content must be accurate, relevant, and respectful.
                </p>

                <p>
                  Do not submit fraudulent, retaliatory, discriminatory,
                  threatening, sexually explicit, defamatory, misleading, or
                  privacy-invasive content.
                </p>

                <p>
                  Honest feedback and lawful opinions are permitted. Ratings and
                  reviews should reflect genuine experiences and should not be
                  used to pressure, punish, or extort another user.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="accessibility"
                number="15"
                title="Accessibility and Service Animals"
              >
                <p>
                  Users must comply with applicable disability-access and
                  service-animal laws. Drivers and businesses may not
                  discriminate against a person because of a disability,
                  mobility device, service animal, or reasonable
                  accommodation request.
                </p>

                <p>
                  Service animals are not pets. A pet fee, pet ride option, or
                  pet restriction must not be applied to a legally protected
                  service animal.
                </p>

                <p>
                  Riders should provide relevant accessibility information when
                  it is reasonably necessary for safe and suitable service.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="substances"
                number="16"
                title="Alcohol, Drugs, and Impairment"
              >
                <p>
                  Drivers and couriers must never provide services while
                  impaired by alcohol, cannabis, illegal drugs, prescription
                  medication, fatigue, illness, or any condition that makes
                  operation unsafe.
                </p>

                <p>
                  Riders and customers may not use illegal drugs, smoke, vape,
                  possess open containers where unlawful, or behave in a manner
                  that creates a safety risk.
                </p>

                <p>
                  If impairment is suspected and safety is at risk, end the
                  interaction when safely possible and contact emergency
                  services or AkiGO support as appropriate.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="weapons"
                number="17"
                title="Weapons and Dangerous Items"
              >
                <p>
                  Users must comply with all laws governing weapons. Threatening
                  another person with a weapon or using any object to intimidate
                  or harm someone is prohibited.
                </p>

                <p>
                  Firearms, explosives, hazardous chemicals, and other dangerous
                  items may not be transported or delivered through AkiGO unless
                  a future specialized service expressly authorizes them and all
                  legal, licensing, safety, and insurance requirements are met.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="prohibited-items"
                number="18"
                title="Prohibited Delivery Items"
              >
                <p>
                  Unless AkiGO expressly approves a lawful specialized service,
                  prohibited or restricted delivery items may include:
                </p>

                <GuidelineList>
                  <GuidelineItem>
                    Illegal drugs, controlled substances, stolen property, and
                    counterfeit goods.
                  </GuidelineItem>
                  <GuidelineItem>
                    Firearms, ammunition, explosives, incendiary devices, and
                    regulated weapons.
                  </GuidelineItem>
                  <GuidelineItem>
                    Hazardous chemicals, biological materials, radioactive
                    materials, and unsafe batteries.
                  </GuidelineItem>
                  <GuidelineItem>
                    Alcohol, tobacco, nicotine, cannabis, prescription
                    medication, or age-restricted products without an approved
                    compliant program.
                  </GuidelineItem>
                  <GuidelineItem>
                    Cash, negotiable instruments, extremely high-value items,
                    live animals, human remains, or other items AkiGO determines
                    are unsuitable.
                  </GuidelineItem>
                </GuidelineList>
              </GuidelineSection>

              <GuidelineSection
                id="children"
                number="19"
                title="Minors and Family Safety"
              >
                <p>
                  Adults are responsible for minors traveling with them and must
                  comply with child-supervision and child-restraint laws.
                </p>

                <p>
                  Children may not be left unattended where doing so would be
                  unsafe or unlawful. AkiGO may require an adult account holder
                  or authorized program for trips involving unaccompanied
                  minors.
                </p>

                <p>
                  Car-seat requests do not remove the responsible adult’s duty to
                  ensure that a child is correctly secured and that the selected
                  restraint is appropriate.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="emergencies"
                number="20"
                title="Emergencies and Incident Reporting"
              >
                <p>
                  AkiGO is not an emergency-response provider. Contact the
                  appropriate local police, fire, ambulance, or emergency
                  service when immediate help is required.
                </p>

                <p>
                  After addressing immediate danger, report relevant
                  Platform-related concerns through AkiGO safety or support
                  channels. Provide accurate details and preserve messages,
                  photographs, receipts, location information, and other
                  evidence.
                </p>

                <p>
                  Knowingly submitting a false emergency, fraud, safety, or
                  misconduct report is prohibited.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="enforcement"
                number="21"
                title="Enforcement and Account Action"
              >
                <p>
                  AkiGO may review reports, account activity, trip and delivery
                  records, communications, payment information, documents,
                  device information, location information, ratings, support
                  history, and other relevant evidence.
                </p>

                <p>
                  Possible actions include education, warning, feature
                  restriction, document re-verification, payment or payout hold,
                  temporary suspension, permanent deactivation, referral to
                  insurers, referral to law enforcement, or other appropriate
                  action.
                </p>

                <p>
                  AkiGO considers available information, severity, repetition,
                  intent, safety risk, credibility, legal requirements, and
                  account history. Immediate action may be taken when necessary
                  to protect safety, prevent fraud, or comply with law.
                </p>
              </GuidelineSection>

              <GuidelineSection id="appeals" number="22" title="Reviews and Appeals">
                <p>
                  Where appropriate and legally required, a user may request
                  review of an account decision by providing relevant
                  information through the designated support or appeal process.
                </p>

                <p>
                  An appeal does not guarantee reinstatement. AkiGO may maintain
                  restrictions when evidence supports the action, when required
                  by law, or when the risk cannot be resolved.
                </p>

                <p>
                  AkiGO may decline repeated, abusive, fraudulent, or unsupported
                  appeals.
                </p>
              </GuidelineSection>

              <GuidelineSection
                id="changes"
                number="23"
                title="Updates to These Guidelines"
              >
                <p>
                  AkiGO may update these Guidelines to reflect changes in
                  services, safety practices, legal requirements, technology,
                  markets, and operations.
                </p>

                <p>
                  Updated Guidelines will display a revised “Last Updated” date.
                  Additional notice or consent will be provided where required.
                </p>
              </GuidelineSection>

              <GuidelineSection id="contact" number="24" title="Contact AkiGO">
                <p>
                  Questions, non-emergency reports, and requests for review may
                  be directed to:
                </p>

                <div className="rounded-2xl border border-white/[0.09] bg-black/45 p-5">
                  <p className="font-bold text-white">
                    AkiGO Technologies LLC
                  </p>

                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Community%20Guidelines`}
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

                  <p className="mt-2">
                    Safety Center:{" "}
                    <Link
                      href="/safety-center"
                      className="font-semibold text-[#96ed08] hover:underline"
                    >
                      /safety-center
                    </Link>
                  </p>
                </div>
              </GuidelineSection>
            </article>
          </div>
        </section>

        {/* PROHIBITED CONDUCT */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Never acceptable
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Conduct that can result in immediate action.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO may suspend access while investigating serious safety,
                identity, fraud, violence, harassment, or illegal-conduct
                reports.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {prohibitedConduct.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-4"
                >
                  <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-[#96ed08]/10 text-[#96ed08]">
                    <Ban size={16} />
                  </div>

                  <p className="font-semibold leading-6 text-white/68">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REPORTING */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Reporting concerns
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Report accurately and act quickly.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {reportingSteps.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <Icon size={22} />
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
        </section>

        {/* ENFORCEMENT */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Account enforcement
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Responses should match the seriousness of the concern.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                AkiGO may take immediate action when necessary for safety, fraud
                prevention, legal compliance, or protection of the Platform.
              </p>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {enforcementLevels.map(({ number, title, text }) => (
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

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Need to report a concern?
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Contact AkiGO safety support.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    For immediate danger, contact local emergency services
                    first. Use AkiGO for non-emergency Platform reporting and
                    follow-up.
                  </p>
                </div>

                <Link
                  href="/safety-center"
                  className={`${primaryButton} shrink-0`}
                >
                  Open Safety Center
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
