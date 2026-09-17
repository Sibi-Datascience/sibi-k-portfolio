"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProfilePhoto({
  src,
  alt,
  initials,
  className,
}: {
  src: string;
  alt: string;
  initials: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center rounded-full border-2 border-teal-100 bg-teal-50 font-display font-semibold text-teal-700",
          className
        )}
      >
        {initials}
      </div>
    );
  }

  // Plain <img> (not next/image) so a missing file in public/images/
  // fails gracefully via onError instead of a Next.js image-optimizer error.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={cn("rounded-full border-2 border-teal-100 object-cover", className)}
    />
  );
}
