import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Box,
  CalendarClock,
  CarFront,
  Check,
  Clock3,
  CreditCard,
  Crown,
  Headphones,
  HeartHandshake,
  MapPinned,
  MessageCircle,
  Navigation,
  PawPrint,
  Route,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import {
  LaunchListForm,
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";
import RideVehicleShowcase from "@/components/marketing/RideVehicleShowcase";
import RideOptionsExplorer from "@/components/marketing/RideOptionsExplorer";
import RiderJourneyShowcase from "@/components/marketing/RiderJourneyShowcase";
import {getPublishedHomepage} from "@/lib/website/homepage";

const rideOptions = [
  {
    icon: CarFront,
    title: "Basic",
    image: "akigo-car-basic.png",
    text: "Affordable, reliable rides for everyday travel.",
    tag: "Everyday",
  },
  {
    icon: Zap,
    title: "Priority",
    image: "akigo-car-basic.png",
    text: "A faster pickup option when time matters.",
    tag: "Faster pickup",
  },
  {
    icon: Clock3,
    title: "Wait & Save",
    image: "akigo-car-basic.png",
    text: "A lower-cost option when your pickup time is flexible.",
    tag: "Best value",
  },
  {
    icon: Sparkles,
    title: "Comfort",
    image: "akigo-comfort-cars.png",
    text: "A more refined ride with additional comfort.",
    tag: "Extra comfort",
  },
  {
    icon: Users,
    title: "XL",
    image: "akigo-comfort-XL.png",
    text: "Extra room for groups, families, and luggage.",
    tag: "More space",
  },
  {
    icon: Users,
    title: "XXL",
    image: "akigo-xxl.png",
    text: "A larger-capacity option for bigger groups and more luggage.",
    tag: "Largest groups",
  },
  {
    icon: PawPrint,
    title: "Pet",
    image: "akigo-car-basic.png",
    text: "Request a ride that can accommodate your pet.",
    tag: "Pet friendly",
  },
  {
    icon: Crown,
    title: "Executive",
    image: "akigo-black-executive.png",
    text: "Premium vehicles for work, events, and special occasions.",
    tag: "Premium",
  },
  {
    icon: ShieldCheck,
    title: "Executive SUV",
    image: "akigo-comfort-XL.png",
    text: "Premium SUV space for passengers and luggage.",
    tag: "Premium SUV",
  },
  {
    icon: Box,
    title: "Courier",
    image: "akigo-delivery-box.png",
    text: "Send eligible local packages through the AkiGO network.",
    tag: "Local delivery",
  },
  {
    icon: Baby,
    title: "Car Seat",
    image: "akigo-comfort-cars.png",
    text: "Request an eligible ride with a car-seat option.",
    tag: "Family option",
  },
  {icon: Navigation, title:"Airport Express", image:"akigo-comfort-car.png", text:"Convenient transportation for eligible airport trips.", tag:"Airport rides"},
  {icon: ShieldCheck, title:"Wheelchair Accessible", image:"akigo-wheelchair-accessible.png", text:"Accessible transportation options where available.", tag:"Accessibility"},
  {icon: Box, title:"Pickup Truck", image:"akigo-pickup-truck.png", text:"Utility vehicle option for eligible delivery needs.", tag:"Utility"},
  {icon: Crown, title:"AkiGO Black", image:"akigo-black.png", text:"Luxury black sedan with a professional driving experience.", tag:"Luxury sedan"},
  {icon: Crown, title:"AkiGO Black SUV", image:"akigo-black-suv.png", text:"Premium luxury SUV with spacious seating.", tag:"Luxury SUV"},
  {icon: Crown, title:"AkiGO Black Executive", image:"akigo-black-executive.png", text:"Exclusive executive luxury transportation.", tag:"Executive"},
  {icon: Users, title:"AkiGO Black Van", image:"akigo-black-van.png", text:"Premium luxury van for group travel.", tag:"Luxury van"},
];

const heroBenefits = [
  {
    icon: ShieldCheck,
    title: "Safety tools",
    text: "Access trip sharing, communication, and support.",
  },
  {
    icon: MapPinned,
    title: "Live visibility",
    text: "Follow driver progress and trip updates.",
  },
  {
    icon: HeartHandshake,
    title: "Clear pricing",
    text: "Review your ride price before confirming.",
  },
  {
    icon: Headphones,
    title: "Rider support",
    text: "Get help when a trip needs attention.",
  },
];

const riderJourney = [
  {
    number: "01",
    icon: Smartphone,
    title: "Set your trip",
    text: "Enter your pickup location and destination.",
  },
  {
    number: "02",
    icon: CarFront,
    title: "Choose a ride",
    text: "Compare eligible options for your trip.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Confirm and pay",
    text: "Review the trip and select an available payment method.",
  },
  {
    number: "04",
    icon: Navigation,
    title: "Track your driver",
    text: "Follow arrival progress and important updates.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Complete the ride",
    text: "Stay connected from pickup through destination.",
  },
];

const bookingSteps = [
  {
    icon: Smartphone,
    title: "Open the rider app",
    text: "Enter your pickup and destination to begin.",
    journeyIndex: 0,
  },
  {
    icon: CarFront,
    title: "Choose and confirm",
    text: "Review ride options, pricing, and payment before confirming.",
    journeyIndex: 1,
  },
  {
    icon: Navigation,
    title: "Track and ride",
    text: "Follow your driver and trip status through completion.",
    journeyIndex: 3,
  },
];

const trackingItems = [
  "Driver location and pickup progress",
  "Route and trip status",
  "Arrival and trip updates",
  "Rider-driver communication",
  "Trip sharing",
  "Support when needed",
];

const safetyItems = [
  "Trip sharing with trusted contacts",
  "In-app emergency workflows",
  "Driver identity and vehicle details",
  "Rider-driver communication",
  "Incident reporting",
  "Support access",
];

const specialOptions = [
  {
    icon: CalendarClock,
    title: "Scheduled rides",
    text: "Plan eligible trips ahead when timing is important.",
  },
  {
    icon: Users,
    title: "Group travel",
    text: "Choose a larger ride option for passengers and luggage.",
  },
  {
    icon: PawPrint,
    title: "Pet rides",
    text: "Request an eligible ride that can accommodate your pet.",
  },
  {
    icon: Baby,
    title: "Car-seat rides",
    text: "Choose an eligible family ride option where available.",
  },
];

export const revalidate = 60;
export default async function RidePage() {
  const published = await getPublishedHomepage();
  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          {published.rideBackgroundImage!==""?<div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="absolute inset-0 bg-cover bg-no-repeat" style={{backgroundImage:`url(${JSON.stringify(published.rideBackgroundImage||"/images/home/ride-orlando-night.png")})`,backgroundPosition:published.rideBackgroundPosition||"center"}}/><div className="absolute inset-0" style={{backgroundColor:`rgba(0,0,0,${(published.rideBackgroundDarkness??85)/100})`}}/><div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]"/></div>:null}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(150,237,8,0.10),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-16rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[680px] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Ride with AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[700px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.05rem]">
                Your city.
                <br />
                Your ride.
                <br />
                <span className="text-[#96ed08]">Your way.</span>
              </h1>

              <p className="mt-6 max-w-[580px] text-lg leading-8 text-white/60">
                Enjoy convenient rides, clear pricing, and real-time trip
                updates—all from the AkiGO Rider app.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="https://apps.apple.com/us/app/akigo/id6802560351" className={primaryButton} target="_blank" rel="noopener noreferrer">
                  Download AkiGO
                  <ArrowRight size={18} />
                </a>

                <a href="#how-it-works" className={secondaryButton}>
                  How it works
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {heroBenefits.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/[0.06] bg-black/25 p-3.5 backdrop-blur-sm transition hover:border-[#96ed08]/25 hover:bg-[#96ed08]/[0.04]"
                  >
                    <Icon className="text-[#96ed08]" size={22} />
                    <h2 className="mt-3 text-sm font-bold text-white">
                      {title}
                    </h2>
                    <p className="mt-2 text-xs leading-5 text-white/42">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIDER IMAGE GALLERY */}
            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-[#96ed08]/10 blur-[105px]" />
              <div className="relative rounded-[2rem] border border-[#96ed08]/20 bg-gradient-to-br from-[#0c190f] via-[#080b08] to-black p-3 shadow-[0_30px_100px_rgba(0,0,0,.55)] sm:p-5">
                <RideVehicleShowcase images={published.rideImages} intervalSeconds={published.rideIntervalSeconds || 5} />
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-2 pb-2">
                  <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#96ed08]">The AkiGO experience</p><p className="mt-1 text-sm text-white/55">Your journey, made simpler.</p></div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#96ed08]/25 bg-[#96ed08]/10 px-4 py-2 text-xs font-semibold text-[#96ed08]"><ShieldCheck size={15}/> Ride with confidence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RIDE OPTIONS */}
        <section className="border-t border-white/[0.06] bg-[radial-gradient(ellipse_at_50%_0%,rgba(150,237,8,.055),transparent_65%),linear-gradient(#080b07,#050505)] py-16 sm:py-20">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Ride options
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Options for every kind of trip.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Compare eligible ride options based on timing, comfort, group
                size, and special trip needs.
              </p>
            </div>

            <RideOptionsExplorer options={rideOptions.map(({title,image,text,tag})=>({title,image,text,tag}))}/>
          </div>
        </section>

        {/* RIDER JOURNEY */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Rider journey
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  From request to destination.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end">
                The rider experience keeps every major step visible before,
                during, and after your trip.
              </p>
            </div>

            <div className="mt-9">
              <RiderJourneyShowcase steps={published.riderJourneySteps} intervalSeconds={published.riderJourneyIntervalSeconds||5}/>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="scroll-mt-28 border-t border-white/[0.06] bg-[linear-gradient(180deg,#050505,#090e08_55%,#050505)] py-16 sm:py-20">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                How it works
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Requesting a ride stays simple.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/50">
                Open the rider app, choose your ride, and follow every important
                update through completion.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {bookingSteps.map(({icon: Icon,title,text,journeyIndex},index)=>{
                const screenshot=published.riderJourneySteps?.[journeyIndex]?.image;
                return <article key={title} className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(155deg,#111810,#070907_75%)] p-5 shadow-[0_25px_70px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#96ed08]/45 hover:shadow-[0_28px_85px_rgba(94,155,0,.10)] sm:p-6">
                  <div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.18em] text-[#96ed08]"><span className="grid size-9 place-items-center rounded-xl bg-[#96ed08]/10"><Icon size={20}/></span> Step 0{index+1}</span><span className="font-display text-3xl font-black text-white/[.08]">0{index+1}</span></div>
                  <div className="relative flex h-[350px] items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_60%,rgba(150,237,8,.085),transparent_62%)] sm:h-[390px]">
                    <div className="pointer-events-none absolute bottom-0 h-16 w-3/4 rounded-full bg-[#96ed08]/15 blur-[35px]"/>
                    <img src={screenshot||["/images/ride-how-it-works/step-01-plan.png","/images/ride-how-it-works/step-02-choose.png","/images/ride-how-it-works/step-03-track.png"][index]} alt={screenshot?`${title} in the AkiGO Rider app`:`Photorealistic illustrative AkiGO phone mockup: ${title}`} className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.045]"/>
                  </div>
                  <div className="mt-6"><h3 className="font-display text-2xl font-extrabold tracking-[-.035em] text-white">{title}</h3><p className="mt-3 min-h-[56px] text-sm leading-7 text-white/55">{text}</p></div>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-[#96ed08]/55 to-transparent"/>
                </article>;
              })}
            </div>
            <div className="mt-9 flex justify-center"><a href="https://apps.apple.com/us/app/akigo/id6802560351" target="_blank" rel="noopener noreferrer" className={primaryButton}>Get the Rider App <ArrowRight size={18}/></a></div>
          </div>
        </section>

        {/* LIVE TRIP VISIBILITY */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative flex min-h-[560px] items-center justify-center px-2 py-6 sm:min-h-[650px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/[.08] blur-[95px]" aria-hidden="true" />
              <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[#96ed08]/25 bg-black/80 px-4 py-2 text-xs font-bold tracking-[.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_12px_#96ed08]" /> DRIVER ON THE WAY
              </div>
              <img src={published.liveTripPhoneImage || "/images/ride-live-trip/driver-on-the-way.png"} alt="AkiGO Rider phone showing driver location, arrival time, and trip details" className="relative z-[1] h-[525px] w-full max-w-[400px] object-contain drop-shadow-[0_30px_38px_rgba(0,0,0,.75)] sm:h-[620px]" />
              <div className="pointer-events-none absolute bottom-3 left-4 z-10 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/60">Real-time trip updates</div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Live trip visibility
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Stay informed throughout the ride.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                AkiGO is designed to keep riders informed from driver assignment
                through pickup, trip progress, and destination arrival.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trackingItems.map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-2xl border border-[#96ed08]/[.12] bg-[linear-gradient(140deg,rgba(150,237,8,.035),rgba(255,255,255,.015))] p-4 transition hover:-translate-y-0.5 hover:border-[#96ed08]/40 hover:bg-[#96ed08]/[.055]"
                  >
                    <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Check size={15} strokeWidth={3} />
                    </div>

                    <p className="font-semibold leading-6 text-white/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRICING + PAYMENTS */}
        <section className="border-t border-white/[0.06] bg-[radial-gradient(ellipse_at_50%_0%,rgba(150,237,8,.045),transparent_68%)] py-16 sm:py-20">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/[.14] bg-[linear-gradient(145deg,#10170d_0%,#070907_70%)] p-6 sm:p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <WalletCards size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Clear pricing
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Review your price before confirming.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  The rider experience is designed to present the available ride
                  option and trip price before you complete the booking.
                </p>

                <div className="relative mt-5 flex h-[420px] items-center justify-center sm:h-[490px]">
                  <div className="pointer-events-none absolute size-48 rounded-full bg-[#96ed08]/[.07] blur-[75px]" aria-hidden="true" />
                  <img src={published.ridePricingPhoneImage || "/images/ride-pricing-payment/pricing-phone.png"} alt="Illustrative AkiGO Rider app displaying Basic, Comfort, and XL ride prices" className="relative h-full w-full max-w-[325px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,.7)]" />
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Ride option shown",
                    "Trip price reviewed",
                    "Payment method selected",
                    "Booking confirmed",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                    >
                      <Check className="text-[#96ed08]" size={16} />
                      <span className="text-sm font-semibold text-white/65">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.8rem] border border-[#96ed08]/[.14] bg-[linear-gradient(145deg,#10170d_0%,#070907_70%)] p-6 sm:p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <CreditCard size={29} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Payment options
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Choose an available way to pay.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Available payment choices can include supported cards, wallet
                  balance, and Apple Pay on eligible devices.
                </p>

                <div className="relative mt-5 flex h-[420px] items-center justify-center sm:h-[490px]">
                  <div className="pointer-events-none absolute size-48 rounded-full bg-[#96ed08]/[.07] blur-[75px]" aria-hidden="true" />
                  <img src={published.ridePaymentPhoneImage || "/images/ride-pricing-payment/payment-phone.png"} alt="Illustrative AkiGO Rider app with Card, Wallet, and Apple Pay options" className="relative h-full w-full max-w-[325px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,.7)]" />
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: CreditCard, label: "Card" },
                    { icon: WalletCards, label: "Wallet" },
                    { icon: Smartphone, label: "Apple Pay" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      <Icon className="text-[#96ed08]" size={19} />
                      <p className="mt-3 text-sm font-semibold text-white/65">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* SAFETY */}
        <section className="relative border-t border-white/[0.06] py-20 sm:py-24">
          <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-1/3 rounded-full bg-[#96ed08]/[.035] blur-[110px]" aria-hidden="true" />
          <div className="site-container relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-xl">
              <div className="mb-7 flex size-16 items-center justify-center rounded-[1.4rem] border border-[#96ed08]/25 bg-[#96ed08]/10 text-[#96ed08] shadow-[0_0_40px_rgba(150,237,8,.08)]"><ShieldCheck size={32} strokeWidth={1.7}/></div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Rider safety
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tools designed to support your journey.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Rider safety features are designed to help you stay connected,
                share trip details, report concerns, and reach support.
              </p>

              <div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full border border-[#96ed08]/20 bg-[#96ed08]/[.06] px-4 py-2 text-xs font-bold text-[#c2f877]">Before pickup</span><span className="rounded-full border border-[#96ed08]/20 bg-[#96ed08]/[.06] px-4 py-2 text-xs font-bold text-[#c2f877]">During your ride</span><span className="rounded-full border border-[#96ed08]/20 bg-[#96ed08]/[.06] px-4 py-2 text-xs font-bold text-[#c2f877]">When you need help</span></div>

              <Link
                href="/safety"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#96ed08]/35 px-5 py-3 font-bold text-[#96ed08] transition hover:bg-[#96ed08] hover:text-black"
              >
                Explore rider safety
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {safetyItems.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-h-[125px] flex-col justify-between gap-4 rounded-[1.4rem] border border-[#96ed08]/[.12] bg-[linear-gradient(145deg,#10160e,#090b09_80%)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#96ed08]/45 hover:shadow-[0_16px_35px_rgba(0,0,0,.35)]"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                    {index === 0 && <Route size={20} />}
                    {index === 1 && <ShieldCheck size={20} />}
                    {index === 2 && <CarFront size={20} />}
                    {index === 3 && <MessageCircle size={20} />}
                    {index === 4 && <Headphones size={20} />}
                    {index === 5 && <HeartHandshake size={20} />}
                  </div>

                  <p className="font-semibold leading-6 text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL OPTIONS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                More ways to ride
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Options for everyday plans and special needs.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">Whether you're planning ahead, traveling together, or bringing family along, explore the options that fit your trip.</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {specialOptions.map(({ icon: Icon, title, text }, index) => (
                <article
                  key={title}
                  className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.65rem] border border-[#96ed08]/[.12] bg-[linear-gradient(155deg,#11190d,#090a09_70%)] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#96ed08]/45 hover:shadow-[0_22px_48px_rgba(0,0,0,.5)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[#96ed08]/[.055] blur-[50px]" aria-hidden="true" />
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid size-14 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08] transition group-hover:bg-[#96ed08] group-hover:text-black">
                      <Icon size={28} />
                    </div>
                    <span className="font-display text-4xl font-black text-white/[.07]">0{index+1}</span>
                  </div>

                  <h3 className="font-display mt-9 text-2xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/50">{text}</p>
                  <div className="mt-auto pt-7"><div className="h-px w-full bg-gradient-to-r from-[#96ed08]/45 to-transparent" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* RIDER FAQ CTA */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/25 bg-[#0b0b0b] px-7 py-12 text-center shadow-[0_20px_80px_rgba(0,0,0,.35)] sm:px-10 sm:py-16">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute right-[-8rem] top-1/2 size-72 -translate-y-1/2 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                  Rider questions
                </p>

                <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                  Find answers before your first ride.
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
                  Learn about booking, pricing, payments, cancellations, safety,
                  accessibility, and rider support before using the AkiGO rider
                  experience.
                </p>

                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5">
                  {["Booking a ride","Fares & payments","Safety & support","Accessibility"].map(topic=><Link key={topic} href="/faq/riders" className="rounded-full border border-white/15 bg-white/[.035] px-4 py-2.5 text-sm font-semibold text-white/75 transition hover:border-[#96ed08]/55 hover:text-[#96ed08]">{topic}</Link>)}
                </div>

                <Link
                  href="/faq/riders"
                  className={`${primaryButton} mt-9 inline-flex`}
                >
                  View Rider FAQ
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section
          id="rider-launch-list"
          className="scroll-mt-28 border-t border-white/[0.06] py-16 sm:py-20"
        >
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-10 shadow-[0_22px_80px_rgba(0,0,0,.35)] sm:px-11 sm:py-12">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />
              <div className="pointer-events-none absolute -left-24 top-1/2 size-64 -translate-y-1/2 rounded-full bg-[#96ed08]/10 blur-[95px]" aria-hidden="true" />

              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Be the first to ride
                  </p>

                  <h2 className="font-display mt-3 max-w-md text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">
                    Be among the first to ride with AkiGO.
                  </h2>

                  <p className="mt-4 max-w-md text-base leading-7 text-white/55">
                    Join the rider list for early access, launch-market updates,
                    and availability information.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#96ed08]/20 bg-[#96ed08]/[.065] px-4 py-2 text-xs font-bold text-[#b7f76b]"><span className="size-2 rounded-full bg-[#96ed08]"/> Stay updated as AkiGO expands</div>
                </div>

                <LaunchListForm source="ride_page" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
