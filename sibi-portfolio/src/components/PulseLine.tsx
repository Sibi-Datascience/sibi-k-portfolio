type PulseLineProps = {
  className?: string;
  variant?: "wide" | "compact";
};

/**
 * Signature motif: a single trace line that reads simultaneously as an
 * ECG waveform (healthcare) and a data/signal trend line (data science).
 * Used sparingly — hero, section dividers — as the one recurring visual idea.
 */
export function PulseLine({ className, variant = "wide" }: PulseLineProps) {
  const path =
    variant === "wide"
      ? "M0 20 H120 L136 20 L146 4 L158 36 L170 20 L182 20 L192 12 L200 20 H420"
      : "M0 14 H30 L38 14 L46 2 L54 26 L62 14 L70 14 L78 8 L84 14 H140";

  const viewBox = variant === "wide" ? "0 0 420 40" : "0 0 140 28";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pulse-path"
        pathLength={1}
      />
    </svg>
  );
}
