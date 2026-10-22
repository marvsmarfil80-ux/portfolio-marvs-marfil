"use client";

import { useEffect, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { siteConfig } from "@/config/nav";

const MAX = 2000;
const field =
  "relative rounded-xl border border-border bg-background transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/40";
const input =
  "peer w-full bg-transparent px-4 pb-2 pt-6 text-foreground outline-none";
const label =
  "pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs";

function Form({ startWithCv }: { startWithCv: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(startWithCv);
  const [message, setMessage] = useState(startWithCv ? siteConfig.cvMessage.trim() : "");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const text = message.trim() || (cv ? siteConfig.cvMessage.trim() : "");
  const valid =
    name.trim() !== "" && /^\S+@\S+\.\S+$/.test(email.trim()) && text !== "";

  useEffect(() => {
    function onRequestCv() {
      setCv(true);
      setStatus("idle");
      setMessage((m) => (m.trim() === "" ? siteConfig.cvMessage.trim() : m));
      setTimeout(() => document.getElementById("cf-message")?.focus({ preventScroll: true }), 0);
    }
    window.addEventListener("request-cv", onRequestCv);
    return () => window.removeEventListener("request-cv", onRequestCv);
  }, []);

  function removeCv() {
    setCv(false);
    if (message.trim() === siteConfig.cvMessage.trim()) setMessage("");
  }

  async function send() {
    if (!valid || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text, cv, website }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setCv(false);
    } catch {
      setStatus("error");
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send();
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      send();
    }
  }

  return (
    <form onSubmit={onSubmit} onKeyDown={onKeyDown} className="mt-6 flex flex-col gap-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} className="hidden" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className={field}>
          <input id="cf-name" type="text" autoComplete="name" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} className={input} />
          <label htmlFor="cf-name" className={label}>Name</label>
        </div>
        <div className={field}>
          <input id="cf-email" type="email" autoComplete="email" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
          <label htmlFor="cf-email" className={label}>Email</label>
        </div>
      </div>

      <div className={field}>
        <textarea id="cf-message" rows={6} maxLength={MAX} placeholder=" " value={message} onChange={(e) => setMessage(e.target.value)} className={`${input} resize-none pt-7`} />
        <label htmlFor="cf-message" className={label}>Message</label>
        {cv && (
          <button type="button" onClick={removeCv} aria-label="Remove CV request topic" className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-accent px-2 py-0.5 text-xs font-medium text-accent">
            CV request
            <X className="size-3" aria-hidden="true" />
          </button>
        )}
      </div>
      <p className="-mt-2 text-right text-xs text-muted">{message.length}/{MAX}</p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted">
          <span className="font-medium text-foreground">Ctrl + Enter</span> to send. This opens your email app with the message ready to send.
        </p>
        <button type="submit" disabled={!valid} className="inline-flex items-center gap-2 rounded-xl border border-accent bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:border-border disabled:bg-card disabled:text-muted disabled:opacity-100">
          Send message
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

export function ContactForm() {
  const topic = useSearchParams().get("topic");
  return <Form startWithCv={topic === "cv"} />;
}
