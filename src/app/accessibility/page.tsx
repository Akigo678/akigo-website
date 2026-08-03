import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Captions,
  Check,
  Contrast,
  Ear,
  Eye,
  FileText,
  Focus,
  Hand,
  Keyboard,
  Languages,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  ScanText,
  Settings2,
  ShieldCheck,
  Smartphone,
  Type,
  UserRoundCheck,
  Volume2,
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
  { id: "commitment", label: "1. Our Accessibility Commitment" },
  { id: "standard", label: "2. Accessibility Standard" },
  { id: "scope", label: "3. Scope of This Statement" },
  { id: "features", label: "4. Accessibility Features" },
  { id: "keyboard", label: "5. Keyboard and Focus Support" },
  { id: "visual", label: "6. Visual Accessibility" },
  { id: "screen-readers", label: "7. Screen Reader Support" },
  { id: "forms", label: "8. Forms and Error Handling" },
  { id: "media", label: "9. Audio and Video Content" },
  { id: "mobile", label: "10. Mobile Accessibility" },
  { id: "continuous-improvement", label: "11. Continuous Improvement and Testing" },
  { id: "compatibility", label: "12. Browser and Platform Compatibility" },
  { id: "limitations", label: "13. Known Limitations" },
  { id: "third-party", label: "14. Third-Party Content" },
  { id: "alternatives", label: "15. Alternative Access" },
  { id: "feedback", label: "16. Accessibility Feedback" },
  { id: "response", label: "17. How We Review Reports" },
  { id: "changes", label: "18. Updates to This Statement" },
  { id: "contact", label: "19. Contact Information" },
];

const accessibilityAreas = [
  {
    icon: Keyboard,
    title: "Keyboard access",
    text: "Navigation, links, controls, and forms should be usable without requiring a mouse.",
  },
  {
    icon: Focus,
    title: "Visible focus",
    text: "Interactive elements should provide a clear visible focus indicator.",
  },
  {
    icon: Contrast,
    title: "Color and contrast",
    text: "Text and controls should remain readable and should not rely on color alone.",
  },
  {
    icon: ScanText,
    title: "Clear structure",
    text: "Headings, labels, landmarks, and content order should support understandable navigation.",
  },
  {
    icon: Eye,
    title: "Text alternatives",
    text: "Meaningful images and icons should include appropriate text alternatives where needed.",
  },
  {
    icon: Smartphone,
    title: "Responsive access",
    text: "Content should remain usable across desktop, tablet, mobile, and zoomed layouts.",
  },
];

const supportFeatures = [
  "Semantic headings and page landmarks",
  "Descriptive page titles and link text",
  "Visible keyboard focus indicators",
  "Form labels and required-field identification",
  "Error messages that explain how to correct a problem",
  "Text resizing and browser zoom support",
  "Reduced reliance on color alone",
  "Alternative text for meaningful visual content",
  "Consistent navigation and help locations",
  "Touch targets designed for practical interaction",
];

const knownLimitations = [
  {
    title: "Third-party embedded services",
    text: "Maps, payment interfaces, app-store content, and other embedded services may have accessibility behavior controlled by their providers.",
  },
  {
    title: "New and developing features",
    text: "Some AkiGO features remain under development and may not yet meet every intended accessibility requirement.",
  },
  {
    title: "Generated or uploaded content",
    text: "User, merchant, driver, or partner-submitted images, documents, descriptions, and attachments may not always include complete accessibility information.",
  },
  {
    title: "Complex map interactions",
    text: "Interactive maps and live route visualizations may require alternative text-based trip or delivery information.",
  },
];

const feedbackDetails = [
  "The page, feature, or screen where the issue occurred",
  "A short description of the accessibility barrier",
  "The device and browser or app version being used",
  "The assistive technology being used, if applicable",
  "The format or alternative that would be most helpful",
];

