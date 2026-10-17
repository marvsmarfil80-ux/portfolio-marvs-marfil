import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getAdjacentProjects, getProject, getScreenshots, getStackSkills } from "@/lib/projects";
import { ScreenshotCarousel } from "@/components/screenshot-carousel";
import { ProjectSection } from "@/components/project-section";
import { StatusBadge } from "@/components/status-badge";
import { TechIcons } from "@/components/tech-icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return {
    title: project ? project.title : "Project",
    description: project
      ? `Details and current status of ${project.title}, a project by Marvs Marfil.`
      : "Project details by Marvs Marfil.",
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/90">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

const linkCls = "text-accent underline underline-offset-4 hover:no-underline";

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const stack = getStackSkills(project);
  const { prev, next } = getAdjacentProjects(project.slug);
  const { github, demo } = project.links ?? {};

  return (
    <>
      <div className="border-b border-dashed border-border pb-6">
        <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to projects
        </Link>
        <h1 className="mt-4 text-3xl font-semibold">{project.title}</h1>
        <div className="mt-3">
          <StatusBadge status={project.status} className="text-sm" />
        </div>
        <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
      </div>

      <section id="screenshots" aria-label="Screenshots" className="mt-10 scroll-mt-6 border-t border-border pt-10">
        <ScreenshotCarousel items={getScreenshots(project)} />
      </section>

      <ProjectSection id="overview" title="Project Overview" empty="Overview coming soon.">
        {project.overview ? <p className="text-sm leading-6 text-foreground/90">{project.overview}</p> : null}
      </ProjectSection>

      {project.steps ? (
        <ProjectSection id="how-it-works" title="How It Works">
          <ol className="space-y-3">
            {project.steps.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">{i + 1}. {step.title}</p>
                  <StatusBadge status={step.status} />
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </ProjectSection>
      ) : null}

      <ProjectSection id="problem" title="Problem" empty="Problem statement coming soon.">
        {project.problem ? <p className="text-sm leading-6 text-foreground/90">{project.problem}</p> : null}
      </ProjectSection>

      <ProjectSection id="features" title="Key Features" empty="Key features coming soon.">
        {project.features?.length ? <List items={project.features} /> : null}
      </ProjectSection>

      <ProjectSection id="built" title="What I Built" empty="Build details coming soon.">
        {project.built?.length ? <List items={project.built} /> : null}
      </ProjectSection>

      <ProjectSection id="tech-stack" title="Tech Stack">
        <TechIcons skills={stack} max={stack.length} />
        <p className="mt-3 text-sm text-muted">{stack.map((s) => s.name).join(", ")}</p>
        {project.otherTech?.length ? (
          <p className="mt-2 text-sm text-muted">Also: {project.otherTech.join(", ")}</p>
        ) : null}
      </ProjectSection>

      <ProjectSection id="limitations" title="Known Limitations" empty="Known limitations will be added when the project details are finalized.">
        {project.limitations?.length ? <List items={project.limitations} /> : null}
      </ProjectSection>

      <ProjectSection id="links" title="Links" empty="Links coming soon.">
        {github || demo ? (
          <ul className="space-y-2 text-sm">
            {github ? <li><a href={github} target="_blank" rel="noopener noreferrer" className={linkCls}>GitHub repository</a></li> : null}
            {demo ? <li><a href={demo} target="_blank" rel="noopener noreferrer" className={linkCls}>Demo video</a></li> : null}
          </ul>
        ) : null}
      </ProjectSection>

      <nav aria-label="Project navigation" className="mt-10 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
            <span className="flex items-center gap-1.5 text-xs text-muted"><ArrowLeft className="size-3.5" aria-hidden="true" />Previous</span>
            <span className="mt-1 block text-sm font-medium text-foreground">{prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="rounded-lg border border-border bg-card p-5 text-left transition-colors hover:border-accent sm:text-right">
            <span className="flex items-center gap-1.5 text-xs text-muted sm:justify-end">Next<ArrowRight className="size-3.5" aria-hidden="true" /></span>
            <span className="mt-1 block text-sm font-medium text-foreground">{next.title}</span>
          </Link>
        ) : null}
      </nav>
    </>
  );
}
