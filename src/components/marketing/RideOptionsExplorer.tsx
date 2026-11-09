"use client";

import {useEffect,useState} from "react";
import Image from "next/image";
import {ArrowRight, Check, ChevronRight, X} from "lucide-react";

type RideOption={title:string;image:string;text:string;tag:string};
type Category="All rides"|"Everyday"|"Comfort"|"XL & Group"|"Luxury Black"|"Specialized"|"Delivery";
const categories:Category[]=["All rides","Everyday","Comfort","XL & Group","Luxury Black","Specialized","Delivery"];
const categoryFor=(title:string):Category=>{
 if(title.startsWith("AkiGO Black"))return "Luxury Black";
 if(["Basic","Priority","Wait & Save"].includes(title))return "Everyday";
 if(["Comfort","Executive","Executive SUV"].includes(title))return "Comfort";
 if(["XL","XXL"].includes(title))return "XL & Group";
 if(["Courier","Pickup Truck"].includes(title))return "Delivery";
 return "Specialized";
};

export default function RideOptionsExplorer({options}:{options:RideOption[]}){
 const [category,setCategory]=useState<Category>("All rides");
 const [selected,setSelected]=useState<RideOption|null>(null);
 const filtered=options.filter(item=>category==="All rides"||categoryFor(item.title)===category);
 useEffect(()=>{if(!selected)return;const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setSelected(null);};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[selected]);
 return <>
  <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5" aria-label="Filter ride options">
   {categories.map(item=><button key={item} type="button" onClick={()=>setCategory(item)} aria-pressed={category===item} className={`rounded-full border px-4 py-2.5 text-sm font-bold transition duration-200 ${category===item?"border-[#96ed08] bg-[#96ed08] text-black shadow-[0_4px_25px_rgba(150,237,8,.19)]":"border-white/[0.13] bg-white/[0.035] text-white/65 hover:border-[#96ed08]/50 hover:text-white"}`}>{item}</button>)}
  </div>
  <p className="mt-5 text-center text-xs text-white/45" role="status">Showing {filtered.length} of {options.length} AkiGO options</p>
  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
   {filtered.map(({title,image,text,tag})=><article key={title} className="group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white/[0.08] bg-[linear-gradient(150deg,#10150f,#070807_80%)] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/45 hover:shadow-[0_18px_65px_rgba(150,237,8,.09)] sm:p-5">
    <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.06] blur-[70px]"/>
    <div className="relative flex h-full flex-col">
     <div className="flex items-start justify-between gap-3"><span className="rounded-full border border-[#96ed08]/20 bg-[#96ed08]/[.065] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#baf66d]">{categoryFor(title)}</span><span className="text-[10px] font-bold uppercase tracking-[.08em] text-white/40">{tag}</span></div>
     <div className="relative mt-3 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_50%_75%,rgba(150,237,8,.16),transparent_70%)]"><Image src={`/images/ride-vehicles/${image}`} alt={`${title} vehicle`} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-contain object-center drop-shadow-[0_12px_18px_rgba(150,237,8,.17)] transition-transform duration-500 group-hover:scale-[1.1]"/></div>
     <h3 className="font-display mt-3 text-2xl font-bold tracking-[-.025em] text-white">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-white/55">{text}</p>
     <button type="button" onClick={()=>setSelected({title,image,text,tag})} className="mt-5 flex w-full items-center justify-between rounded-xl border border-[#96ed08]/20 bg-[#96ed08]/[0.055] px-4 py-3 text-sm font-bold text-[#96ed08] transition hover:border-[#96ed08]/70 hover:bg-[#96ed08]/[0.13]">Explore ride <ChevronRight size={18}/></button>
    </div>
   </article>)}
  </div>
  {selected?<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-md" onMouseDown={event=>{if(event.target===event.currentTarget)setSelected(null);}}>
   <section role="dialog" aria-modal="true" aria-label={`${selected.title} details`} className="relative max-h-full w-full max-w-[580px] overflow-y-auto rounded-[2rem] border border-[#96ed08]/35 bg-[#0b0d09] p-5 shadow-[0_30px_120px_rgba(0,0,0,.8)] sm:p-8">
    <button autoFocus type="button" onClick={()=>setSelected(null)} aria-label="Close ride details" className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full border border-white/15 bg-black/70 text-white hover:text-[#96ed08]"><X size={19}/></button>
    <span className="text-xs font-extrabold uppercase tracking-[.16em] text-[#96ed08]">{categoryFor(selected.title)} · {selected.tag}</span>
    <div className="relative mt-4 aspect-[16/9] w-full rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(150,237,8,.13),transparent_65%)]"><Image src={`/images/ride-vehicles/${selected.image}`} alt={`${selected.title} vehicle`} fill unoptimized sizes="(max-width: 640px) 100vw, 580px" className="object-contain"/></div>
    <h2 className="font-display mt-3 text-3xl font-extrabold text-white">{selected.title}</h2><p className="mt-3 leading-7 text-white/65">{selected.text}</p>
    <div className="mt-5 space-y-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-sm text-white/70"><p className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-[#96ed08]" size={17}/>Compare available vehicle options in the AkiGO Rider app.</p><p className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-[#96ed08]" size={17}/>Check pricing, seating and luggage details before confirming.</p><p className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-[#96ed08]" size={17}/>Ride types and vehicle availability depend on your market and trip.</p></div>
    <a href="https://apps.apple.com/us/app/akigo/id6802560351" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#96ed08] px-6 font-extrabold text-black transition hover:bg-[#b5ff44]">Download AkiGO <ArrowRight size={18}/></a>
   </section>
  </div>:null}
 </>;
}
