import { CopyEmail } from "@/components/copy-email";
import { LiveTime } from "@/components/live-time";

export function AtAGlance() {
  return (
    <section
      aria-labelledby="glance-heading"
      className="rounded-lg border border-border bg-card p-4"
    >
      <h2
        id="glance-heading"
        className="mb-3 text-xs font-medium text-muted"
      >
        Quick info
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
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
        <div className="sm:col-span-2">
          <CopyEmail />
        </div>

      </div>
    </section>
  );
}
