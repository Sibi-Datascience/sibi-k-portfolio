import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";
import { isPlaceholder } from "@/lib/utils";

export function CertificationCard({ cert }: { cert: Certification }) {
  const hasUrl = cert.url && !isPlaceholder(cert.url);

  return (
    <div className="card-base flex items-start gap-4 p-6">
      <Award className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" strokeWidth={1.75} />
      <div>
        <h3 className="font-display text-[14.5px] font-semibold leading-snug text-ink">
          {cert.name}
        </h3>
        <p className="mt-1 text-[13px] text-ink-500">
          {cert.issuer} · <span className="font-mono">{cert.year}</span>
        </p>
        {cert.url && (
          <a
            href={hasUrl ? cert.url : undefined}
            target={hasUrl ? "_blank" : undefined}
            rel={hasUrl ? "noreferrer noopener" : undefined}
            aria-disabled={!hasUrl}
            className={
              "mt-2 inline-flex items-center gap-1 text-[12.5px] font-medium " +
              (hasUrl ? "text-teal-700 hover:text-teal-600" : "text-ink-300")
            }
          >
            View credential
            <ExternalLink className="h-3 w-3" strokeWidth={2} />
          </a>
        )}
      </div>
    </div>
  );
}
