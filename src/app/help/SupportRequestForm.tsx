"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { httpsCallable } from "firebase/functions";
import { FormEvent, useState } from "react";

import { functions } from "@/lib/firebase";

type SupportFormState = {
  name: string;
  email: string;
  phone: string;
  audience: string;
  category: string;
  subject: string;
  message: string;
  city: string;
  state: string;
  privacyConsent: boolean;
};

const INITIAL_STATE: SupportFormState = {
  name: "",
  email: "",
  phone: "",
  audience: "",
  category: "",
  subject: "",
  message: "",
  city: "",
  state: "",
  privacyConsent: false,
};

type SupportResponse = {
  success: boolean;
  referenceId: string;
  documentId: string;
};

export default function SupportRequestForm() {
  const [form, setForm] =
    useState<SupportFormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [referenceId, setReferenceId] = useState("");

  function updateField<K extends keyof SupportFormState>(
    field: K,
    value: SupportFormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setReferenceId("");

    if (!form.privacyConsent) {
      setError(
        "You must agree to the Privacy Policy before submitting.",
      );
      return;
    }

    setSubmitting(true);

    try {
      const submitSupport = httpsCallable<
        SupportFormState & { source: string },
        SupportResponse
      >(functions, "submitWebsiteSupportRequest");

      const result = await submitSupport({
        ...form,
        source: "website_help_page",
      });

      setReferenceId(result.data.referenceId);
      setForm(INITIAL_STATE);
    } catch (submitError) {
      console.error(
        "Website support request failed:",
        submitError,
      );

      setError(
        submitError instanceof Error
          ? submitError.message.replace(
              /^Firebase:\s*/i,
              "",
            )
          : "Your support request could not be submitted. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "min-h-14 w-full rounded-2xl border border-white/10 bg-black/70 px-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#96ed08]/65";
  const labelClass =
    "mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-white/55";

  return (
    <section
      id="support-request"
      className="border-y border-white/[0.08] bg-[#070807] py-24"
    >
      <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
            Support request
          </p>
          <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
            Send your request directly to AkiGO Support.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/55">
            Your request will be stored securely and added to the
            Website Operations support queue for review.
          </p>

          <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/45 p-6">
            <p className="font-bold text-white">
              For immediate danger
            </p>
            <p className="mt-2 text-sm leading-7 text-white/50">
              Contact local emergency services first. This form is
              for platform, account, payment, delivery, and
              non-emergency safety support.
            </p>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-white/10 bg-[#0b0c0a] p-6 shadow-[0_30px_100px_rgba(0,0,0,.38)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className={labelClass}>Full name</span>
              <input
                required
                value={form.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                className={inputClass}
                placeholder="Your full name"
              />
            </label>

            <label>
              <span className={labelClass}>Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  updateField("email", event.target.value)
                }
                className={inputClass}
                placeholder="you@example.com"
              />
            </label>

            <label>
              <span className={labelClass}>Phone</span>
              <input
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
                className={inputClass}
                placeholder="Optional"
              />
            </label>

            <label>
              <span className={labelClass}>Who needs help?</span>
              <select
                required
                value={form.audience}
                onChange={(event) =>
                  updateField("audience", event.target.value)
                }
                className={inputClass}
              >
                <option value="">Select an option</option>
                <option value="Rider">Rider</option>
                <option value="Driver">Driver</option>
                <option value="Delivery customer">
                  Delivery customer
                </option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              <span className={labelClass}>Category</span>
              <select
                required
                value={form.category}
                onChange={(event) =>
                  updateField("category", event.target.value)
                }
                className={inputClass}
              >
                <option value="">Select a category</option>
                <option value="Account access">
                  Account access
                </option>
                <option value="Ride or trip">
                  Ride or trip
                </option>
                <option value="Delivery">Delivery</option>
                <option value="Payment or refund">
                  Payment or refund
                </option>
                <option value="Driver earnings or payout">
                  Driver earnings or payout
                </option>
                <option value="Safety concern">
                  Safety concern
                </option>
                <option value="Business support">
                  Business support
                </option>
                <option value="Technical issue">
                  Technical issue
                </option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              <span className={labelClass}>Subject</span>
              <input
                required
                value={form.subject}
                onChange={(event) =>
                  updateField("subject", event.target.value)
                }
                className={inputClass}
                placeholder="Brief summary"
              />
            </label>

            <label>
              <span className={labelClass}>City</span>
              <input
                value={form.city}
                onChange={(event) =>
                  updateField("city", event.target.value)
                }
                className={inputClass}
                placeholder="Optional"
              />
            </label>

            <label>
              <span className={labelClass}>State</span>
              <input
                value={form.state}
                onChange={(event) =>
                  updateField("state", event.target.value)
                }
                className={inputClass}
                placeholder="Optional"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className={labelClass}>Details</span>
            <textarea
              required
              minLength={10}
              value={form.message}
              onChange={(event) =>
                updateField("message", event.target.value)
              }
              className="min-h-40 w-full resize-y rounded-2xl border border-white/10 bg-black/70 p-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/28 focus:border-[#96ed08]/65"
              placeholder="Describe what happened and what help you need."
            />
          </label>

          <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/45 p-4">
            <input
              required
              type="checkbox"
              checked={form.privacyConsent}
              onChange={(event) =>
                updateField(
                  "privacyConsent",
                  event.target.checked,
                )
              }
              className="mt-1 size-4 accent-[#96ed08]"
            />
            <span className="text-sm leading-6 text-white/55">
              I agree that AkiGO may use this information to
              evaluate and respond to my support request in
              accordance with the Privacy Policy.
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#96ed08] px-6 font-extrabold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-55"
          >
            {submitting ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
            {submitting
              ? "Submitting request"
              : "Submit Support Request"}
          </button>

          {error ? (
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-200"
            >
              <AlertTriangle
                size={18}
                className="mt-0.5 shrink-0"
              />
              {error}
            </div>
          ) : null}

          {referenceId ? (
            <div
              role="status"
              className="mt-5 flex items-start gap-3 rounded-2xl border border-[#96ed08]/30 bg-[#96ed08]/10 p-4 text-sm leading-6 text-white"
            >
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-[#96ed08]"
              />
              <span>
                Your support request was submitted. Reference:{" "}
                <strong>{referenceId}</strong>
              </span>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
