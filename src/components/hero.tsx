import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-dashed border-border pb-6"
    >
      <h1 id="hero-heading" className="text-3xl font-semibold">
        Hi, I&apos;m Marvs Marfil
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          IT Assistant &amp; AI Workflow Automation
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          Philippines · PH Time (UTC+8)
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-muted">
        BSIT student building with Python, FastAPI, and n8n. Open to remote
        entry-level roles in IT assistance, non-voice support, workflow
        automation, and junior software development.
      </p>
    </section>
  );
}
