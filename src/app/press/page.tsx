import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeInfo,
  Building2,
  CarFront,
  CircleHelp,
  FileArchive,
  FileImage,
  FileText,
  ImageIcon,
  Mail,
  MapPinned,
  Newspaper,
  PackageCheck,
  Palette,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const PRESS_EMAIL = "akigo678@gmail.com";

function createPressMailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });

  if (body) {
    params.set("body", body);
  }

  return `mailto:${PRESS_EMAIL}?${params.toString()}`;
}

const latestUpdates = [
  {
    category: "Platform development",
    title: "AkiGO continues preparing its mobility and delivery platform.",
    description:
      "Product development is focused on rider, driver, delivery, business, dispatch, safety, payment, and support experiences.",
    image: "/images/home/akigo-press-platform.png",
    alt: "A dark mobile navigation interface with a neon-green route",
  },
  {
    category: "Business",
    title: "Building tools for local business partnerships.",
    description:
      "AkiGO is developing business workflows for delivery, scheduled service, visibility, team access, and support.",
    image: "/images/home/akigo-press-business.png",
    alt: "Two business professionals shaking hands in a modern office setting",
  },
  {
    category: "Technology",
    title: "Routing, dispatch, and operational visibility remain key priorities.",
    description:
      "The platform is being designed around clearer trip information, route progress, assignment controls, and real-time status updates.",
    image: "/images/home/akigo-press-routing.png",
    alt: "A futuristic dark city map with a bright green route",
  },
  {
    category: "Safety",
    title: "Safety, security, and platform controls are part of the launch work.",
    description:
      "AkiGO is strengthening safety workflows, permissions, account controls, reporting, and production readiness.",
    image: "/images/home/akigo-press-safety.png",
    alt: "A glowing neon-green security shield in a dark technology environment",
  },
];

const facts = [
  {
    icon: Building2,
    label: "Company",
    value: "AkiGO Technologies LLC",
  },
  {
    icon: MapPinned,
    label: "Based in",
    value: "United States",
  },
  {
    icon: CarFront,
    label: "Platform",
    value: "Mobility and local delivery",
  },
  {
    icon: PackageCheck,
    label: "Core services",
    value: "Ride · Drive · Deliver · Business",
  },
  {
    icon: ShieldCheck,
    label: "Launch focus",
    value: "Safety and production readiness",
  },
];

const mediaResources = [
  {
    icon: FileImage,
    title: "Company logos",
    text: "Approved AkiGO logo files and usage formats.",
    status: "Available by request",
  },
  {
    icon: Palette,
    title: "Brand guidelines",
    text: "Brand colors, logo spacing, visual standards, and usage guidance.",
    status: "Available by request",
  },
  {
    icon: ImageIcon,
    title: "Product screenshots",
    text: "Selected rider, driver, delivery, business, and platform visuals.",
    status: "Available by request",
  },
  {
    icon: Users,
    title: "Leadership information",
    text: "Verified executive biographies and approved background information.",
    status: "Available by request",
  },
  {
    icon: FileText,
    title: "Company overview",
    text: "A concise summary of AkiGO, its platform, mission, and launch direction.",
    status: "Available by request",
  },
  {
    icon: FileArchive,
    title: "Press kit",
    text: "A coordinated package of approved media assets and company information.",
    status: "In preparation",
  },
];

const timeline = [
  {
    label: "Foundation",
    title: "Platform concept and product development",
    text: "AkiGO began building a connected mobility and local-delivery platform.",
  },
  {
    label: "Product",
    title: "Rider and driver experiences",
    text: "Core rider, driver, dispatch, payment, safety, and support workflows entered development.",
  },
  {
    label: "Expansion",
    title: "Delivery and business tools",
    text: "The platform expanded to support local delivery and business operations.",
  },
  {
    label: "Current",
    title: "Production and launch preparation",
    text: "Current priorities include reliability, security, compliance, infrastructure, and controlled launch readiness.",
  },
];

const faqs = [
  {
    question: "How can a journalist contact AkiGO?",
    answer:
      "Send a media inquiry using the press email on this page. Include your name, publication, deadline, subject, and the information or interview you are requesting.",
  },
  {
    question: "Can media organizations use the AkiGO logo?",
    answer:
      "Use of AkiGO trademarks and logos requires approved files and must follow AkiGO brand guidance. Contact the press team before publication.",
  },
  {
    question: "Where can I request product screenshots?",
    answer:
      "Product screenshots and approved images are available by request. AkiGO will provide current materials that accurately reflect the platform.",
  },
  {
    question: "How do I request an interview?",
    answer:
      "Email the press contact with your publication, topic, format, deadline, and preferred interview timing. Availability is not guaranteed.",
  },
  {
    question: "Does this page contain official press releases?",
    answer:
      "Not yet. The update cards describe current areas of work and are not formal press releases. Official releases should be clearly dated and published separately.",
  },
];

