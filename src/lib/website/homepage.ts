import {getAdminDb} from "@/lib/server/firebase-admin";

export type WebsiteService = {title:string;description:string;href:string;image:string;enabled:boolean};
export type WebsiteRiderJourneyStep = {title:string;description:string;image:string};
export type WebsiteHomepage = {eyebrow:string;headline1:string;headline2:string;headline3:string;description:string;heroImage:string;heroImages:string[];heroIntervalSeconds:number;technologyImages:string[];technologyIntervalSeconds:number;downloadImages:string[];downloadIntervalSeconds:number;rideImages:string[];rideIntervalSeconds:number;rideBackgroundImage:string;rideBackgroundDarkness:number;rideBackgroundPosition:string;liveTripPhoneImage:string;ridePricingPhoneImage:string;ridePaymentPhoneImage:string;driveHeroPhoneImage:string;driveEarningsPhoneImage:string;driveHeroBackgroundImage:string;deliverHeroPhoneImage:string;deliverHeroBackgroundImage:string;deliverHandoffImage:string;businessHeroImage:string;businessManagementImage:string;riderJourneySteps:WebsiteRiderJourneyStep[];riderJourneyIntervalSeconds:number;primaryButton:string;secondaryButton:string;services:WebsiteService[]};

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
  const technologyImages=Array.isArray(d.technologyImages)?d.technologyImages.filter((url:unknown)=>typeof url==="string"&&url.length<2000&&(url.startsWith("/")&&!url.startsWith("//")||url.startsWith("https://"))).slice(0,12) as string[]:undefined;
  const technologyIntervalSeconds=typeof d.technologyIntervalSeconds==="number"&&d.technologyIntervalSeconds>=3&&d.technologyIntervalSeconds<=15?d.technologyIntervalSeconds:5;
  const downloadImages=Array.isArray(d.downloadImages)?d.downloadImages.filter((url:unknown)=>typeof url==="string"&&url.length<2000&&(url.startsWith("/")&&!url.startsWith("//")||url.startsWith("https://"))).slice(0,12) as string[]:undefined;
  const downloadIntervalSeconds=typeof d.downloadIntervalSeconds==="number"&&d.downloadIntervalSeconds>=3&&d.downloadIntervalSeconds<=15?d.downloadIntervalSeconds:5;
  const rideImages=Array.isArray(d.rideImages)?d.rideImages.filter((url:unknown)=>typeof url==="string"&&url.length<2000&&(url.startsWith("/")&&!url.startsWith("//")||url.startsWith("https://"))).slice(0,12) as string[]:undefined;
  const rideIntervalSeconds=typeof d.rideIntervalSeconds==="number"&&d.rideIntervalSeconds>=3&&d.rideIntervalSeconds<=15?d.rideIntervalSeconds:5;
  const background=str("rideBackgroundImage");
  const rideBackgroundImage=background!==undefined&&(background===""||(background.startsWith("/")&&!background.startsWith("//"))||background.startsWith("https://"))?background:undefined;
  const rideBackgroundDarkness=typeof d.rideBackgroundDarkness==="number"&&d.rideBackgroundDarkness>=50&&d.rideBackgroundDarkness<=95?d.rideBackgroundDarkness:85;
  const rideBackgroundPosition=["center","top","bottom","left","right"].includes(String(d.rideBackgroundPosition))?String(d.rideBackgroundPosition):"center";
  const liveTripRaw=str("liveTripPhoneImage");
  const liveTripPhoneImage=liveTripRaw!==undefined&&liveTripRaw.length<=2000&&(liveTripRaw===""||liveTripRaw.startsWith("https://")||(liveTripRaw.startsWith("/")&&!liveTripRaw.startsWith("//")))?liveTripRaw:undefined;
  const validOptionalImage=(value:string|undefined)=>value!==undefined&&value.length<=2000&&(value===""||value.startsWith("https://")||(value.startsWith("/")&&!value.startsWith("//")))?value:undefined;
  const ridePricingPhoneImage=validOptionalImage(str("ridePricingPhoneImage"));
  const ridePaymentPhoneImage=validOptionalImage(str("ridePaymentPhoneImage"));
  const driveHeroPhoneImage=validOptionalImage(str("driveHeroPhoneImage"));
  const driveEarningsPhoneImage=validOptionalImage(str("driveEarningsPhoneImage"));
  const driveHeroBackgroundImage=validOptionalImage(str("driveHeroBackgroundImage"));
  const deliverHeroPhoneImage=validOptionalImage(str("deliverHeroPhoneImage"));
  const deliverHeroBackgroundImage=validOptionalImage(str("deliverHeroBackgroundImage"));
  const deliverHandoffImage=validOptionalImage(str("deliverHandoffImage"));
  const businessHeroImage=validOptionalImage(str("businessHeroImage"));
  const businessManagementImage=validOptionalImage(str("businessManagementImage"));
  const journeyImageValid=(url:string)=>url===""||url.startsWith("https://")||(url.startsWith("/")&&!url.startsWith("//"));
  const riderJourneySteps=Array.isArray(d.riderJourneySteps)&&d.riderJourneySteps.length===5&&d.riderJourneySteps.every((step:unknown)=>{if(!step||typeof step!=="object")return false;const s=step as Record<string,unknown>;return typeof s.title==="string"&&s.title.length<=80&&typeof s.description==="string"&&s.description.length<=300&&typeof s.image==="string"&&s.image.length<=2000&&journeyImageValid(s.image);})?d.riderJourneySteps as WebsiteRiderJourneyStep[]:undefined;
  const riderJourneyIntervalSeconds=typeof d.riderJourneyIntervalSeconds==="number"&&d.riderJourneyIntervalSeconds>=3&&d.riderJourneyIntervalSeconds<=15?d.riderJourneyIntervalSeconds:5;
  return {eyebrow:str("eyebrow"),headline1:str("headline1"),headline2:str("headline2"),headline3:str("headline3"),description:str("description"),heroImage:str("heroImage"),heroImages,heroIntervalSeconds,technologyImages,technologyIntervalSeconds,downloadImages,downloadIntervalSeconds,rideImages,rideIntervalSeconds,rideBackgroundImage,rideBackgroundDarkness,rideBackgroundPosition,liveTripPhoneImage,ridePricingPhoneImage,ridePaymentPhoneImage,driveHeroPhoneImage,driveEarningsPhoneImage,driveHeroBackgroundImage,deliverHeroPhoneImage,deliverHeroBackgroundImage,deliverHandoffImage,businessHeroImage,businessManagementImage,riderJourneySteps,riderJourneyIntervalSeconds,primaryButton:str("primaryButton"),secondaryButton:str("secondaryButton"),services};
 }catch(e){console.error("Published website content unavailable; using built-in fallback",e);return {};}
}
