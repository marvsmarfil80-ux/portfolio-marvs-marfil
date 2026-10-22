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
      {/* Photo-only visual. Replace the placeholder with next/image once a photo is chosen. */}
      <div
        className="relative mx-auto -mb-10 mt-2 h-44 w-32"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rotate-6 rounded-2xl border border-foreground/25 bg-background" />
        <div className="absolute inset-0 -rotate-3 flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-foreground/30 bg-card text-xs text-muted shadow-lg">
          <User className="size-5" />
          Your photo
        </div>
      </div>
    </BentoCard>
  );
}
