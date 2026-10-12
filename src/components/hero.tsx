import { MapPin } from "lucide-react";

const tags = [
  "IT Assistant",
  "Non-Voice Support",
  "Workflow Automation",
  "Junior Software Development",
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="space-y-4 border-b border-border pb-6"
    >
      <h1
        id="hero-heading"
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        Hi, I&apos;m Marvs Marfil
      </h1>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base">
        <span className="flex items-center gap-2 font-medium text-foreground">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          IT Assistant &amp; AI Workflow Automation
        </span>
        <span className="flex items-center gap-1.5 text-muted">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          Philippines · PH Time (UTC+8)
        </span>
      </div>

      <p className="max-w-2xl text-base text-muted">
        BSIT student · Python, FastAPI &amp; n8n · Open to remote entry-level
        roles
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
