// lib/metadata/static.ts
import { Metadata } from "next";
import {
  buildMetadataBase,
  buildAlternates,
  buildLocalizedPath,
} from "./utils";
import { SITE } from "@/config/constants";

export function getMetadataStatic({
  title,
  description,
  image = SITE.OG_IMAGE,
  path = "",
  locale = SITE.DEFAULT_LOCALE,
}: {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  locale?: string;
}): Metadata {
  const safeLocale = locale === "fr" ? "fr" : "en";
  const localizedPath = buildLocalizedPath(safeLocale, path);
  const alternates = buildAlternates(safeLocale, localizedPath);
  const safeImage = image.startsWith("http")
    ? image
    : `${SITE.URL}${image.startsWith("/") ? image : `/${image}`}`;

  const metadata = {
    metadataBase: new URL(SITE.URL),
    ...buildMetadataBase({
      title,
      description: description ?? SITE.DESCRIPTION,
      image: safeImage,
      canonical: alternates.canonical,
    }),
    alternates,
  };

  // اختيارية: لوج فالديف
  const canonical = String(metadata?.alternates?.canonical || "");
  if (!canonical.includes(`/${safeLocale}/`)) {
    console.warn(
      `[SEO][STATIC] ⚠️ Invalid canonical for "${safeLocale}" → ${canonical}`,
    );
  }

  return metadata;
}
