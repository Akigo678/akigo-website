import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  Compass,
  FileCheck2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPinned,
  Megaphone,
  MessageCircle,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const CAREERS_EMAIL = "akigo678@gmail.com";

const workPrinciples = [
  {
    icon: Target,
    title: "Mission with purpose",
    text: "Build practical technology that helps people, drivers, businesses, and communities move locally.",
  },
  {
    icon: Lightbulb,
    title: "Think clearly",
    text: "Solve real problems with thoughtful decisions, direct communication, and disciplined execution.",
  },
  {
    icon: Handshake,
    title: "Work with respect",
    text: "Treat teammates, users, partners, and communities with professionalism and dignity.",
  },
  {
    icon: ShieldCheck,
    title: "Build responsibly",
    text: "Consider safety, privacy, accessibility, security, and reliability from the beginning.",
  },
  {
    icon: Rocket,
    title: "Move with ownership",
    text: "Take responsibility for outcomes, learn quickly, and improve what you build.",
  },
  {
    icon: Compass,
    title: "Grow carefully",
    text: "Choose long-term product and operational readiness over unsupported shortcuts.",
  },
];

const opportunityAreas = [
  {
    icon: Code2,
    title: "Engineering",
    text: "Mobile, web, backend, cloud infrastructure, payments, dispatch, maps, reliability, and security.",
  },
  {
    icon: Sparkles,
    title: "Product and design",
    text: "Rider, driver, delivery, business, admin, safety, support, and accessibility experiences.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Operations",
    text: "Market preparation, driver operations, delivery operations, support, quality, and launch readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and compliance",
    text: "Trust and safety, policy, investigations, privacy, accessibility, insurance, and regulatory operations.",
  },
  {
    icon: Megaphone,
    title: "Growth and partnerships",
    text: "Community partnerships, business development, merchant relationships, communications, and launch marketing.",
  },
  {
    icon: Building2,
    title: "Business operations",
    text: "Finance, people operations, legal coordination, administration, and company infrastructure.",
  },
];

const hiringSteps = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Share your interest",
    text: "Send a concise introduction, the area that interests you, and relevant experience or work samples.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Initial conversation",
    text: "If there is a relevant need, AkiGO may contact you to discuss experience, interests, and availability.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Role-specific review",
    text: "The process may include portfolio, technical, operational, writing, or problem-solving discussions.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Decision and next steps",
    text: "Selected candidates receive written information about the opportunity, expectations, and applicable terms.",
  },
];

const candidateGuidance = [
  "Use a clear subject line that includes your area of interest",
  "Attach or link to a résumé, portfolio, GitHub profile, or relevant work",
  "Explain why AkiGO’s mission and platform interest you",
  "Describe the type of work, location, and availability you are seeking",
  "Do not send Social Security numbers, banking information, or identity documents",
];

const fairHiringCommitments = [
  "Consistent role-related evaluation",
  "Respectful candidate communication",
  "Reasonable accommodation requests",
  "Privacy-conscious handling of candidate information",
  "No payment required to apply",
  "Written confirmation for legitimate offers",
];

