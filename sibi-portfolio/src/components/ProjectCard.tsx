import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { isPlaceholder } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { AnimatedMetric } from "@/components/AnimatedMetric";

export function ProjectCard({ project }: { project: Project }) {
  const hasGithub = !isPlaceholder(project.links.github);
  const hasDemo = !isPlaceholder(project.links.demo);

  return (
    <article
      className={cn(
        "card-base group flex h-full flex-col p-6 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_8px_24px_rgba(11,22,32,0.06)]",
        project.featured && "sm:p-7"
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        {project.domain.slice(0, 2).map((d) => (
          <span
            key={d}
            className="rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-teal-700"
          >
            {d}
          </span>
        ))}
      </div>

      <h3 className="mt-4 font-display text-[19px] font-semibold leading-snug text-ink">
        {project.title}
      </h3>

      <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-500">
        {project.shortDescription}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2 text-[12.5px] leading-relaxed text-ink-600">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-teal-500" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {project.metrics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4 border-y border-line py-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[15px] font-semibold text-ink">
                <AnimatedMetric value={m.value} />
              </p>
              <p className="text-[10.5px] uppercase tracking-wide text-ink-400">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="tag-chip normal-case">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-[13px] font-medium">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-600"
        >
          View Case Study
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>

        <a
          href={hasGithub ? project.links.github : undefined}
          target={hasGithub ? "_blank" : undefined}
          rel={hasGithub ? "noreferrer noopener" : undefined}
          aria-disabled={!hasGithub}
          className={cn(
            "inline-flex items-center gap-1.5",
            hasGithub ? "text-ink-500 hover:text-ink" : "cursor-not-allowed text-ink-300"
          )}
        >
          <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
          GitHub
        </a>

        {project.links.demo && (
          <a
            href={hasDemo ? project.links.demo : undefined}
            target={hasDemo ? "_blank" : undefined}
            rel={hasDemo ? "noreferrer noopener" : undefined}
            aria-disabled={!hasDemo}
            className={cn(
              "inline-flex items-center gap-1.5",
              hasDemo ? "text-ink-500 hover:text-ink" : "cursor-not-allowed text-ink-300"
            )}
          >
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
