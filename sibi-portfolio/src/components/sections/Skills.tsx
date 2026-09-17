import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-paper py-20 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Tools and methods used across the projects on this site — from data preparation through modeling, explainability, and deployment."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="card-base p-6">
              <h3 className="font-display text-[14px] font-semibold text-ink">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag-chip normal-case">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
