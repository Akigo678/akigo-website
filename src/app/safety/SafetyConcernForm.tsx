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

type SafetyConcernFormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  concernType: string;
  urgency: string;
  reference: string;
  incidentDate: string;
  city: string;
  state: string;
  description: string;
  contactedEmergencyServices: string;
  privacyConsent: boolean;
  website: string;
};

const initialForm: SafetyConcernFormState = {
  name: "",
  email: "",
  phone: "",
  role: "Rider",
  concernType: "Trip safety concern",
  urgency: "Non-emergency",
  reference: "",
  incidentDate: "",
  city: "",
  state: "",
  description: "",
  contactedEmergencyServices: "Not applicable",
  privacyConsent: false,
  website: "",
};

const roles = [
  "Rider",
  "Driver",
  "Courier",
  "Business",
  "Recipient",
  "Website visitor",
  "Other",
];

const concernTypes = [
  "Trip safety concern",
  "Delivery safety concern",
  "Driver conduct",
  "Rider conduct",
  "Courier conduct",
  "Unsafe pickup or drop-off",
  "Harassment or discrimination",
  "Threat or violence",
  "Suspicious account activity",
  "Privacy or data concern",
  "Website safety question",
  "Other",
];

const urgencyOptions = [
  "Non-emergency",
  "Needs prompt review",
  "Follow-up to an emergency",
];

const emergencyServiceOptions = [
  "Yes",
  "No",
  "Not applicable",
];

export function SafetyConcernForm() {
  const [form, setForm] =
    useState<SafetyConcernFormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  function updateField<K extends keyof SafetyConcernFormState>(
    field: K,
    value: SafetyConcernFormState[K],
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
      const response = await fetch("/api/safety-concern", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "safety_page",
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        referenceId?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "Your safety concern could not be submitted.",
        );
      }

      setStatus("success");
      setMessage(
        result.message ??
          "Your safety concern was submitted successfully.",
      );
      setReferenceId(result.referenceId ?? "");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Your safety concern could not be submitted. Please try again.",
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
        <label htmlFor="safety-website">Website</label>
        <input
          id="safety-website"
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
            Your role <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.role}
              onChange={(event) =>
                updateField("role", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
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
            Concern type <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.concernType}
              onChange={(event) =>
                updateField("concernType", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {concernTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
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
            Urgency <span className="text-[#96ed08]">*</span>
          </span>
          <span className="relative block">
            <select
              required
              value={form.urgency}
              onChange={(event) =>
                updateField("urgency", event.target.value)
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {urgencyOptions.map((option) => (
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
            Trip, delivery, driver, rider, or account reference
          </span>
          <input
            type="text"
            maxLength={180}
            value={form.reference}
            onChange={(event) =>
              updateField("reference", event.target.value)
            }
            className={inputClass}
            placeholder="Optional reference"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Incident date
          </span>
          <input
            type="date"
            value={form.incidentDate}
            onChange={(event) =>
              updateField("incidentDate", event.target.value)
            }
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            Emergency services contacted?
          </span>
          <span className="relative block">
            <select
              value={form.contactedEmergencyServices}
              onChange={(event) =>
                updateField(
                  "contactedEmergencyServices",
                  event.target.value,
                )
              }
              className={`${inputClass} appearance-none pr-11`}
            >
              {emergencyServiceOptions.map((option) => (
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
            City
          </span>
          <input
            type="text"
            autoComplete="address-level2"
            maxLength={100}
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-white/72">
            State
          </span>
          <input
            type="text"
            autoComplete="address-level1"
            maxLength={100}
            value={form.state}
            onChange={(event) => updateField("state", event.target.value)}
            className={inputClass}
            placeholder="Optional"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-bold text-white/72">
            Describe what happened{" "}
            <span className="text-[#96ed08]">*</span>
          </span>
          <textarea
            required
            rows={8}
            minLength={30}
            maxLength={7000}
            value={form.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            className="mt-2 w-full resize-y rounded-2xl border border-white/[0.10] bg-black/50 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
            placeholder="Describe the incident, timeline, people involved, location, and what assistance or follow-up you need."
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
            I agree that AkiGO may use this information to review and respond
            to the safety concern in accordance with the{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[#96ed08] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            . <span className="text-[#96ed08]">*</span>
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
                Submitting concern...
              </>
            ) : (
              <>
                Submit Safety Concern
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
