import Image from "next/image";
import { Award, Check, ChevronDown, FileText, Lightbulb, Sparkles } from "lucide-react";
import { CertViewer } from "@/components/cert-viewer";
import type { Certification } from "@/data/certifications";

const heading =
  "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#a62e38]";

export function CertificationCard({ cert: c }: { cert: Certification }) {
  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-start">
      <div className="flex min-w-0 flex-1 gap-3">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background text-muted"
        >
          {c.logo ? (
            <Image src={c.logo} alt="" width={96} height={96} className="size-full bg-white object-contain p-0.5" />
          ) : (
            <Award className="size-5" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium leading-[1.4] text-foreground">{c.title}</h3>
          <p className="mt-0.5 text-[13px] leading-[1.4] text-muted">
            {c.provider} · {c.place}
          </p>
          <p className="mt-1 text-xs leading-[1.4] text-muted">
            {c.period} · {c.type} · {c.duration}
          </p>
          <details className="group mt-1">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[13px] text-muted hover:text-foreground [&::-webkit-details-marker]:hidden">
              <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
              <span className="group-open:hidden">Show details</span>
              <span className="hidden group-open:inline">Hide details</span>
            </summary>
            <p className="mt-2 text-[13px] leading-[1.4] text-foreground">{c.providerFull}</p>
            <div className="mt-3 space-y-4 border-t border-border pt-3">
              <div>
                <h4 className={heading}>
                  <FileText className="size-3.5" aria-hidden="true" />
                  Overview
                </h4>
                <p className="mt-1.5 text-[13px] leading-[1.4] text-muted">{c.overview}</p>
              </div>
              <div>
                <h4 className={heading}>
                  <Lightbulb className="size-3.5" aria-hidden="true" />
                  What I learned
                </h4>
                <ul className="mt-1.5 space-y-1">
                  {c.learned.map((l) => (
                    <li key={l.label} className="flex gap-2 text-[13px] leading-[1.4] text-muted">
                      <Check className="mt-[3px] size-3 shrink-0 text-[#a62e38]" aria-hidden="true" />
                      <span>
                        <span className="font-medium text-foreground">{l.label}:</span> {l.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={heading}>
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Skills developed
                </h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.skills.map((sk) => (
                    <li key={sk} className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted">
                      {sk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
      <CertViewer src={c.image} title={c.title} />
    </li>
  );
}
