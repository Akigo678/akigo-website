import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  Newspaper,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";

const relatedLinks = [
  {
    icon: Users,
    title: "Leadership",
    text: "Meet the people helping shape AkiGO’s technology, operations, and long-term direction.",
    href: "/about",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Learn how AkiGO is building safety, support, permissions, and review workflows into the platform.",
    href: "/safety",
  },
  {
    icon: BriefcaseBusiness,
    title: "Careers",
    text: "Explore opportunities to help build the next generation of local mobility and delivery.",
    href: "/careers",
  },
  {
    icon: Newspaper,
    title: "News and Updates",
    text: "Follow important company announcements, product progress, and launch updates.",
    href: "/news",
  },
];

export default function FounderLetterPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="relative min-h-[620px] overflow-hidden bg-[#080808] sm:min-h-[700px] lg:min-h-[780px]">
            <img
              src="/images/founder/sunday-akinnusi-founder-wide.png"
              alt="Sunday A., Founder and CEO of AkiGO Technologies"
              className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[70%_center] lg:object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.84)_28%,rgba(0,0,0,0.48)_52%,rgba(0,0,0,0.12)_74%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.02)_58%,rgba(0,0,0,0.58)_100%)]" />

            <div className="site-container relative z-10 flex min-h-[620px] flex-col py-8 sm:min-h-[700px] sm:py-10 lg:min-h-[780px]">
              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.12] bg-black/25 px-4 py-2 text-sm font-bold text-white/65 backdrop-blur-md transition hover:border-[#96ed08]/35 hover:text-[#96ed08]"
              >
                <ArrowLeft size={17} />
                Back to About AkiGO
              </Link>

              <div className="flex flex-1 items-center py-12 sm:py-16 lg:py-20">
                <div className="max-w-[720px]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#96ed08]/25 bg-[#96ed08]/[0.08] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08] backdrop-blur-md">
                    <Quote size={14} />
                    Founder Letter
                  </div>

                  <h1 className="font-display mt-7 max-w-[780px] text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.8rem]">
                    A letter from the
                    <br />
                    Founder of <span className="text-[#96ed08]">AkiGO.</span>
                  </h1>

                  <p className="mt-8 max-w-[640px] text-base leading-8 text-white/72 sm:text-lg sm:leading-9">
                    Why AkiGO was created, what we are building, and the
                    responsibility we carry as we prepare a connected platform for
                    riders, drivers, businesses, delivery customers, and communities.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-white/52">
                    <span>Sunday A.</span>
                    <span className="size-1 rounded-full bg-white/25" />
                    <span>Founder and CEO</span>
                    <span className="size-1 rounded-full bg-white/25" />
                    <span>August 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LETTER */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[250px_minmax(0,1fr)]">
              <aside className="lg:sticky lg:top-[118px] lg:self-start">
                <div className="space-y-5">
                  <div className="rounded-[1.5rem] border border-white/[0.09] bg-[#0b0b0b] p-6">
                    <div className="grid size-12 place-items-center rounded-2xl border border-[#96ed08]/15 bg-[#96ed08]/10 text-[#96ed08]">
                      <Sparkles size={23} />
                    </div>

                    <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                      The purpose
                    </p>

                    <p className="mt-3 text-sm leading-7 text-white/52">
                      AkiGO is being built to make local transportation, delivery,
                      driver opportunities, and business logistics feel more
                      connected, clear, and responsible.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/[0.09] bg-white/[0.025] p-6">
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/38">
                      In this letter
                    </p>

                    <nav className="mt-5 space-y-3 text-sm font-semibold">
                      <a href="#why-i-started-akigo" className="block text-white/55 transition hover:text-[#96ed08]">
                        Why I Started AkiGO
                      </a>
                      <a href="#our-responsibility" className="block text-white/55 transition hover:text-[#96ed08]">
                        Our Responsibility
                      </a>
                      <a href="#what-comes-next" className="block text-white/55 transition hover:text-[#96ed08]">
                        What Comes Next
                      </a>
                    </nav>
                  </div>
                </div>
              </aside>

              <article className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#080808_72%)] px-7 py-10 shadow-[0_30px_100px_rgba(0,0,0,.34)] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
                <div className="pointer-events-none absolute right-[-8rem] top-[-8rem] size-80 rounded-full bg-[#96ed08]/[0.06] blur-[120px]" />

                <div className="relative mx-auto max-w-[820px]">
                  <p className="font-display text-2xl font-bold leading-10 text-white sm:text-3xl">
                    To our future riders, drivers, couriers, business partners,
                    employees, and communities,
                  </p>

                  <p className="mt-10 text-lg leading-9 text-white/70">
                    AkiGO started with a simple belief: local movement should be
                    easier to understand, more connected, and more useful for the
                    people who depend on it every day.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    Transportation and delivery are often treated as separate
                    experiences. Riders use one system, drivers use another,
                    businesses manage logistics somewhere else, and support is
                    disconnected from all of them. We are building AkiGO to bring
                    those needs together through one coordinated platform.
                  </p>

                  <div className="my-14 h-px bg-gradient-to-r from-[#96ed08]/70 via-white/15 to-transparent" />

                  <h2
                    id="why-i-started-akigo"
                    className="scroll-mt-32 font-display text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl"
                  >
                    Why I Started AkiGO
                  </h2>

                  <p className="mt-7 text-lg leading-9 text-white/70">
                    AkiGO began with a simple belief: transportation and delivery
                    can work better for everyone. As I spent time learning about
                    the industry, I saw an opportunity to build something
                    different—a platform designed around people instead of
                    transactions. That vision became the foundation of AkiGO.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    Drivers are the backbone of every ride and delivery. They
                    dedicate long hours, maintain their vehicles, and help people
                    reach their destinations safely every day. My goal is to build
                    a platform that creates better earning opportunities, provides
                    greater transparency, and equips drivers with tools that help
                    them spend more time earning and less time waiting. When
                    drivers are supported and valued, they are able to provide an
                    even better experience for the people they serve.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    Riders deserve more than simply getting from one place to
                    another. They deserve a ride that is reliable, affordable,
                    safe, and enjoyable from the moment they request it until they
                    arrive at their destination. Every feature we build—from
                    dispatch and pricing to safety and customer support—is
                    designed with that goal in mind: providing a better ride
                    experience for every rider.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    I believe these goals go hand in hand. When drivers have
                    better opportunities and better tools, riders receive better
                    service. Businesses gain dependable transportation and
                    delivery solutions, communities benefit from stronger local
                    mobility, and AkiGO grows on a foundation of trust rather than
                    short-term success.
                  </p>

                  <div className="my-14 h-px bg-gradient-to-r from-[#96ed08]/70 via-white/15 to-transparent" />

                  <h2
                    id="our-responsibility"
                    className="scroll-mt-32 font-display text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl"
                  >
                    Our Responsibility
                  </h2>

                  <p className="mt-7 text-lg leading-9 text-white/70">
                    Building a mobility and delivery platform comes with real
                    responsibility. People trust us with their time, their work,
                    their money, and their safety. That trust must be earned
                    through secure technology, honest communication, dependable
                    operations, and a commitment to continuous improvement.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    We will not measure success only by growth or the number of
                    trips completed. We will measure it by whether drivers feel
                    respected, whether riders enjoy a consistently excellent
                    experience, whether businesses can rely on our services, and
                    whether every community we serve is better because AkiGO is
                    there.
                  </p>

                  <div className="my-14 h-px bg-gradient-to-r from-[#96ed08]/70 via-white/15 to-transparent" />

                  <h2
                    id="what-comes-next"
                    className="scroll-mt-32 font-display text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl"
                  >
                    What Comes Next
                  </h2>

                  <p className="mt-7 text-lg leading-9 text-white/70">
                    Our next chapter is focused on production readiness,
                    controlled testing, market preparation, and the operational
                    systems required to launch carefully. We are continuing to
                    strengthen security, performance, reliability, support,
                    dispatch, and the end-to-end experience across the AkiGO
                    platform.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    Over time, our ambition is to create one trusted ecosystem for
                    everyday local mobility: a place where people can request a
                    ride, send an item, support a local business, earn as a driver,
                    or manage business transportation through connected tools.
                  </p>

                  <p className="mt-8 text-lg leading-9 text-white/70">
                    We are grateful to everyone who believes in the vision, shares
                    feedback, tests the product, and helps us build AkiGO the right
                    way. We are still at the beginning, but the direction is clear.
                  </p>

                  <p className="mt-8 font-display text-2xl font-bold leading-9 text-white">
                    We are building for the long term.
                  </p>

                  <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.09] pt-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-display text-3xl font-bold text-white">
                        Sunday Akinnusi
                      </p>

                      <p className="mt-2 text-sm font-semibold text-[#96ed08]">
                        Founder and CEO
                      </p>

                      <p className="mt-1 text-sm text-white/38">
                        AkiGO Technologies
                      </p>
                    </div>

                    <p className="max-w-[280px] text-sm leading-6 text-white/35 sm:text-right">
                      Building one connected platform for local mobility,
                      delivery, business logistics, and opportunity.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Explore AkiGO
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Learn more about the company.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                Explore AkiGO’s leadership, safety approach, company updates, and
                opportunities to help build the platform.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {relatedLinks.map(({ icon: Icon, title, text, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08]">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Continue exploring
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Learn more about AkiGO Technologies.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Return to the About page or explore the connected mobility,
                    delivery, business, and safety experiences AkiGO is building.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/about" className={secondaryButton}>
                    Back to About
                  </Link>

                  <Link href="/ride" className={primaryButton}>
                    Explore AkiGO
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
