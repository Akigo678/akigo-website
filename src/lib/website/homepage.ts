import {getAdminDb} from "@/lib/server/firebase-admin";

export type WebsiteService = {title:string;description:string;href:string;image:string;enabled:boolean};
export type WebsiteHomepage = {eyebrow:string;headline1:string;headline2:string;headline3:string;description:string;heroImage:string;heroImages:string[];heroIntervalSeconds:number;primaryButton:string;secondaryButton:string;services:WebsiteService[]};

/** Only published website content is visible to public visitors. */
export async function getPublishedHomepage():Promise<Partial<WebsiteHomepage>>{
 try{
  const doc=await getAdminDb().doc("websiteCmsPublished/homepage").get();
  if(!doc.exists)return {};
  const d=doc.data()||{};
  const str=(key:string)=>typeof d[key]==="string"?(d[key] as string):undefined;
  const services=Array.isArray(d.services)?d.services.filter((s:unknown)=>{
   if(!s||typeof s!=="object")return false;
   const v=s as Record<string,unknown>;
   return ["title","description","href","image"].every(k=>typeof v[k]==="string")&&typeof v.enabled==="boolean";
  }) as WebsiteService[]:undefined;
  const heroImages=Array.isArray(d.heroImages)?d.heroImages.filter((url:unknown)=>typeof url==="string"&&url.length<2000&&(url.startsWith("/")&&!url.startsWith("//")||url.startsWith("https://"))).slice(0,12) as string[]:undefined;
  const heroIntervalSeconds=typeof d.heroIntervalSeconds==="number"&&d.heroIntervalSeconds>=3&&d.heroIntervalSeconds<=15?d.heroIntervalSeconds:5;
  return {eyebrow:str("eyebrow"),headline1:str("headline1"),headline2:str("headline2"),headline3:str("headline3"),description:str("description"),heroImage:str("heroImage"),heroImages,heroIntervalSeconds,primaryButton:str("primaryButton"),secondaryButton:str("secondaryButton"),services};
 }catch(e){console.error("Published website content unavailable; using built-in fallback",e);return {};}
}
