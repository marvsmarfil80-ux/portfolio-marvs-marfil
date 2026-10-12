import { Code2 } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

// Demonstrated skills only.
export const demonstratedSkills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "REST APIs",
  "SQLAlchemy",
  "Alembic",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "n8n",
  "Docker",
  "Git/GitHub",
];

export function SkillsCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/about#skills"
      title="Skills & Tools"
      description="Backend, frontend, and automation tools."
      icon={Code2}
      className={className}
    >
      <ul className="flex flex-wrap justify-center gap-2" aria-label="Skills">
        {demonstratedSkills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
