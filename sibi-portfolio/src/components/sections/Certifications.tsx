import { SectionHeading } from "@/components/SectionHeading";
import { CertificationCard } from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section className="border-b border-line bg-paper py-20 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & activities"
          description="Add credentials as you earn them in src/data/certifications.ts."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <CertificationCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
