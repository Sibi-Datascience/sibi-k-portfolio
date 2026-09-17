import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="section-eyebrow">404</span>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-2 max-w-sm text-[14px] text-ink-500">
        The page you&apos;re looking for may have moved or the link may be incorrect.
      </p>
      <Link href="/" className="btn-primary mt-7">
        Back to home
      </Link>
    </main>
  );
}
