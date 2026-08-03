import { ArrowRight } from "lucide-react";

export function FinalCta({ title, text, label, href }: { title: string; text: string; label: string; href: string }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-[#96ed08] px-7 py-16 text-black sm:px-12 lg:px-16">
          <div className="absolute -right-14 -top-24 size-80 rounded-full border-[55px] border-black/[0.07]" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div><span className="text-xs font-extrabold uppercase tracking-[0.18em]">AkiGO</span><h2 className="font-display mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">{title}</h2><p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-black/68">{text}</p></div>
            <a href={href} className="relative z-10 inline-flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-black/85">{label}<ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
