"use client";

import Image from "next/image";
import {useEffect,useState} from "react";

export default function HeroSlideshow({images,intervalSeconds=5}:{images:string[];intervalSeconds?:number}){
 const slides=images.length?images:["/images/home/hero-akigo.png"];
 const [index,setIndex]=useState(0);
 useEffect(()=>{if(slides.length<2)return;const delay=Math.max(3,Math.min(15,intervalSeconds))*1000;const timer=window.setInterval(()=>setIndex(i=>(i+1)%slides.length),delay);return()=>window.clearInterval(timer);},[slides.length,intervalSeconds]);
 return <div className="absolute inset-0 h-full w-full" aria-label="AkiGO homepage image slideshow">
  {slides.map((src,i)=><Image key={`${src}-${i}`} src={src} unoptimized fill sizes="100vw" priority={i===0} alt={`AkiGO homepage showcase ${i+1}`} className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 motion-reduce:transition-none ${i===index?"opacity-100":"opacity-0"}`} aria-hidden={i!==index}/>)}
  {slides.length>1&&<div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2">{slides.map((_,i)=><button key={i} type="button" onClick={()=>setIndex(i)} className={`h-2.5 rounded-full border border-black/50 transition-all ${i===index?"w-7 bg-[#96ed08]":"w-2.5 bg-white/70"}`} aria-label={`Show homepage image ${i+1}`} aria-current={i===index?"true":undefined}/>)}</div>}
 </div>;
}
