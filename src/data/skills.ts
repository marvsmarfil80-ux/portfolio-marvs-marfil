import { Code2, Database, GitMerge, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  siCss,
  siDocker,
  siFastapi,
  siGit,
  siGooglesheets,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siN8n,
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siShadcnui,
  siSqlalchemy,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siUbuntu,
  siVite,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export type SkillCategory =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Tools & Automation";

export type SkillStatus = "demonstrated" | "learning";

export type Skill = {
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  // Projects that prove the skill. Links resolve to a project detail page when exactly one project is listed (see skillHref in src/lib/projects.ts).
  projects?: string[];
  brand?: SimpleIcon;
  fallback?: LucideIcon;
};

export const PROJECTS_HREF = "/projects";

const INV = "Inventory Management System";
const TASK = "Task Manager";
const ALL = "All projects";

// Single source of truth for the Home marquee and the About skills section.
// Demonstrated = used in a finished project.
// Add { status: "learning" } entries here when something new is being studied.
export const skills: Skill[] = [
  { name: "Python", category: "Backend", status: "demonstrated", projects: [INV], brand: siPython },
  { name: "FastAPI", category: "Backend", status: "demonstrated", projects: [INV], brand: siFastapi },
  { name: "PostgreSQL", category: "Database", status: "demonstrated", projects: [INV], brand: siPostgresql },
  { name: "REST APIs", category: "Backend", status: "demonstrated", projects: [INV], fallback: Globe },
  { name: "SQLAlchemy", category: "Backend", status: "demonstrated", projects: [INV], brand: siSqlalchemy },
  { name: "Alembic", category: "Backend", status: "demonstrated", projects: [INV], fallback: GitMerge },
  { name: "Docker", category: "Tools & Automation", status: "demonstrated", projects: [INV], brand: siDocker },
  { name: "React", category: "Frontend", status: "demonstrated", projects: [INV, TASK], brand: siReact },
  { name: "Next.js", category: "Frontend", status: "demonstrated", projects: [TASK], brand: siNextdotjs },
  { name: "TypeScript", category: "Frontend", status: "demonstrated", projects: [TASK], brand: siTypescript },
  { name: "Tailwind CSS", category: "Frontend", status: "demonstrated", projects: [TASK], brand: siTailwindcss },
  { name: "n8n", category: "Tools & Automation", status: "demonstrated", projects: [INV], brand: siN8n },
  { name: "Git/GitHub", category: "Tools & Automation", status: "demonstrated", projects: [ALL], brand: siGit },
  { name: "SQL", category: "Database", status: "demonstrated", projects: [INV], fallback: Database },
  { name: "SQLite", category: "Database", status: "demonstrated", projects: ["Backend API practice projects"], brand: siSqlite },
  { name: "JWT Auth", category: "Backend", status: "demonstrated", projects: [TASK], brand: siJsonwebtokens },
  { name: "Vite", category: "Frontend", status: "demonstrated", projects: [INV], brand: siVite },
  { name: "JavaScript", category: "Frontend", status: "demonstrated", projects: [INV, TASK], brand: siJavascript },
  { name: "HTML", category: "Frontend", status: "demonstrated", projects: [INV, TASK], brand: siHtml5 },
  { name: "CSS", category: "Frontend", status: "demonstrated", projects: [INV, TASK], brand: siCss },
  { name: "shadcn/ui", category: "Frontend", status: "demonstrated", projects: [INV, TASK], brand: siShadcnui },
  { name: "Google Sheets integration", category: "Tools & Automation", status: "demonstrated", projects: [INV], brand: siGooglesheets },
  { name: "WSL2 Ubuntu", category: "Tools & Automation", status: "demonstrated", projects: [ALL], brand: siUbuntu },
  { name: "VS Code", category: "Tools & Automation", status: "demonstrated", projects: [ALL], fallback: Code2 },
];

// Home marquee: the original 13 demonstrated skills, in two rows.
const rowOneNames = ["Python", "FastAPI", "PostgreSQL", "REST APIs", "SQLAlchemy", "Alembic", "Docker"];
const rowTwoNames = ["React", "Next.js", "TypeScript", "Tailwind CSS", "n8n", "Git/GitHub"];

function pick(names: string[]): Skill[] {
  return names.map((n) => {
    const found = skills.find((s) => s.name === n && s.status === "demonstrated");
    if (!found) throw new Error(`Marquee skill "${n}" is missing or not demonstrated.`);
    return found;
  });
}

export const marqueeRows: [Skill[], Skill[]] = [pick(rowOneNames), pick(rowTwoNames)];
