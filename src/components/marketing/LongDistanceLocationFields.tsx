"use client";

import { useEffect, useRef, useState } from "react";

const stateCodes = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ");
const stateNames = "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming".split("|");
const field = "mt-2 block box-border h-12 min-h-12 min-w-0 w-full max-w-full rounded-xl border border-white/15 bg-black/50 px-4 text-base text-white [color-scheme:dark] outline-none focus:border-[#96ed08]";

export default function LongDistanceLocationFields({ name, title }: { name: "pickup" | "destination"; title: string }) {
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);
  const [state, setState] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [otherCity, setOtherCity] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const form = fieldsetRef.current?.closest("form");
    if (!form) return;
    const reset = () => { setState(""); setCities([]); setCity(""); setOtherCity(""); setAddress(""); setLoading(false); };
    form.addEventListener("reset", reset);
    return () => form.removeEventListener("reset", reset);
  }, []);

  useEffect(() => {
    if (!state) return;
    const controller = new AbortController();
    setLoading(true);
    fetch(`/api/locations/cities?state=${encodeURIComponent(state)}`, { signal: controller.signal, cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("City lookup unavailable");
        return response.json() as Promise<{ cities?: { city: string }[] }>;
      })
      .then((data) => setCities([...new Set((data.cities ?? []).map((item) => item.city).filter(Boolean))].sort((a, b) => a.localeCompare(b))))
      .catch((error: unknown) => { if ((error as Error).name !== "AbortError") setCities([]); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [state]);

  const stateLabel = stateNames[stateCodes.indexOf(state)] ?? "";
  const cityLabel = city === "other" ? otherCity.trim() : city;
  const composed = [address.trim(), cityLabel, stateLabel].filter(Boolean).join(", ");
  return (
    <fieldset ref={fieldsetRef} className="min-w-0 sm:col-span-2">
      <legend className="mb-3 text-sm font-semibold">{title} *</legend>
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-semibold">State *
          <select className={field} required value={state} onChange={(event) => { setState(event.target.value); setCities([]); setCity(""); setOtherCity(""); }}>
            <option value="">Select state</option>
            {stateCodes.map((code, index) => <option key={code} value={code}>{stateNames[index]}</option>)}
          </select>
        </label>
        <label className="block min-w-0 text-sm font-semibold">City *
          <select className={field} required disabled={!state || loading} value={city} onChange={(event) => { setCity(event.target.value); setOtherCity(""); }}>
            <option value="">{loading ? "Loading cities…" : "Select city"}</option>
            {cities.map((item) => <option key={item} value={item}>{item}</option>)}
            <option value="other">Other city or town</option>
          </select>
        </label>
        {city === "other" && <label className="block min-w-0 text-sm font-semibold sm:col-span-2">Enter city or town *
          <input className={field} required maxLength={100} value={otherCity} onChange={(event) => setOtherCity(event.target.value)} placeholder="City or town name" />
        </label>}
        <label className="block min-w-0 text-sm font-semibold sm:col-span-2">Street address or location details (optional)
          <input className={field} maxLength={140} value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Street, airport, landmark, or other details" />
        </label>
      </div>
      <input type="hidden" name={name} value={composed} />
    </fieldset>
  );
}
