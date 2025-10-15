"use client";

import { SITE } from "@/config/constants";

/**
 * 🧠 LocaleMetaLinks v3.3
 * Injects <link rel="canonical"> + hreflang alternates
 * Compatible with PageSpeed Insights + Google SEO crawler.
 */
function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default function LocaleMetaLinks({ path }: { path: string }) {
  const base = SITE.URL.replace(/\/$/, ""); // remove ending slash if exists
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, "");

  const enUrl = withTrailingSlash(`${base}/en${noLocalePath}`);
  const frUrl = withTrailingSlash(`${base}/fr${noLocalePath}`);
  const defaultUrl = withTrailingSlash(`${base}${noLocalePath}`);

  // Detect current locale from path
  const isFR = cleanPath.startsWith("/fr");
  const canonical = isFR ? frUrl : enUrl;

  return (
    <>
      {/* ✅ Canonical link (required by Google) */}
      <link rel="canonical" href={canonical} />

      {/* 🌍 Alternate languages */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}
