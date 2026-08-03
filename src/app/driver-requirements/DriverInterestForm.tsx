"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  Loader2,
  Send,
} from "lucide-react";

type DriverInterestFormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  ageConfirmation: boolean;
  licensedYears: string;
  vehicleAccess: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  serviceInterest: string;
  availability: string;
  notes: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  website: string;
};

const initialForm: DriverInterestFormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  ageConfirmation: false,
  licensedYears: "",
  vehicleAccess: "I have access to a vehicle",
  vehicleYear: "",
  vehicleMake: "",
  vehicleModel: "",
  serviceInterest: "Passenger rides",
  availability: "",
  notes: "",
  privacyConsent: false,
  marketingConsent: false,
  website: "",
};

const vehicleAccessOptions = [
  "I have access to a vehicle",
  "I plan to obtain a vehicle",
  "I am interested in delivery only",
  "Not sure yet",
];

const serviceOptions = [
  "Passenger rides",
  "Delivery",
  "Passenger rides and delivery",
  "Premium ride categories",
  "Accessible transportation",
  "Scheduled transportation",
  "Not sure yet",
];

const availabilityOptions = [
  "Full-time",
  "Part-time",
  "Weekdays",
  "Weekends",
  "Evenings",
  "Flexible",
  "Not sure yet",
];

export function DriverInterestForm() {
  const [form, setForm] =
    useState<DriverInterestFormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  function updateField<K extends keyof DriverInterestFormState>(
    field: K,
    value: DriverInterestFormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
      setReferenceId("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setMessage("");
    setReferenceId("");

    try {
      const response = await fetch("/api/driver-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "driver_requirements_page",
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        referenceId?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "Your driver-interest request could not be submitted.",
        );
      }

      setStatus("success");
      setMessage(
        result.message ??
          "Your driver-interest request was submitted successfully.",
      );
      setReferenceId(result.referenceId ?? "");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Your request could not be submitted. Please try again.",
      );
    }
  }

  const inputClass =
    "mt-2 min-h-14 w-full rounded-2xl border border-white/[0.10] bg-black/50 px-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0b0b0b] p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.07] blur-[110px]" />

      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="driver-website">Website</label>
        <input
          id="driver-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="relative grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Full name <span className="text-[#96ed08]">*</span>
          </span>
          <input
            required
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={120}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClass}
            placeholder="Enter your full name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Email address <span className="text-[#96ed08]">*</span>
          </span>
          <input
            required
            type="email"
            autoComplete="email"
            maxLength={254}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
            placeholder="Enter your email address"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Phone number
          </span>
          <input
            type="tel"
            autoComplete="tel"
            maxLength={32}
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            City <span className="text-[#96ed08]">*</span>
          </span>
          <input
            required
            type="text"
            autoComplete="address-level2"
            minLength={2}
            maxLength={100}
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className={inputClass}
            placeholder="City"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            State <span className="text-[#96ed08]">*</span>
          </span>
          <input
            required
            type="text"
            autoComplete="address-level1"
            minLength={2}
            maxLength={100}
            value={form.state}
            onChange={(event) => updateField("state", event.target.value)}
            className={inputClass}
            placeholder="State"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Years licensed
          </span>
          <input
            type="number"
            min="0"
            max="80"
            inputMode="numeric"
            value={form.licensedYears}
            onChange={(event) =>
              updateField("licensedYears", event.target.value)
            }
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Vehicle access <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.vehicleAccess}
              onChange={(event) =>
                updateField("vehicleAccess", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {vehicleAccessOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-[calc(50%+4px)] -translate-y-1/2 text-white/35"
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Service interest <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.serviceInterest}
              onChange={(event) =>
                updateField("serviceInterest", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-[calc(50%+4px)] -translate-y-1/2 text-white/35"
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Vehicle year
          </span>
          <input
            type="number"
            min="1980"
            max="2100"
            inputMode="numeric"
            value={form.vehicleYear}
            onChange={(event) =>
              updateField("vehicleYear", event.target.value)
            }
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Vehicle make
          </span>
          <input
            type="text"
            maxLength={80}
            value={form.vehicleMake}
            onChange={(event) =>
              updateField("vehicleMake", event.target.value)
            }
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Vehicle model
          </span>
          <input
            type="text"
            maxLength={80}
            value={form.vehicleModel}
            onChange={(event) =>
              updateField("vehicleModel", event.target.value)
            }
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Expected availability
          </span>
          <span className="relative block">
            <select
              value={form.availability}
              onChange={(event) =>
                updateField("availability", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              <option value="">Select an option</option>
              {availabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-[calc(50%+4px)] -translate-y-1/2 text-white/35"
            />
          </span>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-bold text-white/72">
            Additional information
          </span>
          <textarea
            rows={5}
            maxLength={3000}
            value={form.notes}
            onChange={(event) =>
              updateField("notes", event.target.value)
            }
            className="mt-2 w-full resize-y rounded-2xl border border-white/[0.10] bg-black/50 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
            placeholder="Optional information about your vehicle, service interests, or market."
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/30 p-4 sm:col-span-2">
          <input
            required
            type="checkbox"
            checked={form.ageConfirmation}
            onChange={(event) =>
              updateField("ageConfirmation", event.target.checked)
            }
            className="mt-1 size-4 shrink-0 accent-[#96ed08]"
          />
          <span className="text-sm leading-6 text-white/52">
            I confirm that I meet the minimum legal age to submit driver
            interest in my jurisdiction.{" "}
            <span className="text-[#96ed08]">*</span>
          </span>
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/30 p-4 sm:col-span-2">
          <input
            required
            type="checkbox"
            checked={form.privacyConsent}
            onChange={(event) =>
              updateField("privacyConsent", event.target.checked)
            }
            className="mt-1 size-4 shrink-0 accent-[#96ed08]"
          />
          <span className="text-sm leading-6 text-white/52">
            I agree that AkiGO may use this information to evaluate driver
            interest and contact me in accordance with the{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[#96ed08] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            . <span className="text-[#96ed08]">*</span>
          </span>
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-black/20 p-4 sm:col-span-2">
          <input
            type="checkbox"
            checked={form.marketingConsent}
            onChange={(event) =>
              updateField("marketingConsent", event.target.checked)
            }
            className="mt-1 size-4 shrink-0 accent-[#96ed08]"
          />
          <span className="text-sm leading-6 text-white/48">
            I would also like to receive driver and launch-market updates.
            This is optional.
          </span>
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#96ed08] px-7 font-extrabold text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting interest...
              </>
            ) : (
              <>
                Register Driver Interest
                <Send size={18} />
              </>
            )}
          </button>

          <div aria-live="polite" aria-atomic="true">
            {status === "success" ? (
              <div
                className="mt-5 rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/[0.05] p-4"
                role="status"
              >
                <p className="flex items-start gap-2 text-sm leading-6 text-white/70">
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                  />
                  <span>
                    {message}
                    {referenceId ? (
                      <>
                        {" "}
                        Reference:{" "}
                        <strong className="text-white">{referenceId}</strong>
                      </>
                    ) : null}
                  </span>
                </p>
              </div>
            ) : null}

            {status === "error" ? (
              <p
                className="mt-5 flex items-start gap-2 rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-4 text-sm leading-6 text-red-100/80"
                role="alert"
              >
                <AlertTriangle
                  size={17}
                  className="mt-0.5 shrink-0"
                />
                {message}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}
