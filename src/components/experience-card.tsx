import { Briefcase } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

export function ExperienceCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/experience"
      title="Experience"
      description="SPES (DOLE) Data Encoder and DepEd Work Immersion, with a focus on accuracy and attention to detail."
      icon={Briefcase}
      className={className}
    />
  );
}
