export const I18N_STORAGE_KEY = "site_lang";

export type SupportedLanguage = "zh" | "en";

export const i18n: Record<SupportedLanguage, Record<string, string>> = {
  zh: {
    "layout.skip_to_content": "跳转到主要内容",
    "header.home_aria": "返回首页",
    "header.brand_name": "徐萌昌",
    "header.brand_subtitle": "Xu Mengchang",
    "nav.home": "首页",
    "nav.research": "研究",
    "nav.projects": "项目",
    "nav.cv": "简历",
    "nav.news": "动态",
    "nav.contact": "联系",
    "lang.toggle_aria": "切换语言",
    "footer.copy": "简洁学术作品集。",
    "home.profile": "学术档案",
    "home.tagline": "生物信息学研究者，聚焦 CNV 检测与基因组数据分析。",
    "home.intro":
      "我的研究位于数学与生命科学交叉领域，长期关注拷贝数变异检测、概率建模，以及面向精准医疗的稳健基因组分析流程。",
    "home.current": "当前：",
    "home.institution": "机构：",
    "home.location": "地点：",
    "home.email": "邮箱：",
    "home.research_focus": "研究重点",
    "home.selected_projects": "精选项目",
    "home.recent_news": "近期动态",
    "about.eyebrow": "关于",
    "about.title": "学术档案",
    "about.description": "具备应用统计与生物学训练背景，研究聚焦生物信息学、CNV 检测与临床导向基因组分析。",
    "about.bio": "个人简介",
    "about.research_interests": "研究兴趣",
    "about.education_timeline": "教育经历",
    "projects.eyebrow": "项目",
    "projects.title": "应用研究与工程实践",
    "projects.description": "涵盖 CNV 检测、生物信息学流程、R/Python 科学计算与统计建模竞赛的代表性工作。",
    "research.eyebrow": "研究",
    "research.title": "研究主题与方向",
    "research.description": "当前工作聚焦 CNV 检测算法、概率基因组建模，以及生物信息学方法向精准医疗流程的转化。",
    "research.keywords": "关键词",
    "research.methods": "方法",
    "research.applications": "应用",
    "research.refs_title": "论文与简历关联",
    "research.refs_desc":
      "研究板块由结构化内容驱动，支持与论文条目映射，便于扩展为独立论文页并保持与简历、项目信息一致。",
    "research.refs_link": "查看当前简历条目",
    "cv.eyebrow": "个人简历",
    "cv.title": "学术简历",
    "cv.description": "教育经历、CNV 相关科研经验、技术技能与代表性成果。",
    "cv.download": "下载 PDF 简历",
    "cv.education": "教育背景",
    "cv.research_experience": "科研经历",
    "cv.selected_projects": "精选项目",
    "cv.technical_skills": "技术技能",
    "cv.awards": "奖项荣誉",
    "news.eyebrow": "动态",
    "news.title": "时间线更新",
    "news.description": "学术里程碑、项目进展与近期成果。",
    "news.learn_more": "了解更多",
    "contact.eyebrow": "联系",
    "contact.title": "欢迎联系",
    "contact.description": "欢迎就生物信息学、计算基因组学与 CNV 算法开发开展科研合作与学术交流。",
    "contact.primary": "主要联系方式",
    "contact.primary_desc": "科研合作或学术咨询建议优先通过邮箱联系。",
    "contact.social": "社交与学术主页",
    "blog.eyebrow": "博客",
    "blog.title": "AI、数据与科研实践笔记",
    "blog.description": "用于记录技术思考与研究过程的极简写作空间。",
    "blog.empty": "暂无文章。可在 content/blog 中添加 Markdown 文件发布新内容。",
    "blog.min_read": "分钟阅读",
    "blog.post_not_found": "文章不存在",
    "not_found.title": "页面不存在",
    "not_found.desc": "你访问的页面不存在或已被移动。请返回首页继续浏览。",
    "not_found.back_home": "返回首页"
  },
  en: {
    "layout.skip_to_content": "Skip to main content",
    "header.home_aria": "Go to homepage",
    "header.brand_name": "Xu Mengchang",
    "header.brand_subtitle": "徐萌昌",
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.news": "News",
    "nav.contact": "Contact",
    "lang.toggle_aria": "Switch language",
    "footer.copy": "Simple academic portfolio.",
    "home.profile": "Academic Profile",
    "home.tagline": "Bioinformatics researcher focused on CNV detection and genomic data analysis.",
    "home.intro":
      "I work at the intersection of mathematics and life science, with a long-term focus on copy number variation detection, probabilistic modeling, and robust genomics workflows for precision medicine.",
    "home.current": "Current:",
    "home.institution": "Institution:",
    "home.location": "Location:",
    "home.email": "Email:",
    "home.research_focus": "Research Focus",
    "home.selected_projects": "Selected Projects",
    "home.recent_news": "Recent News",
    "about.eyebrow": "About",
    "about.title": "Academic profile",
    "about.description": "Training in applied statistics and biology, focused on bioinformatics, CNV detection, and clinical-oriented genomic analysis.",
    "about.bio": "Bio",
    "about.research_interests": "Research interests",
    "about.education_timeline": "Education timeline",
    "projects.eyebrow": "Projects",
    "projects.title": "Applied research and engineering",
    "projects.description": "Selected work in CNV detection, bioinformatics workflows, scientific computing with R/Python, and statistical modeling competitions.",
    "research.eyebrow": "Research",
    "research.title": "Themes and directions",
    "research.description":
      "Current work centers on CNV detection algorithms, probabilistic genomic modeling, and translation of bioinformatics methods into precision medicine workflows.",
    "research.keywords": "Keywords",
    "research.methods": "Methods",
    "research.applications": "Applications",
    "research.refs_title": "Publication and CV references",
    "research.refs_desc":
      "The research section is backed by structured content with publication mappings, making it easy to expand into dedicated publication pages and maintain consistency across CV and project sections.",
    "research.refs_link": "See current CV entries",
    "cv.eyebrow": "Curriculum Vitae",
    "cv.title": "Academic CV",
    "cv.description": "Education, CNV-focused research experience, technical skills, and selected achievements.",
    "cv.download": "Download PDF CV",
    "cv.education": "Education",
    "cv.research_experience": "Research experience",
    "cv.selected_projects": "Selected projects",
    "cv.technical_skills": "Technical skills",
    "cv.awards": "Awards",
    "news.eyebrow": "News",
    "news.title": "Chronological updates",
    "news.description": "Academic milestones, project updates, and recent achievements.",
    "news.learn_more": "Learn more",
    "contact.eyebrow": "Contact",
    "contact.title": "Get in touch",
    "contact.description":
      "Open to research collaboration and academic opportunities in bioinformatics, computational genomics, and CNV algorithm development.",
    "contact.primary": "Primary contact",
    "contact.primary_desc": "For research collaborations or academic inquiries, email is the preferred channel.",
    "contact.social": "Social and profile links",
    "blog.eyebrow": "Blog",
    "blog.title": "Notes on AI, data, and research practice",
    "blog.description": "A minimalist writing space for technical reflections and research process notes.",
    "blog.empty": "No posts yet. Add markdown files in content/blog to publish new entries.",
    "blog.min_read": "min read",
    "blog.post_not_found": "Post not found",
    "not_found.title": "Page not found",
    "not_found.desc": "The page you are looking for does not exist or may have moved. Return to the homepage to continue browsing.",
    "not_found.back_home": "Back to home"
  }
};

