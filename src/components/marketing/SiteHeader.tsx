"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import { primaryNavigation } from "@/data/navigation";
import { primaryButton } from "./buttons";

export function SiteHeader() {
  const isDriverPage = usePathname() === "/drive";
  const downloadUrl = isDriverPage
    ? "https://apps.apple.com/us/app/akigo-driver/id6802773874"
    : "https://apps.apple.com/us/app/akigo/id6802560351";
  const downloadLabel = isDriverPage ? "Download AkiGO Driver" : "Download AkiGO";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/78 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/68">
      <div className="site-container flex h-[88px] items-center justify-between gap-6 xl:gap-10">
        <Link
          href="/"
          aria-label="AkiGO homepage"
          className="font-display shrink-0 text-2xl font-extrabold tracking-[-0.055em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
        >
          Aki<span className="text-[#96ed08]">GO</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-sm font-semibold text-white/70 xl:flex xl:gap-3"
        >
          {primaryNavigation.map((item) => (
            item.label === "Ride" ? (
              <div key={item.label} className="group/ride relative">
                <Link href={item.href} className="inline-flex items-center gap-1 rounded-full px-4 py-3 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] xl:px-5">
                  Ride <ChevronDown size={14} aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-60 pt-3 opacity-0 transition group-hover/ride:visible group-hover/ride:opacity-100 group-focus-within/ride:visible group-focus-within/ride:opacity-100">
                  <div className="rounded-2xl border border-white/15 bg-[#0b0e09] p-2 shadow-2xl">
                    <Link href="/ride" className="block rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white">Explore rides</Link>
                    <Link href="/long-distance-quote" className="block rounded-xl bg-[#96ed08]/10 px-4 py-3 text-sm font-bold text-[#96ed08] hover:bg-[#96ed08]/20">Long-distance quotes <ArrowRight size={14} className="ml-1 inline" /></Link>
                  </div>
                </div>
              </div>
            ) : (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-3 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] xl:px-5"
            >
              {item.label}
            </Link>
            )
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/launch-markets"
            className="hidden min-h-0 items-center rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-[#96ed08]/40 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] xl:inline-flex"
          >
            Launch Markets
          </Link>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${primaryButton} hidden min-h-0 px-6 py-3 text-sm sm:inline-flex`}
          >
            {downloadLabel}
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>

          <details className="group relative xl:hidden">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-[#96ed08]/45 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] [&::-webkit-details-marker]:hidden">
              <Menu size={20} className="group-open:hidden" />
              <X size={20} className="hidden group-open:block" />
              <span className="sr-only">Open navigation menu</span>
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]/98 p-3 shadow-2xl backdrop-blur-2xl"
            >
              {primaryNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-semibold text-white/70 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                >
                  {item.label}
                  <ChevronRight size={17} className="text-white/30" />
                </Link>
              ))}

              <Link href="/long-distance-quote" className="mt-1 flex items-center justify-between rounded-2xl bg-[#96ed08]/10 px-4 py-3.5 font-bold text-[#96ed08] transition hover:bg-[#96ed08]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]">
                Request a long-distance quote <ArrowRight size={17} />
              </Link>

              <Link
                href="/launch-markets"
                className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3.5 font-semibold text-white/75 transition hover:border-[#96ed08]/35 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
              >
                Launch Markets
                <ChevronRight size={17} className="text-white/30" />
              </Link>

              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-between rounded-2xl bg-[#96ed08] px-4 py-3.5 font-extrabold text-black transition hover:bg-[#a7ff22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {downloadLabel}
                <ArrowRight size={17} />
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
