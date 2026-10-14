import type { Skill } from "@/data/skills";
import { iconColor } from "@/lib/icon-color";

function Icon({ skill }: { skill: Skill }) {
  const Fallback = skill.fallback;
  if (skill.brand) {
    return (
      <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill={iconColor(skill.brand.hex)} aria-hidden="true">
        <path d={skill.brand.path} />
      </svg>
    );
  }
  return Fallback ? <Fallback className="size-4 shrink-0 text-accent" aria-hidden="true" /> : null;
}

export function TechIcons({ skills, max = 6 }: { skills: Skill[]; max?: number }) {
  const shown = skills.slice(0, max);
  const extra = skills.length - shown.length;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="sr-only">Tech: {skills.map((s) => s.name).join(", ")}</span>
      {shown.map((s) => (
        <span key={s.name} title={s.name} className="inline-flex size-8 items-center justify-center rounded-md border border-border bg-background">
          <Icon skill={s} />
        </span>
      ))}
      {extra > 0 && <span aria-hidden="true" className="text-xs text-muted">+{extra}</span>}
    </div>
  );
}
