import Link from "next/link";
import type {WebsiteAnnouncement} from "@/lib/website/homepage";
import styles from "./AnnouncementTicker.module.css";

type Props={announcements:WebsiteAnnouncement[];durationSeconds:number};

export default function AnnouncementTicker({announcements,durationSeconds}:Props){
 const active=announcements.filter(message=>message.enabled);
 if(active.length===0)return null;
 const messages=(duplicate:boolean)=>active.map((message,index)=><span className={styles.message} key={`${index}-${duplicate}`}>
  <span className={styles.sparkle} aria-hidden="true">✦</span>
  {message.href?<Link href={message.href} tabIndex={duplicate?-1:undefined}>{message.text}<span className={styles.arrow} aria-hidden="true"> ↗</span></Link>:<span>{message.text}</span>}
 </span>);
 return <div className={styles.banner} aria-label="AkiGO announcements">
  <div className={styles.label}>AKIGO UPDATES</div>
  <div className={styles.viewport}>
   <div className={styles.track} style={{animationDuration:`${durationSeconds}s`}}>
    <div className={styles.group}>{messages(false)}</div>
    <div className={styles.group} aria-hidden="true">{messages(true)}</div>
   </div>
  </div>
 </div>;
}
