"use client";

import { SITE } from "@/config/constants";

// دالة لتطبيع URL
function normalize(url: string) {
  return url.endsWith("/") && url !== "/" ? url.slice(0, -1) : url;
}

export default function LocaleMetaLinks({ path }: { path: string }) {
  const base = SITE.URL.replace(/\/$/, ""); // نضمن أنه بدون slash نهائي
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, "");

  const enUrl = normalize(`${base}/en${noLocalePath}`);
  const frUrl = normalize(`${base}/fr${noLocalePath}`);
  const canonical = cleanPath.includes("/fr") ? frUrl : enUrl;

  return (
    <>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </>
  );
}
