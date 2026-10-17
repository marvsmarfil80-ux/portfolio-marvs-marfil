import { projects, type Project } from "@/data/projects";
import { PROJECTS_HREF, skills, type Skill } from "@/data/skills";

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

// Throws at build time if a stack name has no matching skill in skills.ts.
export function getStackSkills(project: Project): Skill[] {
  return project.stack.map((name) => {
    const found = skills.find((s) => s.name === name);
    if (!found) throw new Error(`Unknown skill "${name}" in project "${project.slug}".`);
    return found;
  });
}

// Previous/next wrap around the full project list.
export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const n = projects.length;
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] };
}

export function projectSlugForName(name: string): string | undefined {
  return projects.find((p) => p.title === name)?.slug;
}

export type ShotItem = { src: string; alt: string; caption: string };

export function getScreenshots(project: Project): ShotItem[] {
  return (project.screenshots ?? []).map((s) => ({
    src: `/images/projects/${project.slug}/${s.file}`,
    alt: s.alt,
    caption: s.caption,
  }));
}

// One mapped project -> its detail page. Several projects or none -> the list.
export function skillHref(skill: Skill): string {
  const names = skill.projects ?? [];
  if (names.length === 1) {
    const slug = projectSlugForName(names[0]);
    if (slug) return `/projects/${slug}`;
  }
  return PROJECTS_HREF;
}