function StatementSection({
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

function StatementList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-3 pl-1">{children}</ul>;
}

function StatementItem({ children }: { children: React.ReactNode }) {
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

export default function AccessibilityPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[630px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO accessibility
              </div>

              <h1 className="font-display mt-6 max-w-[790px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                Designed for more people to
                <br />
                <span className="text-[#96ed08]">move with confidence.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-lg leading-8 text-white/60">
                AkiGO is committed to improving digital accessibility across our
                website, mobile experiences, support tools, ride services,
                delivery services, and business platform.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#commitment" className={primaryButton}>
                  Read our commitment
                  <ArrowRight size={18} />
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Accessibility%20Feedback`}
                  className={secondaryButton}
                >
                  Report an accessibility issue
                </a>
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

            {/* ACCESSIBILITY OVERVIEW */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-7 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        Accessibility goal
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Committed to WCAG 2.2 Level AA.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <UserRoundCheck size={25} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Keyboard, label: "Keyboard access" },
                      { icon: Eye, label: "Screen readers" },
                      { icon: Contrast, label: "Readable contrast" },
                      { icon: Type, label: "Text resizing" },
                      { icon: Captions, label: "Media access" },
                      { icon: Smartphone, label: "Mobile access" },
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
                      AkiGO is committed to designing and improving its digital experiences in alignment with WCAG 2.2 Level AA. Accessibility is an ongoing process, and we continue to evaluate, test, and improve our products as the platform evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACCESSIBILITY AREAS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Accessibility areas
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Practical access across the experience.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                AkiGO’s accessibility work is intended to support people with a
                wide range of visual, hearing, mobility, speech, cognitive, and
                neurological disabilities.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {accessibilityAreas.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.045] blur-[70px]" />

                  <div className="relative">
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                      <Icon size={24} />
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

        {/* STATEMENT CONTENT */}
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
                      Accessibility Statement
                    </p>
                  </div>
                </div>

                <nav
                  aria-label="Accessibility Statement sections"
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
                  <MessageCircle
                    size={18}
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                  />
                  <p className="text-xs leading-5 text-white/42">
                    Accessibility feedback helps AkiGO identify barriers that
                    automated testing may not detect.
                  </p>
                </div>
              </div>
            </aside>

            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#090909] px-6 py-8 sm:px-10 sm:py-10">
              <div className="mb-10 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-5">
                <p className="text-sm leading-7 text-white/62">
                  AkiGO Technologies LLC (“AkiGO,” “we,” “us,” or “our”) is
                  committed to improving access to our digital experiences for
                  people with disabilities. Accessibility is an ongoing process
                  involving design, engineering, content, testing, support, and
                  user feedback.
                </p>
              </div>

              <StatementSection
                id="commitment"
                number="1"
                title="Our Accessibility Commitment"
              >
                <p>
                  AkiGO seeks to provide digital experiences that are usable by
                  as many people as reasonably possible, including people who
                  use screen readers, keyboards, voice control, switch devices,
                  magnification, captions, alternative input devices, and other
                  assistive technologies.
                </p>

                <p>
                  We intend to consider accessibility throughout planning,
                  design, development, testing, content creation, support, and
                  product updates rather than treating it as a one-time task.
                </p>
              </StatementSection>

              <StatementSection
                id="standard"
                number="2"
                title="Accessibility Standard"
              >
                <p>
                  AkiGO is committed to designing and improving its websites and digital products in alignment with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
                </p>

                <p>
                  WCAG provides testable guidance for making digital content more perceivable, operable, understandable, and robust. Although AkiGO is working toward WCAG 2.2 Level AA alignment, we do not represent that every page, screen, component, or third-party integration has achieved full conformance.
                </p>

                <p>
                  Accessibility obligations may also arise under applicable
                  disability, consumer-protection, transportation, employment,
                  and public-accommodation laws.
                </p>
              </StatementSection>

              <StatementSection
                id="scope"
                number="3"
                title="Scope of This Statement"
              >
                <p>
                  This statement applies to AkiGO digital experiences that link
                  to it, including the marketing website, rider application,
                  driver application, delivery features, business tools, help
                  content, safety content, account experiences, and support
                  workflows.
                </p>

                <p>
                  Separate accessibility requirements or accommodations may
                  apply to employment, business partnerships, transportation
                  services, healthcare-related services, physical facilities,
                  or other specialized programs.
                </p>
              </StatementSection>

              <StatementSection
                id="features"
                number="4"
                title="Accessibility Features"
              >
                <p>
                  Depending on the page, application, device, and stage of
                  development, AkiGO seeks to support:
                </p>

                <StatementList>
                  {supportFeatures.map((item) => (
                    <StatementItem key={item}>{item}</StatementItem>
                  ))}
                </StatementList>
              </StatementSection>

              <StatementSection
                id="keyboard"
                number="5"
                title="Keyboard and Focus Support"
              >
                <p>
                  Interactive content should be operable using a keyboard or
                  equivalent input method. Users should be able to move through
                  links, buttons, menus, forms, dialogs, and other controls in a
                  logical order.
                </p>

                <p>
                  Focus indicators should remain visible and should not be
                  obscured by sticky headers, overlays, or other content.
                  Keyboard focus should not become trapped except where a
                  properly managed modal experience requires it.
                </p>
              </StatementSection>

              <StatementSection
                id="visual"
                number="6"
                title="Visual Accessibility"
              >
                <p>
                  AkiGO seeks to provide readable text, sufficient contrast,
                  scalable layouts, understandable spacing, and controls that do
                  not rely only on color, position, shape, or animation to
                  communicate meaning.
                </p>

                <StatementList>
                  <StatementItem>
                    Text should remain usable when enlarged or zoomed.
                  </StatementItem>
                  <StatementItem>
                    Content should reflow where reasonably possible without
                    requiring unnecessary horizontal scrolling.
                  </StatementItem>
                  <StatementItem>
                    Status, error, warning, and success information should use
                    text or icons in addition to color.
                  </StatementItem>
                  <StatementItem>
                    Motion and animation should avoid unnecessary flashing and
                    should respect reduced-motion settings where supported.
                  </StatementItem>
                </StatementList>
              </StatementSection>

              <StatementSection
                id="screen-readers"
                number="7"
                title="Screen Reader Support"
              >
                <p>
                  AkiGO strives to support commonly used assistive technologies, including screen readers, screen magnifiers, voice-recognition software, keyboard-only navigation, switch devices, and mobile accessibility features. We use semantic HTML, meaningful heading order, page landmarks, form labels, accessible names, status announcements, and alternative text to support accessible navigation.
                </p>

                <p>
                  Decorative images should generally be hidden from assistive
                  technologies, while meaningful images should provide an
                  equivalent text alternative. Complex maps, charts, and
                  visualizations may require a text-based alternative.
                </p>
              </StatementSection>

              <StatementSection
                id="forms"
                number="8"
                title="Forms and Error Handling"
              >
                <p>
                  Forms should provide visible labels, clear instructions,
                  understandable required-field indicators, and error messages
                  that identify the affected field and explain how to correct
                  the problem.
                </p>

                <p>
                  Where practical, forms should preserve valid information after
                  an error and avoid requiring users to repeatedly enter the same
                  information. Authentication should not unnecessarily depend on
                  memory, puzzles, or inaccessible interactions.
                </p>
              </StatementSection>

              <StatementSection
                id="media"
                number="9"
                title="Audio and Video Content"
              >
                <p>
                  When AkiGO publishes prerecorded video with meaningful spoken
                  content, we seek to provide captions or an equivalent
                  alternative. Audio-only content should include a transcript
                  where reasonably necessary.
                </p>

                <p>
                  Important visual information in video may require audio
                  description or an equivalent text explanation. Media should
                  not autoplay with sound without an accessible method to pause,
                  stop, or control it.
                </p>
              </StatementSection>

              <StatementSection
                id="mobile"
                number="10"
                title="Mobile Accessibility"
              >
                <p>
                  AkiGO’s rider and driver experiences are designed to support applicable mobile accessibility features, including screen readers, dynamic text where supported, logical focus order, accessible touch targets, device orientation, and clear labels for controls.
                </p>

                <p>
                  Location, maps, gestures, notifications, live trip updates, and safety workflows are evaluated with assistive technologies such as iOS VoiceOver, Android TalkBack, keyboard access, switch control, magnification, and voice input whenever practical.
                </p>
              </StatementSection>

              <StatementSection
                id="continuous-improvement"
                number="11"
                title="Continuous Improvement and Testing"
              >
                <p>
                  Accessibility is an ongoing process. AkiGO regularly evaluates
                  digital experiences, reviews user feedback, and improves
                  accessibility as new features are designed, developed, tested,
                  and released.
                </p>

                <p>
                  Accessibility considerations are incorporated into product
                  planning, design reviews, engineering, content creation, and
                  quality assurance whenever practical. Testing may include
                  automated tools, keyboard review, screen-reader testing,
                  contrast evaluation, zoom and reflow checks, and manual review
                  of important user journeys.
                </p>
              </StatementSection>

              <StatementSection
                id="compatibility"
                number="12"
                title="Browser and Platform Compatibility"
              >
                <p>
                  AkiGO designs its website to work with current versions of
                  major browsers, including Google Chrome, Apple Safari, Mozilla
                  Firefox, and Microsoft Edge, as well as modern iOS and Android
                  devices.
                </p>

                <p>
                  Accessibility behavior can vary by browser, operating system,
                  assistive technology, device settings, and software version.
                  Keeping browsers, operating systems, applications, and
                  assistive technologies up to date may provide the best
                  experience.
                </p>
              </StatementSection>

              <StatementSection
                id="limitations"
                number="13"
                title="Known Limitations"
              >
                <p>
                  AkiGO is still developing and testing parts of the Platform.
                  Known or reasonably anticipated limitations may include:
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {knownLimitations.map(({ title, text }) => (
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
                  We update this section as testing identifies specific barriers and as remediation work is completed.
                </p>
              </StatementSection>

              <StatementSection
                id="third-party"
                number="14"
                title="Third-Party Content and Services"
              >
                <p>
                  AkiGO may use third-party maps, payment interfaces, app-store
                  pages, identity services, communication tools, documents,
                  embedded content, and other integrations.
                </p>

                <p>
                  We do not fully control the accessibility of third-party services. We consider accessibility when selecting and configuring providers and seek to offer an alternative where reasonably possible when a third-party barrier prevents access.
                </p>
              </StatementSection>

              <StatementSection
                id="alternatives"
                number="15"
                title="Alternative Access"
              >
                <p>
                  If a digital feature, document, form, map, or piece of content
                  is not accessible to you, contact AkiGO and describe the
                  information or service you need.
                </p>

                <p>
                  Where reasonably possible, AkiGO provides information in an alternative format, assists with completing a process, explains a visual element, or offers another access method.
                </p>

                <p>
                  Alternative access may depend on the request, available
                  technology, safety, identity verification, legal requirements,
                  and the nature of the service.
                </p>
              </StatementSection>

              <StatementSection
                id="feedback"
                number="16"
                title="Accessibility Feedback"
              >
                <p>
                  Accessibility feedback is welcome. Helpful reports may include:
                </p>

                <StatementList>
                  {feedbackDetails.map((item) => (
                    <StatementItem key={item}>{item}</StatementItem>
                  ))}
                </StatementList>

                <p>
                  Do not include passwords, verification codes, complete payment
                  card numbers, or unnecessary sensitive information in an
                  accessibility report.
                </p>
              </StatementSection>

              <StatementSection
                id="response"
                number="17"
                title="How We Review Reports"
              >
                <p>
                  AkiGO reviews accessibility reports based on severity, user impact, frequency, safety implications, technical complexity, available alternatives, and the scope of the affected service.
                </p>

                <p>
                  We do not promise a fixed resolution time. Some issues may be
                  addressed quickly, while others may require design changes,
                  engineering work, vendor coordination, legal review, or a
                  broader product update.
                </p>

                <p>
                  When practical, we provide a temporary alternative while a longer-term correction is evaluated.
                </p>
              </StatementSection>

              <StatementSection
                id="changes"
                number="18"
                title="Updates to This Statement"
              >
                <p>
                  AkiGO may update this Accessibility Statement as our products,
                  standards, testing practices, known limitations, contact
                  methods, and legal obligations change.
                </p>

                <p>
                  The revised statement will display an updated “Last Updated”
                  date. Significant accessibility changes may also be described
                  through other appropriate communications.
                </p>
              </StatementSection>

              <StatementSection
                id="contact"
                number="19"
                title="Contact Information"
              >
                <p>
                  To report an accessibility barrier, request an alternative
                  format, or ask an accessibility question, contact:
                </p>

                <div className="rounded-2xl border border-white/[0.09] bg-black/45 p-5">
                  <p className="font-bold text-white">
                    AkiGO Technologies LLC
                  </p>

                  <p className="mt-2">
                    Accessibility email:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Accessibility%20Feedback`}
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
                    Help Center:{" "}
                    <Link
                      href="/help"
                      className="font-semibold text-[#96ed08] hover:underline"
                    >
                      /help
                    </Link>
                  </p>
                </div>

                <p>
                  As AkiGO evolves, this Accessibility Statement may be updated to reflect improvements, new features, additional contact methods, and expanded accessibility support.
                </p>
              </StatementSection>
            </article>
          </div>
        </section>

        {/* PRACTICAL FEATURES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Designed for different needs
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Accessibility includes more than one technology.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: Eye,
                  title: "Visual access",
                  text: "Support contrast, zoom, magnification, alternative text, and screen-reader use.",
                },
                {
                  icon: Ear,
                  title: "Hearing access",
                  text: "Provide captions, transcripts, visual status information, and text-based communication.",
                },
                {
                  icon: Hand,
                  title: "Motor access",
                  text: "Support keyboard access, practical touch targets, voice input, and alternatives to complex gestures.",
                },
                {
                  icon: ScanText,
                  title: "Cognitive access",
                  text: "Use clear language, consistent layouts, understandable errors, and predictable interactions.",
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
                    Accessibility feedback
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Found a barrier on AkiGO?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Tell us what happened, what technology you were using, and
                    what alternative would help.
                  </p>
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=AkiGO%20Accessibility%20Feedback`}
                  className={`${primaryButton} shrink-0`}
                >
                  Report an accessibility issue
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
