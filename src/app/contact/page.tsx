"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileText,
  Headphones,
  Mail,
  MapPinned,
  MessageCircle,
  Newspaper,
  PackageCheck,
  Send,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import {
  MarketingLayout,
  primaryButton,
  secondaryButton,
} from "@/components/marketing";


const contactDepartments = [
  {
    icon: Headphones,
    title: "General support",
    text: "Questions about AkiGO accounts, rides, deliveries, or the website.",
    subject: "AkiGO General Support",
  },
  {
    icon: UserCheck,
    title: "Driver support",
    text: "Driver onboarding, documents, eligibility, trips, earnings, or payouts.",
    subject: "AkiGO Driver Support",
  },
  {
    icon: PackageCheck,
    title: "Delivery support",
    text: "Pickup, tracking, courier, drop-off, or delivery-related questions.",
    subject: "AkiGO Delivery Support",
  },
  {
    icon: Building2,
    title: "Business partnerships",
    text: "Restaurant, retail, healthcare, hospitality, and logistics inquiries.",
    subject: "AkiGO Business Partnership",
  },
  {
    icon: ShieldCheck,
    title: "Safety support",
    text: "Non-emergency safety questions, reports, and platform follow-up.",
    subject: "AkiGO Safety Support",
  },
  {
    icon: Newspaper,
    title: "Media and press",
    text: "Company information, press inquiries, and media requests.",
    subject: "AkiGO Media Inquiry",
  },
];

const inquiryOptions = [
  "General support",
  "Rider support",
  "Driver support",
  "Delivery support",
  "Business partnership",
  "Safety support",
  "Media or press",
  "Careers",
  "Other",
];

const contactGuidance = [
  "Select the inquiry type that best matches your request",
  "Include relevant account, trip, delivery, or business details",
  "Describe what happened and what assistance you need",
  "Do not include passwords or complete payment-card numbers",
];

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  reference: string;
  message: string;
  privacyConsent: boolean;
  website: string;
};

const initialForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "General support",
  reference: "",
  message: "",
  privacyConsent: false,
  website: "",
};


