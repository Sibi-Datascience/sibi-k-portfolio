import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="container-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[16px] font-semibold text-ink">Sibi K</p>
          <p className="mt-1 text-[13px] text-ink-400">
            Health Data Science | AI | Data Analytics
          </p>
        </div>

        <ul className="flex items-center gap-5">
          <li>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="inline-flex items-center justify-center rounded-md border border-line p-2.5 text-ink-500 transition-colors hover:border-teal-500 hover:text-teal-700"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </li>
          <li>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="inline-flex items-center justify-center rounded-md border border-line p-2.5 text-ink-500 transition-colors hover:border-teal-500 hover:text-teal-700"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Send email"
              className="inline-flex items-center justify-center rounded-md border border-line p-2.5 text-ink-500 transition-colors hover:border-teal-500 hover:text-teal-700"
            >
              <Mail className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-line py-5">
        <p className="container-shell text-center text-[12px] text-ink-400">
          © {year} Sibi K. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
