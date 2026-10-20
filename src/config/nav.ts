import { Briefcase, FolderKanban, House, Mail, User } from "lucide-react";

const cvMessage =
  "Hello Marvs,\n\nI would like to request a copy of your CV. Thank you.\n";

// When public/cv/Marvs-Marfil-CV.pdf exists, change this one line to "/cv/Marvs-Marfil-CV.pdf".
const cvFileHref: string | null = null;

export const siteConfig = {
  name: "Marvs Marfil",
  siteUrl: "https://marvs-marfil.vercel.app",
  description:
    "Portfolio of Marvs Marfil: AI workflow automation with n8n, API projects with Python and FastAPI, and full-stack development. Open to remote opportunities.",
  // Keep false until launch. This single flag drives robots meta, robots.txt, and the sitemap.
  indexable: false,
  email: "marvsmarfil80@gmail.com",
  githubUrl: "https://github.com/marvsmarfil80-ux",
  // Add each URL when ready. A null value shows a "Link coming soon" card.
  facebookUrl: "https://www.facebook.com/share/1bAAyqqdWi/" as string | null,
  instagramUrl: "https://www.instagram.com/mrvsjqn" as string | null,
  upworkUrl: "https://www.upwork.com/freelancers/~01f603839f424ed12f" as string | null,
  linkedinUrl: "https://www.linkedin.com/in/marvs-marfil-36a032424" as string | null,
  // IANA time zone used by the live PH time display (UTC+8).
  timeZone: "Asia/Manila",
  // Request CV opens the Contact form (CV topic), or the PDF once cvFileHref is set.
  cvHref: cvFileHref ?? "/contact?topic=cv#request-cv",
  cvFileHref,
  cvMessage,
  cvLabel: "Request CV",
};

export const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Contact", href: "/contact", icon: Mail },
];
