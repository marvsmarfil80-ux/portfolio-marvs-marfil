import { projects, type Project } from "@/data/projects";
import { skills, type Skill } from "@/data/skills";

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

// TEMPORARY test flag. Set to false (and delete public/images/projects/_dummy) before the commit.
export const SHOW_DUMMY_SCREENSHOTS = false;

export type ShotItem = { src: string; alt: string; caption: string };

export function getScreenshots(project: Project): ShotItem[] {
  if (project.screenshots?.length) {
    return project.screenshots.map((s) => ({
      src: `/images/projects/${project.slug}/${s.file}`,
      alt: s.alt,
      caption: s.caption,
    }));
  }
  if (!SHOW_DUMMY_SCREENSHOTS) return [];
  return [1, 2, 3].map((n) => ({
    src: `/images/projects/_dummy/shot-${n}.svg`,
    alt: `Temporary dummy image ${n} used to test the carousel`,
    caption: `Dummy caption ${n}. This is a temporary test image.`,
  }));
}
