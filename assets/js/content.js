// Structured content for Skills, Projects, Experience

export const SKILLS = [
  {
    category: "Languages",
    icon: "</>",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    category: "ML / Deep Learning",
    icon: "{ }",
    items: ["PyTorch", "scikit-learn", "XGBoost", "ONNX Runtime", "pandas", "NumPy"]
  },
  {
    category: "Backend & Databases",
    icon: "[ ]",
    items: ["FastAPI", "Flask", "REST APIs", "MySQL", "PostgreSQL"]
  },
  {
    category: "Tools & Platforms",
    icon: "( )",
    items: ["Git / GitHub", "Docker", "Hugging Face", "Chrome Extension APIs (MV3)"]
  }
];

export const PROJECTS = [
  {
    key: "surfvigil",
    name: "SurfVigil",
    tagline: "Real-time browser threat detection",
    description: "Chrome extension + FastAPI backend running 4 threat-specific ML models in parallel: XSS (XGBoost, F1 0.975), phishing (ensemble, F1 0.995), anomaly detection (IF + autoencoder + RF, F1 0.991), and cryptomining (94.7% acc). Achieves ~115ms end-to-end latency with SHAP-based explainability for Allow/Warn/Block decisions.",
    tags: ["Python", "FastAPI", "XGBoost", "ONNX", "PostgreSQL", "Chrome MV3"],
    repo: "https://github.com/AnuragPandey19/SurfVigil",
    demo: "https://surfvigil.com/"
  },
  {
    key: "rice-leaf",
    name: "Rice Leaf Disease Detector",
    tagline: "Two-stage ensemble for crop disease diagnosis",
    description: "Two-stage ensemble of 5 deep models: Stage 1 (EfficientNet-B3, DenseNet-121, MobileNetV3) for 7-class triage at 96.68% accuracy; Stage 2 (ViT-Base, ConvNeXt-Tiny) for bacterial disease refinement at 98.18%. Cut inference time 16% by trimming from 6 models to 5. Deployed via PyTorch + Flask on Hugging Face Spaces with sub-2s response.",
    tags: ["PyTorch", "Flask", "ViT", "ConvNeXt", "Hugging Face", "Docker"],
    repo: "https://github.com/AnuragPandey19/Rice-Disease-Detector",
    demo: "https://undebuggedbit-rice-leaf-disease-detector.hf.space/"
  },
  {
    key: "smart-city",
    name: "Smart City Guide",
    tagline: "4-layer Java Swing desktop application",
    description: "4-layer Java Swing app (Presentation → Navigation → Services → Data Access) backed by a 7-table MySQL schema covering city profiles, tourism, transport, and user accounts across 20 cities. Secure auth via PBKDF2-HMAC-SHA256 (120K iterations, per-record salt). Self-bootstrapping schema; packaged as Windows installer with bundled JRE via jpackage.",
    tags: ["Java", "Swing", "JDBC", "MySQL", "jpackage"],
    repo: "https://github.com/AnuragPandey19/Smart-City-Application-",
    demo: "https://github.com/AnuragPandey19/Smart-City-Application-/releases/tag/v1.0"
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
