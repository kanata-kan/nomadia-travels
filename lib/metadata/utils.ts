import { Metadata } from "next";
import { SITE } from "@/config/constants";

/* ==========================================================
   🧠 buildMetadataBase
   Unify metadata structure (OG + Twitter)
   → Avoid duplication between static and dynamic metadata
========================================================== */
export function buildMetadataBase({
  title,
  description,
  image,
  path,
}: {
  title: string;
  description: string;
  image: string;
  path: string;
}) {
  // ✅ Canonical absolute URL (fix for Lighthouse SEO warning)
  const canonical = `${SITE.URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url: canonical, // ✅ OG url tag for crawlers
    },
    twitter: {
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical, // ✅ Added canonical link tag
    },
  };
}

/* ==========================================================
   🌍 buildAlternates
   Generates canonical + language alternates (for SEO)
========================================================== */
export function buildAlternates(
  locale: "en" | "fr",
  path: string,
  siteUrl = SITE.URL,
) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return {
    canonical: withBaseUrl(cleanPath, siteUrl),
    languages: {
      en: withBaseUrl(`/en${cleanPath.replace(/^\/(en|fr)/, "")}`, siteUrl),
      fr: withBaseUrl(`/fr${cleanPath.replace(/^\/(en|fr)/, "")}`, siteUrl),
    },
  };
}

/* ==========================================================
   🧭 buildLocalizedPath
   Builds the correct localized path without double prefix
   → Avoids URLs like /en/en/... or /fr/fr/...
========================================================== */
export function buildLocalizedPath(locale: "en" | "fr", path: string) {
  const core = path.replace(/^\/(en|fr)/, "");
  return `/${locale}${core.startsWith("/") ? core : `/${core}`}`;
}

/* ==========================================================
   🌐 withBaseUrl
   Ensures clean and valid URL format (no double slashes)
========================================================== */
export const withBaseUrl = (path: string, base = SITE.URL) =>
  `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
