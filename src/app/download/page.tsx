import type { Metadata } from "next";
import Link from "next/link";
import {
  Apple,
  ArrowRight,
  BadgeCheck,
  CarFront,
  Check,
  CircleDot,
  Clock3,
  Download,
  ExternalLink,
  MapPinned,
  Play,
  QrCode,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://akigo.app";

const RIDER_IOS_URL = process.env.NEXT_PUBLIC_RIDER_IOS_URL?.trim() || "";
const RIDER_ANDROID_URL =
  process.env.NEXT_PUBLIC_RIDER_ANDROID_URL?.trim() || "";
const DRIVER_IOS_URL = process.env.NEXT_PUBLIC_DRIVER_IOS_URL?.trim() || "";
const DRIVER_ANDROID_URL =
  process.env.NEXT_PUBLIC_DRIVER_ANDROID_URL?.trim() || "";

export const metadata: Metadata = {
  title: "Download AkiGO | Rider and Driver Apps",
  description:
    "Check the current release status of the AkiGO Rider and AkiGO Driver apps. Verified App Store and Google Play links will appear when available.",
  alternates: {
    canonical: `${SITE_URL}/download`,
  },
  openGraph: {
    title: "Download AkiGO | Rider and Driver Apps",
    description:
      "View the current AkiGO Rider and Driver app release status and access verified store links when they become available.",
    url: `${SITE_URL}/download`,
    siteName: "AkiGO",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/social/akigo-download.jpg`,
        width: 1200,
        height: 630,
        alt: "AkiGO rider and driver mobile apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download AkiGO | Rider and Driver Apps",
    description:
      "View the current AkiGO app release status and use verified store links when available.",
    images: [`${SITE_URL}/images/social/akigo-download.jpg`],
  },
};

type StorePlatform = "ios" | "android";

type StoreLinkProps = {
  platform: StorePlatform;
  url: string;
};

type AppCardProps = {
  audience: "Rider" | "Driver";
  title: string;
  description: string;
  icon: typeof UserRound;
  features: string[];
  iosUrl: string;
  androidUrl: string;
  interestHref: string;
  interestLabel: string;
};

const rolloutSteps = [
  {
    icon: ShieldCheck,
    title: "Production readiness",
    text: "AkiGO completes operational, safety, security, payment, and support checks before public availability.",
  },
  {
    icon: MapPinned,
    title: "Market confirmation",
    text: "Service opens only where local operations, driver supply, support coverage, and required approvals are ready.",
  },
  {
    icon: BadgeCheck,
    title: "Store publication",
    text: "Verified App Store and Google Play links are published here only after the applicable listing is live.",
  },
  {
    icon: Sparkles,
    title: "Controlled access",
    text: "Availability may expand gradually so AkiGO can monitor reliability and improve the experience before broader access.",
  },
];

function StoreLink({ platform, url }: StoreLinkProps) {
  const isIos = platform === "ios";
  const Icon = isIos ? Apple : Play;
  const storeName = isIos ? "App Store" : "Google Play";
  const eyebrow = isIos ? "Download on the" : "Get it on";

  if (!url) {
    return (
      <div
        className="flex min-h-[76px] items-center gap-4 rounded-2xl border border-white/[0.10] bg-white/[0.025] px-5 text-left"
        aria-label={`${storeName} release is being prepared`}
      >
        <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/[0.09] bg-black/45 text-white/55">
          <Icon size={23} fill={isIos ? "currentColor" : "none"} />
        </div>

        <div className="min-w-0">
          <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
            {storeName}
          </span>
          <span className="mt-1 block text-sm font-bold text-white/78">
            Preparing for release
          </span>
        </div>

        <Clock3 className="ml-auto shrink-0 text-[#96ed08]" size={18} />
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[76px] items-center gap-4 rounded-2xl border border-[#96ed08]/30 bg-[#96ed08]/[0.055] px-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#96ed08]/55 hover:bg-[#96ed08]/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
      aria-label={`${eyebrow} ${storeName} — opens in a new tab`}
    >
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#96ed08] text-black shadow-[0_0_24px_rgba(150,237,8,0.16)]">
        <Icon size={23} fill={isIos ? "currentColor" : "none"} />
      </div>

      <div className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/48">
          {eyebrow}
        </span>
        <span className="mt-1 block text-base font-extrabold text-white">
          {storeName}
        </span>
      </div>

      <ExternalLink
        className="ml-auto shrink-0 text-white/38 transition group-hover:text-[#96ed08]"
        size={18}
      />
    </a>
  );
}

function AppCard({
  audience,
  title,
  description,
  icon: Icon,
  features,
  iosUrl,
  androidUrl,
  interestHref,
  interestLabel,
}: AppCardProps) {
  const hasVerifiedLink = Boolean(iosUrl || androidUrl);

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0a0a0a] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.30)] sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-64 rounded-full bg-[#96ed08]/[0.06] blur-[90px]" />

      <div className="relative z-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#96ed08] text-black shadow-[0_0_32px_rgba(150,237,8,0.17)]">
              <Icon size={27} strokeWidth={2.25} />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                AkiGO {audience}
              </p>
              <h2 className="font-display mt-1 text-3xl font-extrabold tracking-[-0.045em] text-white">
                {title}
              </h2>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.035] px-3.5 py-2 text-xs font-bold text-white/65">
            <CircleDot size={14} className="text-[#96ed08]" />
            {hasVerifiedLink ? "Available store link" : "Release in preparation"}
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
          {description}
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2" aria-label={`${audience} app features`}>
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/67">
              <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#96ed08]/12 text-[#96ed08]">
                <Check size={12} strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <StoreLink platform="ios" url={iosUrl} />
          <StoreLink platform="android" url={androidUrl} />
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-white/45">
            Store availability can differ by platform and market. Only verified,
            public store destinations are linked from this page.
          </p>

          <Link
            href={interestHref}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-[#96ed08] transition hover:text-[#b6ff38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
          >
            {interestLabel}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function DownloadPage() {
  const verifiedLinks = [
    RIDER_IOS_URL,
    RIDER_ANDROID_URL,
    DRIVER_IOS_URL,
    DRIVER_ANDROID_URL,
  ].filter(Boolean);
  const showQrArea = verifiedLinks.length > 0;

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "AkiGO Rider",
        applicationCategory: "TravelApplication",
        operatingSystem: "iOS, Android",
        url: `${SITE_URL}/download#rider-app`,
        ...(RIDER_IOS_URL || RIDER_ANDROID_URL
          ? { downloadUrl: [RIDER_IOS_URL, RIDER_ANDROID_URL].filter(Boolean) }
          : {}),
      },
      {
        "@type": "SoftwareApplication",
        name: "AkiGO Driver",
        applicationCategory: "BusinessApplication",
        operatingSystem: "iOS, Android",
        url: `${SITE_URL}/download#driver-app`,
        ...(DRIVER_IOS_URL || DRIVER_ANDROID_URL
          ? { downloadUrl: [DRIVER_IOS_URL, DRIVER_ANDROID_URL].filter(Boolean) }
          : {}),
      },
    ],
  };

  return (
    <MarketingLayout>
      <main className="bg-[#050505] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema).replace(/</g, "\\u003c"),
          }}
        />

        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(150,237,8,0.12),transparent_32%)]" />
          <div className="pointer-events-none absolute left-[-16rem] top-20 size-[36rem] rounded-full bg-[#96ed08]/[0.045] blur-[150px]" />

          <div className="site-container relative z-10 grid min-h-[650px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.09em] text-[#96ed08]">
                <Download size={14} />
                AkiGO apps
              </div>

              <h1 className="font-display mt-7 max-w-[790px] text-5xl font-extrabold leading-[0.94] tracking-[-0.065em] sm:text-6xl lg:text-[5.4rem]">
                One destination for
                <br />
                <span className="text-[#96ed08]">every verified download.</span>
              </h1>

              <p className="mt-7 max-w-[650px] text-lg leading-8 text-white/58">
                Check the current release status of the AkiGO Rider and AkiGO
                Driver apps. Store buttons appear only when the corresponding
                public listing has been verified.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#rider-app" className={primaryButton}>
                  View Rider app
                  <ArrowRight size={18} />
                </a>
                <a href="#driver-app" className={secondaryButton}>
                  View Driver app
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/48">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck size={16} className="text-[#96ed08]" />
                  Verified links only
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#96ed08]" />
                  Controlled rollout
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPinned size={16} className="text-[#96ed08]" />
                  Market-dependent access
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="absolute inset-8 rounded-[3rem] bg-[#96ed08]/10 blur-[75px]" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#96ed08]/24 bg-[#080a07] p-5 shadow-[0_34px_120px_rgba(0,0,0,0.55)] sm:p-7">
                <div className="rounded-[1.7rem] border border-white/[0.09] bg-black/55 p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#96ed08]">
                        Current status
                      </p>
                      <h2 className="font-display mt-2 text-2xl font-extrabold tracking-[-0.04em]">
                        Store publication
                      </h2>
                    </div>
                    <Smartphone size={32} className="text-[#96ed08]" />
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      ["AkiGO Rider · App Store", RIDER_IOS_URL],
                      ["AkiGO Rider · Google Play", RIDER_ANDROID_URL],
                      ["AkiGO Driver · App Store", DRIVER_IOS_URL],
                      ["AkiGO Driver · Google Play", DRIVER_ANDROID_URL],
                    ].map(([label, url]) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5"
                      >
                        <span
                          className={`size-2.5 shrink-0 rounded-full ${
                            url
                              ? "bg-[#96ed08] shadow-[0_0_12px_rgba(150,237,8,.85)]"
                              : "bg-white/25"
                          }`}
                        />
                        <span className="min-w-0 flex-1 text-sm font-semibold text-white/72">
                          {label}
                        </span>
                        <span className="text-xs font-bold text-white/38">
                          {url ? "Available" : "Preparing"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">No placeholder downloads</h3>
                      <p className="mt-2 text-sm leading-6 text-white/48">
                        AkiGO does not show fake store links, QR codes, launch dates,
                        or unsupported availability claims.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.07] py-16 sm:py-20">
          <div className="site-container space-y-7">
            <div id="rider-app" className="scroll-mt-28">
              <AppCard
                audience="Rider"
                title="Request and manage rides"
                description="The AkiGO Rider app is designed for ride selection, booking, payment, live trip progress, communication, and safety features where service is available."
                icon={UserRound}
                features={[
                  "Choose from eligible ride options",
                  "Review trip and payment details",
                  "Follow driver assignment and arrival progress",
                  "Use communication and safety tools",
                ]}
                iosUrl={RIDER_IOS_URL}
                androidUrl={RIDER_ANDROID_URL}
                interestHref="/ride"
                interestLabel="Explore riding with AkiGO"
              />
            </div>

            <div id="driver-app" className="scroll-mt-28">
              <AppCard
                audience="Driver"
                title="Manage trips and earnings"
                description="The AkiGO Driver app is designed for approved drivers to manage availability, receive eligible trip offers, navigate active trips, review earnings, and access driver support tools."
                icon={CarFront}
                features={[
                  "Go online after account approval",
                  "Review and respond to eligible trip offers",
                  "Manage pickup and active-trip progress",
                  "View driver pay, earnings, and support activity",
                ]}
                iosUrl={DRIVER_IOS_URL}
                androidUrl={DRIVER_ANDROID_URL}
                interestHref="/drive"
                interestLabel="Explore driving with AkiGO"
              />
            </div>
          </div>
        </section>

        {showQrArea ? (
          <section className="border-t border-white/[0.07] py-16 sm:py-20">
            <div className="site-container">
              <div className="rounded-[2rem] border border-[#96ed08]/22 bg-[#071006] p-7 sm:p-10">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#96ed08]">
                      <QrCode size={17} />
                      Verified mobile access
                    </div>
                    <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
                      Open a verified store listing on your phone.
                    </h2>
                    <p className="mt-4 leading-7 text-white/52">
                      QR codes should be generated only from the verified URLs
                      configured for this page. Until a dedicated first-party QR
                      component is installed, use the verified store buttons above.
                    </p>
                  </div>

                  <a href="#rider-app" className={secondaryButton}>
                    View store links
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-t border-white/[0.07] py-16 sm:py-20">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                Controlled rollout
              </p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.055em] sm:text-5xl">
                Availability expands when the service is ready.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/52">
                AkiGO is not presenting an unsupported nationwide launch date.
                Release timing and access depend on app-store publication,
                production readiness, local operations, driver availability,
                support capability, and market-specific requirements.
              </p>
            </div>

            <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {rolloutSteps.map(({ icon: Icon, title, text }, index) => (
                <article
                  key={title}
                  className="rounded-[1.6rem] border border-white/[0.09] bg-[#0a0a0a] p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                      <Icon size={23} />
                    </div>
                    <span className="font-display text-sm font-extrabold text-white/24">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-xl font-extrabold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/48">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.07] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-10 shadow-[0_0_80px_rgba(150,237,8,0.045)] sm:px-10 lg:px-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#0a1505_52%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Stay connected
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
                    Interested before your app or market is available?
                  </h2>
                  <p className="mt-4 leading-7 text-white/52">
                    Explore the rider and driver pages for current information.
                    Confirmed availability will be shared through official AkiGO
                    channels and verified links on this page.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link href="/ride" className={primaryButton}>
                    Rider information
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/drive" className={secondaryButton}>
                    Driver information
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}