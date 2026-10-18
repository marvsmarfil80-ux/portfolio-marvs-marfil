import Link from "next/link";
import Image from "next/image";
import { ImageOff, Pin } from "lucide-react";
import type { Project } from "@/data/projects";
import { getStackSkills } from "@/lib/projects";
import { TechIcons } from "@/components/tech-icons";

export function ProjectCard({ project }: { project: Project }) {
  const shot = project.screenshots?.[0];
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-video border-b border-border bg-background">
        {project.featured && (
          <span className="absolute right-0 top-0 z-10 inline-flex items-center gap-1.5 rounded-bl-lg bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            <Pin className="size-3.5" aria-hidden="true" />
            Featured
          </span>
        )}
        {shot ? (
          <Image
            src={`/images/projects/${project.slug}/${shot.file}`}
            alt={shot.alt}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-muted">
            <ImageOff className="size-6" aria-hidden="true" />
            <span className="text-xs">Screenshots coming soon</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">{project.title}</h3>
        <p className="text-sm leading-6 text-muted">{project.summary}</p>
        <div className="mt-auto pt-1">
          <TechIcons skills={getStackSkills(project)} />
        </div>
      </div>
    </Link>
  );
}
