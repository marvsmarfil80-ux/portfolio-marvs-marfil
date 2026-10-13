import { Code2 } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { marqueeRows } from "@/data/skills";
import type { Skill } from "@/data/skills";
import { iconColor } from "@/lib/icon-color";

const [rowOne, rowTwo] = marqueeRows;

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
