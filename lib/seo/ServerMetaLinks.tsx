// ==========================================================
// 🧠 ServerMetaLinks — SSR-safe canonical + hreflang injector
// ==========================================================
// ✅ Pure server component (no client code)
// ✅ 100% SSR render → visible to Google/PageSpeed
// ==========================================================

import { SITE } from "@/config/constants";

function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default function ServerMetaLinks({ path }: { path: string }) {
  const base = SITE.URL.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, "");

  const enUrl = withTrailingSlash(`${base}/en${noLocalePath}`);
  const frUrl = withTrailingSlash(`${base}/fr${noLocalePath}`);
  const defaultUrl = withTrailingSlash(`${base}${noLocalePath}`);
  const isFR = cleanPath.startsWith("/fr");
  const canonical = isFR ? frUrl : enUrl;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}
