// ==========================================================
// 🧠 Smart Metadata Layer (Static Pages)
// - Centralizes i18n + SEO building for static (non-[id]) routes
// - Removes repetition across pages
// - v3.2 Validator Edition
// ==========================================================

import { SITE } from "@/config/constants";
import { getMetadataStatic } from "@/lib/metadata/static";
import { withBaseUrl } from "@/lib/metadata/utils";
import { getTranslations } from "next-intl/server";

type StaticMetaArgs = {
  locale: string; // 'en' | 'fr'
  namespace: string; // i18n namespace (e.g., 'homePage')
  path: string; // route path without locale (e.g., '/gallery')
  imagePath?: string; // optional OG image (relative or absolute)
  fallbackTitle?: string;
  fallbackDescription?: string;
};

// ✅ Exported Function (Named Export)
export async function getStaticPageMetadata({
  locale,
  namespace,
  path,
  imagePath,
  fallbackTitle = SITE.NAME,
  fallbackDescription = SITE.DESCRIPTION,
}: StaticMetaArgs) {
  // 🧠 Load localized strings
  const t = await getTranslations({ locale, namespace });

  const title = t("title") || fallbackTitle;
  const description = t("description") || fallbackDescription;

  // 🖼️ Ensure absolute OG image URL
  const image = imagePath ? withBaseUrl(imagePath) : SITE.OG_IMAGE;

  // 🧩 Generate metadata
  const metadata = getMetadataStatic({
    title,
    description,
    path: `/${locale}${path.startsWith("/") ? path : `/${path}`}`,
    image,
    locale,
  });

  // 🧠 SEO Validator (Static Pages)
  const canonical = String(metadata?.alternates?.canonical || "");
  if (!canonical.includes(`/${locale}/`)) {
    console.warn(
      `[SEO][STATIC] ⚠️ Invalid canonical for locale "${locale}" → ${canonical}\n` +
        `   (Check path argument: "${path}")`,
    );
  } else {
    console.log(
      `[SEO][STATIC] ✅ Canonical OK for locale "${locale}" → ${canonical}`,
    );
  }

  return metadata;
}

// ==========================================================
// ✅ Confirm module loaded successfully
// ==========================================================
console.log("[SEO] Smart Metadata Layer loaded successfully ✅");
