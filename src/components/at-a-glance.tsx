import { FileText } from "lucide-react";
import { siteConfig } from "@/config/nav";
import { CopyEmail } from "@/components/copy-email";
import { LiveTime } from "@/components/live-time";

export function AtAGlance() {
  return (
    <section
      aria-labelledby="glance-heading"
      className="rounded-2xl border border-border bg-card p-5"
    >
      <h2
        id="glance-heading"
        className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted"
      >
        At a glance
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <span
            className="size-2.5 shrink-0 rounded-full bg-status-done"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm text-muted">Availability</p>
            <p className="font-medium text-foreground">
              Open to remote entry-level roles
            </p>
          </div>
        </div>

        <LiveTime />
        <CopyEmail />

        <div className="flex items-center">
          <a
            href={siteConfig.cvHref}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <FileText className="size-4" aria-hidden="true" />
            Request CV
          </a>
        </div>
      </div>
    </section>
  );
}
