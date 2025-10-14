// lib/metadata/utils.ts
import { SITE } from "@/config/constants";

/* ==========================================================
   🧠 buildMetadataBase
   Core metadata composer (OG + Twitter)
   → Receives a *relative* path and resolves absolute canonical internally
========================================================== */
export function buildMetadataBase({
  title,
  description,
  image,
  path, // relative (e.g., "/en/cars" or "/fr/travel-packs/pack-2")
}: {
  title: string;
  description: string;
  image: string; // should be absolute (ensure outside for dynamic/static)
  path: string; // relative; canonical will be built here
}) {
  const canonical = withBaseUrl(path, SITE.URL); // ✅ build absolute canonical once

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical, // ✅ OG url for crawlers
      siteName: SITE.NAME,
      images: [{ url: image }], // expects absolute (set in callers)
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.TWITTER,
      title,
      description,
      images: [image], // absolute (set in callers)
    },
    // ❌ no alternates here to avoid duplication/conflict
  };
}

/* ==========================================================
   🌍 buildAlternates
   Builds canonical + per-language alternates based on locale + path
========================================================== */
export function buildAlternates(
  locale: "en" | "fr",
  path: string,
  siteUrl = SITE.URL,
) {
  // path can be "/en/..." or "/fr/..." or plain "/cars"
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // language-agnostic core (strip leading /en|/fr)
  const core = cleanPath.replace(/^\/(en|fr)/, "");

  return {
    canonical: withBaseUrl(`/${locale}${core}`, siteUrl),
    languages: {
      en: withBaseUrl(`/en${core}`, siteUrl),
      fr: withBaseUrl(`/fr${core}`, siteUrl),
    },
  };
}

/* ==========================================================
   🧭 buildLocalizedPath
   Avoids double prefix ("/en/en/...") & normalizes to "/{locale}/{core}"
========================================================== */
export function buildLocalizedPath(locale: "en" | "fr", path: string) {
  const core = path.replace(/^\/(en|fr)/, "");
  return `/${locale}${core.startsWith("/") ? core : `/${core}`}`;
}

/* ==========================================================
   🌐 withBaseUrl
   Ensures clean absolute URL (no double slashes)
========================================================== */
export const withBaseUrl = (path: string, base = SITE.URL) =>
  `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
