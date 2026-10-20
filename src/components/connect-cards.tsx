"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { siFacebook, siGithub, siGmail, siInstagram, siUpwork } from "simple-icons";
import { siteConfig } from "@/config/nav";

type Item = {
  name: string;
  desc: string;
  tone: string;
  path?: string;
  text?: string;
  href: string | null;
  external: boolean;
  copy?: boolean;
};

const items: Item[] = [
  { name: "Email", desc: "Send me a message about roles or collaboration.", tone: "from-red-600 to-red-900", path: siGmail.path, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`, external: true, copy: true },
  { name: "GitHub", desc: "Browse the source code of my projects.", tone: "from-slate-700 to-slate-950", path: siGithub.path, href: siteConfig.githubUrl, external: true },
  { name: "Facebook", desc: "Connect with me on Facebook.", tone: "from-blue-600 to-blue-900", path: siFacebook.path, href: siteConfig.facebookUrl, external: true },
  { name: "Instagram", desc: "Follow me on Instagram.", tone: "from-pink-600 to-purple-800", path: siInstagram.path, href: siteConfig.instagramUrl, external: true },
  { name: "Upwork", desc: "View my Upwork profile.", tone: "from-green-700 to-green-900", path: siUpwork.path, href: siteConfig.upworkUrl, external: true },
  { name: "LinkedIn", desc: "Connect with me professionally.", tone: "from-sky-700 to-sky-950", text: "in", href: siteConfig.linkedinUrl, external: true },
];

const btn =
  "inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-white focus-visible:outline-white";

export function ConnectCards() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <section aria-labelledby="connect-heading" className="mt-10">
      <div className="flex items-center gap-4">
        <span className="flex-1 border-t border-dashed border-border" aria-hidden="true" />
        <h2 id="connect-heading" className="text-sm text-muted">Or connect with me</h2>
        <span className="flex-1 border-t border-dashed border-border" aria-hidden="true" />
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it.name} className={`flex flex-col justify-between gap-5 rounded-xl border border-white/10 bg-linear-to-br p-5 text-white ${it.tone}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{it.name}</h3>
                <p className="mt-1 text-sm text-white">{it.desc}</p>
              </div>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/90 text-xl font-bold text-slate-900" aria-hidden="true">
                {it.path ? (
                  <svg viewBox="0 0 24 24" className="size-7" fill="currentColor"><path d={it.path} /></svg>
                ) : (
                  it.text
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {it.href ? (
                <a href={it.href} {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={btn}>
                  Go to {it.name}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  {it.external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              ) : (
                <span className="inline-flex items-center rounded-lg border border-dashed border-white/50 px-4 py-2 text-sm text-white">
                  Link coming soon
                </span>
              )}
              {it.copy && (
                <button type="button" onClick={copyEmail} aria-label="Copy email address" className="inline-flex size-10 items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-white">
                  {status === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      <span role="status" className="sr-only">
        {status === "copied" ? "Email address copied to clipboard" : status === "error" ? "Could not copy. Please select the email manually." : ""}
      </span>
    </section>
  );
}
