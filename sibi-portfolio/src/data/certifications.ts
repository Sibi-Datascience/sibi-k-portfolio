// Add further credentials below by duplicating an object. Never invent
// credentials — only list ones you actually hold.

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "AI and Deep Learning Made Easy for Medical Imaging",
    issuer: "Udemy — Instructor: Dr. Joan S Muthu",
    year: "2025",
    url: "https://ude.my/UC-011773fb-f82c-4443-b7a0-6e3f18deaf3f",
  },
  {
    name: "Master SQL For Data Science",
    issuer: "Udemy — Instructor: Job Ready Programmer",
    year: "2026",
    url: "https://ude.my/UC-3cd79527-5b10-4cf6-bc2d-a53f1ab9ea53",
  },
  {
    name: "Certificate Course in Python (CCP)",
    issuer: "CSC Computer Education (Computer Software College), Krishnagiri",
    year: "2025",
  },
  {
    name: "SDG 9 Hackathon Participant — HACKTRIX '25, Open Innovation Hackathon",
    issuer: "SRM Institute of Science & Technology, in association with Techvantage.ai",
    year: "2025",
  },
  {
    name: 'SDG 3 — Presented "Smart Care, AI in Maternal and Child Health"',
    issuer: "School of Public Health, SRM Institute of Science & Technology",
    year: "2025",
  },
];
