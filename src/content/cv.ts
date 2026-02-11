import type { AwardItem, ResearchExperience, SkillGroup } from "@/types/content";

export const researchExperience: ResearchExperience[] = [
  {
    id: "smu-cnv-research",
    role: "Researcher, CNV Algorithm Development",
    institution: "Southern Medical University",
    period: "2024-present",
    location: "Guangzhou, China",
    bullets: [
      "Evaluated mainstream CNV tools across different sequencing data conditions and identified robustness bottlenecks.",
      "Designed a DP-GMM-based CNV detection algorithm to improve segmentation accuracy and stability.",
      "Led key visualization design for figures and manuscript layouts for publication-ready reporting."
    ]
  },
  {
    id: "single-cell-workflow",
    role: "Project Research Member, Single-cell CNV Sequencing",
    institution: "Southern Medical University",
    period: "2022-2024",
    location: "Guangzhou, China",
    bullets: [
      "Built a standardized analysis workflow from sequencing reads to CNV profile output.",
      "Developed a CNV peak-calling method based on local density and ploidy information.",
      "Implemented and maintained an R toolkit for algorithm execution and result presentation."
    ]
  },
  {
    id: "competition-modeling",
    role: "Modeling and Data Analysis Contributor",
    institution: "Northeastern University",
    period: "2019-2022",
    location: "Shenyang, China",
    bullets: [
      "Applied PCA, SVM, Apriori, CART, random forest, and neural network methods in competition projects.",
      "Focused on end-to-end model design, implementation, interpretation, and reporting under strict timelines."
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Programming",
    items: ["R", "Python", "MATLAB", "MySQL"]
  },
  {
    name: "Statistics and Machine Learning",
    items: ["HMM", "DP-GMM", "PCA", "SVM", "Random Forest", "Neural Networks"]
  },
  {
    name: "Bioinformatics",
    items: ["CNV analysis", "Single-cell sequencing analysis", "NGS data processing", "Algorithm development"]
  },
  {
    name: "Research Workflow",
    items: ["Data visualization", "Figure design", "Scientific writing support", "Reproducible analysis pipeline"]
  }
];

export const awards: AwardItem[] = [
  {
    title: "Outstanding Graduate and First-Class Academic Scholarship",
    date: "Southern Medical University, 2022-2025",
    note: "Also recognized as Outstanding Postgraduate/Backbone student with multiple scholarship awards."
  },
  {
    title: "Outstanding Student and Outstanding CPC Member Honors",
    date: "Northeastern University, 2018-2022",
    note: "Recognized with Outstanding Student and Outstanding CPC Member honors."
  },
  {
    title: "National Competition Awards (Math and Market Analysis)",
    date: "2020-2021",
    note: "Includes first/second-class prizes in national mathematical and market analysis competitions."
  }
];
