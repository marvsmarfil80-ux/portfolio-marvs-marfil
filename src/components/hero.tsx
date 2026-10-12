import { MapPin } from "lucide-react";

const tags = [
  "IT Assistant",
  "Non-Voice Support",
  "Workflow Automation",
  "Junior Software Development",
];

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="space-y-5">
      <div className="space-y-2">
        <h1
          id="hero-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Hi, I&apos;m Marvs Marfil
        </h1>
        <p className="text-xl font-semibold text-accent sm:text-2xl">
          IT Assistant &amp; AI Workflow Automation
        </p>
      </div>

      <p className="max-w-2xl text-base text-foreground sm:text-lg">
        BSIT student · Python, FastAPI &amp; n8n · Open to remote entry-level
        roles
      </p>

      <p className="flex items-center gap-2 text-sm text-muted">
        <MapPin className="size-4 shrink-0" aria-hidden="true" />
        <span>Philippines · PH Time (UTC+8)</span>
      </p>

      <ul className="flex flex-wrap gap-2" aria-label="Target roles">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted">
        Currently building toward: Backend and AI Automation Development
      </p>
    </section>
  );
}
