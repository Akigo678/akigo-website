import type { ElementType } from "react";

export type Feature = { icon: ElementType; title: string; text: string };

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <article className="rounded-[1.75rem] border border-white/[0.09] bg-[#0d0d0d] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35">
      <div className="grid size-13 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]"><Icon size={25} strokeWidth={2.1} /></div>
      <h3 className="font-display mt-8 text-2xl font-bold">{feature.title}</h3>
      <p className="mt-4 leading-7 text-white/52">{feature.text}</p>
    </article>
  );
}
