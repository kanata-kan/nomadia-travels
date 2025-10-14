// lib/metadata/utils.ts
import { SITE } from "@/config/constants";

/* ==========================================================
   🧠 buildMetadataBase
   Core metadata composer (OG + Twitter)
========================================================== */
export function buildMetadataBase({
  title,
  description,
  image,
  canonical,
}: {
  title: string;
  description: string;
  image: string;
  canonical: string; // ✅ pass precomputed canonical to ensure locale match
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.NAME,
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.TWITTER,
      title,
      description,
      images: [image],
    },
  };
}

/* ==========================================================
   🌍 buildAlternates
   Builds canonical + per-language alternates based on locale + path
========================================================== */
export function buildAlternates(locale: "en" | "fr", path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const core = cleanPath.replace(/^\/(en|fr)/, "");

  // ✅ canonical always matches the current locale version
  const canonical = withBaseUrl(`/${locale}${core}`);

  return {
    canonical,
    languages: {
      en: withBaseUrl(`/en${core}`),
      fr: withBaseUrl(`/fr${core}`),
    },
  };
}

/* ==========================================================
   🧭 buildLocalizedPath
   Normalizes to /{locale}/{core}
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
