import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { primaryButton, secondaryButton } from "./buttons";

export function PageHero({ eyebrow, title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, children }: {
  eyebrow: string; title: ReactNode; description: string; primaryLabel: string; primaryHref: string; secondaryLabel?: string; secondaryHref?: string; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] pt-24 sm:pt-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute right-[-12rem] top-10 h-[38rem] w-[38rem] rounded-full bg-[#96ed08]/10 blur-[130px]" />
      <div className="site-container relative z-10 grid min-h-0 items-center gap-9 py-12 sm:gap-14 sm:py-16 lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div className="min-w-0">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display mt-7 max-w-4xl text-[clamp(2.35rem,11vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[5.1rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:mt-8 sm:text-xl sm:leading-8">{description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={primaryHref} className={primaryButton}>{primaryLabel}<ArrowRight size={18} strokeWidth={2.5} /></a>
            {secondaryLabel && secondaryHref ? <a href={secondaryHref} className={secondaryButton}>{secondaryLabel}<ChevronRight size={18} /></a> : null}
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
