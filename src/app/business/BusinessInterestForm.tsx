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

type BusinessFormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  industry: string;
  city: string;
  state: string;
  locations: string;
  primaryNeed: string;
  requestFrequency: string;
  teamSize: string;
  details: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  website: string;
};

const initialForm: BusinessFormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  industry: "Restaurant",
  city: "",
  state: "",
  locations: "",
  primaryNeed: "On-demand delivery",
  requestFrequency: "",
  teamSize: "",
  details: "",
  privacyConsent: false,
  marketingConsent: false,
  website: "",
};

const industries = [
  "Restaurant",
  "Retail",
  "Healthcare",
  "Hospitality",
  "Professional services",
  "Local organization",
  "Government or public agency",
  "Other",
];

const primaryNeeds = [
  "On-demand delivery",
  "Scheduled delivery",
  "Scheduled transportation",
  "Recurring transportation",
  "Retail fulfillment",
  "Meal delivery",
  "Document delivery",
  "Guest transportation",
  "Employee transportation",
  "Healthcare transportation",
  "Team account access",
  "Other",
];

const requestFrequencies = [
  "Occasional",
  "Weekly",
  "Several times per week",
  "Daily",
  "High volume",
  "Not sure",
];

const teamSizes = [
  "1–5",
  "6–20",
  "21–50",
  "51–200",
  "201+",
  "Not sure",
];

export function BusinessInterestForm() {
  const [form, setForm] = useState<BusinessFormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  function updateField<K extends keyof BusinessFormState>(
    field: K,
    value: BusinessFormState[K],
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
      const response = await fetch("/api/business-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "business_page",
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        referenceId?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "Your business inquiry could not be submitted.",
        );
      }

      setStatus("success");
      setMessage(
        result.message ??
          "Your business-interest request was submitted successfully.",
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
        <label htmlFor="business-website">Website</label>
        <input
          id="business-website"
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
            Business email <span className="text-[#96ed08]">*</span>
          </span>
          <input
            required
            type="email"
            autoComplete="email"
            maxLength={254}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
            placeholder="Enter your business email"
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
            Organization <span className="text-[#96ed08]">*</span>
          </span>
          <input
            required
            type="text"
            autoComplete="organization"
            minLength={2}
            maxLength={180}
            value={form.organization}
            onChange={(event) =>
              updateField("organization", event.target.value)
            }
            className={inputClass}
            placeholder="Organization name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Industry <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.industry}
              onChange={(event) =>
                updateField("industry", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
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
            Primary need <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.primaryNeed}
              onChange={(event) =>
                updateField("primaryNeed", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {primaryNeeds.map((need) => (
                <option key={need} value={need}>
                  {need}
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
            Primary city <span className="text-[#96ed08]">*</span>
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
            State or region <span className="text-[#96ed08]">*</span>
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
            placeholder="State or region"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Number of locations
          </span>
          <input
            type="number"
            min="1"
            max="100000"
            inputMode="numeric"
            value={form.locations}
            onChange={(event) =>
              updateField("locations", event.target.value)
            }
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Expected request frequency
          </span>
          <span className="relative block">
            <select
              value={form.requestFrequency}
              onChange={(event) =>
                updateField("requestFrequency", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              <option value="">Select an option</option>
              {requestFrequencies.map((frequency) => (
                <option key={frequency} value={frequency}>
                  {frequency}
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
            Expected team size
          </span>
          <span className="relative block">
            <select
              value={form.teamSize}
              onChange={(event) =>
                updateField("teamSize", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              <option value="">Select an option</option>
              {teamSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
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
            Tell us about your business needs{" "}
            <span className="text-[#96ed08]">*</span>
          </span>
          <textarea
            required
            rows={7}
            minLength={30}
            maxLength={5000}
            value={form.details}
            onChange={(event) =>
              updateField("details", event.target.value)
            }
            className="mt-2 w-full resize-y rounded-2xl border border-white/[0.10] bg-black/50 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
            placeholder="Describe the services you need, expected volume, locations, scheduling, billing, team access, and operational goals."
          />
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
            I agree that AkiGO may use the information submitted to evaluate
            this business request and contact me in accordance with the{" "}
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
            I would also like to receive relevant AkiGO business and
            launch-market updates. This is optional.
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
                Submitting request...
              </>
            ) : (
              <>
                Submit Business Interest
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
