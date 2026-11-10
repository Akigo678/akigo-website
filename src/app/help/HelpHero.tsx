"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, Building2, CarFront, CreditCard, Headphones, PackageCheck, Search, ShieldCheck, UserCheck, X } from "lucide-react";

const topics = [
  { title: "Rides", description: "Bookings, pickups, cancellations and refunds", href: "#rider-help", icon: CarFront, words: "rider trip ride booking cancel pickup refund" },
  { title: "Driving", description: "Applications, trips, earnings and payouts", href: "#driver-help", icon: UserCheck, words: "driver onboarding vehicle documents earnings payout" },
  { title: "Deliveries", description: "Pickup, tracking, drop-off and missing items", href: "#delivery-help", icon: PackageCheck, words: "courier package food restaurant delivery missing" },
  { title: "Business", description: "Merchant accounts, orders and partnerships", href: "#business-help", icon: Building2, words: "merchant restaurant business partner order" },
  { title: "Payments", description: "Cards, wallets, charges and refunds", href: "#payments-help", icon: CreditCard, words: "charge billing payment money wallet refund" },
  { title: "Safety", description: "Emergency guidance and reporting concerns", href: "#safety-help", icon: ShieldCheck, words: "security concern incident emergency report" },
];

export default function HelpHero() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return topics;
    return topics.filter((topic) => `${topic.title} ${topic.description} ${topic.words}`.toLowerCase().includes(search));
  }, [query]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#060806] pt-[88px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/help/akigo-help-background-bright.png')" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-black/35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[linear-gradient(90deg,rgba(3,6,3,.78),rgba(3,6,3,.28)_55%,rgba(3,6,3,.08))]" />
      <div className="site-container relative grid grid-cols-1 gap-12 pb-20">
        <div className="flex min-h-[672px] max-w-[680px] flex-col justify-center py-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#96ed08]/25 bg-[#96ed08]/[.06] px-4 py-2 text-xs font-extrabold uppercase tracking-[.15em] text-[#96ed08]">
            <span className="size-2 rounded-full bg-[#96ed08]" /> AkiGO Help Center
          </p>
          <h1 className="font-display mt-8 text-[clamp(3.4rem,5vw,6.4rem)] font-extrabold leading-[.99] tracking-[-.065em] text-white">
            Here to help.<span className="mt-2 block text-[#96ed08]">Every step of the way.</span>
          </h1>
          <p className="mt-7 max-w-[550px] text-lg leading-8 text-white/70">
            Get straightforward answers for rides, deliveries, driving, payments and your AkiGO account.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#support-request" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#96ed08] px-7 font-bold text-black transition hover:bg-[#b6ff48]">
              Contact support <ArrowRight size={18} />
            </a>
            <Link href="/safety" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/[.045] px-7 font-bold text-white transition hover:border-[#96ed08]/70">
              Safety Center <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm text-white/45"><Headphones size={17} className="text-[#96ed08]" /> Support for riders, drivers, couriers and businesses</p>
        </div>

        <div className="relative mx-auto w-full max-w-[1050px] rounded-[2rem] border border-white/15 bg-[#0d100b]/95 p-5 shadow-[0_25px_100px_rgba(0,0,0,.5)] sm:p-8">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#96ed08]/10 blur-[85px]" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#96ed08]">How can we help?</p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-[-.04em] text-white sm:text-3xl">Find your answer</h2>
            <label htmlFor="akigo-help-search" className="sr-only">Search support topics</label>
            <div className="mt-6 flex h-16 items-center gap-3 rounded-2xl border border-white/20 bg-black/65 px-5 focus-within:border-[#96ed08]">
              <Search size={21} className="shrink-0 text-[#96ed08]" />
              <input id="akigo-help-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search rides, refunds, deliveries..." className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/40" />
              {query && <button type="button" onClick={() => setQuery("")} className="rounded-full p-1 text-white/60 hover:text-white" aria-label="Clear search"><X size={18} /></button>}
            </div>
            <div className="mt-6 flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-white/80">{query ? "Matching support topics" : "Browse by topic"}</p>
              <span className="text-xs text-white/40">{filtered.length} {filtered.length === 1 ? "topic" : "topics"}</span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {filtered.map(({ title, description, href, icon: Icon }) => (
                <a key={title} href={href} className="group flex min-h-[104px] items-start gap-3 rounded-2xl border border-white/10 bg-black/50 p-4 transition hover:border-[#96ed08]/55 hover:bg-[#96ed08]/[.055]">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]"><Icon size={21} /></span>
                  <span className="min-w-0"><span className="flex items-center gap-1 text-base font-bold text-white">{title}<ArrowRight size={14} className="text-[#96ed08] opacity-0 transition group-hover:opacity-100" /></span><span className="mt-1 block text-xs leading-5 text-white/55">{description}</span></span>
                </a>
              ))}
            </div>
            {filtered.length === 0 && <p role="status" className="mt-4 rounded-xl border border-white/10 p-5 text-sm leading-6 text-white/65">No matching category yet. Try “ride,” “payment,” or “delivery,” or contact support below.</p>}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/[.055] p-4">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[#96ed08]" />
              <p className="text-xs leading-6 text-white/65">In immediate danger, contact local emergency services. AkiGO support is not an emergency-response service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
