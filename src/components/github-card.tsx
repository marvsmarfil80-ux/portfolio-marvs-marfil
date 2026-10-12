import { GitBranch } from "lucide-react";
import { BentoCard } from "@/components/bento-card";
import { siteConfig } from "@/config/nav";

export function GithubCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/about#github"
      title="GitHub"
      description={siteConfig.githubUrl.replace("https://", "")}
      icon={GitBranch}
      className={className}
    >
      {/* Placeholder until the contribution graph screenshot is provided. */}
      <div className="flex h-24 w-full items-center justify-center rounded-xl border border-dashed border-border bg-background px-3 text-center text-xs text-muted">
        Placeholder: contribution graph screenshot goes here
      </div>
    </BentoCard>
  );
}
