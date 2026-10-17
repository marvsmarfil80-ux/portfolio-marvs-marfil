import { FolderKanban } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function ProjectsCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/projects"
      title="Projects Showcase"
      icon={FolderKanban}
      layout="split"
      className={className}
    />
  );
}
