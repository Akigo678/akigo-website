import Link from "next/link";
import { AlertTriangle, ArrowRight, Headphones, MapPin, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Emergency guidance",
    description: "Get clear steps on what to do in urgent situations.",
  },
  {
    icon: MapPin,
    title: "Share your journey",
    description: "Let a trusted contact follow your trip when sharing is available.",
  },
  {
    icon: AlertTriangle,
    title: "Report a concern",
    description: "Tell us about safety issues so they can be reviewed.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    description: "Get help with trip and safety concerns.",
  },
];

export function SafetyHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#050705] pt-[88px]">
      <div className="grid min-h-[580px] lg:grid-cols-[40%_60%]">
        <div className="relative z-10 flex flex-col justify-center bg-[radial-gradient(circle_at_0%_0%,rgba(150,237,8,.09),transparent_55%)] px-6 py-16 sm:px-12 lg:py-20 xl:pl-[max(4rem,calc((100vw-1440px)/2))]">
          <p className="text-sm font-extrabold uppercase tracking-[.24em] text-[#96ed08]">Safety first</p>
          <h1 className="font-display mt-7 max-w-[690px] text-[clamp(3.2rem,5.2vw,6rem)] font-extrabold leading-[.98] tracking-[-.065em] text-white">
            Your journey.<span className="mt-2 block text-[#96ed08]">Our priority.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/75">Designed to help you travel with more confidence.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#safety-pillars" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#96ed08] px-7 font-bold text-black transition hover:bg-[#b3ff40]">
              Safety at AkiGO <ArrowRight size={18} />
            </Link>
            <a href="#safety-concern" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/75 px-7 font-bold text-white transition hover:border-[#96ed08] hover:text-[#96ed08]">
              Report a concern <ArrowRight size={18} />
            </a>
          </div>
        </div>
        <div className="relative min-h-[350px] overflow-hidden lg:min-h-[580px]">
          {/* The image is a design reference: only its photographic right-hand portion is shown. */}
          <div
            role="img"
            aria-label="AkiGO driver seated inside a parked left-hand-drive SUV while a rider stands safely beside the rear passenger door in Orlando"
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/images/safety/akigo-safety-curbside.png')",
              backgroundSize: "auto 167%",
              backgroundPosition: "right top",
            }}
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#050705]/80 to-transparent lg:block" />
        </div>
      </div>
      <div className="grid border-t border-[#96ed08]/50 px-6 py-10 sm:grid-cols-2 sm:px-12 xl:grid-cols-4 xl:px-[max(4rem,calc((100vw-1440px)/2))]">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className={`px-4 py-4 ${index > 0 ? "xl:border-l xl:border-white/20" : ""}`}>
            <div className="flex items-center gap-4">
              <Icon size={32} strokeWidth={1.8} className="shrink-0 text-[#96ed08]" />
              <h2 className="text-lg font-bold text-white">{title}</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
          </div>
        ))}
      </div>
      <p className="px-6 pb-8 text-center text-sm italic text-white/60">In an emergency, contact local emergency services.</p>
    </section>
  );
}
