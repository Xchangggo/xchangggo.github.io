import type { ResearchTheme } from "@/types/content";

export const researchThemes: ResearchTheme[] = [
  {
    id: "cnv-detection",
    title: "Copy Number Variation Detection",
    summary:
      "I design robust CNV detection strategies for sequencing data, with emphasis on improving sensitivity, specificity, and stability across varied data quality and coverage settings.",
    keywords: ["CNV", "Single-cell sequencing", "NGS", "Genomics"],
    methods: ["Peak-based signal analysis", "Coverage normalization", "Comparative tool benchmarking"],
    applications: ["Tumor heterogeneity studies", "Clinical research pipelines", "Individual-level genomic profiling"],
    publicationIds: ["jar-cnv-2024"]
  },
  {
    id: "probabilistic-modeling",
    title: "Probabilistic Modeling for Genomic Signals",
    summary:
      "I apply and extend probabilistic models such as hidden Markov models and Dirichlet process Gaussian mixture models to improve CNV segmentation and state inference.",
    keywords: ["HMM", "DP-GMM", "Bayesian modeling", "State inference"],
    methods: ["Hidden-state decoding", "Nonparametric mixture modeling", "Model selection and regularization"],
    applications: ["Robust CNV calling", "Noise-aware segmentation", "Automated genome interpretation"]
  },
  {
    id: "precision-medicine",
    title: "Bioinformatics for Precision Medicine",
    summary:
      "My long-term goal is to translate computational genomics methods into practical clinical workflows, linking algorithmic rigor with interpretable outputs for personalized medicine.",
    keywords: ["Bioinformatics", "Clinical translation", "Precision medicine", "Reproducible workflows"],
    methods: ["Pipeline engineering", "R/Python analytics", "Result visualization and reporting"],
    applications: ["Clinical-ready analysis support", "Patient-specific genomic insights", "Research-to-practice transfer"]
  }
];
