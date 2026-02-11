import type { NewsItem } from "@/types/content";

const newsItems: NewsItem[] = [
  {
    date: "2025-06",
    title: "Received MSc degree in Biology from Southern Medical University",
    description:
      "Completed graduate training with a bioinformatics focus on CNV detection, genomic data analysis, and cross-disciplinary statistical modeling."
  },
  {
    date: "2025-11",
    title: "Co-first author manuscript accepted by Journal of Advanced Research",
    description:
      "Accepted manuscript " +
      "\"A medium throughput approach for single cell copy number variation sequencing towards efficient application in clinics\" " +
      "with responsibilities in pipeline development, visualization, and CNV algorithm implementation."
  },
  {
    date: "2025-10",
    title: "Joined Miao Zhichao Lab at Guangzhou National Laboratory as Research Assistant",
    description:
      "Worked as a Research Assistant with research directions in AI agents, RNA biology, and single-cell analysis for lung development."
  },
  {
    date: "2024-10",
    title: "Participated in invention patent application on DNA copy number detection",
    description: "Contributed to method design and technical documentation for a density-curve-based DNA copy number detection approach."
  },
  {
    date: "2024-03",
    title: "Developed and maintained R package for CNV analysis",
    description:
      "Built reusable R tooling for CNV calling, visualization, and publication-quality figure generation across ongoing research projects."
  },
  {
    date: "2021-11",
    title: "Awards in national math and market analysis competitions",
    description:
      "Won high-level prizes including first/second-class results in national mathematical and market analysis competitions."
  }
];

export const news: NewsItem[] = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
