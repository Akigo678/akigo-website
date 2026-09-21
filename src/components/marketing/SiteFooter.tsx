import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FooterLocaleControls } from "./FooterLocaleControls";

const RIDER_IOS_URL =
  process.env.NEXT_PUBLIC_RIDER_IOS_URL?.trim() ||
  "https://apps.apple.com/us/app/akigo/id6802560351";

const RIDER_ANDROID_URL =
  process.env.NEXT_PUBLIC_RIDER_ANDROID_URL?.trim() || "";


const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About AkiGO", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Launch Markets", href: "/launch-markets" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Ride", href: "/ride" },
      { label: "Drive", href: "/drive" },
      { label: "Deliver", href: "/deliver" },
      { label: "Business Solutions", href: "/business" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Safety Center", href: "/safety-center" },
      { label: "Contact Us", href: "/contact" },
      {
        label: "Community Guidelines",
        href: "/community-guidelines",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Delete Account", href: "/delete-account" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const resourceLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Rider FAQ", href: "/faq/riders" },
  { label: "Driver FAQ", href: "/faq/drivers" },
  { label: "Delivery FAQ", href: "/faq/delivery" },
  { label: "Business FAQ", href: "/faq/business" },
  { label: "Safety Center", href: "/safety-center" },
  { label: "Accessibility", href: "/accessibility" },
];

const socialLinks = [
  {
    label: "IG",
    name: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    label: "FB",
    name: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
  },
  {
    label: "TT",
    name: "TikTok",
    href: process.env.NEXT_PUBLIC_TIKTOK_URL,
  },
  {
    label: "in",
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    label: "YT",
    name: "YouTube",
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  },
].filter(
  (
    social,
  ): social is {
    label: string;
    name: string;
    href: string;
  } => Boolean(social.href),
);

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="site-container">
        {/* PRIMARY FOOTER ROW */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.45fr_repeat(4,minmax(0,0.82fr))_1.08fr] lg:gap-9">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="AkiGO homepage"
              className="font-display inline-flex rounded-sm text-3xl font-extrabold tracking-[-0.055em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
            >
              Aki<span className="text-[#96ed08]">GO</span>
            </Link>

            <p className="mt-5 max-w-[310px] text-sm leading-6 text-white/48">
              A connected mobility and local delivery platform being prepared
              for riders, drivers, businesses, and communities through a
              controlled rollout.
            </p>

            {socialLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit AkiGO on ${social.name}`}
                    className="grid size-9 place-items-center rounded-full border border-white/[0.10] bg-white/[0.025] text-[11px] font-extrabold text-white/45 transition duration-200 hover:-translate-y-0.5 hover:border-[#96ed08]/45 hover:bg-[#96ed08]/10 hover:text-[#96ed08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-white">
                {column.title}
              </h2>

              <nav
                aria-label={`${column.title} links`}
                className="mt-5 space-y-3"
              >
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group flex w-fit items-center gap-1.5 rounded-sm text-sm text-white/45 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    {link.label}

                    <ArrowRight
                      size={12}
                      aria-hidden="true"
                      className="translate-x-[-2px] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-60"
                    />
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-bold text-white">
              Download the app
            </h2>

            <div className="mt-5 space-y-3">
              <a
                href={RIDER_IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download AkiGO Rider on the App Store"
                className="flex min-h-14 items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.025] px-4 transition hover:border-[#96ed08]/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
              >
                <div
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[17px] font-black text-black"
                >
                  A
                </div>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.08em] text-white/45">
                    Download on the
                  </span>

                  <span className="block text-sm font-bold text-white">
                    App Store
                  </span>
                </span>
              </a>

              {RIDER_ANDROID_URL ? (
                <a
                  href={RIDER_ANDROID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get AkiGO Rider on Google Play"
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.025] px-4 transition hover:border-[#96ed08]/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  <div
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[15px] font-black text-black"
                  >
                    ▶
                  </div>

                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.08em] text-white/45">
                      Get it on
                    </span>

                    <span className="block text-sm font-bold text-white">
                      Google Play
                    </span>
                  </span>
                </a>
              ) : (
                <Link
                  href="/download#rider"
                  aria-label="View AkiGO Rider Google Play availability"
                  className="flex min-h-14 items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.025] px-4 transition hover:border-[#96ed08]/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  <div
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[15px] font-black text-black"
                  >
                    ▶
                  </div>

                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.08em] text-white/45">
                      Coming soon on the
                    </span>

                    <span className="block text-sm font-bold text-white">
                      Google Play
                    </span>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* RESOURCES ROW */}
        <div className="border-t border-white/[0.08] py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="shrink-0">
              <h2 className="text-sm font-bold text-white">
                Resources
              </h2>

              <p className="mt-1 text-xs text-white/35">
                Help, safety, accessibility, and frequently asked questions.
              </p>
            </div>

            <nav
              aria-label="Resource links"
              className="flex flex-wrap gap-2.5 lg:ml-auto lg:justify-end"
            >
              {resourceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.025] px-4 text-sm font-semibold text-white/55 transition hover:-translate-y-0.5 hover:border-[#96ed08]/40 hover:bg-[#96ed08]/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  {link.label}
                  <ArrowRight
                    size={13}
                    aria-hidden="true"
                    className="text-[#96ed08]"
                  />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* BOTTOM FOOTER ROW */}
        <div className="border-t border-white/[0.08] py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <FooterLocaleControls />

            <div className="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:gap-6">
              <p>
                © {new Date().getFullYear()} AkiGO Technologies LLC. All rights
                reserved.
              </p>

              <p>
                Made with <span className="text-[#96ed08]">♥</span> in the USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
