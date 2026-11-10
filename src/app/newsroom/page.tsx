import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Newspaper } from "lucide-react";
import { MarketingLayout, primaryButton, secondaryButton } from "@/components/marketing";

const NEWSROOM_EMAIL = "akigo678@gmail.com";

const updates = [
  { category: "Platform development", title: "Connecting rides, delivery, and business tools", description: "AkiGO continues work on rider, driver, courier, and business experiences across one platform.", image: "/images/home/akigo-press-platform.png", alt: "Navigation interface with a green route" },
  { category: "Local business", title: "Building tools for local partners", description: "Restaurant, merchant, and business workflows are part of AkiGO’s ongoing product development.", image: "/images/home/akigo-press-business.png", alt: "Business professionals meeting in an office" },
  { category: "Technology", title: "Improving routing and dispatch visibility", description: "Routing, assignment, trip progress, and operational reliability remain important areas of work.", image: "/images/home/akigo-press-routing.png", alt: "City route visualization" },
  { category: "Safety", title: "Strengthening account and service protections", description: "AkiGO is refining access controls, reporting, support processes, and platform safeguards.", image: "/images/home/akigo-press-safety.png", alt: "Security shield illustration" },
];

export default function NewsroomPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505] text-white">
        <section className="relative isolate overflow-hidden pt-[88px]">
          <Image src="/images/newsroom/akigo-newsroom-hero-v2.png" alt="AkiGO press materials, microphone, and camera overlooking Orlando" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/5" />
          <div className="site-container flex min-h-[620px] items-center py-20 sm:min-h-[670px]">
            <div className="max-w-[650px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#96ed08]"><span className="size-2 rounded-full bg-[#96ed08]" />AkiGO Newsroom</p>
              <h1 className="font-display mt-6 text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-[5.2rem]">The latest from <span className="text-[#96ed08]">AkiGO.</span></h1>
              <p className="mt-6 max-w-[580px] text-lg leading-8 text-white/85">Company announcements, product progress, and media information—all in one place.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#updates" className={primaryButton}>Explore updates <ArrowRight size={18} /></a>
                <Link href="/press" className={secondaryButton}><Newspaper size={18} /> Press Center</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="updates" className="scroll-mt-28 border-t border-white/10 py-20 sm:py-24">
          <div className="site-container">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">Platform progress</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">What we’re working on</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/60">These are development areas, not dated press releases or announcements of public availability.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {updates.map((update) => (
                <article key={update.title} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101510]">
                  <div className="relative aspect-[16/10] overflow-hidden"><Image src={update.image} alt={update.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover" /></div>
                  <div className="p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#96ed08]">{update.category}</p>
                    <h3 className="font-display mt-3 text-xl font-bold leading-7">{update.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{update.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0b1109] py-20 sm:py-24">
          <div className="site-container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">Official announcements</p>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">Press releases</h2>
              <p className="mt-4 max-w-xl leading-7 text-white/60">No formal press releases have been published here yet. Confirmed announcements will appear with their publication dates.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#96ed08]/20 bg-[#14200f] p-7 sm:p-8">
              <Mail className="text-[#96ed08]" size={29} />
              <h3 className="mt-5 text-2xl font-bold">Media inquiries</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">For company information, interviews, image requests, fact checks, or corrections, contact the AkiGO team.</p>
              <a href={`mailto:${NEWSROOM_EMAIL}?subject=AkiGO%20Media%20Inquiry`} className="mt-5 inline-block break-all font-bold text-[#96ed08] hover:underline">{NEWSROOM_EMAIL}</a>
              <div className="mt-6"><Link href="/press" className="inline-flex items-center gap-2 font-bold text-white hover:text-[#96ed08]">Visit the Press Center <ArrowRight size={17} /></Link></div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
