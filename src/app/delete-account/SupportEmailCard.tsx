"use client";

import { useEffect, useRef, useState } from "react";

type SupportEmailCardProps = {
  email: string;
  subject?: string;
};

export function SupportEmailCard({
  email,
  subject = "AkiGO Account Deletion Request",
}: SupportEmailCardProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <div className="emailBox">
      <a
        href={mailto}
        className="emailAddressLink"
        aria-label={`Email AkiGO Support at ${email}`}
        title="Open your email app"
      >
        {email}
      </a>

      <button
        type="button"
        className="copyEmailButton"
        onClick={copyEmail}
        data-copied={copied ? "true" : "false"}
        aria-label={copied ? "Support email copied" : "Copy AkiGO support email"}
      >
        {copied ? "Copied ✓" : "Copy Email"}
      </button>
    </div>
  );
}
