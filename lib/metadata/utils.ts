import { SITE } from "@/config/constants";

/* ==========================================================
   🧠 withTrailingSlash — Normalize all URLs
   Ensures every path ends with a single trailing slash
========================================================== */
export function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

/* ==========================================================
   🌐 withBaseUrl
   Ensures clean absolute URL (no double slashes)
========================================================== */
export const withBaseUrl = (path: string, base = SITE.URL) => {
  const normalized = `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
  return withTrailingSlash(normalized);
};

/* ==========================================================
   🧭 buildLocalizedPath
   Normalizes to /{locale}/{core}
========================================================== */
export function buildLocalizedPath(locale: "en" | "fr", path: string) {
  const core = path.replace(/^\/(en|fr)/, "");
  const localized = `/${locale}${core.startsWith("/") ? core : `/${core}`}`;
  return withTrailingSlash(localized);
}

/* ==========================================================
   🌍 buildAlternates
   Builds canonical + per-language alternates based on locale + path
========================================================== */
export function buildAlternates(locale: "en" | "fr", path: string) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const core = cleanPath.replace(/^\/(en|fr)/, "");

  const canonical = withTrailingSlash(withBaseUrl(`/${locale}${core}`));

  return {
    canonical,
    languages: {
      en: withTrailingSlash(withBaseUrl(`/en${core}`)),
      fr: withTrailingSlash(withBaseUrl(`/fr${core}`)),
      "x-default": withTrailingSlash(withBaseUrl(core)),
    },
  };
}

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
  canonical: string;
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
