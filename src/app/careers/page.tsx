import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Handshake,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import { MarketingLayout, primaryButton, secondaryButton } from "@/components/marketing";
import CareerInterestForm from "./CareerInterestForm";

const fields = [
  {
    icon: Code2,
    title: "Technology & product",
    description: "Engineering, design, mobile experiences, and dependable platform tools.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Operations & support",
    description: "Local operations, customer care, and the everyday details that make service work.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & trust",
    description: "Thoughtful practices that help protect riders, drivers, couriers, and partners.",
  },
  {
    icon: Handshake,
    title: "Growth & partnerships",
    description: "Building lasting relationships with communities and local businesses.",
  },
];

export default function CareersPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505] text-white">
        <section className="relative isolate overflow-hidden pt-[88px]">
          <div className="absolute inset-0">
            <Image
              src="/images/careers/akigo-careers-team-v2.png"
              alt="Illustrative photograph of professionals collaborating on a laptop in a modern workspace"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[64%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/20 lg:via-black/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/15" />
          </div>

          <div className="site-container relative z-10 flex min-h-[640px] items-center py-20 sm:min-h-[680px]">
            <div className="max-w-[700px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#96ed08]/30 bg-black/40 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08]" />
                Careers at AkiGO
              </p>
              <h1 className="font-display mt-7 text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-[5.6rem]">
                Build something
                <br />
                <span className="text-[#96ed08]">that moves people.</span>
              </h1>
              <p className="mt-7 max-w-[570px] text-lg leading-8 text-white/80">
                AkiGO is creating technology and services for rides, delivery,
                and local businesses. We&apos;re interested in people who bring
                useful ideas, care about their work, and want to make a difference.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#career-interest" className={primaryButton}>
                  Share your interest <ArrowRight size={18} />
                </a>
                <Link href="/about" className={secondaryButton}>
                  Get to know AkiGO
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20 sm:py-24">
          <div className="site-container">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
              Ways to contribute
            </p>
            <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end">
              <h2 className="font-display max-w-2xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Different talents. Shared purpose.
              </h2>
              <p className="max-w-xl leading-7 text-white/60 lg:justify-self-end">
                As AkiGO grows, these are some of the areas that may need
                support. They describe possible future opportunities, not
                currently advertised vacancies.
              </p>
            </div>
            <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {fields.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#10110e] p-6"
                >
                  <Icon size={26} className="text-[#96ed08]" />
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#090b08] py-20 sm:py-24">
          <div className="site-container grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Our approach
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Good work starts with respect.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/65">
                We value clear communication, meaningful collaboration,
                ownership, and responsible decisions. Safety, privacy,
                accessibility, and trust matter in the work we do.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Focus on real customer needs",
                "Work with integrity and respect",
                "Take ownership and keep learning",
                "Build with safety in mind",
              ].map((principle) => (
                <div key={principle} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/35 p-5">
                  <CheckCircle2 size={21} className="mt-0.5 shrink-0 text-[#96ed08]" />
                  <p className="font-semibold leading-6">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="career-interest" className="scroll-mt-28 border-t border-white/10 py-20 sm:py-24">
          <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Career interest
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Want to be part of AkiGO&apos;s journey?
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/65">
                We welcome introductions from people interested in contributing
                to AkiGO. Sharing your interest is not an application for a
                specific open position, and a response is not guaranteed.
              </p>
              <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-white/60">
                <HeartHandshake size={21} className="shrink-0 text-[#96ed08]" />
                <p>
                  AkiGO aims to consider candidates fairly based on
                  qualifications and role requirements. If you need an
                  accommodation for a future application or interview, you can
                  request support by email.
                </p>
              </div>
            </div>
            <CareerInterestForm />
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
