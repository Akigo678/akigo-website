import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, BadgeCheck, CarFront, Clock3, Route, ShieldCheck } from "lucide-react";
import { MarketingLayout } from "@/components/marketing";
import LongDistanceQuoteForm from "./LongDistanceQuoteForm";

export const metadata: Metadata = {
  title: "Request a Long-Distance Ride Quote",
  description: "Planning a longer trip? Tell AkiGO about your route and request a personalized ride quote for review.",
  alternates: { canonical: "/long-distance-quote" },
};

const benefits = [
  { icon: Route, title: "Your route", text: "We consider pickup, destination, distance, and estimated travel time." },
  { icon: CarFront, title: "The right vehicle", text: "Tell us how many people are traveling and what vehicle you prefer." },
  { icon: ShieldCheck, title: "Fair and sustainable", text: "Any offered fare must account for driver earnings, tolls, operating costs, and trip conditions." },
  { icon: Clock3, title: "Review before booking", text: "You can review any offer before deciding whether to proceed." },
];

export default function LongDistanceQuotePage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505] text-white">
        <section className="relative isolate overflow-hidden border-b border-white/10 pt-[88px]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/long-distance/akigo-long-distance-passenger-hero-v2.png"
              alt="Passenger with a suitcase waiting beside an AkiGO SUV for a long-distance trip"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[64%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.66)_0%,rgba(0,0,0,.44)_37%,rgba(0,0,0,.12)_69%,rgba(0,0,0,0)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/25 via-transparent to-transparent" />
          </div>
          <div className="site-container py-16 sm:py-24">
            <Link href="/ride" className="inline-flex items-center gap-2 text-sm font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,.9)] hover:text-[#96ed08]"><ArrowLeft size={16} /> Back to Rides</Link>
            <div className="mt-10 max-w-[760px]">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#b3ff50] drop-shadow-[0_2px_5px_rgba(0,0,0,.95)]">AkiGO Long-Distance Quotes</p>
                <h1 className="font-display mt-6 max-w-3xl text-5xl font-extrabold leading-[.98] tracking-[-.06em] drop-shadow-[0_3px_12px_rgba(0,0,0,.9)] sm:text-6xl lg:text-7xl">
                  Going far? <span className="text-[#96ed08]">Let’s find a fair fare.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Have a longer journey in mind? Share your travel details with AkiGO.
                  We can review your route and consider a personalized quote that works
                  for the passenger and fairly compensates the driver.
                </p>
                <a href="#quote-form" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#96ed08] px-7 py-4 font-bold text-black">Request a quote <BadgeCheck size={19} /></a>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#090e07] py-12 sm:py-16">
          <div className="site-container">
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#96ed08]">How it works</p>
            <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Tell us your route and schedule", "AkiGO reviews costs and driver availability", "Receive a quote if the trip can be accommodated", "Choose whether to proceed with an authorized booking"].map((step, i) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-[#96ed08]/20 bg-[#10170c] p-5 sm:p-6">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#96ed08]/40 font-bold text-[#96ed08]">{i + 1}</span>
                  <span className="pt-1 text-sm font-semibold leading-6 text-white/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#0d0e0c] p-6">
                <Icon size={25} className="text-[#96ed08]" />
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="quote-form" className="scroll-mt-28 border-t border-white/10 py-16 sm:py-24">
          <div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#96ed08]">Personalized request</p>
              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">Tell us where you want to go.</h2>
              <p className="mt-5 leading-8 text-white/65">Provide your travel details so our team can review your request. This service is for advance quote inquiries, not emergency or immediate pickups.</p>
              <p className="mt-5 text-sm leading-7 text-white/50">A quote, if offered, is subject to driver availability, service area, and final booking terms. No payment is collected by this form.</p>
            </div>
            <LongDistanceQuoteForm />
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
