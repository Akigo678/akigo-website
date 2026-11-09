"use client";

import {useEffect,useState} from "react";
import Image from "next/image";

export default function TechnologyGallery({images,intervalSeconds=5}:{images:string[];intervalSeconds?:number}){
 const [active,setActive]=useState(0);
 const list=images.length?images:["/images/home/technology.png"];
 useEffect(()=>{
  if(list.length<2)return;
  const timer=window.setInterval(()=>setActive(index=>(index+1)%list.length),Math.max(3,Math.min(15,intervalSeconds))*1000);
  return ()=>window.clearInterval(timer);
 },[list.length,intervalSeconds]);
 return <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0c1210] shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
  <div className="relative aspect-[16/10] w-full">
   {list.map((src,index)=><Image key={`${src}-${index}`} src={src} alt={`AkiGO technology image ${index+1}`} fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className={`object-contain object-center transition-opacity duration-700 ease-in-out ${index===active%list.length?"opacity-100":"opacity-0"}`} aria-hidden={index!==active%list.length}/>) }
  </div>
  {list.length>1?<div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2" aria-label="Technology images">{list.map((_,index)=><button key={index} type="button" onClick={()=>setActive(index)} aria-label={`Show image ${index+1}`} aria-current={active%list.length===index?"true":undefined} className={`h-2.5 rounded-full shadow-[0_1px_5px_rgba(0,0,0,0.8)] transition-all ${active%list.length===index?"w-7 bg-[#96ed08]":"w-2.5 bg-white/70 hover:bg-white"}`}/>)}</div>:null}
 </div>;
}
