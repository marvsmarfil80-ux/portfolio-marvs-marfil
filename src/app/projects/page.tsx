import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Marvs Marfil, with the current status of each one.",
};

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  return (
    <>
      <div className="border-b border-dashed border-border pb-6">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-sm text-muted">
          Featured projects and their current status. Select a project to see its details.
        </p>
      </div>
      <section id="featured" aria-labelledby="featured-heading" className="mt-6 scroll-mt-6">
        <h2 id="featured-heading" className="sr-only">Featured projects</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
