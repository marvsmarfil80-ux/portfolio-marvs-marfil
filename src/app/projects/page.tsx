import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Projects | Marvs Marfil" };

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      title="Projects"
      description="Placeholder page. Project cards and detail pages will be added in Phase 4."
    />
  );
}
