import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CarFront,
  FileImage,
  FileText,
  ImageIcon,
  Mail,
  MapPinned,
  Palette,
  Users,
} from "lucide-react";
import { MarketingLayout, primaryButton, secondaryButton } from "@/components/marketing";

const PRESS_EMAIL = "akigo678@gmail.com";

function requestMailto(subject: string) {
  return `mailto:${PRESS_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

const mediaResources = [
  { icon: FileImage, title: "Company logos", text: "Request current AkiGO logo artwork and usage guidance." },
  { icon: Palette, title: "Brand guidelines", text: "Ask about brand colors, typography, and logo presentation." },
  { icon: ImageIcon, title: "Product images", text: "Request screenshots or photography suitable for your coverage." },
  { icon: Users, title: "Leadership information", text: "Request confirmed leadership biographies and interview information." },
  { icon: FileText, title: "Company background", text: "Request a current overview of the company and its services." },
];

export default function PressPage() {
  return (
    <MarketingLayout>
      <main className="bg-[#050505] text-white">
        <section className="relative isolate overflow-hidden pt-[88px]">
          <Image src="/images/press/akigo-press-hero-v2.png" alt="AkiGO media materials and branded press folder beside a camera in an Orlando office" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="site-container flex min-h-[620px] items-center py-20 sm:min-h-[660px]">
            <div className="max-w-[650px]">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-[#96ed08]"><span className="size-2 rounded-full bg-[#96ed08]" />AkiGO Press Center</p>
              <h1 className="font-display mt-6 text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-[5.2rem]">AkiGO <span className="text-[#96ed08]">media resources.</span></h1>
              <p className="mt-6 max-w-[580px] text-lg leading-8 text-white/85">Company information, brand materials, and a direct contact for journalists and media professionals.</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#media-resources" className={primaryButton}>Explore resources <ArrowRight size={18} /></a>
                <a href={requestMailto("AkiGO Press Inquiry")} className={secondaryButton}><Mail size={18} /> Contact press</a>
              </div>
            </div>
          </div>
        </section>

        <section id="media-resources" className="scroll-mt-28 border-t border-white/10 py-20 sm:py-24">
          <div className="site-container">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">Media requests</p>
            <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">Request AkiGO materials</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/60">Contact AkiGO for current materials. Availability and permission to use individual assets are confirmed when we respond.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {mediaResources.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-[1.5rem] border border-white/10 bg-[#101510] p-7">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#96ed08]/10 text-[#96ed08]"><Icon size={24} /></div>
                  <h3 className="font-display mt-6 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/60">{text}</p>
                  <a href={requestMailto(`AkiGO Media Resource Request — ${title}`)} className="mt-6 inline-flex items-center gap-2 font-bold text-[#96ed08] hover:underline">Request information <ArrowRight size={17} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0b1109] py-20 sm:py-24">
          <div className="site-container grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">Company facts</p>
              <h2 className="font-display mt-3 text-4xl font-extrabold tracking-[-0.05em]">AkiGO at a glance</h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4"><Building2 className="mt-1 shrink-0 text-[#96ed08]" /><div><p className="font-bold">AkiGO Technologies LLC</p><p className="text-sm text-white/60">Company name</p></div></div>
                <div className="flex items-start gap-4"><MapPinned className="mt-1 shrink-0 text-[#96ed08]" /><div><p className="font-bold">Orlando, Florida</p><p className="text-sm text-white/60">Primary market focus</p></div></div>
                <div className="flex items-start gap-4"><CarFront className="mt-1 shrink-0 text-[#96ed08]" /><div><p className="font-bold">Rides and local delivery</p><p className="text-sm text-white/60">Platform focus</p></div></div>
              </div>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-[#96ed08] hover:underline">About AkiGO <ArrowRight size={17} /></Link>
            </div>
            <div id="press-contact" className="scroll-mt-28 rounded-[1.5rem] border border-[#96ed08]/20 bg-[#14200f] p-7 sm:p-8">
              <Mail className="text-[#96ed08]" size={30} />
              <h2 className="mt-5 text-3xl font-bold">Press contact</h2>
              <p className="mt-4 leading-7 text-white/65">For interviews, company facts, image permissions, or publication questions, include your organization, topic, and deadline in your email.</p>
              <a href={requestMailto("AkiGO Press Inquiry")} className="mt-6 block break-all text-xl font-bold text-[#96ed08] hover:underline">{PRESS_EMAIL}</a>
              <a href={requestMailto("AkiGO Press Inquiry")} className={`${primaryButton} mt-8`}>Contact AkiGO <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
