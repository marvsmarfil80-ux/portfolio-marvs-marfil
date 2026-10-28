import type { Metadata } from "next";
import { Briefcase, Check, ChevronDown, GraduationCap, Lightbulb, ListChecks, Rocket, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { experienceDetails } from "../../data/experience-details";
import { education } from "../../data/education";
import { certifications } from "../../data/certifications";
import { CertificationCard } from "@/components/certification-card";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and training of Marvs Marfil, including data encoding through SPES and a work immersion at DepEd.",
};

type Entry = {
  slug: string;
  logo?: string;
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
    logo: "/images/orgs/dole-logo.jpg",
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
    logo: "/images/orgs/deped-logo.jpg",
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
                className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background text-muted"
              >
                {e.logo ? (
                  <Image src={e.logo} alt="" width={80} height={80} className="size-full bg-white object-contain p-0.5" />
                ) : (
                  <Briefcase className="size-[18px]" />
                )}
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
        <ol className="mt-3 space-y-4">
          {certifications.map((c) => (
            <CertificationCard key={c.slug} cert={c} />
          ))}
        </ol>
      </section>
      <section id="education" className="mt-8 scroll-mt-6">
        <h2 className="flex items-center gap-2 text-lg font-medium text-foreground">
          <GraduationCap className="size-5" aria-hidden="true" />
          Education
        </h2>
        <p className="mt-1 text-sm text-muted">My academic background.</p>
        <ol className="mt-3 space-y-4">
          {education.map((e) => (
            <li key={e.school} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
              <div
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white"
              >
                <Image src={e.logo} alt="" width={96} height={96} className="size-full object-contain p-0.5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium leading-[1.4] text-foreground">{e.school}</h3>
                <p className="mt-0.5 text-[13px] leading-[1.4] text-muted">{e.program}</p>
                <p className="mt-1 text-xs leading-[1.4] text-muted">{e.period} · {e.place}</p>
                <p className="mt-0.5 text-xs leading-[1.4] text-muted">{e.highlights}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
