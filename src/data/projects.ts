export type ProjectStatus = "Done" | "In Progress" | "Planned";

// file lives in public/images/projects/<slug>/<file>
export type Screenshot = { file: string; alt: string; caption: string };

export type ProjectStep = {
  title: string;
  description: string;
  status: "In Progress" | "Planned";
};

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  // Skill names from src/data/skills.ts (icons are reused).
  stack: string[];
  // Tech without a matching skill entry (shown as text chips).
  otherTech?: string[];
  typeTag?: string;
  overview?: string;
  problem?: string;
  features?: string[];
  built?: string[];
  limitations?: string[];
  links?: { github?: string; demo?: string };
  screenshots?: Screenshot[];
  steps?: ProjectStep[];
};

export const projects: Project[] = [
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    status: "Done",
    featured: true,
    summary: "An inventory system with a FastAPI + PostgreSQL backend, a frontend dashboard, and a Google Sheets + n8n integration.",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "REST APIs", "n8n", "Google Sheets integration", "React", "Vite"],
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    status: "Done",
    featured: true,
    summary: "A task manager web app with user authentication, built with Next.js, React, and TypeScript.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "JWT Auth"],
  },
  {
    slug: "messenger-ops-n8n-workflow",
    title: "Messenger Ops n8n Workflow",
    status: "In Progress",
    featured: true,
    summary: "An n8n workflow with an AI step.",
    stack: ["n8n"],
    otherTech: ["AI step"],
  },
  {
    slug: "ai-job-application-assistant",
    title: "AI Job Application Assistant",
    status: "In Progress",
    featured: true,
    summary: "A human-in-the-loop job application assistant: it finds and matches jobs and drafts materials, and I approve every application. It is not a mass auto-apply tool.",
    stack: ["n8n", "FastAPI", "PostgreSQL", "Next.js"],
    otherTech: ["AI API"],
    steps: [
      { title: "Collect jobs", description: "Collect jobs from permitted sources, APIs, or alerts.", status: "Planned" },
      { title: "AI job matcher", description: "Match each job against my skills and background.", status: "Planned" },
      { title: "Draft materials", description: "Draft a resume, cover letter, and answers from my real background only.", status: "Planned" },
      { title: "Review in dashboard", description: "I approve or reject each application in a dashboard.", status: "Planned" },
      { title: "Submission", description: "Automated only when a platform supports an authorized method. Otherwise I click Submit myself.", status: "Planned" },
    ],
  },
];
