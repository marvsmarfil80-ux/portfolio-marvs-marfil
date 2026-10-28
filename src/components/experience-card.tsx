import Image from "next/image";
import { Briefcase } from "lucide-react";
import { BentoCard } from "@/components/bento-card";

const logos = [
  { src: "/images/orgs/dole-logo.jpg", name: "DOLE" },
  { src: "/images/orgs/deped-logo.jpg", name: "DepEd" },
  { src: "/images/certs/binan-logo.jpg", name: "Biñan" },
];

// Repeated twice so one group is wider than the narrow Home card.
const loop = [...logos, ...logos];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`xm-group${hidden ? " xm-dup" : ""}`}
      aria-label={hidden ? undefined : "Organizations"}
      aria-hidden={hidden || undefined}
    >
      {loop.map((l, i) => {
        const repeat = i >= logos.length;
        return (
          <li
            key={i}
            className={`size-14 shrink-0 overflow-hidden rounded-2xl bg-white${repeat ? " xm-rep" : ""}`}
          >
            <Image
              src={l.src}
              alt={hidden || repeat ? "" : `${l.name} logo`}
              width={80}
              height={80}
              className="size-full object-contain p-1"
            />
          </li>
        );
      })}
    </ul>
  );
}

const marqueeCss = `
@keyframes xm-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.xm-wrap { overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }
.xm-track { display: flex; width: max-content; animation: xm-scroll 34s linear infinite; }
.xm-group { display: flex; flex-shrink: 0; gap: 1.25rem; padding-right: 1.25rem; }
.group:hover .xm-track, .group:focus-visible .xm-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .xm-wrap { -webkit-mask-image: none; mask-image: none; }
  .xm-track { animation: none; width: 100%; }
  .xm-group { flex-wrap: wrap; justify-content: center; padding-right: 0; }
  .xm-dup, .xm-rep { display: none; }
}
`;

export function ExperienceCard({ className = "" }: { className?: string }) {
  return (
    <BentoCard
      href="/experience"
      title="Experience"
      description="My work experience and training."
      icon={Briefcase}
      className={className}
      centerChildren
    >
      <style>{marqueeCss}</style>
      <div className="xm-wrap">
        <div className="xm-track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </BentoCard>
  );
}
