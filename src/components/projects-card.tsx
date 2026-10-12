import { FolderKanban } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

type Status = "Done" | "In Progress";

const statusStyles: Record<Status, string> = {
  Done: "text-status-done",
  "In Progress": "text-status-progress",
};

const featured: { name: string; status: Status }[] = [
  { name: "Inventory Management System", status: "Done" },
  { name: "Task Manager", status: "Done" },
  { name: "Messenger Ops n8n Workflow", status: "In Progress" },
  { name: "AI Job Application Assistant", status: "In Progress" },
];

export function ProjectsCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/projects"
      title="Projects Showcase"
      description="Featured projects and their current status."
      icon={FolderKanban}
      layout="split"
      className={className}
    >
      <ul className="space-y-2">
        {featured.map((project) => (
          <li
            key={project.name}
            className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border bg-background px-3 py-2.5"
          >
            <span className="text-sm font-medium text-foreground">
              {project.name}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-medium ${statusStyles[project.status]}`}
            >
              <span
                className="size-1.5 rounded-full bg-current"
                aria-hidden="true"
              />
              {project.status}
            </span>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
