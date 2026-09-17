import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-b border-line bg-paper py-20 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Practical work"
          description="Roles, internships, and practical work will appear here as a timeline. Currently shown as editable placeholders — update src/data/experience.ts with real entries."
        />

        <ol className="mt-12 space-y-8 border-l border-line pl-8">
          {experience.map((item, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-teal-500 bg-white"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-[16px] font-semibold text-ink">
                  {item.role} · {item.organization}
                </h3>
                <span className="font-mono text-[12px] text-ink-400">{item.period}</span>
              </div>

              {item.responsibilities.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.responsibilities.map((r, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-[13.5px] leading-relaxed text-ink-500"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.achievements.length > 0 && (
                <ul className="mt-2 space-y-1.5">
                  {item.achievements.map((a, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-[13.5px] leading-relaxed text-teal-700"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
