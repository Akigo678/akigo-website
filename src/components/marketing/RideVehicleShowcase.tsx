"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {ArrowLeft, ArrowRight, CarFront} from "lucide-react";

const vehicleRoot = "/images/ride-vehicles/";
const rideVehicles = [
  {name:"AkiGO Basic", image:"akigo-car-basic.png", description:"Affordable everyday rides."},
  {name:"AkiGO Priority", image:"akigo-car-basic.png", description:"For when time matters."},
  {name:"AkiGO Wait & Save", image:"akigo-car-basic.png", description:"Flexible pickup, better value."},
  {name:"AkiGO Comfort", image:"akigo-comfort-cars.png", description:"Extra comfort for your journey."},
  {name:"AkiGO XL", image:"akigo-comfort-XL.png", description:"Room for more passengers and bags."},
  {name:"AkiGO XXL", image:"akigo-xxl.png", description:"More space for larger groups."},
  {name:"AkiGO Pet", image:"akigo-car-basic.png", description:"Travel with your pet."},
  {name:"AkiGO Executive", image:"akigo-black-executive.png", description:"An elevated ride experience."},
  {name:"AkiGO Executive SUV", image:"akigo-comfort-XL.png", description:"Premium space and comfort."},
  {name:"AkiGO Car Seat", image:"akigo-comfort-cars.png", description:"Family-ready ride options."},
  {name:"AkiGO Airport Express", image:"akigo-comfort-car.png", description:"A convenient ride for airport trips."},
  {name:"AkiGO Courier", image:"akigo-delivery-box.png", description:"Send eligible local packages."},
  {name:"AkiGO Wheelchair Accessible", image:"akigo-wheelchair-accessible.png", description:"Accessible transportation options."},
  {name:"AkiGO Pickup Truck", image:"akigo-pickup-truck.png", description:"Extra utility for eligible delivery requests."},
  {name:"AkiGO Black", image:"akigo-black.png", description:"Luxury black sedan experience."},
  {name:"AkiGO Black SUV", image:"akigo-black-suv.png", description:"Luxury SUV with spacious seating."},
  {name:"AkiGO Black Executive", image:"akigo-black-executive.png", description:"Exclusive executive luxury transportation."},
  {name:"AkiGO Black Van", image:"akigo-black-van.png", description:"Premium luxury van for group travel."},
];

export default function RideVehicleShowcase({images=[],intervalSeconds=5}:{images?:string[];intervalSeconds?:number}) {
  const [active,setActive]=useState(0);
  const [paused,setPaused]=useState(false);
  const gallery = images.length && !(images.length===1 && images[0]==="/images/home/technology.png")
    ? images.map((image,index)=>({name:`AkiGO Ride ${index+1}`,image,description:"Ride smarter with AkiGO."}))
    : rideVehicles.map(vehicle=>({...vehicle,image:`${vehicleRoot}${vehicle.image}`}));
  const count=gallery.length;
  useEffect(()=>{
    if(paused||count<2)return;
    const timer=window.setInterval(()=>setActive(index=>(index+1)%count),Math.min(15,Math.max(3,intervalSeconds))*1000);
    return ()=>window.clearInterval(timer);
  },[count,intervalSeconds,paused]);
  const current=active%count;
  const go=(step:number)=>setActive(index=>(index+step+count)%count);

  return <div className="relative overflow-hidden rounded-[1.75rem] border border-[#96ed08]/20 bg-black" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocus={()=>setPaused(true)} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget))setPaused(false);}}>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(150,237,8,.14),transparent_55%)]"/>
    <div className="relative flex items-center justify-between gap-3 px-5 pt-5 sm:px-7 sm:pt-7">
      <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-white">Aki<span className="-ml-2 text-[#96ed08]">GO</span><span className="ml-2 text-[10px] font-semibold uppercase tracking-[.2em] text-white/40">Ride collection</span></div>
      <span className="text-[11px] font-semibold tabular-nums text-[#96ed08]">{String(current+1).padStart(2,"0")} / {String(count).padStart(2,"0")}</span>
    </div>
    <div className="relative mt-2 aspect-[16/10] w-full sm:aspect-[16/9]">
      <div className="pointer-events-none absolute bottom-[11%] left-[16%] right-[16%] h-[18%] rounded-full bg-[#96ed08]/25 blur-[35px]"/>
      {gallery.map((vehicle,index)=><div key={`${vehicle.image}-${index}`} className={`absolute inset-0 transition-all duration-700 ease-in-out ${index===current?"translate-y-0 scale-100 opacity-100":"translate-y-3 scale-[.96] opacity-0"}`} aria-hidden={index!==current}>
        <Image src={vehicle.image} alt={index===current?`${vehicle.name} vehicle`:""} fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain object-center drop-shadow-[0_18px_24px_rgba(150,237,8,.16)]" priority={index===0}/>
      </div>)}
    </div>
    <div className="relative mx-4 mb-4 rounded-2xl border border-white/10 bg-[#0a0d08]/90 px-4 py-4 backdrop-blur sm:mx-6 sm:mb-6 sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0"><p className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#96ed08]"><CarFront size={14}/> Discover your ride</p><h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">{gallery[current].name}</h2><p className="mt-1 text-xs text-white/55 sm:text-sm">{gallery[current].description}</p></div>
        <div className="flex shrink-0 gap-2"><button type="button" onClick={()=>go(-1)} aria-label="Previous ride type" className="grid size-9 place-items-center rounded-full border border-white/15 text-white transition hover:border-[#96ed08] hover:text-[#96ed08]"><ArrowLeft size={17}/></button><button type="button" onClick={()=>go(1)} aria-label="Next ride type" className="grid size-9 place-items-center rounded-full bg-[#96ed08] text-black transition hover:bg-[#b5ff44]"><ArrowRight size={17}/></button></div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-1.5" aria-label="Choose ride type">{gallery.map((vehicle,index)=><button key={`${vehicle.name}-${index}`} type="button" onClick={()=>setActive(index)} aria-label={`Show ${vehicle.name}`} aria-current={current===index?"true":undefined} className={`h-1.5 rounded-full transition-all ${current===index?"w-8 bg-[#96ed08]":"w-3 bg-white/25 hover:bg-white/60"}`}/>)}</div>
    </div>
  </div>;
}
