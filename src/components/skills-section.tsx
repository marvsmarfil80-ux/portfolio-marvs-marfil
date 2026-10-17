"use client";

import { useState } from "react";
import Link from "next/link";
import { skills } from "@/data/skills";
import type { Skill, SkillCategory } from "@/data/skills";
import { iconColor } from "@/lib/icon-color";
import { skillHref } from "@/lib/projects";

type Tab = "All" | SkillCategory;

const tabs: Tab[] = ["All", "Backend", "Frontend", "Database", "Tools & Automation"];

function countFor(tab: Tab) {
  return tab === "All" ? skills.length : skills.filter((s) => s.category === tab).length;
}

function SkillIcon({ skill }: { skill: Skill }) {
  const Fallback = skill.fallback;
  if (skill.brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="size-4 shrink-0"
        fill={iconColor(skill.brand.hex)}
        aria-hidden="true"
      >
        <path d={skill.brand.path} />
      </svg>
    );
  }
  return Fallback ? (
    <Fallback className="size-4 shrink-0 text-accent" aria-hidden="true" />
  ) : null;
}

const chipBase =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-background px-3.5 py-2 text-sm font-medium text-foreground";

function SkillChip({ skill }: { skill: Skill }) {
  if (skill.status === "learning") {
    return (
      <li>
        <span className={`${chipBase} border border-dashed border-border`}>
          <SkillIcon skill={skill} />
          {skill.name}
          <span className="rounded-full bg-card px-2 py-0.5 text-xs font-normal text-muted">
            Learning
          </span>
        </span>
      </li>
    );
  }

  const usedIn = skill.projects?.length ? `Used in: ${skill.projects.join(", ")}` : "";
  return (
    <li>
      <Link
        href={skillHref(skill)}
        title={usedIn}
        aria-label={usedIn ? `${skill.name}. ${usedIn}` : skill.name}
        className={`${chipBase} border border-border transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
      >
        <SkillIcon skill={skill} />
        {skill.name}
      </Link>
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
                  : "border-border bg-card text-foreground hover:border-accent"
              }`}
            >
              {tab}
              <span className={`text-xs ${isActive ? "opacity-80" : "text-muted"}`}>
                {countFor(tab)}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${active} skills`}>
        {visible.map((s) => (
          <SkillChip key={s.name} skill={s} />
        ))}
      </ul>
    </div>
  );
}
