import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  Cookie,
  Eye,
  FileText,
  Gauge,
  Globe2,
  LockKeyhole,
  Megaphone,
  MonitorCog,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  TimerReset,
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
  { id: "introduction", label: "1. Introduction" },
  { id: "what-are-cookies", label: "2. What Are Cookies?" },
  { id: "technologies", label: "3. Similar Technologies" },
  { id: "categories", label: "4. Cookie Categories" },
  { id: "essential", label: "5. Essential Cookies" },
  { id: "preferences", label: "6. Preference Cookies" },
  { id: "performance", label: "7. Performance Cookies" },
  { id: "analytics", label: "8. Analytics Cookies" },
  { id: "advertising", label: "9. Advertising Cookies" },
  { id: "security", label: "10. Security Technologies" },
  { id: "third-parties", label: "11. Third-Party Technologies" },
  { id: "retention", label: "12. Cookie Retention" },
  { id: "manage", label: "13. Managing Cookies" },
  { id: "browser-controls", label: "14. Browser Controls" },
  { id: "signals", label: "15. Privacy Signals" },
  { id: "children", label: "16. Children’s Privacy" },
  { id: "changes", label: "17. Changes to This Policy" },
  { id: "contact", label: "18. Contact Us" },
];

const cookieCategories = [
  {
    icon: LockKeyhole,
    title: "Essential",
    status: "Required",
    text: "Support core website functions, security, authentication, routing, and session management.",
  },
  {
    icon: SlidersHorizontal,
    title: "Preferences",
    status: "Optional where used",
    text: "Remember choices such as language, display settings, accessibility options, and regional preferences.",
  },
  {
    icon: Gauge,
    title: "Performance",
    status: "Optional where used",
    text: "Help identify errors, performance problems, and opportunities to improve page speed and reliability.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    status: "Only if enabled",
    text: "Help understand website traffic, page usage, navigation patterns, and feature engagement.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    status: "Not currently intended",
    text: "May support advertising, attribution, remarketing, or cross-site measurement only if introduced later.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    status: "Required where used",
    text: "Help detect abuse, prevent fraud, protect forms, and maintain website and account integrity.",
  },
];

const browserControls = [
  {
    title: "Google Chrome",
    text: "Use Chrome privacy and security settings to view, block, or delete site data.",
  },
  {
    title: "Apple Safari",
    text: "Use Safari privacy settings to manage website data and tracking preferences.",
  },
  {
    title: "Mozilla Firefox",
    text: "Use Firefox privacy settings to manage cookies, trackers, and stored site data.",
  },
  {
    title: "Microsoft Edge",
    text: "Use Edge privacy settings to control cookies, tracking prevention, and stored data.",
  },
];

const thirdPartyExamples = [
  {
    title: "Hosting and security",
    text: "Infrastructure, hosting, content delivery, security, and fraud-prevention providers may use necessary technologies.",
  },
  {
    title: "Maps and location",
    text: "Map and location providers may receive technical or location-related information when embedded services are used.",
  },
  {
    title: "Payments",
    text: "Payment providers may use their own cookies or similar technologies when payment features are presented.",
  },
  {
    title: "Analytics",
    text: "Analytics providers may use identifiers or storage only if AkiGO enables those tools and provides required notice or choice.",
  },
];

