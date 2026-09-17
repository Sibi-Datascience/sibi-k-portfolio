import { Github, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PulseLine } from "@/components/PulseLine";

export function TechnicalWork() {
  return (
    <section className="border-b border-line bg-ink py-20 sm:py-24">
      <div className="container-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <span className="section-eyebrow !text-teal-300">Technical Work</span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Explore the code behind every project
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink-300">
            Explore my code, machine learning experiments, healthcare analytics
            workflows, AI applications, data engineering projects, and technical
            implementations.
          </p>
          <div className="mt-6 text-teal-500">
            <PulseLine variant="compact" className="h-6 w-32" />
          </div>
        </div>

        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-teal-100"
        >
          <Github className="h-4 w-4" strokeWidth={2} />
          View GitHub
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
