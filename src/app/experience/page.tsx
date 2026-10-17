import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and training of Marvs Marfil, including data encoding through SPES and a work immersion at DepEd.",
};

type Entry = {
  type: string;
  role: string;
  org: string;
  period: string;
  context: string;
  points: string[];
  shows: string;
};

// Order: SPES first, then the DepEd work immersion.
const entries: Entry[] = [
  {
    type: "Government student employment program",
    role: "Data Encoder",
    org: "Special Program for Employment of Students (SPES), Department of Labor and Employment (DOLE)",
    period: "2023 to 2025 · about 2 months per year, for 3 years",
    context:
      "SPES is a Philippine government program that gives students short-term work.",
    points: [
      "Encoded information into digital records.",
      "Kept data organized and accurate.",
    ],
    shows: "Accuracy, attention to detail, and following a process.",
  },
  {
    type: "Student work immersion (not a regular job)",
    role: "Encoder / Research Data Assistant",
    org: "Department of Education (DepEd), Philippines",
    period: "1 month",
    context:
      "DepEd is the Philippine government agency for basic education. This was a student work immersion.",
    points: [
      "Encoded and organized research information.",
      "Helped check teachers' research documents.",
    ],
    shows: "Accuracy, attention to detail, and following a process.",
  },
];

const trainingTitle =
  "Digital Literacy Training on Office Productivity Tools: MS Word, MS Excel and MS PowerPoint with Internet, Media and Information Literacy";

export default function ExperiencePage() {
  return (
    <>
      <section aria-labelledby="experience-heading">
        <h1 id="experience-heading" className="text-3xl font-semibold">
          Experience
        </h1>
        <p className="mt-2 text-muted">
          Work and student experience, labeled by type.
        </p>

        <ol className="mt-8 space-y-8 border-l border-border pl-6">
          {entries.map((e) => (
            <li key={e.role} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.9rem] top-6 size-3 rounded-full border-2 border-accent bg-background"
              />
              <div className="rounded-lg border border-border bg-card p-5">
                <p className="inline-block rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted">
                  {e.type}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-foreground">
                  {e.role}
                </h2>
                <p className="mt-1 text-sm text-foreground">{e.org}</p>
                <p className="mt-1 text-sm text-muted">{e.period}</p>
                <p className="mt-3 text-sm text-muted">{e.context}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-muted">
                  <span className="font-medium text-foreground">What it shows: </span>
                  {e.shows}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="training" className="mt-12 scroll-mt-6">
        <h2 className="text-lg font-semibold text-foreground">
          Training &amp; Certifications
        </h2>

        <div className="mt-4 rounded-lg border border-border bg-card p-5">
          <p className="inline-block rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted">
            Short training
          </p>
          <h3 className="mt-3 text-base font-semibold text-foreground">
            {trainingTitle}
          </h3>
          <p className="mt-1 text-sm text-muted">2023 · 3 days</p>
          <p className="mt-3 text-sm text-foreground">
            Covered Microsoft-related tools and basic digital skills. This is a short
            training, not an advanced certification.
          </p>

          {/* Certificate image placeholder. Replace when the blurred image is ready. */}
          <div className="mt-4 flex aspect-[4/3] max-w-sm items-center justify-center rounded-md border border-dashed border-border bg-background p-4 text-center text-sm text-muted">
            Certificate image will be added.
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground">Office tools</h3>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label="Office tools">
            <li className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground">
              <FileText className="size-4 shrink-0 text-accent" aria-hidden="true" />
              Microsoft Office (Basic)
            </li>
          </ul>
          <p className="mt-2 text-sm text-muted">
            Basic level, from the training above and my data encoding work.
          </p>
        </div>
      </section>
    </>
  );
}
