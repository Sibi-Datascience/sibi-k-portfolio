// ─────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// This is the single source of truth for every project card and case-study
// page. Only real, provided information is used — unfilled fields are
// marked "[ADD HERE]" instead of being invented. Replace links + [ADD HERE]
// placeholders as your work evolves.
// ─────────────────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "healthcare-ai"
  | "machine-learning"
  | "generative-ai"
  | "insurance"
  | "data-engineering"
  | "business-intelligence";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLinks = {
  github: string;
  demo?: string;
};

export type CaseStudy = {
  overview: string;
  problem: string;
  objective: string;
  dataset: string;
  methodology: string[];
  architecture: string;
  dataProcessing: string;
  featureEngineering: string;
  modelApproach: string;
  evaluation: string;
  results: string[];
  keyDecisions: string[];
  deployment: string;
  challenges: string;
  futureImprovements: string;
};

export type Project = {
  slug: string;
  title: string;
  domain: string[];
  categories: ProjectCategory[];
  shortDescription: string;
  description: string;
  technologies: string[];
  skills: string[];
  positioning: string[];
  highlights: string[];
  metrics: ProjectMetric[];
  links: ProjectLinks;
  featured: boolean;
  caseStudy: CaseStudy;
};

const ADD_HERE = "[ADD HERE]";

