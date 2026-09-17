import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProjectBySlug, projects } from "@/data/projects";
import { isPlaceholder, cn } from "@/lib/utils";
import { AnimatedMetric } from "@/components/AnimatedMetric";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Sibi K`,
      description: project.shortDescription,
    },
  };
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string | string[];
}) {
  const items = Array.isArray(value) ? value : [value];
  return (
    <div className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-teal-700">
        {label}
      </h2>
      {items.length === 1 ? (
        <p
          className={cn(
            "mt-3 max-w-3xl text-[14.5px] leading-relaxed",
            isPlaceholder(items[0]) ? "italic text-ink-300" : "text-ink-600"
          )}
        >
          {items[0]}
        </p>
      ) : (
        <ul className="mt-3 max-w-3xl space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className={cn(
                "flex gap-2.5 text-[14.5px] leading-relaxed",
                isPlaceholder(item) ? "italic text-ink-300" : "text-ink-600"
              )}
            >
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-teal-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const hasGithub = !isPlaceholder(project.links.github);
  const hasDemo = !isPlaceholder(project.links.demo);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="border-b border-line bg-paper py-14 sm:py-20">
          <div className="container-shell">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-500 hover:text-teal-700"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              All projects
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.domain.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-teal-100 bg-teal-50 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-teal-700"
                >
                  {d}
                </span>
              ))}
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={hasGithub ? project.links.github : undefined}
                target={hasGithub ? "_blank" : undefined}
                rel={hasGithub ? "noreferrer noopener" : undefined}
                aria-disabled={!hasGithub}
                className={cn("btn-secondary", !hasGithub && "cursor-not-allowed opacity-60")}
              >
                <Github className="h-4 w-4" strokeWidth={2} />
                GitHub
              </a>
              {project.links.demo && (
                <a
                  href={hasDemo ? project.links.demo : undefined}
                  target={hasDemo ? "_blank" : undefined}
                  rel={hasDemo ? "noreferrer noopener" : undefined}
                  aria-disabled={!hasDemo}
                  className={cn("btn-primary", !hasDemo && "cursor-not-allowed opacity-70")}
                >
                  <ExternalLink className="h-4 w-4" strokeWidth={2} />
                  Live Demo
                </a>
              )}
            </div>

            {project.metrics.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-8 border-t border-line pt-7">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-2xl font-semibold text-ink">
                      <AnimatedMetric value={m.value} />
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-ink-400">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-b border-line bg-white py-16 sm:py-20">
          <div className="container-shell grid gap-12 lg:grid-cols-[1fr_260px]">
            <div>
              <Field label="Overview" value={project.caseStudy.overview} />
              <Field label="Problem" value={project.caseStudy.problem} />
              <Field label="Objective" value={project.caseStudy.objective} />
              <Field label="Dataset" value={project.caseStudy.dataset} />
              <Field label="Methodology" value={project.caseStudy.methodology} />
              <Field label="Architecture" value={project.caseStudy.architecture} />
              <Field label="Data Processing" value={project.caseStudy.dataProcessing} />
              <Field
                label="Feature Engineering"
                value={project.caseStudy.featureEngineering}
              />
              <Field label="Model / AI Approach" value={project.caseStudy.modelApproach} />
              <Field label="Evaluation" value={project.caseStudy.evaluation} />
              <Field label="Results" value={project.caseStudy.results} />
              <Field
                label="Key Engineering Decisions"
                value={project.caseStudy.keyDecisions}
              />
              <Field label="Deployment" value={project.caseStudy.deployment} />
              <Field label="Challenges" value={project.caseStudy.challenges} />
              <Field
                label="Future Improvements"
                value={project.caseStudy.futureImprovements}
              />
            </div>

            <aside className="space-y-8 lg:border-l lg:border-line lg:pl-8">
              <div>
                <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-400">
                  Technologies
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span key={t} className="tag-chip normal-case">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-400">
                  Skills demonstrated
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {project.skills.map((s) => (
                    <li key={s} className="text-[13px] text-ink-600">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {project.positioning.length > 0 && (
                <div>
                  <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-400">
                    Relevant to
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.positioning.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-line bg-paper-100 px-2.5 py-1 text-[11.5px] text-ink-500"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
