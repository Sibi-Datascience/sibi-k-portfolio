// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// This is the single file to edit to update contact links, resume path,
// and site metadata across the entire portfolio.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Sibi K",
  role: "Health Data Science | AI | Data Analytics",
  tagline:
    "Building data-driven solutions across healthcare, insurance, and enterprise technology.",
  url: "https://sibik.vercel.app", // Replace with your deployed domain

  // Replace these with your real profile links.
  // Leave the placeholder text as-is until you have the real URL.
  githubUrl: "https://github.com/Sibi-Datascience",
  linkedinUrl: "https://www.linkedin.com/in/sibi-k03/",
  email: "sibikrish03@gmail.com",

  // Resume file. Place your PDF at public/resume/Sibi_K_Resume.pdf
  // (or update this path to match your file name).
  resumeUrl: "/resume/Sibi_K_Resume.pdf",
};

export type SiteConfig = typeof siteConfig;
