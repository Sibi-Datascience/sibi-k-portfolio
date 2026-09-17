import type { Metadata } from "next";

// Self-hosted fonts (bundled via npm, no runtime Google Fonts fetch needed).
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sibi K | Health Data Science | AI | Data Analytics",
    template: "%s | Sibi K",
  },
  description:
    "Sibi K – MSc Health Data Science professional showcasing healthcare AI, machine learning, data analytics, insurance analytics, generative AI, data engineering, and healthcare technology projects.",
  keywords: [
    "Sibi K",
    "Health Data Science",
    "Healthcare Analytics",
    "Data Analytics",
    "Machine Learning",
    "AI",
    "Generative AI",
    "Clinical Data",
    "Insurance Analytics",
    "Data Engineering",
    "Health IT",
    "Portfolio",
  ],
  authors: [{ name: "Sibi K" }],
  creator: "Sibi K",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Sibi K | Health Data Science | AI | Data Analytics",
    description:
      "Building data-driven solutions across healthcare, insurance, and enterprise technology.",
    siteName: "Sibi K Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sibi K | Health Data Science | AI | Data Analytics",
    description:
      "Building data-driven solutions across healthcare, insurance, and enterprise technology.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Runs before paint to avoid a flash of the wrong theme.
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
