import type { NavLink, SiteProfile } from "@/types/content";

export const siteProfile: SiteProfile = {
  name: "Mengchang Xu",
  bilingualName: "徐萌昌",
  tagline: "Bioinformatics researcher focused on CNV detection and genomic data analysis.",
  intro:
    "I work at the intersection of mathematics and life science, with a long-term focus on copy number variation detection, probabilistic modeling, and robust genomics workflows for precision medicine.",
  location: "Guangzhou, China",
  email: "xumengchang962@gmail.com",
  currentRole: {
    title: "MSc Graduate in Biology",
    institution: "Southern Medical University",
    location: "Guangzhou, China",
    startDate: "July 2022",
    summary:
      "Participating in multiple CNV-related projects and developing multi-model methods (including HMM and DP-GMM) to improve detection accuracy and stability in clinical-oriented single-cell sequencing analysis."
  }
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" }
];
