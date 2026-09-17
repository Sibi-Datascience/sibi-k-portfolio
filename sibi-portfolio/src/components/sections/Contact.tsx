import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: siteConfig.linkedinUrl,
    href: siteConfig.linkedinUrl,
  },
  {
    icon: Github,
    label: "GitHub",
    value: siteConfig.githubUrl,
    href: siteConfig.githubUrl,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20 sm:py-28">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="I am open to internship and early-career opportunities in Health Data Science, Data Analytics, Healthcare Analytics, AI, Health IT, CRO, Pharma, Insurance, Consulting, and related technology roles."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "Email" ? undefined : "_blank"}
              rel={c.label === "Email" ? undefined : "noreferrer noopener"}
              className="card-base group flex flex-col items-center gap-3 p-7 text-center hover:border-teal-300 hover:shadow-[0_8px_24px_rgba(11,22,32,0.06)]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-display text-[14px] font-semibold text-ink">
                {c.label}
              </span>
              <span className="break-all text-[12.5px] text-ink-400">{c.value}</span>
              <span className="inline-flex items-center gap-1 text-[12px] font-medium text-teal-700 opacity-0 transition-opacity group-hover:opacity-100">
                Connect
                <ArrowRight className="h-3 w-3" strokeWidth={2} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
