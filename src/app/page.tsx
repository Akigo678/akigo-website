import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CarFront,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Store,
  WalletCards,
  Zap,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const services = [
  {
    icon: CarFront,
    title: "Ride",
    description: "Get where you need to go comfortably and affordably.",
    href: "/ride",
    image: "/images/home/ride.jpg",
  },
  {
    icon: PackageCheck,
    title: "Deliver",
    description: "Fast, reliable delivery for eligible packages and meals.",
    href: "/deliver",
    image: "/images/home/deliver.jpg",
  },
  {
    icon: WalletCards,
    title: "Drive",
    description: "Flexible earning opportunities on your schedule.",
    href: "/drive",
    image: "/images/home/drive.jpg",
  },
  {
    icon: Store,
    title: "Business",
    description: "Tools and solutions designed to support local businesses.",
    href: "/business",
    image: "/images/home/business.jpg",
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Safety Focused",
    description: "Safety tools built into the platform",
  },
  {
    icon: Zap,
    title: "Real-Time",
    description: "Live tracking and trip updates",
  },
  {
    icon: BadgeDollarSign,
    title: "Clear Pricing",
    description: "Pricing shown before confirmation",
  },
  {
    icon: Headphones,
    title: "Support Access",
    description: "Help through available support channels",
  },
];

const technologyBenefits = [
  "Real-time tracking and live updates",
  "Multiple secure payment options",
  "Driver eligibility and background-check workflows",
  "Support tools for riders, drivers, and businesses",
];

export default function Home() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-20 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.045] blur-[150px]" />

          <div className="site-container relative z-10 grid min-h-[760px] items-center gap-10 py-12 lg:grid-cols-[0.93fr_1.07fr] lg:py-14">
            <div className="relative z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-semibold text-white/65 backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                One platform. Many ways forward.
              </div>

              <h1 className="font-display mt-7 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.45rem]">
                Move smarter.
                <br />
                Deliver faster.
                <br />
                <span className="text-[#96ed08]">Earn your way.</span>
              </h1>

              <p className="mt-7 max-w-[560px] text-lg leading-8 text-white/62">
                AkiGO is building a connected mobility and local delivery platform
                for riders, drivers, businesses, and communities through a
                controlled market-by-market rollout.
              </p>

              <div className="mt-8 grid max-w-[650px] grid-cols-2 gap-x-7 gap-y-6 sm:grid-cols-4">
                {trustItems.map(({ icon: Icon, title, description }) => (
                  <div key={title}>
                    <div className="grid size-10 place-items-center text-[#96ed08]">
                      <Icon size={24} strokeWidth={1.9} />
                    </div>
                    <h2 className="mt-3 text-sm font-bold text-white">{title}</h2>
                    <p className="mt-2 max-w-[135px] text-xs leading-5 text-white/45">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/download" className={primaryButton}>
                  Download AkiGO
                  <ArrowRight size={18} />
                </Link>

                <Link href="#services" className={secondaryButton}>
                  Explore the platform
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-7 flex items-center gap-3 text-sm font-medium text-white/48">
                <span className="h-6 w-[2px] bg-[#96ed08]" />
                App availability will expand through a controlled rollout.
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[790px] lg:max-w-none">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div
                className="relative overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 62%, transparent 98%)",
                  maskImage:
                    "radial-gradient(ellipse at center, black 62%, transparent 98%)",
                }}
              >
                <Image
                  src="/images/home/hero-akigo.png"
                  alt="AkiGO rider and delivery applications with an AkiGO vehicle"
                  width={1450}
                  height={1180}
                  priority
                  className="h-auto w-full object-contain brightness-[0.94] contrast-[1.08] saturate-[0.92] drop-shadow-[0_35px_100px_rgba(0,0,0,.82)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28"
        >
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Our services
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Solutions for different needs
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Explore AkiGO experiences for transportation, delivery, flexible
                earning, and local business operations.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map(
                ({ icon: Icon, title, description, href, image }) => (
                  <Link
                    key={title}
                    href={href}
                    className="group relative min-h-[405px] overflow-hidden rounded-[1.5rem] border border-white/[0.10] bg-[#0c0c0c] transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    <Image
                      src={image}
                      alt={`${title} with AkiGO`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover brightness-[0.64] contrast-[1.08] saturate-[0.78] transition duration-700 group-hover:scale-[1.04] group-hover:brightness-[0.72] motion-reduce:transition-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/18 to-black/96" />
                    <div className="absolute inset-0 bg-[#071000]/14 mix-blend-color" />

                    <div className="absolute inset-0 flex flex-col p-6">
                      <div className="grid size-12 place-items-center rounded-full border border-[#96ed08]/55 bg-black/45 text-[#96ed08] backdrop-blur-sm">
                        <Icon size={22} strokeWidth={1.9} />
                      </div>

                      <div className="mt-auto">
                        <h3 className="font-display text-2xl font-bold">{title}</h3>

                        <p className="mt-3 max-w-[245px] text-sm leading-6 text-white/70">
                          {description}
                        </p>

                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08]">
                          Learn more
                          <ArrowRight
                            size={16}
                            className="transition group-hover:translate-x-1 motion-reduce:transition-none"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-24 sm:py-28">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/[0.07] blur-[115px]" />

              <div
                className="relative"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 65%, transparent 98%)",
                  maskImage:
                    "radial-gradient(ellipse at center, black 65%, transparent 98%)",
                }}
              >
                <Image
                  src="/images/home/technology.png"
                  alt="AkiGO route, safety, pricing, and technology features"
                  width={1200}
                  height={1000}
                  className="h-auto w-full scale-[1.04] object-contain brightness-[0.9] contrast-[1.08] saturate-[0.86]"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Why AkiGO
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Technology designed around the journey
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/58">
                AkiGO combines routing, payments, communication, safety workflows,
                and operational tools to support riders, drivers, deliveries, and
                businesses.
              </p>

              <div className="mt-7 space-y-3">
                {technologyBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full border border-[#96ed08] text-[#96ed08]">
                      <span className="size-1.5 rounded-full bg-[#96ed08]" />
                    </span>
                    <p className="text-sm font-medium text-white/72">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/20 bg-[#050505] shadow-[0_0_80px_rgba(150,237,8,0.05)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_45%,#050505_100%)]" />
              <div className="pointer-events-none absolute right-[-140px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#96ed08]/10 blur-[140px]" />
              <div className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full bg-[#96ed08]/[0.06] blur-[120px]" />

              <div className="relative z-10 flex min-h-[220px] flex-col gap-8 px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                    AkiGO apps
                  </p>

                  <h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                    Check app availability
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58 sm:text-base">
                    View the current release status for the AkiGO Rider and AkiGO
                    Driver apps. Verified store links will appear as they become
                    available.
                  </p>
                </div>

                <Link href="/download" className={`${primaryButton} shrink-0`}>
                  Download AkiGO
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
