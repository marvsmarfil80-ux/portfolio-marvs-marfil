import { Briefcase, FolderKanban, House, Mail, User } from "lucide-react";

export const siteConfig = {
  name: "Marvs Marfil",
  email: "marvsmarfil80@gmail.com",
  githubUrl: "https://github.com/marvsmarfil80-ux",
  // IANA time zone used by the live PH time display (UTC+8).
  timeZone: "Asia/Manila",
  // Placeholder for now. Replace once the CV PDF is ready (Phase 5).
  cvHref: "#",
};

export const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Contact", href: "/contact", icon: Mail },
];
