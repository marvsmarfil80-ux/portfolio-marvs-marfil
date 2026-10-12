import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

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
          Placeholder section. Content will be added in Phase 3.
        </p>
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
