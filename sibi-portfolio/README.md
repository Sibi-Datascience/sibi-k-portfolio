# Sibi K — Portfolio Website

A modern, recruiter-focused personal portfolio for **Sibi K**, an early-career
Health Data Science / AI / Data Analytics professional. Built with Next.js
14 (App Router), React, TypeScript, and Tailwind CSS.

Live areas: Hero, About, Skills, Featured Projects (with filtering and
individual case-study pages), Experience timeline, Education, Certifications,
Technical Work / GitHub, Resume CTA, and Contact.

---

## 1. Features

- Fully responsive (mobile, tablet, desktop)
- Sticky, accessible navbar with mobile hamburger menu
- **Dark mode toggle** — persists across visits, respects system preference,
  no flash of the wrong theme on load
- **Profile photo in the hero** — with an automatic circular "SK" initials
  fallback if no photo has been added yet, so the layout never looks broken
- **Animated metric counters** — key numbers (ROC-AUC, records processed,
  states clustered, etc.) count up into view on scroll, in the hero and on
  every project card / case-study page
- 5 real project case studies with dedicated detail pages
  (`/projects/[slug]`) and category filtering on the main grid
- Editable, centralized data layer (`src/data/*.ts`) — no content is
  hardcoded inside components
- SEO: metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- Accessibility: semantic HTML, visible focus states, `aria-*` labeling,
  `prefers-reduced-motion` support
- Self-hosted fonts (via `@fontsource`) — no runtime calls to Google Fonts
- Minimal dependencies (`next`, `react`, `react-dom`, `lucide-react`,
  three `@fontsource` packages)

---

## 2. Folder Structure

