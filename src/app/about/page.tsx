import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = { title: "About | Marvs Marfil" };

export default function AboutPage() {
  return (
    <>
      <PagePlaceholder
        title="About"
        description="Placeholder page. Background, Skills, and GitHub will be added in Phase 3."
      />
      <section id="skills" className="mt-8 scroll-mt-6">
        <h2 className="text-lg font-semibold text-foreground">Skills & Tools</h2>
        <p className="mt-2 text-sm text-muted">
          Tools I have used in my projects. Select a skill to see the projects.
        </p>
        <SkillsSection />
      </section>
      <section id="github" className="mt-8 scroll-mt-6">
        <h2 className="text-lg font-semibold text-foreground">GitHub</h2>
        <p className="mt-2 text-sm text-muted">
          Placeholder section. Content will be added in Phase 3.
        </p>
      </section>
    </>
  );
}
