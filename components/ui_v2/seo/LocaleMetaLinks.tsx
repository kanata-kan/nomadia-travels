"use client";

import { SITE } from "@/config/constants";

export default function LocaleMetaLinks({ path }: { path: string }) {
  // ✅ نتحقق واش حنا فـlocal أو production
  const isLocal =
    typeof window !== "undefined" && window.location.hostname === "localhost";
  const base = isLocal
    ? "https://explore-kyrgyzstan.vercel.app"
    : SITE.URL.replace(/\/$/, "");

  // ✅ نبني المسار النظيف
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const noLocalePath = cleanPath.replace(/^\/(en|fr)/, "");

  // ✅ نبني الروابط
  const enUrl = `${base}/en${noLocalePath}`;
  const frUrl = `${base}/fr${noLocalePath}`;
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
