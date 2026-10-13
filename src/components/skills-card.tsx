import { Code2, GitMerge, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  siDocker,
  siFastapi,
  siGit,
  siN8n,
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siSqlalchemy,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { BentoCard } from "@/components/bento-card";

type Skill = { name: string; brand?: SimpleIcon; fallback?: LucideIcon };

// Demonstrated skills only.
const rowOne: Skill[] = [
  { name: "Python", brand: siPython },
  { name: "FastAPI", brand: siFastapi },
  { name: "PostgreSQL", brand: siPostgresql },
  { name: "REST APIs", fallback: Globe },
  { name: "SQLAlchemy", brand: siSqlalchemy },
  { name: "Alembic", fallback: GitMerge },
  { name: "Docker", brand: siDocker },
];

const rowTwo: Skill[] = [
  { name: "React", brand: siReact },
  { name: "Next.js", brand: siNextdotjs },
  { name: "TypeScript", brand: siTypescript },
  { name: "Tailwind CSS", brand: siTailwindcss },
  { name: "n8n", brand: siN8n },
  { name: "Git/GitHub", brand: siGit },
];

// Very dark brand colors (e.g. Next.js) would disappear on the dark theme.
function iconColor(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.25 ? "currentColor" : `#${hex}`;
}

function Chip({ skill }: { skill: Skill }) {
  const Fallback = skill.fallback;
  return (
    <li className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground">
      {skill.brand ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="size-4 shrink-0"
          fill={iconColor(skill.brand.hex)}
          aria-hidden="true"
        >
          <path d={skill.brand.path} />
        </svg>
      ) : Fallback ? (
        <Fallback className="size-4 shrink-0 text-accent" aria-hidden="true" />
      ) : null}
      {skill.name}
    </li>
  );
}

function MarqueeRow({
  skills,
  reverse = false,
}: {
  skills: Skill[];
  reverse?: boolean;
}) {
  return (
    <div className="sm-wrap">
      <div className={`sm-track ${reverse ? "sm-rev" : ""}`}>
        <ul className="sm-group" aria-label="Skills">
          {skills.map((s) => (
            <Chip key={s.name} skill={s} />
          ))}
        </ul>
        {/* Duplicate group for a seamless loop; hidden from assistive tech. */}
        <ul className="sm-group sm-dup" aria-hidden="true">
          {skills.map((s) => (
            <Chip key={s.name} skill={s} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const marqueeCss = `
@keyframes sm-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.sm-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }
.sm-track { display: flex; width: max-content; animation: sm-scroll 32s linear infinite; }
.sm-rev { animation-direction: reverse; animation-duration: 38s; }
.sm-group { display: flex; flex-shrink: 0; gap: 0.5rem; padding-right: 0.5rem; }
.group:hover .sm-track, .group:focus-visible .sm-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .sm-wrap { -webkit-mask-image: none; mask-image: none; }
  .sm-track { animation: none; width: 100%; }
  .sm-group { flex-wrap: wrap; justify-content: center; padding-right: 0; }
  .sm-dup { display: none; }
}
`;

export function SkillsCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/about#skills"
      title="Skills & Tools"
      description="Backend, frontend, and automation tools."
      icon={Code2}
      className={className}
    >
      <style>{marqueeCss}</style>
      <div className="space-y-2">
        <MarqueeRow skills={rowOne} />
        <MarqueeRow skills={rowTwo} reverse />
      </div>
    </BentoCard>
  );
}