export function normalizeLanguage(value: string | null | undefined): SupportedLanguage {
  return value === "en" ? "en" : "zh";
}

export function getSavedLanguage(): SupportedLanguage {
  if (typeof window === "undefined") {
    return "zh";
  }
  return normalizeLanguage(window.localStorage.getItem(I18N_STORAGE_KEY));
}

export function setSavedLanguage(lang: SupportedLanguage) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(I18N_STORAGE_KEY, lang);
}

function setToggleButton(lang: SupportedLanguage) {
  const buttons = document.querySelectorAll<HTMLElement>("[data-lang-toggle]");
  buttons.forEach((button) => {
    button.textContent = lang === "zh" ? "EN" : "中";
    button.setAttribute("aria-label", i18n[lang]["lang.toggle_aria"] ?? "Switch language");
  });
}

export function applyLanguage(lang: SupportedLanguage) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const text = i18n[lang][key];
    if (typeof text === "string") {
      node.textContent = text;
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (!key) return;
    const text = i18n[lang][key];
    if (typeof text === "string") {
      node.innerHTML = text;
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria-label]").forEach((node) => {
    const key = node.dataset.i18nAriaLabel;
    if (!key) return;
    const text = i18n[lang][key];
    if (typeof text === "string") {
      node.setAttribute("aria-label", text);
    }
  });

  setToggleButton(lang);
}

export function toggleLanguage(current: SupportedLanguage): SupportedLanguage {
  return current === "zh" ? "en" : "zh";
}
