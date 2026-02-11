export const I18N_STORAGE_KEY = "site_lang";

export type SupportedLanguage = "zh" | "en";

export const i18n: Record<SupportedLanguage, Record<string, string>> = {
  zh: {
    "layout.skip_to_content": "跳转到主要内容",
    "header.home_aria": "返回首页",
    "header.brand_name": "徐萌昌",
    "header.brand_subtitle": "Mengchang Xu",
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
    "about.bio.p1":
      "徐萌昌是一名生物信息学研究者，工作于数学与生命科学交叉领域，当前研究重点包括拷贝数变异检测、单细胞测序分析和基因组数据稳健算法设计。",
    "about.bio.p2":
      "他毕业于南方医科大学生物学硕士专业，并获得东北大学应用统计学学士学位，形成了扎实的统计建模与生物医学数据分析基础。",
    "about.bio.p3":
      "近期论文工作包括由共同第一作者完成并被 Journal of Advanced Research 接收的稿件 <em>A medium throughput approach for single cell copy number variation sequencing towards efficient application in clinics</em>，并参与相关发明专利申请。",
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
    "not_found.back_home": "返回首页",
    "content.site.location": "中国广州",
    "content.site.currentRole.title": "生物学硕士毕业生",
    "content.site.currentRole.institution": "南方医科大学",
    "content.social.email.icon": "邮箱",
    "content.social.email.label": "邮箱",
    "content.social.github.icon": "GitHub",
    "content.social.github.label": "GitHub",
    "content.social.orcid.icon": "ORCID",
    "content.social.orcid.label": "ORCID",
    "content.research.cnv-detection.title": "拷贝数变异检测",
    "content.research.cnv-detection.summary":
      "围绕测序数据设计稳健 CNV 检测策略，重点提升在不同数据质量和覆盖深度下的灵敏度、特异度与稳定性。",
    "content.research.cnv-detection.keywords.0": "CNV",
    "content.research.cnv-detection.keywords.1": "单细胞测序",
    "content.research.cnv-detection.keywords.2": "NGS",
    "content.research.cnv-detection.keywords.3": "基因组学",
    "content.research.cnv-detection.methods.0": "- 基于峰值的信号分析",
    "content.research.cnv-detection.methods.1": "- 覆盖度归一化",
    "content.research.cnv-detection.methods.2": "- 多工具对比评测",
    "content.research.cnv-detection.applications.0": "- 肿瘤异质性研究",
    "content.research.cnv-detection.applications.1": "- 临床研究流程",
    "content.research.cnv-detection.applications.2": "- 个体化基因组画像",
    "content.research.probabilistic-modeling.title": "基因组信号概率建模",
    "content.research.probabilistic-modeling.summary":
      "应用并扩展 HMM、DP-GMM 等概率模型，提升 CNV 分段与状态推断的精度与鲁棒性。",
    "content.research.probabilistic-modeling.keywords.0": "HMM",
    "content.research.probabilistic-modeling.keywords.1": "DP-GMM",
    "content.research.probabilistic-modeling.keywords.2": "贝叶斯建模",
    "content.research.probabilistic-modeling.keywords.3": "状态推断",
    "content.research.probabilistic-modeling.methods.0": "- 隐状态解码",
    "content.research.probabilistic-modeling.methods.1": "- 非参数混合建模",
    "content.research.probabilistic-modeling.methods.2": "- 模型选择与正则化",
    "content.research.probabilistic-modeling.applications.0": "- 稳健 CNV 调用",
    "content.research.probabilistic-modeling.applications.1": "- 噪声感知分段",
    "content.research.probabilistic-modeling.applications.2": "- 自动化基因组解释",
    "content.research.precision-medicine.title": "精准医疗中的生物信息学",
    "content.research.precision-medicine.summary":
      "长期目标是将计算基因组学方法转化为可落地的临床流程，在算法严谨性与结果可解释性之间建立桥梁。",
    "content.research.precision-medicine.keywords.0": "生物信息学",
    "content.research.precision-medicine.keywords.1": "临床转化",
    "content.research.precision-medicine.keywords.2": "精准医疗",
    "content.research.precision-medicine.keywords.3": "可复现实验流程",
    "content.research.precision-medicine.methods.0": "- 流程工程化",
    "content.research.precision-medicine.methods.1": "- R/Python 分析",
    "content.research.precision-medicine.methods.2": "- 结果可视化与报告",
    "content.research.precision-medicine.applications.0": "- 临床就绪分析支持",
    "content.research.precision-medicine.applications.1": "- 患者特异性基因组洞察",
    "content.research.precision-medicine.applications.2": "- 研究到实践转化",
    "content.projects.dpgmm-cnv.title": "基于 NGS 数据的高精度 CNV 检测算法",
    "content.projects.dpgmm-cnv.period": "2024-至今",
    "content.projects.dpgmm-cnv.summary":
      "系统评测 Ginkgo、DeepCNA、SCOPE 等主流 CNV 工具，并开发基于 DP-GMM 的算法以提升检测准确率与鲁棒性。",
    "content.projects.dpgmm-cnv.tags.0": "CNV",
    "content.projects.dpgmm-cnv.tags.1": "DP-GMM",
    "content.projects.dpgmm-cnv.tags.2": "基因组学",
    "content.projects.dpgmm-cnv.tags.3": "算法",
    "content.projects.traceable-sccnv.title": "可追溯单细胞 CNV 测序分析流程",
    "content.projects.traceable-sccnv.period": "2022-2024",
    "content.projects.traceable-sccnv.summary":
      "构建从测序 reads 到 CNV 图谱输出的全流程，并开发结合局部密度与倍性信息的 CNV 峰识别方法。",
    "content.projects.traceable-sccnv.tags.0": "单细胞",
    "content.projects.traceable-sccnv.tags.1": "CNV",
    "content.projects.traceable-sccnv.tags.2": "流程",
    "content.projects.traceable-sccnv.tags.3": "生物信息学",
    "content.projects.cnv-r-toolkit.title": "CNV 分析与可视化 R 工具包",
    "content.projects.cnv-r-toolkit.period": "2023-至今",
    "content.projects.cnv-r-toolkit.summary":
      "实现并维护面向 CNV 调用、结果可视化和论文级图形产出的 R 工具链，支持持续科研迭代。",
    "content.projects.cnv-r-toolkit.tags.0": "R",
    "content.projects.cnv-r-toolkit.tags.1": "可视化",
    "content.projects.cnv-r-toolkit.tags.2": "可复现",
    "content.projects.cnv-r-toolkit.tags.3": "科学计算",
    "content.projects.market-analysis-competition.title": "全国市场调查与分析大赛项目",
    "content.projects.market-analysis-competition.period": "2020-2021",
    "content.projects.market-analysis-competition.summary":
      "在大规模调查数据中应用 PCA、SVM 与 Apriori 关联规则完成分类、模式挖掘与策略导向解读。",
    "content.projects.market-analysis-competition.tags.0": "统计",
    "content.projects.market-analysis-competition.tags.1": "PCA",
    "content.projects.market-analysis-competition.tags.2": "SVM",
    "content.projects.market-analysis-competition.tags.3": "Apriori",
    "content.projects.math-modeling-projects.title": "数学建模竞赛项目",
    "content.projects.math-modeling-projects.period": "2019-2022",
    "content.projects.math-modeling-projects.summary":
      "使用 CART、随机森林、BP 神经网络和最短路径算法解决多学科建模问题，强调模型设计与工程实现。",
    "content.projects.math-modeling-projects.tags.0": "数学建模",
    "content.projects.math-modeling-projects.tags.1": "机器学习",
    "content.projects.math-modeling-projects.tags.2": "优化",
    "content.projects.math-modeling-projects.tags.3": "算法",
    "content.news.2025-06.title": "获南方医科大学生物学硕士学位",
    "content.news.2025-06.description":
      "完成以 CNV 检测、基因组数据分析和跨学科统计建模为核心的生物信息学研究训练。",
    "content.news.2025-11.title": "共同第一作者论文被 Journal of Advanced Research 接收",
    "content.news.2025-11.description":
      "论文《A medium throughput approach for single cell copy number variation sequencing towards efficient application in clinics》已接收，负责流程开发、可视化和 CNV 算法实现。",
    "content.news.2025-10.title": "加入广州国家实验室苗智超课题组担任科研助理",
    "content.news.2025-10.description": "以科研助理身份加入课题组，开展 CNV 相关算法研究与生物信息学流程实现。",
    "content.news.2024-10.title": "参与 DNA 拷贝数检测发明专利申请",
    "content.news.2024-10.description": "参与基于密度曲线的 DNA 拷贝数检测方法设计与技术文档撰写。",
    "content.news.2024-03.title": "开发并维护 CNV 分析 R 工具包",
    "content.news.2024-03.description":
      "构建可复用的 CNV 调用与可视化工具链，支持持续课题中的论文级图形输出。",
    "content.news.2021-11.title": "获得全国数学与市场分析竞赛奖项",
    "content.news.2021-11.description":
      "在全国数学建模和市场调查分析竞赛中获一、二等奖等高水平奖项。",
    "content.education.smu-ms.degree": "生物学硕士",
    "content.education.smu-ms.institution": "南方医科大学（THE 排名 251-300）",
    "content.education.smu-ms.location": "中国广州",
    "content.education.smu-ms.startDate": "2022年9月",
    "content.education.smu-ms.endDate": "2025年6月",
    "content.education.smu-ms.highlights.0": "GPA：86.8/100",
    "content.education.smu-ms.highlights.1": "研究方向：生物信息学、基因组数据分析与 CNV 检测",
    "content.education.smu-ms.highlights.2": "为课题开发 CNV 分析流程、可视化图形及 R 工具链",
    "content.education.neu-bsc.degree": "应用统计学学士",
    "content.education.neu-bsc.institution": "东北大学（985 工程高校）",
    "content.education.neu-bsc.location": "中国沈阳",
    "content.education.neu-bsc.startDate": "2018年9月",
    "content.education.neu-bsc.endDate": "2022年6月",
    "content.education.neu-bsc.highlights.0": "GPA：89.6/100",
    "content.education.neu-bsc.highlights.1": "具备扎实的数学、概率与统计推断基础",
    "content.education.neu-bsc.highlights.2": "通过数学建模与数据分析竞赛积累丰富建模经验",
    "content.cv.researchExperience.smu-cnv-research.role": "研究员，CNV 算法开发",
    "content.cv.researchExperience.smu-cnv-research.institution": "南方医科大学",
    "content.cv.researchExperience.smu-cnv-research.location": "中国广州",
    "content.cv.researchExperience.smu-cnv-research.period": "2024-至今",
    "content.cv.researchExperience.smu-cnv-research.bullets.0":
      "在不同测序数据条件下评估主流 CNV 工具并定位鲁棒性瓶颈。",
    "content.cv.researchExperience.smu-cnv-research.bullets.1":
      "设计基于 DP-GMM 的 CNV 检测算法，提升分段精度与稳定性。",
    "content.cv.researchExperience.smu-cnv-research.bullets.2":
      "主导论文图形与版式关键可视化设计，支持发表级输出。",
    "content.cv.researchExperience.single-cell-workflow.role": "项目研究成员，单细胞 CNV 测序",
    "content.cv.researchExperience.single-cell-workflow.institution": "南方医科大学",
    "content.cv.researchExperience.single-cell-workflow.location": "中国广州",
    "content.cv.researchExperience.single-cell-workflow.period": "2022-2024",
    "content.cv.researchExperience.single-cell-workflow.bullets.0":
      "建立从测序 reads 到 CNV 图谱输出的标准化分析流程。",
    "content.cv.researchExperience.single-cell-workflow.bullets.1":
      "开发基于局部密度与倍性信息的 CNV 峰识别方法。",
    "content.cv.researchExperience.single-cell-workflow.bullets.2":
      "实现并维护用于算法执行与结果展示的 R 工具包。",
    "content.cv.researchExperience.competition-modeling.role": "建模与数据分析贡献者",
    "content.cv.researchExperience.competition-modeling.institution": "东北大学",
    "content.cv.researchExperience.competition-modeling.location": "中国沈阳",
    "content.cv.researchExperience.competition-modeling.period": "2019-2022",
    "content.cv.researchExperience.competition-modeling.bullets.0":
      "在竞赛项目中应用 PCA、SVM、Apriori、CART、随机森林与神经网络方法。",
    "content.cv.researchExperience.competition-modeling.bullets.1":
      "聚焦严格时间约束下的端到端模型设计、实现、解释与报告。",
    "content.cv.skillGroups.0.name": "编程",
    "content.cv.skillGroups.0.items.0": "R",
    "content.cv.skillGroups.0.items.1": "Python",
    "content.cv.skillGroups.0.items.2": "MATLAB",
    "content.cv.skillGroups.0.items.3": "MySQL",
    "content.cv.skillGroups.1.name": "统计与机器学习",
    "content.cv.skillGroups.1.items.0": "HMM",
    "content.cv.skillGroups.1.items.1": "DP-GMM",
    "content.cv.skillGroups.1.items.2": "PCA",
    "content.cv.skillGroups.1.items.3": "SVM",
    "content.cv.skillGroups.1.items.4": "随机森林",
    "content.cv.skillGroups.1.items.5": "神经网络",
    "content.cv.skillGroups.2.name": "生物信息学",
    "content.cv.skillGroups.2.items.0": "CNV 分析",
    "content.cv.skillGroups.2.items.1": "单细胞测序分析",
    "content.cv.skillGroups.2.items.2": "NGS 数据处理",
    "content.cv.skillGroups.2.items.3": "算法开发",
    "content.cv.skillGroups.3.name": "科研流程",
    "content.cv.skillGroups.3.items.0": "数据可视化",
    "content.cv.skillGroups.3.items.1": "图形设计",
    "content.cv.skillGroups.3.items.2": "科研写作支持",
    "content.cv.skillGroups.3.items.3": "可复现分析流程",
    "content.cv.awards.0.title": "优秀毕业生与一等奖学业奖学金",
    "content.cv.awards.0.date": "南方医科大学，2022-2025",
    "content.cv.awards.0.note": "同时获评优秀研究生/骨干学生等荣誉，并多次获得奖学金。",
    "content.cv.awards.1.title": "国家励志奖学金与优秀学生荣誉",
    "content.cv.awards.1.date": "东北大学，2018-2022",
    "content.cv.awards.1.note": "两次获国家励志奖学金，并获优秀学生、优秀共产党员等荣誉。",
    "content.cv.awards.2.title": "全国竞赛奖项（数学与市场分析）",
    "content.cv.awards.2.date": "2020-2021",
    "content.cv.awards.2.note": "在全国数学建模与市场分析竞赛中获一、二等奖。"
  },
  en: {
    "layout.skip_to_content": "Skip to main content",
    "header.home_aria": "Go to homepage",
    "header.brand_name": "Mengchang Xu",
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
    "about.bio.p1":
      "Mengchang Xu is a bioinformatics researcher working at the intersection of mathematics and life science. Current work focuses on copy number variation detection, single-cell sequencing analysis, and robust algorithm design for genomic data.",
    "about.bio.p2":
      "He received an MSc in Biology from Southern Medical University and a BSc in Applied Statistics from Northeastern University, building a strong foundation in statistics, modeling, and data analysis for biomedical research.",
    "about.bio.p3":
      "Recent publication activity includes the co-first-author manuscript <em>A medium throughput approach for single cell copy number variation sequencing towards efficient application in clinics</em> accepted by Journal of Advanced Research. Work also includes participation in related invention patent applications.",
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
    "not_found.back_home": "Back to home",
    "content.site.location": "Guangzhou, China",
    "content.site.currentRole.title": "MSc Graduate in Biology",
    "content.site.currentRole.institution": "Southern Medical University",
    "content.social.email.icon": "Email",
    "content.social.email.label": "Email",
    "content.social.github.icon": "GitHub",
    "content.social.github.label": "GitHub",
    "content.social.orcid.icon": "ORCID",
    "content.social.orcid.label": "ORCID",
    "content.research.cnv-detection.title": "Copy Number Variation Detection",
    "content.research.cnv-detection.summary":
      "I design robust CNV detection strategies for sequencing data, with emphasis on improving sensitivity, specificity, and stability across varied data quality and coverage settings.",
    "content.research.cnv-detection.keywords.0": "CNV",
    "content.research.cnv-detection.keywords.1": "Single-cell sequencing",
    "content.research.cnv-detection.keywords.2": "NGS",
    "content.research.cnv-detection.keywords.3": "Genomics",
    "content.research.cnv-detection.methods.0": "- Peak-based signal analysis",
    "content.research.cnv-detection.methods.1": "- Coverage normalization",
    "content.research.cnv-detection.methods.2": "- Comparative tool benchmarking",
    "content.research.cnv-detection.applications.0": "- Tumor heterogeneity studies",
    "content.research.cnv-detection.applications.1": "- Clinical research pipelines",
    "content.research.cnv-detection.applications.2": "- Individual-level genomic profiling",
    "content.research.probabilistic-modeling.title": "Probabilistic Modeling for Genomic Signals",
    "content.research.probabilistic-modeling.summary":
      "I apply and extend probabilistic models such as hidden Markov models and Dirichlet process Gaussian mixture models to improve CNV segmentation and state inference.",
    "content.research.probabilistic-modeling.keywords.0": "HMM",
    "content.research.probabilistic-modeling.keywords.1": "DP-GMM",
    "content.research.probabilistic-modeling.keywords.2": "Bayesian modeling",
    "content.research.probabilistic-modeling.keywords.3": "State inference",
    "content.research.probabilistic-modeling.methods.0": "- Hidden-state decoding",
    "content.research.probabilistic-modeling.methods.1": "- Nonparametric mixture modeling",
    "content.research.probabilistic-modeling.methods.2": "- Model selection and regularization",
    "content.research.probabilistic-modeling.applications.0": "- Robust CNV calling",
    "content.research.probabilistic-modeling.applications.1": "- Noise-aware segmentation",
    "content.research.probabilistic-modeling.applications.2": "- Automated genome interpretation",
    "content.research.precision-medicine.title": "Bioinformatics for Precision Medicine",
    "content.research.precision-medicine.summary":
      "My long-term goal is to translate computational genomics methods into practical clinical workflows, linking algorithmic rigor with interpretable outputs for personalized medicine.",
    "content.research.precision-medicine.keywords.0": "Bioinformatics",
    "content.research.precision-medicine.keywords.1": "Clinical translation",
    "content.research.precision-medicine.keywords.2": "Precision medicine",
    "content.research.precision-medicine.keywords.3": "Reproducible workflows",
    "content.research.precision-medicine.methods.0": "- Pipeline engineering",
    "content.research.precision-medicine.methods.1": "- R/Python analytics",
    "content.research.precision-medicine.methods.2": "- Result visualization and reporting",
    "content.research.precision-medicine.applications.0": "- Clinical-ready analysis support",
    "content.research.precision-medicine.applications.1": "- Patient-specific genomic insights",
    "content.research.precision-medicine.applications.2": "- Research-to-practice transfer",
    "content.projects.dpgmm-cnv.title": "Accurate CNV Calling Algorithm from NGS Data",
    "content.projects.dpgmm-cnv.period": "2024-present",
    "content.projects.dpgmm-cnv.summary":
      "Systematically benchmarked mainstream CNV tools (including Ginkgo, DeepCNA, and SCOPE) and developed a DP-GMM-based algorithm that improves CNV detection accuracy and robustness.",
    "content.projects.dpgmm-cnv.tags.0": "CNV",
    "content.projects.dpgmm-cnv.tags.1": "DP-GMM",
    "content.projects.dpgmm-cnv.tags.2": "Genomics",
    "content.projects.dpgmm-cnv.tags.3": "Algorithm",
    "content.projects.traceable-sccnv.title": "Traceable Single-cell CNV Sequencing Workflow",
    "content.projects.traceable-sccnv.period": "2022-2024",
    "content.projects.traceable-sccnv.summary":
      "Built an end-to-end single-cell CNV analysis workflow and developed a peak detection method using local density and ploidy information for CNV identification.",
    "content.projects.traceable-sccnv.tags.0": "Single-cell",
    "content.projects.traceable-sccnv.tags.1": "CNV",
    "content.projects.traceable-sccnv.tags.2": "Pipeline",
    "content.projects.traceable-sccnv.tags.3": "Bioinformatics",
    "content.projects.cnv-r-toolkit.title": "R Toolkit for CNV Analysis and Visualization",
    "content.projects.cnv-r-toolkit.period": "2023-present",
    "content.projects.cnv-r-toolkit.summary":
      "Implemented and maintained an R analysis toolkit for algorithm execution, result visualization, figure generation, and manuscript-ready layout support.",
    "content.projects.cnv-r-toolkit.tags.0": "R",
    "content.projects.cnv-r-toolkit.tags.1": "Visualization",
    "content.projects.cnv-r-toolkit.tags.2": "Reproducibility",
    "content.projects.cnv-r-toolkit.tags.3": "Scientific Computing",
    "content.projects.market-analysis-competition.title": "National Market Survey and Analysis Competition",
    "content.projects.market-analysis-competition.period": "2020-2021",
    "content.projects.market-analysis-competition.summary":
      "Applied PCA, SVM, and Apriori association rules for classification, pattern discovery, and strategy-oriented interpretation in large-scale survey data.",
    "content.projects.market-analysis-competition.tags.0": "Statistics",
    "content.projects.market-analysis-competition.tags.1": "PCA",
    "content.projects.market-analysis-competition.tags.2": "SVM",
    "content.projects.market-analysis-competition.tags.3": "Apriori",
    "content.projects.math-modeling-projects.title": "Mathematical Modeling Competition Projects",
    "content.projects.math-modeling-projects.period": "2019-2022",
    "content.projects.math-modeling-projects.summary":
      "Solved multidisciplinary modeling problems using CART, random forest, BP neural networks, and graph shortest-path algorithms with a strong focus on model design and implementation.",
    "content.projects.math-modeling-projects.tags.0": "Mathematical Modeling",
    "content.projects.math-modeling-projects.tags.1": "Machine Learning",
    "content.projects.math-modeling-projects.tags.2": "Optimization",
    "content.projects.math-modeling-projects.tags.3": "Algorithms",
    "content.news.2025-06.title": "Received MSc degree in Biology from Southern Medical University",
    "content.news.2025-06.description":
      "Completed graduate training with a bioinformatics focus on CNV detection, genomic data analysis, and cross-disciplinary statistical modeling.",
    "content.news.2025-11.title": "Co-first author manuscript accepted by Journal of Advanced Research",
    "content.news.2025-11.description":
      "Accepted manuscript \"A medium throughput approach for single cell copy number variation sequencing towards efficient application in clinics\" with responsibilities in pipeline development, visualization, and CNV algorithm implementation.",
    "content.news.2025-10.title": "Joined Miao Zhichao Lab at Guangzhou National Laboratory as Research Assistant",
    "content.news.2025-10.description":
      "Joined the research group as a Research Assistant, focusing on CNV-related algorithm research and bioinformatics workflow implementation.",
    "content.news.2024-10.title": "Participated in invention patent application on DNA copy number detection",
    "content.news.2024-10.description":
      "Contributed to method design and technical documentation for a density-curve-based DNA copy number detection approach.",
    "content.news.2024-03.title": "Developed and maintained R package for CNV analysis",
    "content.news.2024-03.description":
      "Built reusable R tooling for CNV calling, visualization, and publication-quality figure generation across ongoing research projects.",
    "content.news.2021-11.title": "Awards in national math and market analysis competitions",
    "content.news.2021-11.description":
      "Won high-level prizes including first/second-class results in national mathematical and market analysis competitions.",
    "content.education.smu-ms.degree": "Master of Science in Biology",
    "content.education.smu-ms.institution": "Southern Medical University (Times Higher Education 251-300)",
    "content.education.smu-ms.location": "Guangzhou, China",
    "content.education.smu-ms.startDate": "September 2022",
    "content.education.smu-ms.endDate": "June 2025",
    "content.education.smu-ms.highlights.0": "GPA: 86.8/100",
    "content.education.smu-ms.highlights.1": "Research focus: bioinformatics, genomic data analysis, and CNV detection",
    "content.education.smu-ms.highlights.2": "Developed CNV analysis workflows, visualization figures, and R tooling for research projects",
    "content.education.neu-bsc.degree": "Bachelor of Science in Applied Statistics",
    "content.education.neu-bsc.institution": "Northeastern University (Project 985 University)",
    "content.education.neu-bsc.location": "Shenyang, China",
    "content.education.neu-bsc.startDate": "September 2018",
    "content.education.neu-bsc.endDate": "June 2022",
    "content.education.neu-bsc.highlights.0": "GPA: 89.6/100",
    "content.education.neu-bsc.highlights.1": "Strong foundation in mathematics, probability, and statistical inference",
    "content.education.neu-bsc.highlights.2": "Extensive modeling experience from mathematical modeling and data analysis competitions",
    "content.cv.researchExperience.smu-cnv-research.role": "Researcher, CNV Algorithm Development",
    "content.cv.researchExperience.smu-cnv-research.institution": "Southern Medical University",
    "content.cv.researchExperience.smu-cnv-research.location": "Guangzhou, China",
    "content.cv.researchExperience.smu-cnv-research.period": "2024-present",
    "content.cv.researchExperience.smu-cnv-research.bullets.0":
      "Evaluated mainstream CNV tools across different sequencing data conditions and identified robustness bottlenecks.",
    "content.cv.researchExperience.smu-cnv-research.bullets.1":
      "Designed a DP-GMM-based CNV detection algorithm to improve segmentation accuracy and stability.",
    "content.cv.researchExperience.smu-cnv-research.bullets.2":
      "Led key visualization design for figures and manuscript layouts for publication-ready reporting.",
    "content.cv.researchExperience.single-cell-workflow.role": "Project Research Member, Single-cell CNV Sequencing",
    "content.cv.researchExperience.single-cell-workflow.institution": "Southern Medical University",
    "content.cv.researchExperience.single-cell-workflow.location": "Guangzhou, China",
    "content.cv.researchExperience.single-cell-workflow.period": "2022-2024",
    "content.cv.researchExperience.single-cell-workflow.bullets.0":
      "Built a standardized analysis workflow from sequencing reads to CNV profile output.",
    "content.cv.researchExperience.single-cell-workflow.bullets.1":
      "Developed a CNV peak-calling method based on local density and ploidy information.",
    "content.cv.researchExperience.single-cell-workflow.bullets.2":
      "Implemented and maintained an R toolkit for algorithm execution and result presentation.",
    "content.cv.researchExperience.competition-modeling.role": "Modeling and Data Analysis Contributor",
    "content.cv.researchExperience.competition-modeling.institution": "Northeastern University",
    "content.cv.researchExperience.competition-modeling.location": "Shenyang, China",
    "content.cv.researchExperience.competition-modeling.period": "2019-2022",
    "content.cv.researchExperience.competition-modeling.bullets.0":
      "Applied PCA, SVM, Apriori, CART, random forest, and neural network methods in competition projects.",
    "content.cv.researchExperience.competition-modeling.bullets.1":
      "Focused on end-to-end model design, implementation, interpretation, and reporting under strict timelines.",
    "content.cv.skillGroups.0.name": "Programming",
    "content.cv.skillGroups.0.items.0": "R",
    "content.cv.skillGroups.0.items.1": "Python",
    "content.cv.skillGroups.0.items.2": "MATLAB",
    "content.cv.skillGroups.0.items.3": "MySQL",
    "content.cv.skillGroups.1.name": "Statistics and Machine Learning",
    "content.cv.skillGroups.1.items.0": "HMM",
    "content.cv.skillGroups.1.items.1": "DP-GMM",
    "content.cv.skillGroups.1.items.2": "PCA",
    "content.cv.skillGroups.1.items.3": "SVM",
    "content.cv.skillGroups.1.items.4": "Random Forest",
    "content.cv.skillGroups.1.items.5": "Neural Networks",
    "content.cv.skillGroups.2.name": "Bioinformatics",
    "content.cv.skillGroups.2.items.0": "CNV analysis",
    "content.cv.skillGroups.2.items.1": "Single-cell sequencing analysis",
    "content.cv.skillGroups.2.items.2": "NGS data processing",
    "content.cv.skillGroups.2.items.3": "Algorithm development",
    "content.cv.skillGroups.3.name": "Research Workflow",
    "content.cv.skillGroups.3.items.0": "Data visualization",
    "content.cv.skillGroups.3.items.1": "Figure design",
    "content.cv.skillGroups.3.items.2": "Scientific writing support",
    "content.cv.skillGroups.3.items.3": "Reproducible analysis pipeline",
    "content.cv.awards.0.title": "Outstanding Graduate and First-Class Academic Scholarship",
    "content.cv.awards.0.date": "Southern Medical University, 2022-2025",
    "content.cv.awards.0.note": "Also recognized as Outstanding Postgraduate/Backbone student with multiple scholarship awards.",
    "content.cv.awards.1.title": "National Encouragement Scholarship and Outstanding Student Honors",
    "content.cv.awards.1.date": "Northeastern University, 2018-2022",
    "content.cv.awards.1.note":
      "Received National Encouragement Scholarship twice, plus Outstanding Student and Outstanding CPC Member honors.",
    "content.cv.awards.2.title": "National Competition Awards (Math and Market Analysis)",
    "content.cv.awards.2.date": "2020-2021",
    "content.cv.awards.2.note": "Includes first/second-class prizes in national mathematical and market analysis competitions."
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
    button.setAttribute("data-lang", lang);
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
