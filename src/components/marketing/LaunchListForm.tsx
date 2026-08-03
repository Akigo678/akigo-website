"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  Check,
  Loader2,
  Send,
} from "lucide-react";

type LaunchListFormProps = {
  source: string;
  buttonLabel?: string;
};

type FormState = {
  name: string;
  email: string;
  city: string;
  state: string;
  privacyConsent: boolean;
  website: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  city: "",
  state: "",
  privacyConsent: false,
  website: "",
};

export function LaunchListForm({
  source,
  buttonLabel = "Join the Launch List",
}: LaunchListFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/launch-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "Your subscription could not be submitted.",
        );
      }

      setStatus("success");
      setMessage(
        result.message ??
          "Check your email to confirm your subscription.",
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Your subscription could not be submitted. Please try again.",
      );
    }
  }

  const inputClass =
    "min-h-12 w-full rounded-xl border border-white/[0.12] bg-black/30 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#96ed08]/60 focus:ring-2 focus:ring-[#96ed08]/15";

  return (
    <form onSubmit={handleSubmit} noValidate className="relative">
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`launch-website-${source}`}>Website</label>
        <input
          id={`launch-website-${source}`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) =>
            updateField("website", event.target.value)
          }
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input
            required
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={120}
            value={form.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            className={inputClass}
            placeholder="Full name"
            aria-label="Full name"
          />
        </label>

        <label className="block">
          <span className="sr-only">Email address</span>
          <input
            required
            type="email"
            autoComplete="email"
            maxLength={254}
            value={form.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            className={inputClass}
            placeholder="Email address"
            aria-label="Email address"
          />
        </label>

        <label className="block">
          <span className="sr-only">City</span>
          <input
            type="text"
            autoComplete="address-level2"
            maxLength={100}
            value={form.city}
            onChange={(event) =>
              updateField("city", event.target.value)
            }
            className={inputClass}
            placeholder="City (optional)"
            aria-label="City"
          />
        </label>

        <label className="block">
          <span className="sr-only">State</span>
          <input
            type="text"
            autoComplete="address-level1"
            maxLength={100}
            value={form.state}
            onChange={(event) =>
              updateField("state", event.target.value)
            }
            className={inputClass}
            placeholder="State (optional)"
            aria-label="State"
          />
        </label>

        <label className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-black/20 p-3 sm:col-span-2">
          <input
            required
            type="checkbox"
            checked={form.privacyConsent}
            onChange={(event) =>
              updateField("privacyConsent", event.target.checked)
            }
            className="mt-1 size-4 shrink-0 accent-[#96ed08]"
          />

          <span className="text-xs leading-5 text-white/48">
            I agree to receive the AkiGO availability and launch updates
            requested here and understand that I can unsubscribe at any time.
            AkiGO will process my information according to the{" "}
            <Link
              href="/privacy"
              className="font-semibold text-[#96ed08] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            . <span className="text-[#96ed08]">*</span>
          </span>
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#96ed08] px-5 text-sm font-extrabold text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-55 sm:col-span-2"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={17} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              {buttonLabel}
              <Send size={17} />
            </>
          )}
        </button>
      </div>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" ? (
          <p
            className="mt-3 flex items-start gap-2 rounded-xl border border-[#96ed08]/20 bg-[#96ed08]/[0.05] p-3 text-xs leading-5 text-white/65"
            role="status"
          >
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-[#96ed08]"
            />
            {message}
          </p>
        ) : null}

        {status === "error" ? (
          <p
            className="mt-3 flex items-start gap-2 rounded-xl border border-red-400/20 bg-red-400/[0.05] p-3 text-xs leading-5 text-red-100/80"
            role="alert"
          >
            <AlertTriangle
              size={15}
              className="mt-0.5 shrink-0"
            />
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
