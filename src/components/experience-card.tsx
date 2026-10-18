import { Briefcase } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function ExperienceCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/experience"
      title="Experience"
      description="My work experience and training."
      icon={Briefcase}
      className={className}
    />
  );
}
