export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** True when a data value is still an unfilled placeholder. */
export function isPlaceholder(value?: string | null) {
  if (!value) return true;
  return (
    value.startsWith("[") ||
    value.startsWith("ADD_") ||
    value === "GITHUB_URL" ||
    value === "LINKEDIN_URL" ||
    value === "EMAIL"
  );
}
