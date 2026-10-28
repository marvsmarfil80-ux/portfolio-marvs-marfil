export type Certification = {
  slug: string;
  logo?: string;
  image: string;
  title: string;
  provider: string;
  providerFull: string;
  place: string;
  period: string;
  type: string;
  duration: string;
  overview: string;
  learned: { label: string; text: string }[];
  skills: string[];
};

export const certifications: Certification[] = [
  {
    slug: "digital-literacy",
    logo: "/images/certs/binan-logo.jpg",
    image: "/images/certs/digital-literacy-cert.jpg",
    title:
      "Digital Literacy Training on Office Productivity Tools (MS Word, MS Excel & MS PowerPoint) with Internet Media & Information Literacy",
    provider: "Tech4ED Center-Biñan",
    providerFull: "Tech4ED Center-Biñan, Barangay Poblacion, City of Biñan, Laguna",
    place: "Biñan City, Laguna, Philippines",
    period: "August 9 - 11, 2023",
    type: "Short training",
    duration: "3 days",
    overview:
      "Completed a short training program covering Microsoft Office productivity tools and Internet, Media, and Information Literacy. The training introduced essential digital skills for document preparation, spreadsheet use, presentations, and responsible use of digital information.",
    learned: [
      { label: "Microsoft Word", text: "Basic document creation, text formatting, and document organization." },
      { label: "Microsoft Excel", text: "Introduction to spreadsheets and organizing information in rows and columns." },
      { label: "Microsoft PowerPoint", text: "Basic presentation creation and slide formatting." },
      { label: "Digital Literacy", text: "Understanding how to access, evaluate, and use online information responsibly." },
      { label: "Information Management", text: "Recognizing the importance of organizing information clearly and accurately." },
      { label: "Productivity Skills", text: "Applying basic office tools to schoolwork, documentation, and administrative tasks." },
    ],
    skills: [
      "Document Formatting & Preparation",
      "Spreadsheet Organization",
      "Presentation Design",
      "Digital Information Management",
      "Internet Research & Information Literacy",
      "Microsoft Office Productivity Tools",
    ],
  },
];