function PolicySection({
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

function PolicyList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 pl-1">{children}</ul>;
}

function PolicyItem({ children }: { children: React.ReactNode }) {
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

export default function CookiePolicyPage() {
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
                Cookie
                <br />
                <span className="text-[#96ed08]">Policy.</span>
              </h1>

              <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/60">
                This Policy explains how AkiGO may use cookies, browser storage,
                software development kits, pixels, and similar technologies on
                our website and related digital experiences.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#introduction" className={primaryButton}>
                  Read the Policy
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

            {/* COOKIE OVERVIEW */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Cookie overview
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Clear choices for website technologies.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Cookie size={25} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: LockKeyhole, label: "Essential" },
                      { icon: SlidersHorizontal, label: "Preferences" },
                      { icon: Gauge, label: "Performance" },
                      { icon: BarChart3, label: "Analytics" },
                      { icon: ShieldCheck, label: "Security" },
                      { icon: Settings2, label: "User controls" },
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
                      This Policy must be updated to match the exact cookies,
                      analytics providers, embedded services, consent banner,
                      retention periods, and advertising tools active on the
                      production website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY CARDS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Cookie categories
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Different technologies serve different purposes.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                The categories below describe technologies AkiGO may use. The
                production website should display only categories and vendors
                that are actually active.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {cookieCategories.map(({ icon: Icon, title, status, text }) => (
                <article
                  key={title}
                  className="relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.045] blur-[70px]" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                        <Icon size={24} />
                      </div>

                      <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white/38">
                        {status}
                      </span>
                    </div>

                    <h3 className="font-display mt-7 text-2xl font-bold">
                      {title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/50">{text}</p>
                  </div>
                </article>
              ))}
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
                      Cookie Policy
                    </p>
                  </div>
                </div>

                <nav
                  aria-label="Cookie Policy sections"
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
                  <Eye
                    size={18}
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                  />
                  <p className="text-xs leading-5 text-white/42">
                    Blocking all cookies can prevent essential website features
                    from functioning correctly.
                  </p>
                </div>
              </div>
            </aside>

            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#090909] px-6 py-8 sm:px-10 sm:py-10">
              <div className="mb-10 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-5">
                <p className="text-sm leading-7 text-white/62">
                  A cookie is a small piece of information stored by a web
                  browser or device. Cookies and similar technologies can help a
                  website recognize a browser, remember settings, maintain
                  security, understand usage, and provide requested features.
                </p>
              </div>

              <PolicySection id="introduction" number="1" title="Introduction">
                <p>
                  This Cookie Policy explains how AkiGO Technologies LLC
                  (“AkiGO,” “we,” “us,” or “our”) may use cookies and similar
                  technologies when you visit our websites or interact with
                  digital services that link to this Policy.
                </p>

                <p>
                  This Policy should be read together with the AkiGO Privacy
                  Policy, which describes how we collect, use, share, retain, and
                  protect personal information more broadly.
                </p>
              </PolicySection>

              <PolicySection
                id="what-are-cookies"
                number="2"
                title="What Are Cookies?"
              >
                <p>
                  Cookies are small text files or data records that a website
                  can place on your browser or device. They may allow the website
                  to recognize your browser, remember choices, maintain a
                  session, protect a form, or understand how the website is used.
                </p>

                <p>
                  Cookies may be placed directly by AkiGO (“first-party
                  cookies”) or by a provider whose technology appears on or
                  supports the website (“third-party cookies”).
                </p>

                <p>
                  Session cookies generally expire when the browser session
                  ends. Persistent cookies may remain until they expire or are
                  deleted through browser or device controls.
                </p>
              </PolicySection>

              <PolicySection
                id="technologies"
                number="3"
                title="Similar Technologies"
              >
                <p>
                  This Policy also applies to similar technologies that can store
                  information, identify a browser or device, or measure
                  interactions, including:
                </p>

                <PolicyList>
                  <PolicyItem>Local storage and session storage.</PolicyItem>
                  <PolicyItem>
                    Software development kits used in mobile or web
                    applications.
                  </PolicyItem>
                  <PolicyItem>
                    Pixels, tags, scripts, and event-measurement technologies.
                  </PolicyItem>
                  <PolicyItem>
                    Device identifiers, browser identifiers, and security
                    tokens.
                  </PolicyItem>
                  <PolicyItem>
                    Cached data, embedded content, and similar storage
                    mechanisms.
                  </PolicyItem>
                </PolicyList>
              </PolicySection>

              <PolicySection
                id="categories"
                number="4"
                title="Cookie Categories"
              >
                <p>
                  AkiGO may classify cookies and similar technologies according
                  to their purpose. Categories may include essential,
                  preference, performance, analytics, advertising, and security
                  technologies.
                </p>

                <p>
                  Not every category is necessarily active. AkiGO should maintain
                  a current cookie inventory and update this Policy and any
                  consent interface whenever vendors or technologies change.
                </p>
              </PolicySection>

              <PolicySection
                id="essential"
                number="5"
                title="Essential Cookies"
              >
                <p>
                  Essential cookies support website functions that are necessary
                  to provide a requested service, maintain security, or operate
                  core features.
                </p>

                <PolicyList>
                  <PolicyItem>Maintaining a session or authenticated state.</PolicyItem>
                  <PolicyItem>
                    Routing traffic and delivering website content.
                  </PolicyItem>
                  <PolicyItem>
                    Protecting forms against abuse or unauthorized requests.
                  </PolicyItem>
                  <PolicyItem>
                    Remembering privacy or cookie-consent choices.
                  </PolicyItem>
                  <PolicyItem>
                    Supporting security, fraud prevention, and load balancing.
                  </PolicyItem>
                </PolicyList>

                <p>
                  Essential cookies generally cannot be disabled through a
                  cookie-preference tool because the website may not function
                  correctly without them. They may still be blocked through
                  browser settings, but doing so can break important features.
                </p>
              </PolicySection>

              <PolicySection
                id="preferences"
                number="6"
                title="Preference Cookies"
              >
                <p>
                  Preference cookies may remember choices that change how the
                  website appears or behaves.
                </p>

                <PolicyList>
                  <PolicyItem>Language or regional preferences.</PolicyItem>
                  <PolicyItem>Display, theme, or interface preferences.</PolicyItem>
                  <PolicyItem>Accessibility-related selections.</PolicyItem>
                  <PolicyItem>
                    Previously selected website or form options.
                  </PolicyItem>
                </PolicyList>

                <p>
                  If preference cookies are not enabled, some settings may need
                  to be selected again during a later visit.
                </p>
              </PolicySection>

              <PolicySection
                id="performance"
                number="7"
                title="Performance Cookies"
              >
                <p>
                  Performance technologies may help identify technical problems,
                  measure page speed, understand browser compatibility, diagnose
                  errors, and improve reliability.
                </p>

                <p>
                  Information may include page-load timing, error details,
                  browser and device characteristics, application version,
                  connection information, and interaction events.
                </p>

                <p>
                  AkiGO should configure performance tools to collect only what
                  is reasonably necessary and should avoid sending sensitive
                  information through diagnostic events.
                </p>
              </PolicySection>

              <PolicySection
                id="analytics"
                number="8"
                title="Analytics Cookies"
              >
                <p>
                  Analytics cookies may help AkiGO understand how visitors find
                  and use the website, including pages viewed, navigation paths,
                  traffic sources, session duration, general location,
                  interactions, and feature usage.
                </p>

                <p>
                  AkiGO should not state that a particular analytics service is
                  active unless it is actually enabled. Before enabling
                  analytics, AkiGO should confirm whether consent, opt-out,
                  vendor-contract, retention, or state privacy requirements
                  apply.
                </p>

                <p>
                  Where required, analytics technologies will be disabled until
                  the visitor provides the necessary consent.
                </p>
              </PolicySection>

              <PolicySection
                id="advertising"
                number="9"
                title="Advertising Cookies"
              >
                <p>
                  AkiGO does not currently intend to use cross-site advertising,
                  remarketing, or behavioral advertising cookies on the
                  marketing website.
                </p>

                <p>
                  If advertising, attribution, social-media, or remarketing
                  technologies are introduced, AkiGO will update this Policy and
                  provide any legally required notice, consent, opt-out control,
                  or “Do Not Sell or Share” mechanism before using them.
                </p>

                <p>
                  Some privacy laws may define certain advertising or analytics
                  disclosures as “sale,” “sharing,” or “targeted advertising”
                  even when no money is exchanged.
                </p>
              </PolicySection>

              <PolicySection
                id="security"
                number="10"
                title="Security Technologies"
              >
                <p>
                  Security technologies may help protect AkiGO, visitors, forms,
                  accounts, and infrastructure from abuse and unauthorized
                  activity.
                </p>

                <PolicyList>
                  <PolicyItem>
                    Detecting suspicious requests, bots, scraping, or automated
                    abuse.
                  </PolicyItem>
                  <PolicyItem>
                    Protecting forms and preventing fraudulent submissions.
                  </PolicyItem>
                  <PolicyItem>
                    Maintaining session integrity and authentication.
                  </PolicyItem>
                  <PolicyItem>
                    Supporting rate limits, network security, and incident
                    response.
                  </PolicyItem>
                </PolicyList>
              </PolicySection>

              <PolicySection
                id="third-parties"
                number="11"
                title="Third-Party Technologies"
              >
                <p>
                  Some website features may depend on third-party services. Those
                  providers may use cookies or similar technologies under their
                  own policies.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {thirdPartyExamples.map(({ title, text }) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/[0.08] bg-black/40 p-4"
                    >
                      <h3 className="font-bold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/44">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <p>
                  Before launch, AkiGO should publish an accurate cookie or
                  vendor list identifying active providers, purposes, cookie
                  names where practical, and typical retention periods.
                </p>
              </PolicySection>

              <PolicySection
                id="retention"
                number="12"
                title="Cookie Retention"
              >
                <p>
                  Cookie retention depends on the technology and purpose.
                </p>

                <PolicyList>
                  <PolicyItem>
                    Session cookies may be removed when the browser closes.
                  </PolicyItem>
                  <PolicyItem>
                    Persistent cookies may remain until a stated expiration date
                    or until deleted.
                  </PolicyItem>
                  <PolicyItem>
                    Local storage may remain until the website, application, or
                    user removes it.
                  </PolicyItem>
                  <PolicyItem>
                    Security records and consent records may be retained longer
                    when reasonably necessary for compliance, fraud prevention,
                    or dispute resolution.
                  </PolicyItem>
                </PolicyList>

                <p>
                  AkiGO should configure retention periods to be no longer than
                  reasonably necessary for the stated purpose.
                </p>
              </PolicySection>

              <PolicySection
                id="manage"
                number="13"
                title="Managing Cookies"
              >
                <p>
                  Where a cookie-preference tool is available, you may be able to
                  accept or reject nonessential categories and update your
                  choices later.
                </p>

                <p>
                  Essential cookies may remain active because they support
                  requested website functions, security, and consent
                  preferences.
                </p>

                <p>
                  Deleting cookies can remove saved choices. You may need to set
                  your preferences again on a later visit or on another browser
                  or device.
                </p>
              </PolicySection>

              <PolicySection
                id="browser-controls"
                number="14"
                title="Browser Controls"
              >
                <p>
                  Most browsers allow you to review, delete, block, or limit
                  cookies and stored website data. Browser settings and menu
                  names can change, so consult your browser’s current help
                  documentation.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {browserControls.map(({ title, text }) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/[0.08] bg-black/40 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <MonitorCog className="text-[#96ed08]" size={19} />
                        <h3 className="font-bold text-white">{title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/44">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <p>
                  Blocking cookies does not necessarily prevent every similar
                  technology, such as server-side logs or device-level
                  identifiers.
                </p>
              </PolicySection>

              <PolicySection
                id="signals"
                number="15"
                title="Do Not Track and Privacy Signals"
              >
                <p>
                  Some browsers offer a “Do Not Track” setting. Because there is
                  not one universally applied Do Not Track standard, AkiGO may
                  not respond to that signal unless required by applicable law.
                </p>

                <p>
                  Certain laws may require businesses to recognize supported
                  opt-out preference signals, such as a Global Privacy Control,
                  for covered sale, sharing, or targeted-advertising activity.
                  AkiGO will evaluate and honor legally required signals when
                  applicable to its actual practices.
                </p>

                <p>
                  If AkiGO does not engage in covered advertising or data-sharing
                  activity, an opt-out signal may not change the operation of
                  essential website technologies.
                </p>
              </PolicySection>

              <PolicySection
                id="children"
                number="16"
                title="Children’s Privacy"
              >
                <p>
                  AkiGO’s website is not directed to children under thirteen.
                  Persistent identifiers and similar technologies can be treated
                  as personal information under children’s privacy laws when
                  used in services directed to children or when AkiGO has actual
                  knowledge that a user is a child.
                </p>

                <p>
                  AkiGO should not knowingly use nonessential tracking
                  technologies to profile children or deliver targeted
                  advertising to children.
                </p>
              </PolicySection>

              <PolicySection
                id="changes"
                number="17"
                title="Changes to This Policy"
              >
                <p>
                  AkiGO may update this Cookie Policy when website technologies,
                  vendors, legal requirements, consent practices, or business
                  operations change.
                </p>

                <p>
                  The updated Policy will display a revised “Last Updated” date.
                  Where required, AkiGO will provide additional notice or request
                  consent before introducing materially different nonessential
                  tracking practices.
                </p>
              </PolicySection>

              <PolicySection id="contact" number="18" title="Contact Us">
                <p>
                  Questions about cookies, website storage, or privacy choices
                  may be directed to:
                </p>

                <div className="rounded-2xl border border-white/[0.09] bg-black/45 p-5">
                  <p className="font-bold text-white">
                    AkiGO Technologies LLC
                  </p>

                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Cookie%20Policy`}
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
                    Privacy Policy:{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold text-[#96ed08] hover:underline"
                    >
                      /privacy
                    </Link>
                  </p>
                </div>
              </PolicySection>
            </article>
          </div>
        </section>

        {/* CONTROL PRINCIPLES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Cookie controls
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Transparency should match the real website.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: Cookie,
                  title: "Inventory",
                  text: "Maintain an accurate list of active cookies, storage technologies, and vendors.",
                },
                {
                  icon: Settings2,
                  title: "Choice",
                  text: "Offer legally required controls for nonessential categories and covered advertising activity.",
                },
                {
                  icon: TimerReset,
                  title: "Retention",
                  text: "Set expiration periods that are appropriate for each technology’s stated purpose.",
                },
                {
                  icon: Globe2,
                  title: "Consistency",
                  text: "Keep the policy, consent banner, vendor configuration, and privacy disclosures aligned.",
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
                    Need help with cookies or website data?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Contact AkiGO for questions about cookies, browser storage,
                    tracking technologies, or privacy controls.
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
