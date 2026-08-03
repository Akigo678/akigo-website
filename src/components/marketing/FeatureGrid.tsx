import { FeatureCard, type Feature } from "./FeatureCard";

export function FeatureGrid({ eyebrow, title, description, features }: { eyebrow: string; title: string; description?: string; features: Feature[] }) {
  return (
    <section className="border-b border-white/[0.08] py-24 sm:py-32">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="font-display mt-6 text-4xl font-extrabold tracking-[-0.045em] sm:text-6xl">{title}</h2>
          {description ? <p className="mt-6 text-lg leading-8 text-white/55">{description}</p> : null}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}</div>
      </div>
    </section>
  );
}
