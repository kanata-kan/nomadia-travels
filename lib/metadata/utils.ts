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
}): Metadata {
  const fullUrl = withBaseUrl(path);

  return {
    title: `${title} | ${SITE.NAME}`,
    description: description || SITE.DESCRIPTION,
    openGraph: {
      title: `${title} | ${SITE.NAME}`,
      description: description || SITE.DESCRIPTION,
      url: fullUrl,
      siteName: SITE.NAME,
      images: [
        {
          url: image || SITE.OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.TWITTER,
      title: `${title} | ${SITE.NAME}`,
      description: description || SITE.DESCRIPTION,
      images: [image || SITE.OG_IMAGE],
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
