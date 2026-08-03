import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  Building2,
  CalendarDays,
  CarFront,
  Check,
  CircleHelp,
  FileText,
  Mail,
  MapPinned,
  Megaphone,
  Newspaper,
  PackageCheck,
  Radio,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const NEWSROOM_EMAIL = "akigo678@gmail.com";

function createNewsroomMailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });

  if (body) {
    params.set("body", body);
  }

  return `mailto:${NEWSROOM_EMAIL}?${params.toString()}`;
}

const newsroomUpdates = [
  {
    category: "Platform",
    title: "AkiGO continues building a connected mobility and delivery platform.",
    description:
      "Development spans rider, driver, delivery, business, dispatch, payment, safety, and support experiences.",
    image: "/images/home/akigo-press-platform.png",
    alt: "A dark mobile navigation interface with a neon-green route",
  },
  {
    category: "Business",
    title: "Business and merchant workflows remain part of the platform roadmap.",
    description:
      "AkiGO is developing tools for local delivery, scheduled service, team access, operational visibility, and support.",
    image: "/images/home/akigo-press-business.png",
    alt: "Two business professionals shaking hands in a modern office",
  },
  {
    category: "Technology",
    title: "Routing, dispatch, and real-time visibility remain core priorities.",
    description:
      "The platform is being designed around clearer assignments, route progress, trip status, and operational control.",
    image: "/images/home/akigo-press-routing.png",
    alt: "A futuristic city map with a bright neon-green route",
  },
  {
    category: "Safety",
    title: "Safety and production hardening remain central to launch preparation.",
    description:
      "AkiGO is strengthening permissions, reporting, account protections, backend controls, and reliability.",
    image: "/images/home/akigo-press-safety.png",
    alt: "A glowing neon-green security shield in a dark technology setting",
  },
];

const newsroomTopics = [
  {
    icon: CarFront,
    title: "Rides and drivers",
    text: "Product updates involving rider requests, driver tools, dispatch, navigation, trip progress, and earnings.",
  },
  {
    icon: PackageCheck,
    title: "Delivery",
    text: "Local-delivery workflows for customers, couriers, merchants, packages, documents, and essentials.",
  },
  {
    icon: Building2,
    title: "Business",
    text: "Restaurant, retail, healthcare, hospitality, scheduled-service, and local-logistics developments.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and trust",
    text: "Safety tools, account protection, support, reporting, permissions, privacy, and production controls.",
  },
  {
    icon: Route,
    title: "Technology",
    text: "Routing, dispatch, infrastructure, performance, payments, maps, notifications, and platform reliability.",
  },
  {
    icon: Users,
    title: "Company",
    text: "Company milestones, partnerships, leadership information, market preparation, and community initiatives.",
  },
];

const editorialStandards = [
  "Official releases are clearly labeled and dated",
  "Development updates are not presented as public availability",
  "Launch timing is not announced before it is confirmed",
  "Company facts are reviewed before publication",
  "Product images should reflect current approved experiences",
  "Corrections should be made transparently when necessary",
];

const faqItems = [
  {
    question: "Are the update cards official press releases?",
    answer:
      "No. They describe current areas of platform work. Official releases will be separately labeled, dated, and published when AkiGO has a confirmed announcement.",
  },
  {
    question: "Has AkiGO announced a public launch date?",
    answer:
      "No confirmed public launch date is published on this page. AkiGO will share launch information only after operational, legal, infrastructure, safety, and market requirements are ready.",
  },
  {
    question: "Can journalists quote information from this page?",
    answer:
      "Journalists should contact AkiGO to confirm time-sensitive facts, product availability, launch plans, leadership information, and company claims before publication.",
  },
  {
    question: "Where can approved images and logos be requested?",
    answer:
      "Use the Press Center or send a media-resource request using the contact action on this page.",
  },
  {
    question: "How can I receive future newsroom updates?",
    answer:
      "AkiGO does not currently operate an automated newsroom mailing list. You can send an update-interest email and AkiGO can retain the request where permitted.",
  },
];

