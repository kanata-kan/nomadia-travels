"use client";

import { SITE } from "@/config/constants";

/**
 * 🧠 Normalize URL to always end with trailing slash
 * This matches Vercel's default SEO-friendly URL style.
 */
function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default function LocaleMetaLinks({ path }: { path: string }) {
  const base = SITE.URL.replace(/\/$/, ""); // remove ending slash if exists
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, "");

  // Build URLs for each locale
  const enUrl = withTrailingSlash(`${base}/en${noLocalePath}`);
  const frUrl = withTrailingSlash(`${base}/fr${noLocalePath}`);

  // Canonical depends on current locale
  const canonical = cleanPath.startsWith("/fr") ? frUrl : enUrl;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  );
}
