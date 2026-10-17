import { Briefcase, FolderKanban, House, Mail, User } from "lucide-react";

const cvSubject = "CV request";
const cvMessage =
  "Hello Marvs,\n\nI would like to request a copy of your CV. Thank you.\n";

const cvMailto =
  "mailto:marvsmarfil80@gmail.com?subject=" +
  encodeURIComponent(cvSubject) +
  "&body=" +
  encodeURIComponent(cvMessage);

export const siteConfig = {
  name: "Marvs Marfil",
  email: "marvsmarfil80@gmail.com",
  githubUrl: "https://github.com/marvsmarfil80-ux",
  // Add each URL when ready. A null value shows a "Link coming soon" card.
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  upworkUrl: null as string | null,
  linkedinUrl: null as string | null,
  // IANA time zone used by the live PH time display (UTC+8).
  timeZone: "Asia/Manila",
  // Request CV links to the Contact page card.
  cvHref: "/contact?topic=cv#request-cv",
  // Until a PDF exists this stays null and the card opens an email draft.
  // When public/cv/Marvs-Marfil-CV.pdf exists, change this one line to "/cv/Marvs-Marfil-CV.pdf".
  cvFileHref: null as string | null,
  cvMailto,
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
