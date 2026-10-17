import type { ProjectStatus } from "@/data/projects";

const styles: Record<ProjectStatus, string> = {
  Done: "text-status-done",
  "In Progress": "text-status-progress",
  Planned: "text-status-planned",
};

export function StatusBadge({
  status,
  className = "text-xs",
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-medium ${styles[status]} ${className}`}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}
