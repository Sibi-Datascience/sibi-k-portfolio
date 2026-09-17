"use client";

import { filterCategories, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterValue = "all" | ProjectCategory;

export function ProjectFilter({
  active,
  onChange,
}: {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {filterCategories.map((cat) => {
        const isActive = active === cat.value;
        return (
          <button
            key={cat.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(cat.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors duration-200",
              isActive
                ? "border-ink bg-ink text-white"
                : "border-line-strong bg-white text-ink-500 hover:border-teal-500 hover:text-teal-700"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
