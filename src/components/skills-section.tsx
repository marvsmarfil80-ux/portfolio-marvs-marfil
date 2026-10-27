"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import type { Skill, SkillCategory } from "@/data/skills";
import { iconColor } from "@/lib/icon-color";

type Tab = "All" | SkillCategory;

const tabs: Tab[] = ["All", "Backend", "Frontend", "Database", "Tools & Automation"];

function countFor(tab: Tab) {
  return tab === "All" ? skills.length : skills.filter((s) => s.category === tab).length;
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.badge) {
    return (
      <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill={skill.badge.color} />
        <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff" fontFamily="sans-serif">
          {skill.badge.letter}
        </text>
      </svg>
    );
  }
  const Fallback = skill.fallback;
  if (skill.brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="size-5 shrink-0"
        fill={iconColor(skill.brand.hex)}
        aria-hidden="true"
      >
        <path d={skill.brand.path} />
      </svg>
    );
  }
  return Fallback ? (
    <Fallback className="size-5 shrink-0 text-accent" aria-hidden="true" />
  ) : null;
}

const chipBase =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-foreground/[0.08] px-4 py-2 text-sm font-medium text-foreground";

function SkillChip({ skill }: { skill: Skill }) {
  const learning = skill.status === "learning";
  return (
    <li>
      <span className={`${chipBase} border border-foreground/[0.12]${learning ? " border-dashed" : ""}`}>
        <SkillIcon skill={skill} />
        {skill.name}
        {learning && (
          <span className="rounded-full bg-card px-2 py-0.5 text-xs font-normal text-muted">
            Learning
          </span>
        )}
      </span>
    </li>
  );
}

export function SkillsSection() {
  const [active, setActive] = useState<Tab>("All");
  const visible = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <div className="mt-4">
      <div role="group" aria-label="Filter skills by category" className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const isActive = tab === active;
          return (
            <button
              key={tab}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(tab)}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-foreground/[0.12] bg-transparent text-foreground hover:border-foreground/30"
              }`}
            >
              {tab}
              <span className={`inline-flex size-5 items-center justify-center rounded-full text-xs ${isActive ? "bg-accent-foreground/15" : "bg-foreground/[0.12] text-muted"}`}>
                {countFor(tab)}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-4 flex flex-wrap gap-2.5" aria-label={`${active} skills`}>
        {visible.map((s) => (
          <SkillChip key={s.name} skill={s} />
        ))}
      </ul>
    </div>
  );
}
