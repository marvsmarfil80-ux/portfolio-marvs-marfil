import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "About | Marvs Marfil" };

export default function AboutPage() {
  return (
    <PagePlaceholder
      title="About"
      description="Placeholder page. Background, Skills, and GitHub will be added in Phase 3."
    />
  );
}
