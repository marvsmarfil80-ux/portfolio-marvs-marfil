import { GitBranch } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function GithubCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/about#github"
      title="GitHub"
      description="@marvsmarfil80-ux"
      icon={GitBranch}
      className={className}
    >
      <p className="text-sm text-muted">My code and project repositories.</p>
    </BentoCard>
  );
}
