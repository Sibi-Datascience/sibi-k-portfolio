type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={
            "mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500" +
            (align === "center" ? " mx-auto" : "")
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}
