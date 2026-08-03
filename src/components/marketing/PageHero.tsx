import { ArrowRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { primaryButton, secondaryButton } from "./buttons";

export function PageHero({ eyebrow, title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref, children }: {
  eyebrow: string; title: ReactNode; description: string; primaryLabel: string; primaryHref: string; secondaryLabel?: string; secondaryHref?: string; children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] pt-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute right-[-12rem] top-10 h-[38rem] w-[38rem] rounded-full bg-[#96ed08]/10 blur-[130px]" />
      <div className="site-container relative z-10 grid min-h-[680px] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-display mt-7 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.1rem]">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">{description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={primaryHref} className={primaryButton}>{primaryLabel}<ArrowRight size={18} strokeWidth={2.5} /></a>
            {secondaryLabel && secondaryHref ? <a href={secondaryHref} className={secondaryButton}>{secondaryLabel}<ChevronRight size={18} /></a> : null}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
