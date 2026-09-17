"use client";

import { useEffect, useRef, useState } from "react";

type ParsedValue = {
  prefix: string;
  target: number;
  decimals: number;
  suffix: string;
  hasThousands: boolean;
} | null;

/** Parses strings like "0.8603", "85.88%", "99,343", "20" into an animatable number. */
function parseValue(raw: string): ParsedValue {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, numberPart, suffix] = match;
  const hasThousands = numberPart.includes(",");
  const cleaned = numberPart.replace(/,/g, "");
  const target = parseFloat(cleaned);
  if (Number.isNaN(target)) return null;

  const decimalMatch = cleaned.match(/\.(\d+)$/);
  const decimals = decimalMatch ? decimalMatch[1].length : 0;

  return { prefix, target, decimals, suffix, hasThousands };
}

function formatValue(value: number, parsed: NonNullable<ParsedValue>) {
  const fixed = value.toFixed(parsed.decimals);
  const [whole, frac] = fixed.split(".");
  const wholeFormatted = parsed.hasThousands
    ? Number(whole).toLocaleString("en-US")
    : whole;
  const numberStr = frac ? `${wholeFormatted}.${frac}` : wholeFormatted;
  return `${parsed.prefix}${numberStr}${parsed.suffix}`;
}

export function AnimatedMetric({
  value,
  duration = 1200,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(parsed ? formatValue(0, parsed) : value);
  const started = useRef(false);

  useEffect(() => {
    if (!parsed || !ref.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              setDisplay(formatValue(parsed.target * eased, parsed));
              if (progress < 1) requestAnimationFrame(tick);
            };

            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [parsed, value, duration]);

  return (
    <span ref={ref} className={className}>
      {parsed ? display : value}
    </span>
  );
}
