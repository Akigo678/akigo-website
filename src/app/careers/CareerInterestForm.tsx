"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const inputClass = "mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-black/40 px-4 text-white outline-none focus:border-[#96ed08]";
const areas = ["Technology & product", "Operations & support", "Safety & trust", "Growth & partnerships", "Other"];

export default function CareerInterestForm() {
  const [busy, setBusy] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setFeedback("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/career-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, privacyConsent }),
      });
      const result = await response.json() as { ok?: boolean; message?: string; referenceId?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Submission failed.");
      setReferenceId(result.referenceId || "");
      setFeedback(result.message || "Interest received.");
      form.reset();
      setPrivacyConsent(false);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-[1.75rem] border border-[#96ed08]/25 bg-[#10130d] p-7 sm:p-9">
      <h3 className="text-2xl font-bold">Introduce yourself</h3>
      <p className="mt-3 text-sm leading-6 text-white/65">This is an expression of interest, not an application for a posted job.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Full name *
          <input name="name" required maxLength={120} autoComplete="name" className={inputClass} />
        </label>
        <label className="text-sm font-semibold">Email *
          <input type="email" name="email" required maxLength={254} autoComplete="email" className={inputClass} />
        </label>
        <label className="text-sm font-semibold">City
          <input name="city" maxLength={100} autoComplete="address-level2" className={inputClass} />
        </label>
        <label className="text-sm font-semibold">State
          <input name="state" maxLength={100} autoComplete="address-level1" className={inputClass} />
        </label>
      </div>
      <label className="mt-4 block text-sm font-semibold">Area of interest *
        <select name="area" required defaultValue="" className={inputClass}>
          <option value="" disabled>Choose an area</option>
          {areas.map((area) => <option key={area} value={area}>{area}</option>)}
        </select>
      </label>
      <label className="mt-4 block text-sm font-semibold">Relevant experience and interests *
        <textarea name="experience" required minLength={20} maxLength={2000} rows={4} className={`${inputClass} py-3`} placeholder="Tell us what you do and what you would like to contribute." />
      </label>
      <label className="mt-4 block text-sm font-semibold">Portfolio or résumé link (optional)
        <input name="workLink" type="url" maxLength={500} placeholder="https://" className={inputClass} />
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/65">
        <input type="checkbox" checked={privacyConsent} onChange={(event) => setPrivacyConsent(event.target.checked)} required className="mt-1 accent-[#96ed08]" />
        <span>I agree to AkiGO using this information to review and respond to my career interest as described in the <Link href="/privacy" className="text-[#96ed08] underline">Privacy Policy</Link>.</span>
      </label>
      <button type="submit" disabled={busy} className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#96ed08] px-7 font-bold text-black transition hover:bg-[#b6ff42] disabled:opacity-50">
        {busy ? "Sending…" : "Submit career interest"} <ArrowRight size={18} />
      </button>
      {feedback && <p role="status" aria-live="polite" className="mt-4 text-sm text-white">{feedback}{referenceId && <span className="block text-[#96ed08]">Reference: {referenceId}</span>}</p>}
      <p className="mt-5 text-xs leading-6 text-white/45">Do not submit Social Security numbers, identity documents, passwords, or banking details. There is no fee to express interest.</p>
    </form>
  );
}
