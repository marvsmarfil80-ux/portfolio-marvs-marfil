import { Briefcase, FolderKanban, House, Mail, User } from "lucide-react";

export const siteConfig = {
  name: "Marvs Marfil",
  // Placeholder for now. Replace once the CV PDF is ready.
  cvHref: "#",
};

export const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Contact", href: "/contact", icon: Mail },
];