export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        referenceId?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ?? "Your message could not be submitted.",
        );
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be submitted. Please try again.",
      );
    }
  }

  return (
    <MarketingLayout>
      <main className="bg-[#050505]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-[88px]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_23%,rgba(150,237,8,0.11),transparent_34%)]" />
          <div className="pointer-events-none absolute left-[-15rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#96ed08]/[0.04] blur-[145px]" />

          <div className="site-container relative z-10 grid min-h-[680px] items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#96ed08]">
                <span className="size-2 rounded-full bg-[#96ed08] shadow-[0_0_14px_rgba(150,237,8,.9)]" />
                Contact AkiGO
              </div>

              <h1 className="font-display mt-6 max-w-[760px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.1rem]">
                Let’s start the right
                <br />
                <span className="text-[#96ed08]">conversation.</span>
              </h1>

              <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/60">
                Contact AkiGO for support, driver questions, delivery concerns,
                business partnerships, safety follow-up, media inquiries, and
                general company information.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact-form" className={primaryButton}>
                  Send a message
                  <ArrowRight size={18} />
                </a>

                <Link href="/help" className={secondaryButton}>
                  Visit Help Center
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Headphones, label: "Customer support" },
                  { icon: UserCheck, label: "Driver support" },
                  { icon: Building2, label: "Partnerships" },
                  { icon: ShieldCheck, label: "Safety support" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-[#96ed08]/25 hover:bg-white/[0.035]"
                  >
                    <Icon className="text-[#96ed08]" size={21} />
                    <p className="mt-3 text-sm font-semibold text-white/72">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT PREVIEW */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="pointer-events-none absolute inset-12 rounded-full bg-[#96ed08]/10 blur-[120px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0d0f0c_0%,#070707_68%)] p-6 shadow-[0_30px_100px_rgba(0,0,0,.58)]">
                <div className="pointer-events-none absolute right-[-6rem] top-[-6rem] size-72 rounded-full bg-[#96ed08]/[0.08] blur-[100px]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                        AkiGO contact center
                      </p>
                      <h2 className="font-display mt-2 text-3xl font-bold">
                        Route your question to the right team.
                      </h2>
                    </div>

                    <div className="grid size-13 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <MessageCircle size={24} />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      {
                        icon: CircleHelp,
                        title: "Support questions",
                        text: "Accounts, rides, deliveries, and payments",
                      },
                      {
                        icon: BriefcaseBusiness,
                        title: "Business inquiries",
                        text: "Partnerships and local operations",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Safety follow-up",
                        text: "Non-emergency platform concerns",
                      },
                      {
                        icon: Newspaper,
                        title: "Company inquiries",
                        text: "Media, careers, and general information",
                      },
                    ].map(({ icon: Icon, title, text }) => (
                      <div
                        key={title}
                        className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-black/50 p-4"
                      >
                        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#96ed08]/10 text-[#96ed08]">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="font-bold text-white">{title}</h3>
                          <p className="mt-1 text-sm leading-6 text-white/42">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#96ed08]/18 bg-[#96ed08]/[0.05] p-4">
                    <Mail
                      className="mt-0.5 shrink-0 text-[#96ed08]"
                      size={19}
                    />
                    <div>
                      <p className="font-semibold text-white">
                        Secure online submission
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/38">
                        Your message is sent directly to AkiGO, stored for review,
                        and followed by an email confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Contact departments
              </p>

              <h2 className="font-display mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Choose the team that matches your request.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/55">
                Selecting the right contact path helps provide clearer context
                for your inquiry.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {contactDepartments.map(
                ({ icon: Icon, title, text }) => (
                  <button
                    key={title}
                    type="button"
                    onClick={() => {
                      updateField("inquiryType", title);
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group relative overflow-hidden rounded-[1.65rem] border border-white/[0.09] bg-[#0b0b0b] p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-[#96ed08]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#96ed08]"
                  >
                    <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] size-40 rounded-full bg-[#96ed08]/[0.045] blur-[70px]" />

                    <div className="relative">
                      <div className="grid size-12 place-items-center rounded-2xl border border-[#96ed08]/15 bg-[#96ed08]/10 text-[#96ed08]">
                        <Icon size={23} />
                      </div>

                      <h3 className="font-display mt-8 text-2xl font-bold">
                        {title}
                      </h3>

                      <p className="mt-3 leading-7 text-white/50">{text}</p>

                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#96ed08]">
                        Contact this team
                        <ArrowRight
                          size={15}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section
          id="contact-form"
          className="scroll-mt-28 border-t border-white/[0.06] py-20 sm:py-24"
        >
          <div className="site-container grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#96ed08]">
                Send a message
              </p>

              <h2 className="font-display mt-4 max-w-xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                Tell us how we can help.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Complete the secure form below. AkiGO will store the submission
                for review, notify the appropriate team, and send a confirmation
                to the email address you provide.
              </p>

              <div className="mt-8 space-y-3">
                {contactGuidance.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#96ed08] text-black">
                      <Check size={15} strokeWidth={3} />
                    </div>
                    <p className="font-semibold leading-6 text-white/65">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="flex items-start gap-3">
                  <Clock3
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                    size={20}
                  />
                  <div>
                    <h3 className="font-bold text-white">
                      Response expectations
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      Response timing depends on inquiry type, message volume,
                      and the information required for review. No guaranteed
                      response time is claimed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#0b0b0b] p-6 sm:p-8"
            >
              <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
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
              <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#96ed08]/[0.07] blur-[110px]" />

              <div className="relative grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Full name <span className="text-[#96ed08]">*</span>
                  </span>
                  <input
                    required
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    maxLength={120}
                    placeholder="Enter your full name"
                    className="min-h-14 w-full rounded-2xl border border-white/[0.1] bg-black/50 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Email address <span className="text-[#96ed08]">*</span>
                  </span>
                  <input
                    required
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    maxLength={254}
                    placeholder="Enter your email address"
                    className="min-h-14 w-full rounded-2xl border border-white/[0.1] bg-black/50 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Phone number
                  </span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    maxLength={32}
                    placeholder="Optional"
                    className="min-h-14 w-full rounded-2xl border border-white/[0.1] bg-black/50 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Inquiry type <span className="text-[#96ed08]">*</span>
                  </span>

                  <span className="relative block">
                    <select
                      required
                      value={form.inquiryType}
                      onChange={(event) =>
                        updateField("inquiryType", event.target.value)
                      }
                      className="min-h-14 w-full appearance-none rounded-2xl border border-white/[0.1] bg-black/50 px-4 pr-11 text-white outline-none transition focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
                    >
                      {inquiryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35"
                    />
                  </span>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    Trip, delivery, driver, or business reference
                  </span>
                  <input
                    type="text"
                    value={form.reference}
                    onChange={(event) =>
                      updateField("reference", event.target.value)
                    }
                    maxLength={160}
                    placeholder="Optional reference or account information"
                    className="min-h-14 w-full rounded-2xl border border-white/[0.1] bg-black/50 px-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-white/72">
                    How can we help? <span className="text-[#96ed08]">*</span>
                  </span>
                  <textarea
                    required
                    rows={7}
                    minLength={20}
                    maxLength={5000}
                    value={form.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    placeholder="Describe your question, concern, or partnership request"
                    className="w-full resize-y rounded-2xl border border-white/[0.1] bg-black/50 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#96ed08]/55 focus:ring-2 focus:ring-[#96ed08]/10"
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
                    I agree that AkiGO may use the information submitted to
                    respond to this request in accordance with the{" "}
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
                    {status === "submitting"
                      ? "Sending message..."
                      : "Send Message"}
                    <Send size={18} />
                  </button>

                  <div aria-live="polite" aria-atomic="true">
                    {status === "success" ? (
                      <p
                        className="mt-4 flex items-start gap-2 rounded-xl border border-[#96ed08]/20 bg-[#96ed08]/[0.05] p-4 text-sm leading-6 text-white/68"
                        role="status"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-[#96ed08]"
                        />
                        Your message was submitted successfully. A confirmation
                        email has been sent to you.
                      </p>
                    ) : null}

                    {status === "error" ? (
                      <p
                        className="mt-4 flex items-start gap-2 rounded-xl border border-red-400/20 bg-red-400/[0.05] p-4 text-sm leading-6 text-red-100/80"
                        role="alert"
                      >
                        <AlertTriangle
                          size={17}
                          className="mt-0.5 shrink-0"
                        />
                        {errorMessage}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* LOCATION + COMPANY */}
        <section className="border-t border-white/[0.06] py-20 sm:py-24">
          <div className="site-container grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <MapPinned size={28} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Service availability
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  AkiGO is preparing for launch.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Ride, delivery, driver, and business availability depends on
                  confirmed market, operational, compliance, and platform
                  readiness.
                </p>

                <Link
                  href="/about"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#96ed08]"
                >
                  Learn about AkiGO
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.8rem] border border-white/[0.09] bg-[linear-gradient(145deg,#0c0d0b_0%,#070707_70%)] p-8">
              <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] size-56 rounded-full bg-[#96ed08]/[0.08] blur-[95px]" />

              <div className="relative">
                <div className="grid size-13 place-items-center rounded-2xl border border-[#96ed08]/20 bg-[#96ed08]/10 text-[#96ed08]">
                  <FileText size={28} />
                </div>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                  Privacy reminder
                </p>

                <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-0.04em]">
                  Share only the information needed.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-white/52">
                  Never send passwords, authentication codes, complete
                  payment-card numbers, or other unnecessary sensitive
                  information through email.
                </p>

                <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#96ed08]/15 bg-[#96ed08]/[0.05] p-4">
                  <AlertTriangle
                    className="mt-0.5 shrink-0 text-[#96ed08]"
                    size={18}
                  />
                  <p className="text-sm leading-6 text-white/58">
                    For immediate danger, contact the appropriate local
                    emergency service rather than using this contact form.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-white/[0.06] py-16 sm:py-20">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#96ed08]/25 bg-[#050505] px-7 py-9 shadow-[0_0_70px_rgba(150,237,8,0.04)] sm:px-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#050505_0%,#091103_50%,#050505_100%)]" />

              <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#96ed08]">
                    Need guidance first?
                  </p>

                  <h2 className="font-display mt-2 text-3xl font-bold">
                    Explore the AkiGO Help Center.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48">
                    Review rider, driver, delivery, business, payment, and
                    safety information before contacting support.
                  </p>
                </div>

                <Link href="/help" className={`${primaryButton} shrink-0`}>
                  Open Help Center
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MarketingLayout>
  );
}
