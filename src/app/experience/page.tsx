import type { Metadata } from "next";
import { Briefcase, Check, ChevronDown, FileText, Lightbulb, ListChecks, Rocket, type LucideIcon } from "lucide-react";
import { experienceDetails } from "../../data/experience-details";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and training of Marvs Marfil, including data encoding through SPES and a work immersion at DepEd.",
};

type Entry = {
  slug: string;
  type: string;
  role: string;
  org: string;
  orgFull: string;
  period: string;
  place: string;
  mode: string;
  context: string;
};

// Order: SPES first, then the DepEd work immersion.
const entries: Entry[] = [
  {
    slug: "spes",
    type: "Government program",
    role: "Data Encoder",
    org: "SPES, Department of Labor and Employment (DOLE)",
    orgFull: "Special Program for Employment of Students (SPES), Department of Labor and Employment (DOLE)",
    period: "May - Jul · 2023 to 2026",
    place: "Biñan, Laguna",
    mode: "On-site",
    context:
      "SPES is a Philippine government program that gives students short-term work.",
  },
  {
    slug: "deped",
    type: "Work immersion",
    role: "Encoder / Research Data Assistant",
    org: "Department of Education (DepEd)",
    orgFull: "Department of Education (DepEd), Philippines",
    period: "Apr - Jun 2025",
    place: "Biñan, Laguna",
    mode: "On-site",
    context:
      "DepEd is the Philippine government agency for basic education. This was a student work immersion.",
  },
];

const trainingTitle =
  "Digital Literacy Training on Office Productivity Tools: MS Word, MS Excel and MS PowerPoint with Internet, Media and Information Literacy";

function DetailSection({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#a62e38]">
        <Icon className="size-3.5" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-1.5 space-y-1">
        {items.map((t) => (
          <li key={t} className="flex gap-2 text-[13px] leading-[1.4] text-muted">
            <Check className="mt-[3px] size-3 shrink-0 text-[#a62e38]" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailBlock({ slug }: { slug: string }) {
  const d = experienceDetails[slug];
  if (!d) return null;
  return (
    <div className="mt-3 space-y-4 border-t border-border pt-3">
      <DetailSection icon={ListChecks} title="Responsibilities" items={d.responsibilities} />
      <div className="grid gap-4 md:grid-cols-2">
        <DetailSection icon={Lightbulb} title="What I learned" items={d.learned} />
        <DetailSection icon={Rocket} title="Impact" items={d.impact} />
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <section aria-labelledby="experience-heading">
        <header className="border-b border-dashed border-border pb-6">
          <h1 id="experience-heading" className="text-page-title font-medium">
            Experience
          </h1>
          <p className="mt-3 text-muted">
            Work and student experience, labeled by type.
          </p>
        </header>

        <ol className="mt-6 space-y-4">
          {entries.map((e) => (
            <li key={e.role} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
              <div
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-muted"
              >
                <Briefcase className="size-[18px]" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-base font-medium leading-[1.4] text-foreground">{e.role}</h2>
                <p className="mt-0.5 text-[13px] leading-[1.4] text-muted">
                  {e.org} · {e.place}
                </p>
                <p className="mt-1 text-xs leading-[1.4] text-muted">
                  {e.period} · {e.type} · {e.mode}
                </p>
                <details className="group mt-1">
                  <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[13px] text-muted hover:text-foreground [&::-webkit-details-marker]:hidden">
                    <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
                    <span className="group-open:hidden">Show details</span>
                    <span className="hidden group-open:inline">Hide details</span>
                  </summary>
                  <p className="mt-2 text-[13px] leading-[1.4] text-foreground">{e.orgFull}</p>
                  <p className="mt-1 text-[13px] leading-[1.4] text-muted">{e.context}</p>
                  <DetailBlock slug={e.slug} />
                </details>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="training" className="mt-8 scroll-mt-6">
        <h2 className="text-lg font-medium text-foreground">
          Training &amp; Certifications
        </h2>

        <div className="mt-3 rounded-2xl border border-border bg-card p-4">
          <p className="inline-block rounded-full border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted">
            Short training
          </p>
          <h3 className="mt-2 text-base font-medium leading-[1.35] text-foreground">
            {trainingTitle}
          </h3>
          <p className="mt-1 text-xs text-muted">2023 · 3 days</p>
          <p className="mt-1.5 text-[13px] leading-[1.4] text-muted">
            Covered Microsoft-related tools and basic digital skills. This is a short
            training, not an advanced certification.
          </p>

          {/* Certificate image placeholder. Replace when the blurred image is ready. */}
          <div className="mt-3 flex aspect-[16/9] max-w-56 items-center justify-center rounded-md border border-dashed border-border bg-background p-3 text-center text-meta text-muted">
            Certificate image will be added.
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-[13px] font-medium text-foreground">Office tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Office tools">
            <li className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2.5 py-1 text-[13px] font-medium text-foreground">
              <FileText className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
              Microsoft Office (Basic)
            </li>
          </ul>
          <p className="mt-2 text-xs text-muted">
            Basic level, from the training above and my data encoding work.
          </p>
        </div>
      </section>
    </>
  );
}
