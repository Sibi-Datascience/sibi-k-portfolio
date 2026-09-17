export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "R", "SQL"],
  },
  {
    category: "Data Analysis",
    skills: ["Pandas", "NumPy", "Excel", "Data Cleaning", "EDA"],
  },
  {
    category: "Machine Learning",
    skills: [
      "Scikit-learn",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "K-Means",
      "Classification",
      "Model Evaluation",
    ],
  },
  {
    category: "Deep Learning",
    skills: ["TensorFlow", "Keras", "CNN", "Computer Vision", "Medical Imaging"],
  },
  {
    category: "Generative AI",
    skills: [
      "LLMs",
      "LangGraph",
      "Groq",
      "Llama",
      "Pydantic",
      "Multi-Agent Systems",
      "API Integration",
    ],
  },
  {
    category: "Data Engineering",
    skills: ["ETL / ELT", "SQL", "SQLite", "Data Warehousing", "Star Schema", "Docker"],
  },
  {
    category: "Visualization",
    skills: ["Power BI", "Plotly", "Plotly Dash", "Streamlit", "Gradio"],
  },
  {
    category: "Healthcare",
    skills: [
      "Healthcare Analytics",
      "Population Health",
      "Clinical Data",
      "Clinical Trial Analytics",
      "Medical Imaging",
      "Healthcare AI",
    ],
  },
  {
    category: "Explainability",
    skills: ["SHAP"],
  },
];