```
sibi-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── PLACE_RESUME_HERE.txt        # replace with Sibi_K_Resume.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # root layout, fonts, SEO metadata
│   │   ├── page.tsx                     # home page — assembles all sections
│   │   ├── globals.css                  # design tokens & base styles
│   │   ├── not-found.tsx                # 404 page
│   │   ├── sitemap.ts                   # sitemap.xml generator
│   │   ├── robots.ts                    # robots.txt generator
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx             # project case-study detail page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── PulseLine.tsx                # signature ECG/trend-line motif
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectFilter.tsx
│   │   ├── CertificationCard.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── Education.tsx
│   │       ├── Certifications.tsx
│   │       ├── TechnicalWork.tsx
│   │       ├── ResumeCTA.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   ├── site.ts                      # name, email, GitHub, LinkedIn, resume path
│   │   ├── projects.ts                  # all 5 project case studies
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── certifications.ts
│   │   └── nav.ts
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

---

## 3. Run Locally

Requires Node.js 18.18+ (Node 20/22 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

---

## 4. Add Your GitHub / LinkedIn / Email

Edit **`src/data/site.ts`**:

```ts
export const siteConfig = {
  name: "Sibi K",
  role: "Health Data Science | AI | Data Analytics",
  tagline: "Building data-driven solutions across healthcare, insurance, and enterprise technology.",
  url: "https://sibik.vercel.app",     // your deployed domain

  githubUrl: "https://github.com/your-username",     // replace GITHUB_URL
  linkedinUrl: "https://linkedin.com/in/your-handle", // replace LINKEDIN_URL
  email: "your@email.com",                            // replace EMAIL

  resumeUrl: "/resume/Sibi_K_Resume.pdf",
};
```

These values automatically flow into the Navbar, Hero, Footer, Technical
Work, and Contact sections — you only need to edit them in one place.

---

## 5. Add Your Resume

1. Add your PDF to `public/resume/`, named `Sibi_K_Resume.pdf`
   (or any name you prefer).
2. If you used a different file name, update `resumeUrl` in
   `src/data/site.ts` to match.
3. Delete `public/resume/PLACE_RESUME_HERE.txt` once your real file is in
   place.

The **Download Resume** buttons (navbar, hero, and Resume section) and the
**View Resume** button all read from this single `resumeUrl` value.

---

## 5b. Add Your Profile Photo

1. Add a photo to `public/images/`, named `profile.jpg` (square-ish,
   at least 300×300px works best).
2. That's it — the hero section automatically displays it. If no photo is
   present yet, a circular "SK" initials badge is shown instead, so the
   layout never breaks.
3. Delete `public/images/PLACE_PHOTO_HERE.txt` once your real photo is in
   place.
4. Using a `.png` instead? Update the `src` prop passed to `ProfilePhoto`
   in `src/components/sections/Hero.tsx` to match.

---

## 5c. Dark Mode

A sun/moon toggle sits in the navbar (desktop and mobile). It:

- Respects the visitor's system preference on first visit
- Persists their choice in `localStorage` after that
- Applies before the page paints, so there's no flash of the wrong theme

No configuration needed — it works out of the box across every section.

---

## 6. Add Project Links (GitHub repo / Live demo)

Edit **`src/data/projects.ts`**. Each project has a `links` object:

```ts
links: {
  github: "ADD_GITHUB_URL",   // → replace with your repo URL
  demo: "ADD_HUGGINGFACE_URL" // → replace with your live demo URL
},
```

Until you replace a placeholder (anything starting with `ADD_` or wrapped
in `[...]`), the corresponding button on the site is shown but disabled
(greyed out, non-clickable) rather than linking to a broken/fake URL.

The same file holds every case-study field (`caseStudy.problem`,
`caseStudy.dataset`, etc.). Fields marked `"[ADD HERE]"` are intentionally
left blank because they weren't provided — fill them in with your real
project details; the site will automatically style them as normal text
once they no longer start with `[`.

### Other editable data files

| File | What it controls |
|---|---|
| `src/data/experience.ts` | Experience / practical work timeline |
| `src/data/education.ts` | Education section |
| `src/data/certifications.ts` | Certifications section |
| `src/data/skills.ts` | Skills grid |
| `src/data/nav.ts` | Navbar links |

---

## 7. Push to GitHub

```bash
# From inside the sibi-portfolio folder
git init
git add .
git commit -m "Initial commit: Sibi K portfolio"

# Create a new repository on GitHub first (via github.com or gh CLI), then:
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If you have the GitHub CLI installed, you can create the repo directly:

```bash
gh repo create sibi-portfolio --public --source=. --remote=origin --push
```

---

## 8. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub
   account.
2. Click **Add New → Project**.
3. Select the `sibi-portfolio` repository you just pushed.
4. Vercel auto-detects Next.js — leave the default build settings
   (`next build`, output directory auto-configured).
5. Click **Deploy**. Your site will be live at
   `https://<project-name>.vercel.app` within a couple of minutes.
6. **Custom domain (optional, later):** in your Vercel project, go to
   **Settings → Domains**, add your domain, and follow the DNS
   instructions Vercel provides.

No paid services are required — the free Vercel Hobby tier is sufficient
for this site.

After deploying, update `url` in `src/data/site.ts` to your real Vercel
(or custom) domain so Open Graph tags and the sitemap are accurate, then
redeploy.

---

## 9. Customization Notes

- **Colors / type / spacing tokens:** `tailwind.config.ts` (see the `ink`,
  `paper`, `teal`, and `line` color scales) and `src/app/globals.css`.
- **Signature visual motif:** `src/components/PulseLine.tsx` — a single
  trace line reused sparingly (hero, Technical Work section) that reads as
  both an ECG waveform and a data trend line.
- **Fonts:** IBM Plex Sans (display/headings), Inter (body), IBM Plex Mono
  (data, labels, metrics) — self-hosted via `@fontsource`, no external
  network calls at build or runtime.
- **Adding a 6th project:** duplicate any object in the `projects` array in
  `src/data/projects.ts`, give it a unique `slug`, and it will automatically
  appear in the grid, filters, and get its own case-study page at
  `/projects/<slug>`.

---

## 10. Quality Checklist (verified before delivery)

- [x] `npm run build` completes with no TypeScript or build errors
- [x] All 5 project detail pages statically generate successfully
- [x] No broken imports
- [x] Responsive layout (mobile / tablet / desktop breakpoints)
- [x] Working navigation, smooth scroll, working project category filters
- [x] Resume, GitHub, LinkedIn, and contact links are all centrally
      configurable via `src/data/site.ts`
- [x] No fabricated experience, certifications, metrics, or URLs — every
      unfilled field uses an explicit `[ADD HERE]`-style placeholder