export default function NewsroomPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_23%,rgba(150,237,8,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute left-[-13rem] top-24 size-[34rem] rounded-full bg-[#96ed08]/[0.035] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[710px] items-center gap-12 py-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                AkiGO Newsroom
              </div>

              <h1 className="font-display mt-6 max-w-[780px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                Company news,
                <br />
                <span className="text-[#96ed08]">clearly communicated.</span>
              </h1>

              <p className="mt-6 max-w-[640px] text-lg leading-8 text-white/60">
                Follow verified AkiGO announcements, product developments,
                company updates, partnerships, and launch-readiness milestones
                as the platform continues to grow.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#latest-updates" className={primaryButton}>
                  View latest updates
                  <ArrowRight size={18} />
                </a>

                <Link href="/press" className={secondaryButton}>
                  <Newspaper size={17} />
                  Open Press Center
                </Link>
              </div>

              <nav
                aria-label="Newsroom shortcuts"
                className="mt-10 flex flex-wrap gap-3 text-sm text-white/46"
              >
                <a
                  href="#official-releases"
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 transition hover:border-[#96ed08]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Official releases
                </a>
                <a
                  href="#latest-updates"
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 transition hover:border-[#96ed08]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Development updates
                </a>
                <a
                  href="#newsroom-contact"
                  className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 transition hover:border-[#96ed08]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Newsroom contact
                </a>
              </nav>
            </div>

            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="pointer-events-none absolute inset-10 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#080808] p-2 shadow-[0_34px_120px_rgba(0,0,0,.72)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem]">
                  <Image
                    src="/images/home/akigo-press-hero-final.png"
                    alt="AkiGO newsroom with a media microphone, camera, city skyline, and green digital panels"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_30%,rgba(0,0,0,.84)_100%)]" />

                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/[0.1] bg-black/72 p-5 backdrop-blur-xl">
                    <div className="flex items-start gap-4">
                      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#96ed08] text-black">
                        <Radio size={22} />
                      </div>

                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                          Newsroom standard
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/62">
                          Confirmed announcements are separated from development
                          updates and clearly labeled before publication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-5 top-10 hidden w-[225px] rounded-2xl border border-[#96ed08]/22 bg-[#070a05]/95 p-4 shadow-2xl backdrop-blur-xl xl:block">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                  Current status
                </p>
                <p className="mt-2 text-sm font-bold text-white">
                  Development and launch preparation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL RELEASES */}
        <section
          id="official-releases"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="rounded-[1.8rem] border border-white/[0.09] bg-[#0a0a0a] p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Megaphone size={27} />
                  </div>

                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Official announcements
                  </p>

                  <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    No formal releases published yet.
                  </h2>
                </div>

                <div>
                  <p className="leading-7 text-white/52">
                    AkiGO has not published a formal launch announcement,
                    funding announcement, partnership release, market opening,
                    or other official corporate press release on this page.
                  </p>

                  <p className="mt-4 leading-7 text-white/52">
                    When an announcement is confirmed, it will be clearly dated,
                    labeled as an official release, and supported by verified
                    facts and approved media contacts.
                  </p>

                  <a
                    href={createNewsroomMailto(
                      "AkiGO Newsroom Update Interest",
                      "Name:\nPublication or organization:\nEmail:\nTopics of interest:\n",
                    )}
                    className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    Register interest in future updates
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST UPDATES */}
        <section
          id="latest-updates"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Development updates
                </p>

                <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  What AkiGO is working on.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-white/45">
                These cards describe active areas of platform work. They are not
                official launch announcements or statements of public
                availability.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {newsroomUpdates.map((update) => (
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

        {/* NEWSROOM TOPICS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Newsroom topics
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Follow the areas shaping AkiGO.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {newsroomTopics.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition hover:border-[#96ed08]/30"
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

        {/* EDITORIAL STANDARDS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/22 bg-[linear-gradient(145deg,#0d1209_0%,#070707_72%)] p-8">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.09] blur-[105px]" />

              <div className="relative">
                <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08] text-black">
                  <FileText size={27} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Editorial standards
                </p>

                <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                  Accuracy before attention.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-white/52">
                  AkiGO’s newsroom is intended to communicate confirmed company
                  information without presenting plans, prototypes, or internal
                  targets as completed public services.
                </p>

                <Link
                  href="/press"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Visit the Press Center
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="rounded-[1.8rem] border border-white/[0.09] bg-[#0b0b0b] p-8">
              <div className="space-y-3">
                {editorialStandards.map((standard) => (
                  <div
                    key={standard}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <Check
                      className="mt-0.5 shrink-0 text-[#96ed08]"
                      size={17}
                    />
                    <span className="text-sm leading-6 text-white/62">
                      {standard}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* COMPANY OVERVIEW */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="rounded-[1.8rem] border border-white/[0.09] bg-[#0a0a0a] p-7 sm:p-9">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Company overview
                  </p>
                  <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    AkiGO at a glance.
                  </h2>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  Read About AkiGO
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {[
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
                    label: "Current focus",
                    value: "Production and launch readiness",
                  },
                ].map(({ icon: Icon, label, value }) => (
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
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="newsroom-contact"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                <Mail size={27} />
              </div>

              <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Newsroom contact
              </p>

              <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                Confirm information before publishing.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/52">
                Contact AkiGO for fact verification, company background,
                interview requests, approved images, corrections, and
                publication deadlines.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[#96ed08]/22 bg-[linear-gradient(145deg,#0d1209_0%,#070707_72%)] p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">
                Newsroom and media email
              </p>

              <a
                href={createNewsroomMailto(
                  "AkiGO Newsroom Inquiry",
                  "Name:\nPublication or organization:\nTopic:\nDeadline:\nRequest or correction:\n",
                )}
                className="mt-3 block break-all text-xl font-bold text-[#96ed08] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
              >
                {NEWSROOM_EMAIL}
              </a>

              <div className="mt-6 space-y-3 text-sm leading-6 text-white/48">
                <p>
                  Include your name, publication or organization, topic,
                  deadline, and the information you need confirmed.
                </p>
                <p>
                  This contact currently uses AkiGO’s general company email
                  until a dedicated newsroom mailbox is established.
                </p>
              </div>

              <a
                href={createNewsroomMailto(
                  "AkiGO Newsroom Inquiry",
                  "Name:\nPublication or organization:\nTopic:\nDeadline:\nRequest or correction:\n",
                )}
                className={`${primaryButton} mt-7`}
              >
                Contact the newsroom
                <ArrowRight size={18} />
              </a>
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
                Newsroom FAQ
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em]">
                Common newsroom questions.
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq) => (
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
                    AkiGO updates
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Stay connected with the AkiGO newsroom.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Register your interest in future company announcements and
                    verified newsroom updates.
                  </p>
                </div>

                <a
                  href={createNewsroomMailto(
                    "AkiGO Newsroom Update Interest",
                    "Name:\nPublication or organization:\nEmail:\nTopics of interest:\n",
                  )}
                  className={`${primaryButton} shrink-0`}
                >
                  Register update interest
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
