import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = { title: "Contact | Marvs Marfil" };

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact"
      description="Placeholder page. Email and links will be added in a later phase."
    />
  );
}
