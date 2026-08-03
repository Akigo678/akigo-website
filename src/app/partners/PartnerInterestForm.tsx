"use client";

import { FormEvent, useState } from "react";
import { AlertTriangle, Check, Loader2, Send } from "lucide-react";

type PartnerFormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  organizationType: string;
  city: string;
  state: string;
  locations: string;
  useCase: string;
  requestFrequency: string;
  details: string;
  consent: boolean;
};

const initialForm: PartnerFormState = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  organizationType: "Restaurant",
  city: "",
  state: "",
  locations: "",
  useCase: "Local delivery",
  requestFrequency: "",
  details: "",
  consent: false,
};

export function PartnerInterestForm() {
  const [form, setForm] = useState<PartnerFormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function updateField<K extends keyof PartnerFormState>(
    field: K,
    value: PartnerFormState[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.organization.trim() ||
      !form.organizationType ||
      !form.city.trim() ||
      !form.state.trim() ||
      !form.useCase ||
      !form.consent
    ) {
      setStatus("error");
      setMessage("Complete all required fields and accept the privacy consent.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

    if (!emailIsValid) {
      setStatus("error");
      setMessage("Enter a valid business email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/partner-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "partners-page",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setMessage(
        "Thank you. Your partnership-interest request has been received.",
      );
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage(
        "Your request could not be submitted. Please try again shortly.",
      );
    }
  }

  const inputClass =
    "min-h-12 w-full rounded-xl border border-white/[0.12] bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#96ed08]/60 focus:ring-2 focus:ring-[#96ed08]/15";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[1.75rem] border border-white/[0.10] bg-[#0b0b0b] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className="text-sm font-bold text-white">
            Full name <span className="text-[#96ed08]">*</span>
          </label>
          <input
            id="partner-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="partner-email" className="text-sm font-bold text-white">
            Business email <span className="text-[#96ed08]">*</span>
          </label>
          <input
            id="partner-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="partner-phone" className="text-sm font-bold text-white">
            Phone number
          </label>
          <input
            id="partner-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={`${inputClass} mt-2`}
            placeholder="Optional"
          />
        </div>

        <div>
          <label
            htmlFor="partner-organization"
            className="text-sm font-bold text-white"
          >
            Organization <span className="text-[#96ed08]">*</span>
          </label>
          <input
            id="partner-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            required
            value={form.organization}
            onChange={(event) =>
              updateField("organization", event.target.value)
            }
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label
            htmlFor="partner-type"
            className="text-sm font-bold text-white"
          >
            Organization type <span className="text-[#96ed08]">*</span>
          </label>
          <select
            id="partner-type"
            name="organizationType"
            required
            value={form.organizationType}
            onChange={(event) =>
              updateField("organizationType", event.target.value)
            }
            className={`${inputClass} mt-2`}
          >
            <option value="Restaurant">Restaurant</option>
            <option value="Retail">Retail</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Local organization">Local organization</option>
            <option value="Professional services">Professional services</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="partner-use-case"
            className="text-sm font-bold text-white"
          >
            Primary need <span className="text-[#96ed08]">*</span>
          </label>
          <select
            id="partner-use-case"
            name="useCase"
            required
            value={form.useCase}
            onChange={(event) => updateField("useCase", event.target.value)}
            className={`${inputClass} mt-2`}
          >
            <option value="Local delivery">Local delivery</option>
            <option value="Scheduled transportation">
              Scheduled transportation
            </option>
            <option value="Recurring transportation">
              Recurring transportation
            </option>
            <option value="Meal delivery">Meal delivery</option>
            <option value="Retail fulfillment">Retail fulfillment</option>
            <option value="Document delivery">Document delivery</option>
            <option value="Guest transportation">Guest transportation</option>
            <option value="Employee transportation">
              Employee transportation
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="partner-city" className="text-sm font-bold text-white">
            Primary city <span className="text-[#96ed08]">*</span>
          </label>
          <input
            id="partner-city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label htmlFor="partner-state" className="text-sm font-bold text-white">
            State or region <span className="text-[#96ed08]">*</span>
          </label>
          <input
            id="partner-state"
            name="state"
            type="text"
            autoComplete="address-level1"
            required
            value={form.state}
            onChange={(event) => updateField("state", event.target.value)}
            className={`${inputClass} mt-2`}
          />
        </div>

        <div>
          <label
            htmlFor="partner-locations"
            className="text-sm font-bold text-white"
          >
            Number of locations
          </label>
          <input
            id="partner-locations"
            name="locations"
            type="number"
            min="1"
            inputMode="numeric"
            value={form.locations}
            onChange={(event) => updateField("locations", event.target.value)}
            className={`${inputClass} mt-2`}
            placeholder="Optional"
          />
        </div>

        <div>
          <label
            htmlFor="partner-frequency"
            className="text-sm font-bold text-white"
          >
            Expected request frequency
          </label>
          <select
            id="partner-frequency"
            name="requestFrequency"
            value={form.requestFrequency}
            onChange={(event) =>
              updateField("requestFrequency", event.target.value)
            }
            className={`${inputClass} mt-2`}
          >
            <option value="">Select an option</option>
            <option value="Occasional">Occasional</option>
            <option value="Weekly">Weekly</option>
            <option value="Several times per week">
              Several times per week
            </option>
            <option value="Daily">Daily</option>
            <option value="High volume">High volume</option>
            <option value="Not sure">Not sure</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="partner-details"
          className="text-sm font-bold text-white"
        >
          Tell us about your needs
        </label>
        <textarea
          id="partner-details"
          name="details"
          rows={6}
          value={form.details}
          onChange={(event) => updateField("details", event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/[0.12] bg-black/30 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/30 focus:border-[#96ed08]/60 focus:ring-2 focus:ring-[#96ed08]/15"
          placeholder="Describe the service area, request type, scheduling needs, eligible items, passenger needs, or operational challenge."
        />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 size-4 rounded border-white/20 accent-[#96ed08]"
        />
        <span className="text-sm leading-6 text-white/52">
          I consent to AkiGO using this information to evaluate partnership
          interest and contact me about relevant business or launch updates.
          <span className="text-[#96ed08]"> *</span>
        </span>
      </label>

      <div aria-live="polite" className="mt-5 min-h-6">
        {message ? (
          <div
            className={`flex items-start gap-2 text-sm ${
              status === "success" ? "text-[#96ed08]" : "text-amber-300"
            }`}
          >
            {status === "success" ? (
              <Check className="mt-0.5 shrink-0" size={17} />
            ) : (
              <AlertTriangle className="mt-0.5 shrink-0" size={17} />
            )}
            <span>{message}</span>
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-3 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#96ed08] px-7 font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-[#a7ff22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0b] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Submitting
          </>
        ) : (
          <>
            Submit partnership interest
            <Send size={17} />
          </>
        )}
      </button>
    </form>
  );
}
