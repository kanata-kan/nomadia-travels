"use client";

import { SITE } from "@/config/constants";

/**
 * 🧠 LocaleMetaLinks v3.3 (Production Ready)
 * Injects <link rel="canonical"> + hreflang alternates + x-default
 * Compatible with PageSpeed Insights + Google SEO crawler.
 *
 * ✅ Fixes Lighthouse canonical error
 * ✅ Adds x-default for international SEO
 * ✅ Guarantees trailing slashes on all links
 */

function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default function LocaleMetaLinks({ path }: { path: string }) {
  // 🧱 Base site URL (from constants)
  const base = SITE.URL.replace(/\/$/, "");

  // 🧭 Normalize path
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, "");

  // 🌐 Build alternate URLs
  const enUrl = withTrailingSlash(`${base}/en${noLocalePath}`);
  const frUrl = withTrailingSlash(`${base}/fr${noLocalePath}`);
  const defaultUrl = withTrailingSlash(`${base}${noLocalePath}`);

  // 🧩 Determine canonical locale automatically
  const isFR = cleanPath.startsWith("/fr");
  const canonical = isFR ? frUrl : enUrl;

  return (
    <>
      {/* ✅ Canonical link (required by Google SEO) */}
      <link rel="canonical" href={canonical} />

      {/* 🌍 Alternate language versions */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}
