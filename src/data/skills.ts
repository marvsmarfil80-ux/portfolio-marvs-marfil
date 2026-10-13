import { Code2, Coffee, Database, GitMerge, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  siC,
  siCplusplus,
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
  | "Tools & Automation"
  | "Languages";

export type SkillStatus = "demonstrated" | "learning";

export type Skill = {
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  // Where the skill is proven. Points to /projects until Phase 4 adds detail pages.
  project?: string;
  brand?: SimpleIcon;
  fallback?: LucideIcon;
};

const PROJECTS = "/projects";

// Single source of truth for the Home marquee and the About skills section.
// Demonstrated = used in a finished project. Learning = no confirmed project evidence yet.
export const skills: Skill[] = [
  // Demonstrated
  { name: "Python", category: "Backend", status: "demonstrated", project: PROJECTS, brand: siPython },
  { name: "FastAPI", category: "Backend", status: "demonstrated", project: PROJECTS, brand: siFastapi },
  { name: "PostgreSQL", category: "Database", status: "demonstrated", project: PROJECTS, brand: siPostgresql },
  { name: "REST APIs", category: "Backend", status: "demonstrated", project: PROJECTS, fallback: Globe },
  { name: "SQLAlchemy", category: "Backend", status: "demonstrated", project: PROJECTS, brand: siSqlalchemy },
  { name: "Alembic", category: "Backend", status: "demonstrated", project: PROJECTS, fallback: GitMerge },
  { name: "Docker", category: "Tools & Automation", status: "demonstrated", project: PROJECTS, brand: siDocker },
  { name: "React", category: "Frontend", status: "demonstrated", project: PROJECTS, brand: siReact },
  { name: "Next.js", category: "Frontend", status: "demonstrated", project: PROJECTS, brand: siNextdotjs },
  { name: "TypeScript", category: "Frontend", status: "demonstrated", project: PROJECTS, brand: siTypescript },
  { name: "Tailwind CSS", category: "Frontend", status: "demonstrated", project: PROJECTS, brand: siTailwindcss },
  { name: "n8n", category: "Tools & Automation", status: "demonstrated", project: PROJECTS, brand: siN8n },
  { name: "Git/GitHub", category: "Tools & Automation", status: "demonstrated", project: PROJECTS, brand: siGit },

  // Currently Learning (default until project evidence is confirmed)
  { name: "Java", category: "Languages", status: "learning", fallback: Coffee },
  { name: "C", category: "Languages", status: "learning", brand: siC },
  { name: "C++", category: "Languages", status: "learning", brand: siCplusplus },
  { name: "SQL", category: "Database", status: "learning", fallback: Database },
  { name: "SQLite", category: "Database", status: "learning", brand: siSqlite },
  { name: "JavaScript", category: "Frontend", status: "learning", brand: siJavascript },
  { name: "HTML", category: "Frontend", status: "learning", brand: siHtml5 },
  { name: "CSS", category: "Frontend", status: "learning", brand: siCss },
  { name: "JWT Auth", category: "Backend", status: "learning", brand: siJsonwebtokens },
  { name: "Vite", category: "Frontend", status: "learning", brand: siVite },
  { name: "shadcn/ui", category: "Frontend", status: "learning", brand: siShadcnui },
  { name: "Google Sheets integration", category: "Tools & Automation", status: "learning", brand: siGooglesheets },
  { name: "WSL2 Ubuntu", category: "Tools & Automation", status: "learning", brand: siUbuntu },
  { name: "VS Code", category: "Tools & Automation", status: "learning", fallback: Code2 },
];

// Home marquee: demonstrated skills only, in two rows (same order as before).
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
