import { SITE } from "@/config/constants";

/**
 * 🧠 LocaleMetaLinks v3.3 (Server-Side version)
 * Generates <link rel="canonical"> and hreflang alternates
 * Compatible with SSR + Google SEO
 */
function withTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export default function LocaleMetaLinks({ path }: { path: string }) {
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
