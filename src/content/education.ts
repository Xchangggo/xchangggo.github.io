import type { EducationEntry } from "@/types/content";

export const education: EducationEntry[] = [
  {
    id: "smu-ms",
    degree: "Master of Science in Biology",
    institution: "Southern Medical University (Times Higher Education 251-300)",
    location: "Guangzhou, China",
    startDate: "September 2022",
    endDate: "June 2025",
    highlights: [
      "GPA: 86.8/100",
      "Research focus: bioinformatics, genomic data analysis, and CNV detection",
      "Developed CNV analysis workflows, visualization figures, and R tooling for research projects"
    ]
  },
  {
    id: "neu-bsc",
    degree: "Bachelor of Science in Applied Statistics",
    institution: "Northeastern University (Project 985 University)",
    location: "Shenyang, China",
    startDate: "September 2018",
    endDate: "June 2022",
    highlights: [
      "GPA: 89.6/100",
      "Strong foundation in mathematics, probability, and statistical inference",
      "Extensive modeling experience from mathematical modeling and data analysis competitions"
    ]
  }
];
