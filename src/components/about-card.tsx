import { User } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function AboutCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/about"
      title="About Me"
      description="Who I am and what I do."
      icon={User}
      className={className}
    >
      {/* Placeholder until the compressed photo is provided (next/image). */}
      <div className="mx-auto flex h-28 w-24 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border bg-background text-xs text-muted">
        <User className="size-5" aria-hidden="true" />
        Photo placeholder
      </div>
    </BentoCard>
  );
}
