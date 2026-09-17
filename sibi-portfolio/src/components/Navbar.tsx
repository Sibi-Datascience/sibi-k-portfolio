"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
          : "border-transparent bg-paper"
      )}
    >
      <nav
        aria-label="Primary"
        className="container-shell flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          className="font-display text-[17px] font-semibold tracking-tight text-ink"
        >
          Sibi K
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[14px] font-medium text-ink-500 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href={siteConfig.resumeUrl} download className="btn-secondary !py-2.5 !text-[13px]">
            <Download className="h-3.5 w-3.5" strokeWidth={2} />
            Download Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-line-strong p-2 text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper px-6 pb-8 pt-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-[15px] font-medium text-ink-600 hover:bg-paper-100 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.resumeUrl}
            download
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            <Download className="h-3.5 w-3.5" strokeWidth={2} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
