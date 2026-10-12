import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Experience | Marvs Marfil" };

export default function ExperiencePage() {
  return (
    <PagePlaceholder
      title="Experience"
      description="Placeholder page. The timeline and Training & Certifications will be added in Phase 3."
    />
  );
}
