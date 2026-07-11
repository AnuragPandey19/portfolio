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
    items: ["PyTorch", "scikit-learn", "XGBoost", "Pandas", "NumPy"]
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
    tagline: "AI-powered browser threat detection",
    description: "Production Chrome extension + FastAPI backend that scans every page in real time for phishing, XSS, cryptomining, and DOM anomalies. 4-model ML ensemble (RF, XGBoost, IF + Autoencoder hybrid, Logistic Regression) with Google Safe Browsing reputation pre-check.",
    highlights: [
      "Self-healing DB connection pool on Neon PostgreSQL — tolerates managed-DB auto-suspend and container restarts, closed a silent data-loss window",
      "Debugged 3 silent model failures caused by scikit-learn version drift between training and inference — models returning 0s for days behind HTTP 200",
      "Recalibrated ensemble thresholds on a 17-site live-traffic sample — cut FP WARN rate from ~65% to ~0% without losing real detections",
      "Layered app security: Origin allowlist, per-IP rate limiting, payload-shape validation, (client_ip, URL) dedup on the retraining feedback endpoint"
    ],
    tags: ["Python", "FastAPI", "XGBoost", "scikit-learn", "PostgreSQL", "Docker", "Chrome MV3"],
    repo: "https://chromewebstore.google.com/detail/surfvigil/glalkjnmdnblfobilebjkelocclcojcn",
    repoLabel: "⊕ Install",
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
    ],
    certificate: "https://drive.google.com/file/d/1dnLmlLQnebRUteq4pCKBmSOEl_MeDcXh/view?usp=drive_link"
  },
  {
    role: "AI/ML Intern",
    company: "Venture Launcher",
    period: "Jun 2025 – Jul 2025",
    bullets: [
      "Performed data analysis and preprocessing for an investor-startup matching system.",
      "Built a prototype ML model for matching relevance as a proof of concept for the founding team."
    ],
    certificate: "https://drive.google.com/file/d/1rFrpOeuswZyu8Mjjsq0ycmk39vlEiwMs/view?usp=drive_link"
  },
  {
    role: "Core Member — ACM & ACM-W Student Chapters",
    company: "UPES Dehradun",
    period: "2024 – Present",
    bullets: [
      "Program Head for ICPC Code Nexus — managed logistics and tech operations end-to-end.",
      "Awarded Certificate of Appreciation for execution and contribution."
    ],
    certificate: "https://drive.google.com/file/d/1KhfMolJqis18nsfTQcvlM-a1--dRSR-7/view?usp=drive_link"
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI/ML)",
    institution: "UPES, Dehradun",
    period: "Aug 2023 – May 2027",
    detail: "CGPA: 7.7 / 10 • Specialization in Artificial Intelligence & Machine Learning",
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
