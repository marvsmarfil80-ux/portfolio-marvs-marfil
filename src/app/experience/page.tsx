import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Experience | Marvs Marfil" };

export default function ExperiencePage() {
  return (
    <>
      <PagePlaceholder
        title="Experience"
        description="Placeholder page. The timeline and Training & Certifications will be added in Phase 3."
      />
      <section id="training" className="mt-8 scroll-mt-6">
        <h2 className="text-lg font-semibold text-foreground">
          Training & Certifications
        </h2>
        <p className="mt-2 text-sm text-muted">
          Placeholder section. Content will be added in Phase 3.
        </p>
      </section>
    </>
  );
}
