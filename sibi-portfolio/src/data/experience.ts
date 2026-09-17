// Add further roles below by duplicating an object. Only real, documented
// experience belongs here — do not add fabricated positions.

export type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    organization: "Madras Diabetes Research Foundation (MDRF)",
    role: "Data Science Intern — Health Data Engineering & Analytics",
    period: "Mar 2026 – Jul 2026",
    responsibilities: [
      "Queried and joined multi-table hospital relational databases (Microsoft SQL Server / T-SQL) to extract and isolate patient, visit, and pharmacy prescription cohorts.",
      "Built Python and Pandas data-cleaning pipelines to handle missing values, duplicate rows, and inconsistent text formatting across real-world clinical records.",
      "Designed a rule-based medication-name standardization engine to resolve brand-name, generic-name, and typographical variations in prescription data.",
      "Analyzed longitudinal patient records to track prediabetes-to-Type 2 Diabetes progression across a 5,172-patient cohort spanning 48,864 follow-up visits, applying standard FBS, PPBS, and HbA1c diagnostic thresholds.",
      "Designed and built a modular healthcare ETL pipeline (SQLAlchemy, PyODBC, SQL Server) with schema validation, wide-to-long transformation, MRNO privacy masking, and both full-load and incremental-load execution modes.",
    ],
    achievements: [
      "Resolved 15+ inconsistent medication-name variants down to 3 standardized anti-diabetic compound categories.",
      "Identified and removed roughly 12% of records as transactional duplicates, improving dataset integrity.",
      "Delivered a fully validated dataset with 100% completeness across key clinical fields (MRNO, Drug_Name, Visit_Date).",
      "Built an MRNO masking layer to protect patient privacy while preserving longitudinal record linkage for cohort tracking.",
    ],
  },
];
