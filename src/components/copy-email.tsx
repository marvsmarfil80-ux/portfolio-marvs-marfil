"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { siteConfig } from "@/config/nav";

type Status = "idle" | "copied" | "error";

export function CopyEmail() {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  const message =
    status === "copied"
      ? "Email address copied to clipboard"
      : status === "error"
        ? "Could not copy. Please select the email manually."
        : "";

  return (
    <div className="flex items-center gap-3">
      <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm text-muted">Email</p>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy email address ${siteConfig.email}`}
          className="group inline-flex max-w-full items-center gap-2 rounded-md font-medium text-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="break-all text-left">{siteConfig.email}</span>
          {status === "copied" ? (
            <Check className="size-4 shrink-0 text-status-done" aria-hidden="true" />
          ) : (
            <Copy className="size-4 shrink-0 text-muted group-hover:text-accent" aria-hidden="true" />
          )}
        </button>
        <p className="h-4 text-xs text-muted" aria-hidden="true">
          {status === "copied" ? "Copied!" : status === "error" ? "Copy failed" : ""}
        </p>
        <span role="status" className="sr-only">
          {message}
        </span>
      </div>
    </div>
  );
}
