export type ExperienceDetail = {
  responsibilities: string[];
  learned: string[];
  impact: string[];
};

export const experienceDetails: Record<string, ExperienceDetail> = {
  spes: {
    responsibilities: [
      "Encoded information into digital records as part of the Special Program for Employment of Students (SPES), a government employment program for students.",
      "Entered data into digital records while maintaining attention to accuracy and consistency.",
      "Organized encoded information to keep records structured and easy to review.",
      "Reviewed entered information to help minimize encoding errors.",
      "Followed assigned encoding tasks and completed data entry work according to the given instructions.",
      "Handled repetitive data entry tasks while maintaining focus and consistency.",
      "Applied basic computer skills to support daily encoding and recordkeeping activities.",
    ],
    learned: [
      "Improving typing accuracy and consistency when entering information into digital records.",
      "Developing attention to detail when handling data and reviewing encoded information.",
      "Organizing digital information systematically for easier access and review.",
      "Understanding the importance of data accuracy and consistency in recordkeeping.",
      "Managing repetitive tasks while maintaining work quality.",
      "Strengthening computer proficiency through practical, hands-on encoding experience.",
    ],
    impact: [
      "Supported data management activities through the encoding and organization of digital records.",
      "Contributed to maintaining structured and accessible information for recordkeeping purposes.",
      "Helped support consistent data entry by paying attention to accuracy and completeness.",
      "Applied practical computer and data entry skills in a real-world work environment.",
    ],
  },
  deped: {
    responsibilities: [
      "Encoded research-related information for teachers as part of the Department of Education (DepEd) work immersion program.",
      "Assisted in reviewing research data to check the accuracy and consistency of encoded information.",
      "Organized research-related data to support documentation and recordkeeping tasks.",
      "Checked encoded information against available references or source materials, when applicable.",
      "Followed instructions when handling research data and completing assigned encoding tasks.",
      "Supported teachers' research-related activities through data entry and information checking.",
      "Applied basic computer skills to assist with research documentation and administrative work.",
    ],
    learned: [
      "Understanding the importance of accurate data entry in research-related activities.",
      "Developing attention to detail when encoding and reviewing research information.",
      "Learning to check information carefully instead of relying solely on the initial encoding process.",
      "Recognizing the importance of consistency when handling research data and documentation.",
      "Improving organizational skills when working with structured information.",
      "Gaining practical exposure to administrative and research-support tasks in an educational environment.",
      "Strengthening computer proficiency through hands-on work immersion experience.",
    ],
    impact: [
      "Supported teachers' research-related activities by assisting with data encoding and checking.",
      "Contributed to the organization of research information for documentation purposes.",
      "Helped maintain the consistency of encoded data through careful review.",
      "Provided encoding and research-support assistance as part of the work immersion placement.",
      "Applied classroom knowledge and basic computer skills to practical administrative tasks.",
    ],
  },
};
