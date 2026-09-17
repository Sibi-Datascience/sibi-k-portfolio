import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { PulseLine } from "@/components/PulseLine";
import { AnimatedMetric } from "@/components/AnimatedMetric";
import { ProfilePhoto } from "@/components/ProfilePhoto";

const proofPoints = [
  { label: "ROC-AUC", value: "0.8603" },
  { label: "Records modeled", value: "99,343" },
  { label: "States clustered", value: "20" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-line bg-paper"
    >
      <div className="container-shell grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div className="animate-fade-up" style={{ animationDelay: "60ms" }}>
          <ProfilePhoto
            src="/images/profile.jpg"
            alt="Portrait of Sibi K"
            initials="SK"
            className="h-20 w-20 text-2xl sm:h-24 sm:w-24 sm:text-3xl"
          />

          <span className="mt-6 block section-eyebrow">
            Health Data Science · AI · Analytics
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Sibi K
          </h1>

          <p className="mt-4 font-display text-lg font-medium text-teal-700 sm:text-xl">
            Health Data Science | AI | Data Analytics
          </p>

          <div className="mt-5 text-teal-600">
            <PulseLine variant="wide" className="h-8 w-56" />
          </div>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-500">
            MSc Health Data Science student with a healthcare background, focused on
            applying machine learning, AI, data analytics, and statistical methods to
            real-world healthcare and business problems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
            <a href={siteConfig.resumeUrl} download className="btn-secondary">
              <Download className="h-4 w-4" strokeWidth={2} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-500 hover:text-teal-700"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-500 hover:text-teal-700"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up rounded-2xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(11,22,32,0.04)]"
          style={{ animationDelay: "160ms" }}
        >
          <p className="section-eyebrow">Currently building</p>
          <ul className="mt-4 space-y-4">
            <li className="text-[14px] leading-relaxed text-ink-600">
              Deep learning pipelines for medical imaging, deployed end-to-end.
            </li>
            <li className="text-[14px] leading-relaxed text-ink-600">
              Explainable ML for insurance fraud and healthcare risk stratification.
            </li>
            <li className="text-[14px] leading-relaxed text-ink-600">
              Multi-agent generative AI systems grounded in live healthcare data.
            </li>
          </ul>

          <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
            {proofPoints.map((p) => (
              <div key={p.label}>
                <p className="font-mono text-lg font-semibold text-ink sm:text-xl">
                  <AnimatedMetric value={p.value} />
                </p>
                <p className="mt-1 text-[11px] leading-tight text-ink-400">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
