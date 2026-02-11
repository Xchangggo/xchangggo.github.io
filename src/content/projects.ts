import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  {
    id: "dpgmm-cnv",
    title: "Accurate CNV Calling Algorithm from NGS Data",
    period: "2024-present",
    summary:
      "Systematically benchmarked mainstream CNV tools (including Ginkgo, DeepCNA, and SCOPE) and developed a DP-GMM-based algorithm that improves CNV detection accuracy and robustness.",
    tags: ["CNV", "DP-GMM", "Genomics", "Algorithm"],
    featured: true
  },
  {
    id: "traceable-sccnv",
    title: "Traceable Single-cell CNV Sequencing Workflow",
    period: "2022-2024",
    summary:
      "Built an end-to-end single-cell CNV analysis workflow and developed a peak detection method using local density and ploidy information for CNV identification.",
    tags: ["Single-cell", "CNV", "Pipeline", "Bioinformatics"],
    featured: true
  },
  {
    id: "cnv-r-toolkit",
    title: "R Toolkit for CNV Analysis and Visualization",
    period: "2023-present",
    summary:
      "Implemented and maintained an R analysis toolkit for algorithm execution, result visualization, figure generation, and manuscript-ready layout support.",
    tags: ["R", "Visualization", "Reproducibility", "Scientific Computing"],
    featured: true
  },
  {
    id: "market-analysis-competition",
    title: "National Market Survey and Analysis Competition",
    period: "2020-2021",
    summary:
      "Applied PCA, SVM, and Apriori association rules for classification, pattern discovery, and strategy-oriented interpretation in large-scale survey data.",
    tags: ["Statistics", "PCA", "SVM", "Apriori"]
  },
  {
    id: "math-modeling-projects",
    title: "Mathematical Modeling Competition Projects",
    period: "2019-2022",
    summary:
      "Solved multidisciplinary modeling problems using CART, random forest, BP neural networks, and graph shortest-path algorithms with a strong focus on model design and implementation.",
    tags: ["Mathematical Modeling", "Machine Learning", "Optimization", "Algorithms"]
  }
];
