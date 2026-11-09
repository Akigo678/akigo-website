"use client";

import {useEffect,useState} from "react";
import {ArrowLeft,ArrowRight,CarFront,CheckCircle2,CreditCard,MapPin,Navigation} from "lucide-react";

export type RiderJourneyStep={title:string;description:string;image:string};
export const defaultRiderJourneySteps:RiderJourneyStep[]=[
 {title:"Set your trip",description:"Enter your pickup location and destination.",image:""},
 {title:"Choose a ride",description:"Compare eligible options for your trip.",image:""},
 {title:"Confirm and pay",description:"Review the trip and select an available payment method.",image:""},
 {title:"Track your driver",description:"Follow arrival progress and important updates.",image:""},
 {title:"Complete the ride",description:"Stay connected from pickup through destination.",image:""},
];

const icons=[MapPin,CarFront,CreditCard,Navigation,CheckCircle2];
const phoneImages=[
 "/images/ride-journey/step-01-plan.png",
 "/images/ride-journey/step-02-choose.png",
 "/images/ride-journey/step-03-confirm.png",
 "/images/ride-journey/step-04-track.png",
 "/images/ride-journey/step-05-complete.png",
];

export default function RiderJourneyShowcase({steps=defaultRiderJourneySteps,intervalSeconds=5}:{steps?:RiderJourneyStep[];intervalSeconds?:number}){
 const items=steps.length===5?steps:defaultRiderJourneySteps;
 const [active,setActive]=useState(0);
 const [paused,setPaused]=useState(false);
 const [reducedMotion,setReducedMotion]=useState(false);
 useEffect(()=>{const query=window.matchMedia("(prefers-reduced-motion: reduce)");const update=()=>setReducedMotion(query.matches);update();query.addEventListener("change",update);return()=>query.removeEventListener("change",update);},[]);
 useEffect(()=>{if(paused||reducedMotion)return;const timer=window.setInterval(()=>setActive(current=>(current+1)%items.length),Math.max(3,Math.min(15,intervalSeconds))*1000);return()=>window.clearInterval(timer);},[items.length,intervalSeconds,paused,reducedMotion,active]);
 const current=items[active];
 const select=(next:number)=>setActive((next+items.length)%items.length);
 return <div className="relative overflow-hidden rounded-[2.1rem] border border-[#96ed08]/20 bg-[radial-gradient(ellipse_at_80%_50%,rgba(150,237,8,.09),transparent_55%),linear-gradient(145deg,#0f140d,#070907_60%,#030403)] p-5 shadow-[0_36px_110px_rgba(0,0,0,.5)] sm:p-8 lg:p-11" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setPaused(false);}}>
  <div className="pointer-events-none absolute -right-32 top-10 size-80 rounded-full bg-[#96ed08]/10 blur-[100px]" aria-hidden="true"/>
  <div className="relative grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
   <div>
    <div className="mb-7 flex items-center justify-between gap-3"><span className="text-[11px] font-black uppercase tracking-[.24em] text-[#96ed08]">Five steps. One smooth journey.</span><span className="rounded-full border border-[#96ed08]/25 px-3 py-1 text-xs font-bold text-[#96ed08]">{String(active+1).padStart(2,"0")} / 05</span></div>
    <div className="space-y-2" aria-label="Rider journey steps">{items.map((step,i)=>{const StepIcon=icons[i];const selected=i===active;return <button key={i} type="button" onClick={()=>select(i)} aria-current={selected?"step":undefined} className={`group flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 sm:px-5 ${selected?"border-[#96ed08]/55 bg-[#96ed08]/[.085] shadow-[inset_3px_0_0_#96ed08]":"border-transparent bg-white/[.025] hover:border-white/15 hover:bg-white/[.045]"}`}>
     <span className={`grid size-11 shrink-0 place-items-center rounded-xl transition-colors ${selected?"bg-[#96ed08] text-black":"bg-[#96ed08]/10 text-[#96ed08]"}`}><StepIcon size={21}/></span>
     <span className="min-w-0 flex-1"><span className="mb-1 flex items-center gap-3"><span className="text-[11px] font-black tracking-widest text-[#96ed08]">{String(i+1).padStart(2,"0")}</span><span className={`font-display text-base font-extrabold sm:text-lg ${selected?"text-white":"text-white/75"}`}>{step.title}</span></span><span className={`block text-sm leading-relaxed ${selected?"text-white/70":"text-white/40"}`}>{step.description}</span></span>
     {selected?<span className="mt-3 size-2 shrink-0 rounded-full bg-[#96ed08] shadow-[0_0_15px_#96ed08]"/>:null}
    </button>;})}</div>
    <div className="mt-6 flex items-center gap-4"><button type="button" onClick={()=>select(active-1)} aria-label="Previous journey step" className="grid size-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#96ed08] hover:text-[#96ed08]"><ArrowLeft size={19}/></button><button type="button" onClick={()=>select(active+1)} aria-label="Next journey step" className="grid size-11 place-items-center rounded-full bg-[#96ed08] text-black transition hover:bg-[#b0ff32]"><ArrowRight size={19}/></button><span className="ml-1 text-xs text-white/40">Select a step to explore</span></div>
   </div>
   <div className="flex flex-col items-center justify-center">
    <div className="relative flex h-[480px] w-full items-center justify-center sm:h-[570px] lg:h-[620px]">
     <div className="pointer-events-none absolute size-64 rounded-full bg-[#96ed08]/[.08] blur-[90px]" aria-hidden="true"/>
     <img key={`${active}-${current.image || phoneImages[active]}`} src={current.image || phoneImages[active]} alt={`${current.title} — AkiGO Rider app phone preview`} className="relative z-10 h-full max-h-full w-full max-w-[350px] object-contain drop-shadow-[0_26px_35px_rgba(0,0,0,.65)]"/>
    </div>
    <div className="mt-7 flex flex-wrap justify-center gap-2">{items.map((item,i)=><button type="button" key={i} onClick={()=>select(i)} aria-label={`Show ${item.title}`} aria-current={active===i?"step":undefined} className={`h-1.5 rounded-full transition-all ${active===i?"w-9 bg-[#96ed08]":"w-4 bg-white/20 hover:bg-white/45"}`}/>)}</div>
    <p className="mt-4 text-center text-xs text-white/40">{current.image?"AkiGO Rider app image":"Illustrative phone preview · Website admin can replace this image"}</p>
   </div>
  </div>
 </div>;
}
