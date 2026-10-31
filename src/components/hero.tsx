import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-dashed border-border pb-4"
    >
      <h1 id="hero-heading" className="text-3xl font-semibold">
        Hi, I&apos;m Marvs Marfil
      </h1>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span className="flex items-center gap-3">
          <span className="size-1 rounded-full bg-muted" aria-hidden="true" />
          Software Developer &amp; AI Workflow Automation
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          Based in Biñan, Laguna, Philippines
        </span>
      </div>

      <p className="mt-3 text-sm leading-[1.6] text-muted">
        I build AI-assisted workflows in n8n, APIs with Python and FastAPI, and
        full-stack applications with Next.js. Open to remote roles in
        AI workflow automation, software development, IT assistance, and
        non-voice support.
      </p>
    </section>
  );
}
