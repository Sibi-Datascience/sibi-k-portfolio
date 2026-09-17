import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-b border-line bg-white py-20 sm:py-28">
      <div className="container-shell">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree} className="card-base p-6">
              <GraduationCap
                className="h-5 w-5 text-teal-600"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-4 font-display text-[15px] font-semibold leading-snug text-ink">
                {item.degree}
              </h3>
              <p className="mt-2 text-[13.5px] text-ink-500">{item.institution}</p>
              <p className="mt-0.5 text-[13px] text-ink-400">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
