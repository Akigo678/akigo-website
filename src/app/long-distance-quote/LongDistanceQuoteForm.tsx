"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const field = "mt-2 block h-12 min-h-12 min-w-0 w-full rounded-xl border border-white/15 bg-black/50 px-4 text-base text-white [color-scheme:dark] appearance-auto outline-none focus:border-[#96ed08]";

export default function LongDistanceQuoteForm() {
  const [busy, setBusy] = useState(false);
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [reference, setReference] = useState("");
  const [tripType, setTripType] = useState("one_way");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setMessage("");
    const form = event.currentTarget;
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      const response = await fetch("/api/long-distance-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, privacyConsent: consent }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; referenceId?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Could not submit request.");
      setMessage(result.message || "Request received.");
      setReference(result.referenceId || "");
      form.reset();
      setConsent(false);
      setTripType("one_way");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Please try again.");
      setReference("");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-[1.75rem] border border-[#96ed08]/25 bg-[#10130d] p-6 sm:p-9">
      <h2 className="font-display text-3xl font-extrabold tracking-[-0.04em]">Tell us about your trip</h2>
      <p className="mt-3 text-sm leading-6 text-white/65">Fields marked * are required. We will review your trip before providing any price.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Full name *<input name="name" required autoComplete="name" maxLength={120} className={field} /></label>
        <label className="text-sm font-semibold">Email address *<input type="email" name="email" required autoComplete="email" maxLength={254} className={field} /></label>
        <label className="text-sm font-semibold">Phone number (optional)<input type="tel" name="phone" maxLength={32} autoComplete="tel" className={field} /></label>
        <label className="text-sm font-semibold">Passengers *<input type="number" name="passengers" min={1} max={20} defaultValue={1} required className={field} /></label>
        <label className="text-sm font-semibold sm:col-span-2">Pickup address or location *<input name="pickup" required minLength={5} maxLength={250} placeholder="City, state, or full pickup address" className={field} /></label>
        <label className="text-sm font-semibold sm:col-span-2">Destination address or location *<input name="destination" required minLength={5} maxLength={250} placeholder="Where are you going?" className={field} /></label>
        <label className="text-sm font-semibold">Travel date *<input type="date" name="departureDate" required className={field} /></label>
        <label className="text-sm font-semibold">Pickup time (at pickup location) *<input type="time" name="departureTime" required className={field} /></label>
        <label className="text-sm font-semibold">Trip type *
          <select name="tripType" className={field} required value={tripType} onChange={(event) => setTripType(event.target.value)}>
            <option value="one_way">One-way trip</option>
            <option value="round_trip">Round trip</option>
          </select>
        </label>
        {tripType === "round_trip" && (
          <>
            <label className="text-sm font-semibold">Return date *<input type="date" name="returnDate" required className={field} /></label>
            <label className="text-sm font-semibold">Return pickup time *<input type="time" name="returnTime" required className={field} /></label>
          </>
        )}
        <label className="text-sm font-semibold">Preferred vehicle *
          <select name="vehicleType" className={field} required defaultValue="Any suitable vehicle">
            {["Any suitable vehicle", "Basic", "Comfort", "XL", "XXL", "Executive", "Executive SUV"].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold sm:col-span-2">Additional details (optional)
          <textarea name="notes" rows={4} maxLength={1500} placeholder="Luggage, return timing, stops, accessibility needs, or anything else we should know." className={`${field} py-3`} />
        </label>
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-white/65">
        <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-[#96ed08]" />
        <span>I agree that AkiGO may use the details provided to review and respond to my request, as described in its <Link href="/privacy" className="text-[#96ed08] underline">Privacy Policy</Link>.</span>
      </label>
      <button type="submit" disabled={busy} className="mt-7 inline-flex min-h-13 items-center gap-3 rounded-full bg-[#96ed08] px-7 font-bold text-black hover:bg-[#baff4c] disabled:opacity-50">
        {busy ? "Submitting…" : "Request my quote"} <ArrowRight size={19} />
      </button>
      {message && <p role="status" aria-live="polite" className="mt-5 text-sm leading-6 text-white">{message}{reference && <span className="block font-bold text-[#96ed08]">Reference: {reference}</span>}</p>}
      <p className="mt-6 text-xs leading-6 text-white/45">Submitting this form does not book a ride, guarantee a driver, set a final price, or authorize any payment. Please do not include card numbers or passwords.</p>
    </form>
  );
}