export const projects: Project[] = [
  {
    slug: "ai-liver-tumor-detection",
    title: "AI-Based Liver Tumor Detection & Diagnostics",
    domain: ["Healthcare AI", "Medical Imaging", "Deep Learning"],
    categories: ["healthcare-ai", "machine-learning"],
    shortDescription:
      "End-to-end deep learning pipeline that classifies liver tumors from abdominal CT scans, from preprocessing to a live deployed application.",
    description:
      "Engineered an end-to-end deep learning computer vision pipeline to classify liver tumors from abdominal CT scans, covering the machine learning lifecycle from preprocessing through deployment.",
    technologies: ["Python", "TensorFlow", "Keras", "Computer Vision"],
    skills: [
      "Medical Imaging",
      "Deep Learning",
      "Computer Vision",
      "Image Preprocessing",
      "Model Development",
      "Model Deployment",
    ],
    positioning: [],
    highlights: [
      "Designed spatial normalization, contrast optimization, and class-balancing techniques to handle real-world and imperfect medical imaging data.",
      "Built an end-to-end computer vision workflow covering preprocessing, model development, evaluation, and deployment.",
      "Deployed the trained model as an interactive, publicly accessible application on Hugging Face Spaces, demonstrating end-to-end ownership from research to production.",
    ],
    metrics: [{ label: "Deployment", value: "Hugging Face Spaces" }],
    links: {
      github: "",
      demo: "https://huggingface.co/spaces/Sibikrish05/liver-tumor-detection",
    },
    featured: true,
    caseStudy: {
      overview:
        "An end-to-end deep learning computer vision pipeline built to classify liver tumors from abdominal CT scans, covering the full machine learning lifecycle from preprocessing through deployment.",
      problem: ADD_HERE,
      objective: ADD_HERE,
      dataset: ADD_HERE,
      methodology: [
        "Applied spatial normalization, contrast optimization, and class-balancing to handle real-world, imperfect medical imaging data.",
        "Built the computer vision workflow across preprocessing, model development, evaluation, and deployment stages.",
      ],
      architecture: ADD_HERE,
      dataProcessing:
        "Spatial normalization and contrast optimization were applied to standardize scans, alongside class-balancing techniques to address imbalance in the imaging dataset.",
      featureEngineering: ADD_HERE,
      modelApproach:
        "A deep learning computer vision model (TensorFlow / Keras) was developed to classify liver tumors from abdominal CT scans.",
      evaluation: ADD_HERE,
      results: [ADD_HERE],
      keyDecisions: [
        "Treated imperfect, real-world medical imaging data as the default case to design for, rather than assuming clean inputs.",
        "Took the project through to a publicly accessible deployment rather than stopping at a notebook-based model.",
      ],
      deployment:
        "Deployed the trained model as an interactive, publicly accessible application on Hugging Face Spaces, demonstrating end-to-end ownership from research to production.",
      challenges: ADD_HERE,
      futureImprovements: ADD_HERE,
    },
  },
  {
    slug: "fraudguard-ai-claims-intelligence",
    title: "FraudGuard AI: Claims Intelligence Platform",
    domain: ["Insurance Analytics", "Fraud Detection", "Explainable AI"],
    categories: ["insurance", "machine-learning"],
    shortDescription:
      "Ensemble machine learning platform for insurance claims fraud detection with leakage-safe validation and explainable, auditable outputs.",
    description:
      "Built an insurance claims fraud-detection platform using ensemble machine learning, explainable AI, and leakage-safe validation techniques.",
    technologies: ["XGBoost", "LightGBM", "CatBoost", "SHAP", "Gradio"],
    skills: [
      "Ensemble Learning",
      "Feature Engineering",
      "Imbalanced Classification",
      "Cross-Validation",
      "SMOTE",
      "Explainable AI",
      "Risk Analytics",
    ],
    positioning: [
      "Insurance",
      "Financial Risk",
      "Fraud Detection",
      "Regulated AI",
      "Consulting",
    ],
    highlights: [
      "Built an ensemble meta-learner achieving 0.8603 ROC-AUC and 85.88% recall using 5-fold stratified cross-validation.",
      "Engineered custom interaction features including claim_to_vehicle_ratio to improve fraud-risk signal extraction.",
      "Applied SMOTE strictly within training folds to prevent data leakage and ensure production-safe evaluation.",
      "Integrated SHAP for transparent and auditable fraud-risk explanations.",
    ],
    metrics: [
      { label: "ROC-AUC", value: "0.8603" },
      { label: "Recall", value: "85.88%" },
    ],
    links: {
      github: "ADD_GITHUB_URL",
      demo: "https://huggingface.co/spaces/Sibikrish03/insurance-fruad-detector",
    },
    featured: true,
    caseStudy: {
      overview:
        "An insurance claims fraud-detection platform combining ensemble machine learning, explainable AI, and leakage-safe validation techniques.",
      problem: ADD_HERE,
      objective: ADD_HERE,
      dataset: ADD_HERE,
      methodology: [
        "Trained an ensemble meta-learner across XGBoost, LightGBM, and CatBoost.",
        "Validated with 5-fold stratified cross-validation to obtain robust performance estimates.",
        "Applied SMOTE strictly within training folds only, to keep evaluation production-safe and leakage-free.",
      ],
      architecture: ADD_HERE,
      dataProcessing:
        "Class imbalance was addressed with SMOTE applied strictly within training folds, preventing information leakage into validation/test data.",
      featureEngineering:
        "Engineered custom interaction features, including claim_to_vehicle_ratio, to strengthen fraud-risk signal extraction beyond raw input fields.",
      modelApproach:
        "An ensemble meta-learner combining XGBoost, LightGBM, and CatBoost was used to model fraud risk.",
      evaluation:
        "Evaluated using 5-fold stratified cross-validation, achieving 0.8603 ROC-AUC and 85.88% recall.",
      results: [
        "0.8603 ROC-AUC across 5-fold stratified cross-validation.",
        "85.88% recall on the fraud class.",
      ],
      keyDecisions: [
        "Applied SMOTE inside training folds only, rather than before the train/test split, to keep the evaluation trustworthy and audit-ready.",
        "Prioritized recall alongside ROC-AUC, reflecting the higher cost of missed fraud cases in an insurance setting.",
        "Integrated SHAP so fraud-risk decisions remain explainable to non-technical stakeholders and auditors.",
      ],
      deployment: ADD_HERE,
      challenges: ADD_HERE,
      futureImprovements: ADD_HERE,
    },
  },
  {
    slug: "population-health-risk-stratification-portal",
    title: "Enterprise Population Health & Risk Stratification Portal",
    domain: ["Population Health", "Predictive Analytics", "Healthcare AI"],
    categories: ["healthcare-ai", "machine-learning", "business-intelligence"],
    shortDescription:
      "Leakage-resistant population health risk model with patient-aware data splitting, cohort filtering, and an explainable Streamlit application.",
    description:
      "Designed a leakage-resistant population health risk prediction system using patient-aware data splitting, cohort eligibility filtering, explainable machine learning, and an interactive Streamlit application.",
    technologies: ["Random Forest", "SHAP", "Streamlit"],
    skills: [
      "Healthcare Analytics",
      "Predictive Modeling",
      "Random Forest",
      "Data Leakage Prevention",
      "Cohort Selection",
      "Explainable AI",
      "Streamlit",
    ],
    positioning: [
      "Healthcare Data Governance",
      "Patient-level Data Handling",
      "Risk Stratification",
      "Predictive Analytics",
      "Clinical Analytics",
    ],
    highlights: [
      "Applied GroupShuffleSplit to correctly partition 99,343 real-world records, preventing patient/record leakage between training and testing datasets.",
      "Applied rule-based eligibility filtering to clean and validate the modeling cohort before training.",
      "Tuned the model toward high-recall risk detection, achieving 54% recall.",
      "Integrated SHAP-based explanations to improve model interpretability.",
      "Optimized Streamlit application performance using caching to reduce application latency.",
    ],
    metrics: [
      { label: "Records", value: "99,343" },
      { label: "Recall", value: "54%" },
    ],
    links: {
      github: "ADD_GITHUB_URL",
      demo: "https://huggingface.co/spaces/Sibikrish03/health-risk-portal",
    },
    featured: true,
    caseStudy: {
      overview:
        "A leakage-resistant population health risk prediction system combining patient-aware data splitting, cohort eligibility filtering, explainable machine learning, and an interactive Streamlit application.",
      problem: ADD_HERE,
      objective: ADD_HERE,
      dataset:
        "99,343 real-world records, partitioned with GroupShuffleSplit to prevent patient/record leakage between training and testing sets.",
      methodology: [
        "Partitioned data with GroupShuffleSplit at the patient/record group level rather than a naive random split.",
        "Applied rule-based eligibility filtering to clean and validate the modeling cohort before training.",
        "Tuned the model toward high-recall risk detection.",
        "Integrated SHAP explanations for interpretability, and cached the Streamlit app to reduce latency.",
      ],
      architecture: ADD_HERE,
      dataProcessing:
        "Rule-based eligibility filtering was applied to clean and validate the modeling cohort before training, and GroupShuffleSplit was used to correctly partition 99,343 records without leaking patient/record identity across the train/test split.",
      featureEngineering: ADD_HERE,
      modelApproach:
        "A Random Forest model was tuned toward high-recall risk detection, with SHAP integrated to explain individual and global risk predictions.",
      evaluation:
        "The model was evaluated with a focus on recall for risk detection, achieving 54% recall.",
      results: [
        "54% recall on the risk-detection task.",
        "99,343 records processed with leakage-safe, patient-aware partitioning.",
      ],
      keyDecisions: [
        "Chose GroupShuffleSplit over a standard random split specifically to prevent patient/record leakage — a common but easy-to-miss failure mode in healthcare modeling.",
        "Applied rule-based eligibility filtering before modeling, rather than treating the raw dataset as the eligible cohort.",
        "Added caching to the Streamlit app to keep the interactive experience responsive.",
      ],
      deployment:
        "Delivered as an interactive Streamlit application, with caching used to optimize performance and reduce latency.",
      challenges: ADD_HERE,
      futureImprovements: ADD_HERE,
    },
  },
  {
    slug: "multi-agent-clinical-trial-matcher",
    title: "Multi-Agent Clinical Trial Matcher",
    domain: ["Generative AI", "Clinical Research", "Healthcare Automation"],
    categories: ["generative-ai", "healthcare-ai"],
    shortDescription:
      "Autonomous multi-agent AI system that parses unstructured clinical case notes and matches patients to live clinical trials via ClinicalTrials.gov.",
    description:
      "Built an autonomous multi-agent AI system that parses unstructured clinical case notes and coordinates specialized agents to retrieve, evaluate, and score relevant clinical trials from a live external registry.",
    technologies: [
      "LangGraph",
      "Groq",
      "Llama-3.3-70B",
      "Pydantic v2",
      "Streamlit",
      "ClinicalTrials.gov API v2",
    ],
    skills: [
      "Generative AI",
      "Multi-Agent Systems",
      "LLMs",
      "API Integration",
      "Structured Outputs",
      "Pydantic",
      "Workflow Orchestration",
      "Healthcare AI",
    ],
    positioning: [
      "GenAI",
      "Automation",
      "Enterprise Knowledge Retrieval",
      "API Integration",
      "Healthcare Technology",
    ],
    highlights: [
      "Designed a three-agent architecture to process unstructured case information and coordinate clinical-trial matching.",
      "Integrated ClinicalTrials.gov API v2 to ground AI-generated results in live external registry data.",
      "Enforced strict schema validation between agents using Pydantic v2 to prevent malformed outputs and improve reliability.",
      "Used LangGraph to orchestrate the multi-agent workflow.",
    ],
    metrics: [{ label: "Registry", value: "ClinicalTrials.gov API v2" }],
    links: {
      github: "ADD_GITHUB_URL",
      demo: "https://clinical-trial-matcher-ukqqdlhjdvxtwhs3jbj4g8.streamlit.app/",
    },
    featured: false,
    caseStudy: {
      overview:
        "An autonomous multi-agent AI system that parses unstructured clinical case notes and coordinates specialized agents to retrieve, evaluate, and score relevant clinical trials from a live external registry.",
      problem: ADD_HERE,
      objective: ADD_HERE,
      dataset:
        "Live trial data retrieved directly from the ClinicalTrials.gov API v2 registry, rather than a static or offline dataset.",
      methodology: [
        "Designed a three-agent architecture to process unstructured case information and coordinate matching.",
        "Orchestrated the multi-agent workflow with LangGraph.",
        "Enforced schema validation between agents with Pydantic v2.",
        "Built an interactive Streamlit interface on top of the agent pipeline.",
      ],
      architecture:
        "A three-agent system orchestrated with LangGraph, using Llama-3.3-70B served via Groq, with Pydantic v2 enforcing strict schema validation on the data passed between agents.",
      dataProcessing:
        "Unstructured clinical case notes are parsed and normalized before being passed through the agent pipeline for trial matching.",
      featureEngineering: ADD_HERE,
      modelApproach:
        "Three specialized agents — coordinated via LangGraph and powered by Llama-3.3-70B on Groq — divide the work of interpreting case notes, retrieving candidate trials from ClinicalTrials.gov API v2, and scoring relevance.",
      evaluation: ADD_HERE,
      results: [ADD_HERE],
      keyDecisions: [
        "Enforced Pydantic v2 schema validation between every agent hand-off to prevent malformed outputs from propagating through the pipeline.",
        "Grounded the system in a live external registry (ClinicalTrials.gov API v2) instead of a static snapshot, keeping matches current.",
        "Split responsibilities across three specialized agents rather than a single monolithic prompt, improving reliability and traceability.",
      ],
      deployment: "Delivered as an interactive Streamlit application.",
      challenges: ADD_HERE,
      futureImprovements: ADD_HERE,
    },
  },
  {
    slug: "india-health-intelligence-dashboard",
    title: "India Health Intelligence Dashboard",
    domain: ["Data Engineering", "Business Intelligence", "Public Health Analytics"],
    categories: ["data-engineering", "business-intelligence"],
    shortDescription:
      "End-to-end health intelligence platform turning raw NFHS-5 government data into a normalized warehouse and interactive dashboard.",
    description:
      "Built an end-to-end health intelligence platform transforming raw government NFHS-5 data into a normalized analytical warehouse and interactive dashboard.",
    technologies: ["SQLite", "K-Means Clustering", "Plotly Dash", "Docker"],
    skills: [
      "ELT",
      "Data Engineering",
      "Data Warehousing",
      "Star Schema",
      "SQLite",
      "Clustering",
      "Business Intelligence",
      "Plotly Dash",
      "Docker",
    ],
    positioning: [
      "Data Engineering",
      "BI",
      "Analytics",
      "Data Warehousing",
      "Public Health Analytics",
      "Consulting Analytics",
    ],
    highlights: [
      "Built an ELT pipeline transforming raw NFHS-5 government data into a normalized Star Schema warehouse.",
      "Applied K-Means clustering to segment 20 Indian states into health-performance tiers.",
      "Developed an interactive analytics interface using Plotly Dash.",
      "Containerized the complete analytics application using Docker for reproducible and portable deployment.",
    ],
    metrics: [
      { label: "States Clustered", value: "20" },
      { label: "Deployment", value: "Docker" },
    ],
    links: {
      github: "ADD_GITHUB_URL",
      demo: "https://huggingface.co/spaces/Sibikrish03/healthcare-lakehouse-dashboard",
    },
    featured: false,
    caseStudy: {
      overview:
        "An end-to-end health intelligence platform transforming raw government NFHS-5 data into a normalized analytical warehouse and interactive dashboard.",
      problem: ADD_HERE,
      objective: ADD_HERE,
      dataset: "Raw government NFHS-5 (National Family Health Survey) data.",
      methodology: [
        "Built an ELT pipeline to transform raw NFHS-5 data into a normalized Star Schema warehouse.",
        "Applied K-Means clustering to segment 20 Indian states into health-performance tiers.",
        "Developed an interactive analytics interface with Plotly Dash.",
        "Containerized the application with Docker.",
      ],
      architecture:
        "An ELT pipeline loads raw NFHS-5 data into SQLite, models it into a Star Schema warehouse, and serves it through a Plotly Dash analytics interface, with the full application containerized in Docker.",
      dataProcessing:
        "Raw NFHS-5 government data was transformed through an ELT pipeline into a normalized Star Schema warehouse in SQLite.",
      featureEngineering: ADD_HERE,
      modelApproach:
        "K-Means clustering was applied to segment 20 Indian states into health-performance tiers based on warehouse metrics.",
      evaluation: ADD_HERE,
      results: ["20 Indian states segmented into health-performance tiers via K-Means clustering."],
      keyDecisions: [
        "Modeled the warehouse as a Star Schema to keep analytical queries fast and the data model maintainable.",
        "Containerized the full application with Docker for reproducible, portable deployment.",
      ],
      deployment:
        "Containerized the complete analytics application using Docker for reproducible and portable deployment.",
      challenges: ADD_HERE,
      futureImprovements: ADD_HERE,
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const filterCategories: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Healthcare AI", value: "healthcare-ai" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Generative AI", value: "generative-ai" },
  { label: "Insurance", value: "insurance" },
  { label: "Data Engineering", value: "data-engineering" },
  { label: "Business Intelligence", value: "business-intelligence" },
];
