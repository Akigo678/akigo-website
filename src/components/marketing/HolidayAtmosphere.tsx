import styles from "./HolidayAtmosphere.module.css";

type Effect="off"|"auto"|"snow"|"fireworks";

export default function HolidayAtmosphere({effect,withTicker=false}:{effect:Effect;withTicker?:boolean}){
 let active=effect;
 if(effect==="auto"){
  const parts=new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  const month=Number(parts.find(p=>p.type==="month")?.value);
  const day=Number(parts.find(p=>p.type==="day")?.value);
  active=month===12&&day<=25?"snow":month===12&&day>=26||month===1&&day===1?"fireworks":"off";
 }
 if(active==="off")return null;
 return <div className={`${styles.layer} ${withTicker?styles.withTicker:""} ${active==="snow"?styles.christmas:styles.newYear}`} aria-hidden="true">
  <div className={`${styles.edge} ${styles.top}`}>
   {Array.from({length:25},(_,index)=><span className={styles.bulb} key={index} style={{animationDelay:`${index*.14}s`}} />)}
  </div>
  <div className={`${styles.edge} ${styles.bottom}`}>
   {Array.from({length:25},(_,index)=><span className={styles.bulb} key={index} style={{animationDelay:`${index*.14}s`}} />)}
  </div>
  <div className={`${styles.edge} ${styles.left}`}>
   {Array.from({length:13},(_,index)=><span className={styles.bulb} key={index} style={{animationDelay:`${index*.2}s`}} />)}
  </div>
  <div className={`${styles.edge} ${styles.right}`}>
   {Array.from({length:13},(_,index)=><span className={styles.bulb} key={index} style={{animationDelay:`${index*.2}s`}} />)}
  </div>
  <span className={`${styles.corner} ${styles.topLeft}`}>✦</span>
  <span className={`${styles.corner} ${styles.topRight}`}>✦</span>
  <span className={`${styles.corner} ${styles.bottomLeft}`}>✦</span>
  <span className={`${styles.corner} ${styles.bottomRight}`}>✦</span>
  {active==="snow"?<><span className={`${styles.ornament} ${styles.ornamentTL}`}/><span className={`${styles.ornament} ${styles.ornamentTR}`}/><span className={`${styles.ornament} ${styles.ornamentBL}`}/><span className={`${styles.ornament} ${styles.ornamentBR}`}/></>:null}
  {active==="snow"?Array.from({length:18},(_,index)=><span key={index} className={styles.snow} style={{left:`${(index*17+7)%100}%`,animationDelay:`-${(index*1.37)%13}s`,animationDuration:`${8+index%8}s`,fontSize:`${10+index%10}px`}}>❄</span>):null}
  {active==="fireworks"?Array.from({length:4},(_,index)=><div key={index} className={styles.firework} style={{left:`${12+index*24}%`,top:`${13+(index%2)*20}%`,animationDelay:`${index*1.25}s`}}>{Array.from({length:12},(_,ray)=><span key={ray} style={{transform:`rotate(${ray*30}deg)`}}/>)}</div>):null}
 </div>;
}