export default function PressPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(150,237,8,0.12),transparent_35%)]" />

          <div className="site-container relative z-10 grid min-h-[720px] items-center gap-12 py-14 lg:grid-cols-[0.91fr_1.09fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Press Center
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                News and updates
                <br />
                from <span className="text-[#96ed08]">AkiGO.</span>
              </h1>

              <p className="mt-6 max-w-[630px] text-lg leading-8 text-white/60">
                Find approved company information, platform updates, media
                resources, and press contact details as AkiGO prepares its
                mobility and local-delivery platform for launch.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#media-resources" className={primaryButton}>
                  View media resources
                  <ArrowRight size={18} />
                </a>

                <a
                  href={createPressMailto(
                    "AkiGO Press Inquiry",
                    "Name:\nPublication or organization:\nTopic:\nDeadline:\nRequest:\n",
                  )}
                  className={secondaryButton}
                >
                  <Mail size={17} />
                  Contact press
                </a>
              </div>

              <nav
                aria-label="Press page shortcuts"
                className="mt-10 flex flex-wrap gap-3 text-sm text-white/46"
              >
                <a
                  href="#press-contact"
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 transition hover:border-[#96ed08]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Media inquiries
                </a>
                <a
                  href="#company-facts"
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 transition hover:border-[#96ed08]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Company facts
                </a>
                <a
                  href="#media-resources"
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 transition hover:border-[#96ed08]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Approved assets
                </a>
              </nav>
            </div>

            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="pointer-events-none absolute inset-10 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#080808] p-2 shadow-[0_34px_120px_rgba(0,0,0,.72)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem]">
                  <Image
                    src="/images/home/akigo-press-hero-final.png"
                    alt="AkiGO Press Center with a microphone, media camera, glowing city skyline, and media resource panels"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.04)_35%,rgba(0,0,0,.82)_100%)]" />

                  <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-[1fr_auto]">
                    <div className="rounded-2xl border border-white/[0.1] bg-black/70 p-5 backdrop-blur-xl">
                      <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                        AkiGO press center
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        Approved information for journalists, publications,
                        partners, and media professionals.
                      </p>
                    </div>

                    <div className="grid place-items-center rounded-2xl border border-[#96ed08]/25 bg-[#96ed08] px-5 py-4 text-black">
                      <Newspaper size={26} />
                      <span className="mt-2 text-xs font-extrabold uppercase">
                        Media
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-5 top-10 hidden w-[230px] rounded-2xl border border-[#96ed08]/22 bg-[#070a05]/95 p-4 shadow-2xl backdrop-blur-xl xl:block">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                  Current focus
                </p>
                <p className="mt-2 text-sm font-bold text-white">
                  Production and launch readiness
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST UPDATES */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Platform updates
                </p>
                <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  What AkiGO is working on.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-white/45">
                These are company-development updates, not formal press releases
                or claims that services are already publicly available.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {latestUpdates.map((update) => (
                <article
                  key={update.title}
                  className="group overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] transition duration-300 hover:border-[#96ed08]/25"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={update.image}
                      alt={update.alt}
                      fill
                      sizes="(max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                      {update.category}
                    </p>
                    <h3 className="font-display mt-3 text-xl font-bold leading-7">
                      {update.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {update.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FACTS */}
        <section id="company-facts" className="scroll-mt-28 border-t border-white/[0.06] py-16">
          <div className="site-container">
            <div className="rounded-[1.7rem] border border-white/[0.09] bg-[#0a0a0a] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <BadgeInfo className="text-[#96ed08]" size={23} />
                <h2 className="font-display text-2xl font-bold">
                  AkiGO at a glance
                </h2>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                  >
                    <Icon size={22} className="text-[#96ed08]" />
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-white/35">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/70">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex justify-end">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Read the company overview
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA RESOURCES */}
        <section
          id="media-resources"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Media resources
                </p>
                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Approved materials for accurate coverage.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/52 lg:justify-self-end">
                AkiGO provides current files directly so media organizations do
                not rely on outdated logos, mockups, screenshots, or company
                information.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {mediaResources.map(({ icon: Icon, title, text, status }) => (
                <article
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.1em] text-white/35">
                      {status}
                    </span>
                  </div>

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/48">{text}</p>

                  <a
                    href={createPressMailto(
                      `AkiGO Media Resource Request — ${title}`,
                      `Name:\nPublication or organization:\nDeadline:\nRequested resource: ${title}\nIntended use:\n`,
                    )}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    Request resource
                    <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND ASSETS + CONTACT */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#0b0b0b] p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                    Brand assets
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-bold">
                    Use approved AkiGO materials.
                  </h2>
                </div>
                <Palette className="text-[#96ed08]" size={28} />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Primary wordmark",
                    value: (
                      <span className="font-display text-3xl font-extrabold tracking-[-0.055em]">
                        Aki<span className="text-[#96ed08]">GO</span>
                      </span>
                    ),
                  },
                  {
                    title: "Dark-background wordmark",
                    value: (
                      <span className="rounded-xl bg-black px-4 py-3 font-display text-2xl font-extrabold tracking-[-0.055em]">
                        Aki<span className="text-[#96ed08]">GO</span>
                      </span>
                    ),
                  },
                  {
                    title: "Primary accent",
                    value: (
                      <div className="flex items-center gap-3">
                        <span className="size-11 rounded-full bg-[#96ed08]" />
                        <span className="font-mono text-sm text-white/60">
                          #96ED08
                        </span>
                      </div>
                    ),
                  },
                  {
                    title: "Typography",
                    value: (
                      <span className="font-display text-4xl font-extrabold">
                        Aa
                      </span>
                    ),
                  },
                ].map((asset) => (
                  <div
                    key={asset.title}
                    className="rounded-2xl border border-white/[0.08] bg-black/40 p-5"
                  >
                    <div className="min-h-16">{asset.value}</div>
                    <p className="mt-4 text-sm font-semibold text-white/60">
                      {asset.title}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                <p className="text-sm leading-6 text-white/50">
                  Approved logo files and brand guidance are provided directly
                  to help ensure that current, accurate assets are used.
                </p>

                <a
                  href={createPressMailto(
                    "AkiGO Brand Asset Request",
                    "Name:\nPublication or organization:\nDeadline:\nAssets requested:\nIntended use:\n",
                  )}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Request approved brand assets
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>

            <article id="press-contact" className="scroll-mt-28 relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/24 bg-[linear-gradient(145deg,#0d1209_0%,#070707_72%)] p-7 sm:p-8">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.10] blur-[105px]" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                      Press contact
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-bold">
                      Media inquiries.
                    </h2>
                  </div>

                  <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <Mail size={24} />
                  </div>
                </div>

                <p className="mt-5 leading-7 text-white/52">
                  Journalists and media professionals can contact AkiGO for
                  verified company information, interview requests, approved
                  images, and publication deadlines.
                </p>

                <div className="mt-7 rounded-2xl border border-white/[0.08] bg-black/45 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">
                    Press email
                  </p>
                  <a
                    href={createPressMailto(
                    "AkiGO Press Inquiry",
                    "Name:\nPublication or organization:\nTopic:\nDeadline:\nRequest:\n",
                  )}
                    className="mt-2 block break-all text-lg font-bold text-[#96ed08]"
                  >
                    {PRESS_EMAIL}
                  </a>
                </div>

                <div className="mt-5 space-y-3 text-sm leading-6 text-white/48">
                  <p>Include your publication, topic, deadline, and request.</p>
                  <p>
                    This address is also used for general AkiGO contact until a
                    dedicated press mailbox is established.
                  </p>
                </div>

                <a
                  href={createPressMailto(
                    "AkiGO Press Inquiry",
                    "Name:\nPublication or organization:\nTopic:\nDeadline:\nRequest:\n",
                  )}
                  className={`${primaryButton} mt-7`}
                >
                  Contact the press team
                  <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Company journey
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Building toward a responsible launch.
              </h2>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {timeline.map((item, index) => (
                  <article
                    key={item.label}
                    className="relative rounded-[1.6rem] border border-white/[0.09] bg-[#0b0b0b] p-6"
                  >
                    <div className="relative z-10 grid size-12 place-items-center rounded-2xl bg-[#96ed08] font-extrabold text-black">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.13em] text-[#96ed08]">
                      {item.label}
                    </p>
                    <h3 className="font-display mt-3 text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/47">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                <CircleHelp size={25} />
              </div>
              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Media FAQ
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em]">
                Common press questions.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-white/50">
                Contact AkiGO when you need information that is not covered
                here or need confirmation before publishing.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/[0.09] bg-[#0b0b0b] p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="text-xl text-[#96ed08] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-white/[0.07] pt-4 text-sm leading-6 text-white/48">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#132703_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Press and media
                  </p>
                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Need verified information about AkiGO?
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Send your publication, topic, deadline, and media request to
                    the AkiGO press contact.
                  </p>
                </div>

                <a
                  href={createPressMailto(
                    "AkiGO Press Inquiry",
                    "Name:\nPublication or organization:\nTopic:\nDeadline:\nRequest:\n",
                  )}
                  className={`${primaryButton} shrink-0`}
                >
                  Contact press
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
