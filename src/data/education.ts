export type Education = {
  school: string;
  program: string;
  period: string;
  place: string;
  highlights: string;
  logo: string;
};

// Order: current school first.
export const education: Education[] = [
  {
    school: "Polytechnic University of the Philippines (PUP)",
    program: "Bachelor of Science in Information Technology (BSIT)",
    period: "2025 - Present",
    place: "CITE Campus, Biñan City, Laguna, Philippines",
    highlights: "GPA: 1.43 · Dean's Lister",
    logo: "/images/education/pup-logo.jpg",
  },
  {
    school: "Lakeshore Colleges",
    program: "STEM Strand",
    period: "2019 - 2025",
    place: "Canlalay, Biñan City, Laguna, Philippines",
    highlights: "Average: 93 · With Honors",
    logo: "/images/education/lakeshore-logo.jpg",
  },
];
