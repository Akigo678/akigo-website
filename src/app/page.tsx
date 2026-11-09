import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CarFront,
  CreditCard,
  Headphones,
  MapPin,
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
import {getPublishedHomepage} from "@/lib/website/homepage";
import HeroSlideshow from "@/components/marketing/HeroSlideshow";
import TechnologyGallery from "@/components/marketing/TechnologyGallery";

// Refresh published Website Studio content without requiring a new deployment.
export const revalidate = 60;

const services = [
  {
    icon: CarFront,
    title: "Ride",
    description: "Get where you need to go comfortably and affordably.",
    href: "/ride",
    image: "/images/home/ride.jpg",
    action: "Explore Rides",
  },
  {
    icon: PackageCheck,
    title: "Deliver",
    description: "Fast, reliable delivery for eligible packages and meals.",
    href: "/deliver",
    image: "/images/home/deliver.jpg",
    action: "Explore Delivery",
  },
  {
    icon: WalletCards,
    title: "Drive",
    description: "Flexible earning opportunities on your schedule.",
    href: "/drive",
    image: "/images/home/drive.jpg",
    action: "Drive with AkiGO",
  },
  {
    icon: Store,
    title: "Business",
    description: "Tools and solutions designed to support local businesses.",
    href: "/business",
    image: "/images/home/business.jpg",
    action: "Business Solutions",
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
  {
    icon: MapPin,
    title: "Live Tracking",
    description: "Follow your trip with real-time updates.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Safety tools designed for peace of mind.",
  },
  {
    icon: CreditCard,
    title: "Clear Pricing",
    description: "See the price before confirming.",
  },
  {
    icon: Headphones,
    title: "Support Access",
    description: "Find help when you need it.",
  },
];

export default async function Home() {
  const published = await getPublishedHomepage();
  const visibleServices = published.services
    ? published.services.filter(service => service.enabled).map(service => ({
        ...service,
        icon: ({ Ride: CarFront, Deliver: PackageCheck, Drive: WalletCards, Business: Store } as Record<string, typeof CarFront>)[service.title] || Store,
        action: ({ Ride: "Explore Rides", Deliver: "Explore Delivery", Drive: "Drive with AkiGO", Business: "Business Solutions" } as Record<string, string>)[service.title] || "Explore Service",
      }))
    : services;
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        <section className="relative isolate min-h-[760px] overflow-hidden pt-[88px]">
          <HeroSlideshow
            images={published.heroImages?.length ? published.heroImages : [published.heroImage || "/images/home/hero-akigo.png"]}
            intervalSeconds={published.heroIntervalSeconds || 5}
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/45 via-transparent to-black/10" />

          <div className="site-container relative z-[2] flex min-h-[760px] items-center py-12 lg:py-14">
            <div className="relative z-20 w-full max-w-[760px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-semibold text-white/65 backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                {published.eyebrow || "One platform. Many ways forward."}
              </div>

              <h1 className="font-display mt-7 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] [text-shadow:0_3px_22px_rgba(0,0,0,0.9)] sm:text-6xl lg:text-[5.45rem]">
                {published.headline1 || "Move smarter."}
                <br />
                {published.headline2 || "Deliver faster."}
                <br />
                <span className="text-[#96ed08]">{published.headline3 || "Earn your way."}</span>
              </h1>

              <p className="mt-7 max-w-[560px] text-lg leading-8 text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.95)]">
                {published.description || "AkiGO is building a connected mobility and local delivery platform for riders, drivers, businesses, and communities through a controlled market-by-market rollout."}
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
                <a href="https://apps.apple.com/us/app/akigo/id6802560351" target="_blank" rel="noopener noreferrer" className={primaryButton}>
                  {published.primaryButton || "Download AkiGO"}
                  <ArrowRight size={18} />
                </a>

                <Link href="#services" className={secondaryButton}>
                  {published.secondaryButton || "Explore the platform"}
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="mt-7 flex items-center gap-3 text-sm font-medium text-white/48">
                <span className="h-6 w-[2px] bg-[#96ed08]" />
                App availability will expand through a controlled rollout.
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
                Explore AkiGO
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                One Platform. More Ways to Move.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                From everyday rides to local deliveries and business solutions,
                AkiGO helps you keep moving.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {visibleServices.map(
                ({ icon: Icon, title, description, href, image, action }) => (
                  <Link
                    key={title}
                    href={href}
                    className="group overflow-hidden rounded-[1.5rem] border border-white/[0.12] bg-[#111511] transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/55 hover:shadow-[0_18px_55px_rgba(150,237,8,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                      <Image
                        src={image}
                        unoptimized
                        alt={`${title} with AkiGO`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.045] motion-reduce:transition-none"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111511]/50 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 grid size-12 place-items-center rounded-full border border-[#96ed08]/55 bg-black/65 text-[#96ed08] backdrop-blur-sm">
                        <Icon size={22} strokeWidth={1.9} />
                      </div>
                    </div>
                    <div className="p-6 sm:p-7">
                      <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08]">
                        {action}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                      </span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden border-t border-white/[0.06] py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_24%_50%,rgba(35,66,12,0.24),transparent_52%),linear-gradient(120deg,#050805,#090d09_55%,#050505)]" />
          <div className="site-container grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[660px] lg:mx-0">
              <div className="pointer-events-none absolute inset-x-12 inset-y-16 rounded-full bg-[#96ed08]/[0.13] blur-[95px]" />
              <TechnologyGallery images={published.technologyImages?.length?published.technologyImages:["/images/home/technology.png"]} intervalSeconds={published.technologyIntervalSeconds||5}/>
            </div>

            <div className="lg:py-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Why AkiGO
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.07] tracking-[-0.05em] sm:text-5xl">
                Smarter Technology.
                <span className="mt-1 block text-[#96ed08]">Better Every Mile.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                From booking to drop-off, AkiGO connects every part of your
                journey with technology designed for convenience, transparency,
                and peace of mind.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {technologyBenefits.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="group rounded-2xl border border-white/[0.12] bg-[#111a12]/90 p-5 transition-colors hover:border-[#96ed08]/50 hover:bg-[#172218]">
                    <div className="grid size-11 place-items-center rounded-xl border border-[#96ed08]/25 bg-[#96ed08]/10 text-[#96ed08]">
                      <Icon size={22} strokeWidth={1.9} />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
                  </div>
                ))}
              </div>

              <Link href="/download" className={`${primaryButton} mt-8 w-fit`}>
                Explore AkiGO
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/25 bg-[linear-gradient(115deg,#0d1c10_0%,#071009_46%,#030503_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
              <div className="pointer-events-none absolute -left-20 bottom-[-170px] size-[400px] rounded-full bg-[#96ed08]/10 blur-[110px]" />
              <div className="pointer-events-none absolute -right-20 top-[-160px] size-[390px] rounded-full bg-[#96ed08]/10 blur-[110px]" />
              <div className="relative grid items-center gap-9 px-7 py-10 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:px-12 lg:py-14">
                <div className="relative min-w-0">
                  <TechnologyGallery images={published.downloadImages?.length ? published.downloadImages : ["/images/home/technology.png"]} intervalSeconds={published.downloadIntervalSeconds || 5} />
                </div>
                <div className="relative z-10">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                    AkiGO apps
                  </p>
                  <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
                    Your next ride <span className="text-[#96ed08]">starts here.</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                    Book a ride, follow your journey, or start driving with AkiGO.
                    Choose the app that works for you.
                  </p>
                  <a href="https://apps.apple.com/us/app/akigo/id6802560351" target="_blank" rel="noopener noreferrer" className={`${primaryButton} mt-8 w-fit`}>
                    Download AkiGO <ArrowRight size={18} />
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
