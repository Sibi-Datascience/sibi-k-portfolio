"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable — theme just won't persist across visits
    }
  };

  // Avoid a hydration mismatch: render a stable placeholder until mounted.
  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={
          className ??
          "inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong"
        }
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={
        className ??
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-ink-500 transition-colors hover:border-teal-500 hover:text-teal-700"
      }
    >
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.75} />
      )}
    </button>
  );
}
