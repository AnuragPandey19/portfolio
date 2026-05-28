// Structured content for Skills, Projects, Experience

export const SKILLS = [
  {
    category: "Languages",
    icon: "</>",
    items: ["Python", "Java", "JavaScript", "HTML", "SQL", "CSS"]
  },
  {
    category: "ML / Deep Learning",
    icon: "{ }",
    items: ["PyTorch", "scikit-learn", "XGBoost", "Pandas", "NumPy", "ONNX Runtime"]
  },
  {
    category: "Backend & Databases",
    icon: "[ ]",
    items: ["FastAPI", "Flask", "REST APIs", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Platforms",
    icon: "( )",
    items: ["Git / GitHub", "Docker", "Hugging Face", "Chrome Extension APIs (Manifest V3)"]
  },
  {
    category: "Core Concepts",
    icon: "λ",
    items: ["Data Structures", "Algorithms", "OOP", "Version Control", "Model Deployment", "Feature Engineering"]
  }
];

export const PROJECTS = [
  {
    key: "surfvigil",
    name: "SurfVigil",
    tagline: "Real-time browser threat detection",
    description: "Chrome extension + FastAPI backend that flags malicious web pages in real time using ML models running in parallel.",
    highlights: [
      "4 threat-specific models — XSS, phishing, anomalies, cryptomining",
      "~115 ms end-to-end inference latency",
      "SHAP-based explainability for Allow / Warn / Block decisions"
    ],
    tags: ["Python", "FastAPI", "XGBoost", "ONNX", "PostgreSQL", "Chrome MV3"],
    repo: "https://github.com/AnuragPandey19/SurfVigil",
    demo: "https://surfvigil.com/"
  },
  {
    key: "smart-city",
    name: "Smart City Guide",
    tagline: "Java Swing desktop application",
    description: "Java Swing desktop app covering tourism, transport, and city info for 20 cities — shipped as a single Windows installer.",
    highlights: [
      "4-layer architecture backed by a 7-table MySQL schema",
      "PBKDF2-HMAC-SHA256 authentication (120K iterations, per-record salt)",
      "Self-bootstrapping first-run flow + bundled JRE via jpackage"
    ],
    tags: ["Java", "Swing", "JDBC", "MySQL", "jpackage"],
    repo: "https://github.com/AnuragPandey19/Smart-City-Application-",
    demo: "https://github.com/AnuragPandey19/Smart-City-Application-/releases/tag/v1.0"
  },
  {
    key: "rice-leaf",
    name: "Rice Leaf Disease Detector",
    tagline: "Two-stage vision ensemble for crop disease diagnosis",
    description: "Two-stage computer vision ensemble that diagnoses rice leaf disease and refines bacterial subtypes.",
    highlights: [
      "Stage 1 (3 CNNs) — 7-class triage at 96.68% accuracy",
      "Stage 2 (ViT + ConvNeXt) — bacterial subtypes at 98.18%",
      "Deployed on Hugging Face Spaces with sub-2s response"
    ],
    tags: ["PyTorch", "Flask", "ViT", "ConvNeXt", "Hugging Face", "Docker"],
    repo: "https://github.com/AnuragPandey19/Rice-Disease-Detector",
    demo: "https://undebuggedbit-rice-leaf-disease-detector.hf.space/"
  }
];

export const EXPERIENCE = [
  {
    role: "AI/ML Intern",
    company: "Notebrain Software & Services Pvt. Ltd.",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Built and evaluated ML models for sports outcome prediction integrated into a web application.",
      "Owned the end-to-end pipeline: data preprocessing, feature engineering, model training, validation.",
      "Cleaned and annotated datasets across sources — handled missing values, inconsistencies, class imbalance.",
      "Iterated on algorithm tuning in an agile workflow, contributing to measurable accuracy gains."
    ]
  },
  {
    role: "AI/ML Intern",
    company: "Venture Launcher",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Performed data analysis and preprocessing for an investor-startup matching system.",
      "Built a prototype ML model for matching relevance as a proof of concept for the founding team."
    ]
  },
  {
    role: "Core Member — ACM & ACM-W Student Chapters",
    company: "UPES Dehradun",
    period: "2024 – Present",
    bullets: [
      "Program Head for ICPC Code Nexus — managed logistics and tech operations end-to-end.",
      "Awarded Certificate of Appreciation for execution and contribution."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML)",
    institution: "UPES, Dehradun",
    period: "Aug 2023 – May 2027",
    detail: "CGPA: 7.5 / 10 • Specialization in Artificial Intelligence & Machine Learning",
    highlights: [
      "Core curriculum: DSA, OOP, DBMS, OS, Computer Networks, Machine Learning.",
      "Active in UPES ACM and ACM-W student chapters."
    ]
  }
];

export const FAST_FACTS = [
  { label: "Name",       value: "Anurag Pandey" },
  { label: "Role",       value: "AI/ML Engineer" },
  { label: "Education",  value: "B.Tech CSE (AI/ML)" },
  { label: "University", value: "UPES Dehradun" },
  { label: "Location",   value: "Dehradun, India" },
  { label: "Languages",  value: "Python, Java, JavaScript" },
  { label: "Focus",      value: "ML Systems, Backend APIs" },
  { label: "Status",     value: "Open to internships — 2027 batch" }
];

export const SOCIAL = {
  github: "https://github.com/AnuragPandey19",
  linkedin: "https://www.linkedin.com/in/anurag-pandey-154259280/",
  emailPrimary: "anuragpandeygct@gmail.com",
  emailSecondary: "Anurag.120453@stu.upes.ac.in",
  phone: "+91 9580765051",
  location: "Dehradun, India"
};
