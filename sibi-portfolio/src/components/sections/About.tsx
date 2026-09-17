import { Activity, BrainCircuit, Database, Stethoscope } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const pillars = [
  {
    icon: Stethoscope,
    title: "Healthcare foundation",
    text: "A clinical background in anaesthesia and operation theatre technology, giving direct exposure to how healthcare data is generated and used.",
  },
  {
    icon: Database,
    title: "Technical toolkit",
    text: "Python, SQL, statistics, machine learning, and data engineering, applied to build working, testable solutions.",
  },
  {
    icon: BrainCircuit,
    title: "AI & deep learning",
    text: "Deep learning, computer vision, and generative AI methods applied to medical imaging and clinical workflows.",
  },
  {
    icon: Activity,
    title: "Analytics & visualization",
    text: "Turning models and pipelines into decision-ready dashboards and applications for non-technical stakeholders.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-line bg-white py-20 sm:py-28">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title="Healthcare domain knowledge, applied through data science."
            description="MSc Health Data Science student with a healthcare background, combining healthcare domain knowledge with Python, SQL, machine learning, deep learning, AI, statistics, data analytics, and visualization to solve real-world problems. My clinical background helps me understand healthcare problems from the inside, while my Health Data Science training lets me build the technical, data-driven solutions to address them."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card-base p-6">
                <pillar.icon
                  className="h-5 w-5 text-teal-600"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-[15px] font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
