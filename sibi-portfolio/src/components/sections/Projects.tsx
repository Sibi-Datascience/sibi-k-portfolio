"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";
import { projects, type ProjectCategory } from "@/data/projects";

type FilterValue = "all" | ProjectCategory;

export function Projects() {
  const [active, setActive] = useState<FilterValue>("all");

  const visibleProjects = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="projects" className="border-b border-line bg-white py-20 sm:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case studies, not assignments"
            description="Five end-to-end projects spanning healthcare AI, insurance analytics, generative AI, and data engineering — each taken from problem framing through to a working, deployable system."
          />
        </div>

        <div className="mt-10">
          <ProjectFilter active={active} onChange={setActive} />
        </div>

        <div
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          aria-live="polite"
        >
          {visibleProjects.map((project) => (
            <div
              key={project.slug}
              className={project.featured ? "xl:col-span-1" : ""}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-10 text-center text-sm text-ink-400">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
