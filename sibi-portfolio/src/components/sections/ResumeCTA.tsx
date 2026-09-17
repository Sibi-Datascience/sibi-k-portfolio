import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";

export function ResumeCTA() {
  return (
    <section className="border-b border-line bg-white py-20 sm:py-24">
      <div className="container-shell">
        <div className="card-base flex flex-col items-start gap-8 bg-teal-50/60 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Want to know more about my background?
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
              View my resume for a concise overview of my education, technical
              skills, projects, and experience.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a href={siteConfig.resumeUrl} download className="btn-primary">
              <Download className="h-4 w-4" strokeWidth={2} />
              Download Resume
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              <FileText className="h-4 w-4" strokeWidth={2} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