export default function CareersPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(150,237,8,0.09),transparent_34%)]" />

          <div className="site-container relative z-10 grid min-h-[720px] items-center gap-12 py-14 lg:grid-cols-[0.96fr_1.04fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Careers at AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5rem]">
                Help build the future of
                <br />
                <span className="text-[#96ed08]">local movement.</span>
              </h1>

              <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/60">
                AkiGO is building a connected platform for rides, drivers,
                delivery, business logistics, safety, and support. We value
                people who care about useful products, responsible growth, and
                real-world execution.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#career-interest" className={primaryButton}>
                  Share your interest
                  <ArrowRight size={18} />
                </a>

                <Link href="/about" className={secondaryButton}>
                  Learn about AkiGO
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Code2, label: "Technology" },
                  { icon: Sparkles, label: "Product" },
                  { icon: ShieldCheck, label: "Safety" },
                  { icon: Building2, label: "Operations" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                  >
                    <Icon className="text-[#96ed08]" size={21} />
                    <p className="mt-3 text-sm font-semibold text-white/72">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[650px]">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-[#96ed08]/10 blur-[110px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#090909] p-2 shadow-[0_32px_110px_rgba(0,0,0,.7)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem]">
                  <Image
                    src="/images/home/akigo-careers-hero.png"
                    alt="A futuristic nighttime city with white and green light trails representing AkiGO mobility"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,.82)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />

                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/[0.1] bg-black/70 p-5 backdrop-blur-xl">
                    <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                      Build what moves communities
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/62">
                      Work across technology, operations, safety, partnerships,
                      and the real-world systems behind a mobility platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#96ed08]/20 bg-[#080b06]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block">
                <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#96ed08]">
                  AkiGO careers
                </p>
                <p className="mt-1 text-sm font-semibold text-white/68">
                  Purpose. Ownership. Responsible growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                How we want to work
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Principles for building AkiGO.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                These principles describe the working environment AkiGO is
                building as the company and platform grow.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {workPrinciples.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35"
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

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Future opportunity areas
                </p>
                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Different skills. One connected mission.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                These areas describe work AkiGO may need as the platform grows.
                They are not current job listings unless a written opening is
                published separately.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {opportunityAreas.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 transition hover:border-[#96ed08]/30"
                >
                  <div className="grid size-12 place-items-center rounded-2xl border border-[#96ed08]/15 bg-[#96ed08]/10 text-[#96ed08]">
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

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Hiring process
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                A clear and respectful candidate experience.
              </h2>
            </div>

            <div className="relative mt-12">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-[#96ed08] via-[#96ed08]/45 to-white/10 xl:block" />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {hiringSteps.map(({ number, icon: Icon, title, text }) => (
                  <article
                    key={number}
                    className="relative rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6"
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08] text-black">
                        <Icon size={22} />
                      </div>
                      <span className="font-display text-3xl font-extrabold text-white/[0.06]">
                        {number}
                      </span>
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

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />
              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <FileCheck2 size={28} />
                </div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Candidate guidance
                </p>
                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Help us understand your experience.
                </h2>
                <div className="mt-7 space-y-3">
                  {candidateGuidance.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <Check className="mt-0.5 shrink-0 text-[#96ed08]" size={16} />
                      <span className="text-sm leading-6 text-white/62">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />
              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <Scale size={28} />
                </div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Fair hiring
                </p>
                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Professional treatment throughout the process.
                </h2>
                <div className="mt-7 space-y-3">
                  {fairHiringCommitments.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <Check className="mt-0.5 shrink-0 text-[#96ed08]" size={16} />
                      <span className="text-sm leading-6 text-white/62">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Equal opportunity
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Opportunity should be based on the work.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO intends to evaluate candidates based on role-related
                qualifications, experience, skills, judgment, and company needs.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                AkiGO does not intend to discriminate unlawfully based on race,
                color, religion, sex, pregnancy, national origin, age,
                disability, genetic information, veteran status, sexual
                orientation, gender identity, or another legally protected
                characteristic.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-7">
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[110px]" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                    <HeartHandshake size={27} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      Accessibility and accommodations
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-bold">
                      Ask for the support you need.
                    </h3>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-white/52">
                  Candidates may request a reasonable accommodation for the
                  application or interview process by contacting AkiGO and
                  describing the support needed.
                </p>

                <Link
                  href="/accessibility"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
                >
                  Read the Accessibility Statement
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          id="career-interest"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/22 bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_72%)] p-8 sm:p-10">
              <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.09] blur-[105px]" />

              <div className="relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
                <div>
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#96ed08] text-black">
                    <BriefcaseBusiness size={27} />
                  </div>
                  <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Career interest
                  </p>
                  <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">
                    Interested in building AkiGO?
                  </h2>
                  <p className="mt-4 max-w-lg leading-7 text-white/52">
                    Send a brief introduction and relevant work. AkiGO reviews
                    career-interest messages when a suitable business need
                    exists.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/[0.09] bg-black/45 p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#96ed08]">
                    Email subject
                  </p>
                  <p className="mt-2 font-bold text-white">
                    AkiGO Career Interest — [Your Area]
                  </p>

                  <div className="mt-5 space-y-3 text-sm leading-6 text-white/50">
                    <p>
                      Include your name, area of interest, relevant experience,
                      location, availability, and links to work samples.
                    </p>
                    <p>
                      AkiGO does not charge candidates to apply and will not ask
                      for payment, gift cards, cryptocurrency, passwords, or
                      banking credentials during a legitimate application
                      process.
                    </p>
                  </div>

                  <a
                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
                      "AkiGO Career Interest",
                    )}`}
                    className={`${primaryButton} mt-6`}
                  >
                    Email careers interest
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
