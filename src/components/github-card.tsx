import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";
import { siteConfig } from "@/config/nav";
import {
  getContributions,
  getGithubUsername,
  type ContributionDay,
} from "@/lib/github";

// First day shown in the heatmap. Change this one line to show more history.
const HEATMAP_START = "2026-07-01";
const MAX_WEEKS = 30;
const PERIOD_LABEL = `${new Date(
  `${HEATMAP_START}T00:00:00Z`,
).toLocaleDateString("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
})} - Present`;

const LEVEL_CLASS = [
  "bg-foreground/[0.08]",
  "bg-[var(--gh-1)]",
  "bg-[var(--gh-2)]",
  "bg-[var(--gh-3)]",
  "bg-[var(--gh-4)]",
];

function tip(d: ContributionDay): string {
  const date = new Date(`${d.date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  const n = d.count === 1 ? "1 contribution" : `${d.count} contributions`;
  return `${n} on ${date}`;
}

function Heatmap({ weeks }: { weeks: ContributionDay[][] }) {
  return (
    <div
      aria-hidden="true"
      className="grid w-full justify-start gap-1 md:justify-end"
      style={{
        gridAutoFlow: "column",
        gridAutoColumns: "minmax(0, 18px)",
      }}
    >
      {weeks.map((week) => (
        <div key={week[0].date} className="grid content-start gap-1">
          {week.map((d) => (
            <div
              key={d.date}
              title={tip(d)}
              className={`aspect-square rounded-[3px] ${LEVEL_CLASS[d.level]}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Legend() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-1.5 text-meta text-muted"
    >
      <span>Less</span>
      {LEVEL_CLASS.map((c) => (
        <span key={c} className={`size-3 rounded-[3px] ${c}`} />
      ))}
      <span>More</span>
    </div>
  );
}

export async function GithubCard({ className = "" }: { className?: string }) {
  const data = await getContributions();
  const username = getGithubUsername();
  const weeks = data
    ? data.weeks
        .filter((w) => w.length > 0 && w[w.length - 1].date >= HEATMAP_START)
        .slice(-MAX_WEEKS)
    : [];
  const summary = data
    ? `${data.total} contributions in the last year on GitHub`
    : "";

  return (
    <a
      href={siteConfig.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-foreground/[0.09] bg-card p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:flex-row md:justify-between ${className}`}
    >
      <div className="flex flex-col justify-between gap-6 md:w-[34%] md:shrink-0">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-xl border border-foreground/[0.09] bg-foreground/[0.09] sm:size-[58px]">
              <svg viewBox="0 0 24 24" className="size-6 fill-accent" aria-hidden="true">
                <path d={siGithub.path} />
              </svg>
            </span>
            <span className="text-meta uppercase tracking-wider text-muted">
              Code &amp; Activity
            </span>
          </div>
          <div className="space-y-1">
            <h3 className="text-card-title font-medium text-foreground">GitHub</h3>
            <p className="text-meta text-muted">
              Turning ideas into functional apps and automated workflows.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-meta text-muted transition-colors group-hover:text-foreground">
          @{username}
          <ExternalLink className="size-3.5" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </div>
      <div className="flex min-w-0 flex-col justify-between gap-6 md:flex-1 md:items-end">
        {data && weeks.length > 0 ? (
          <>
            <p className="text-meta text-muted md:text-right">{PERIOD_LABEL}</p>
            <div className="flex w-full flex-col gap-3 md:items-end">
              <p className="text-meta text-muted md:text-right">
                {data.total.toLocaleString("en-US")} contributions in the last year
              </p>
              <div role="img" aria-label={summary} className="w-full">
                <Heatmap weeks={weeks} />
              </div>
              <Legend />
            </div>
          </>
        ) : (
          <p className="mt-auto text-meta text-muted">Activity unavailable</p>
        )}
      </div>
    </a>
  );
}
