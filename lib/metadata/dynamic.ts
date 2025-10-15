// lib/metadata/dynamic.ts
import { Metadata } from "next";
import {
  buildAlternates,
  buildLocalizedPath,
  buildMetadataBase,
} from "./utils";
import { SITE } from "@/config/constants";

export function getMetadataDynamic({
  name,
  description,
  image,
  path,
  locale = SITE.DEFAULT_LOCALE,
}: {
  name: string;
  description: string;
  image?: string;
  path: string;
  locale?: string;
}): Metadata {
  const safeLocale = locale === "fr" ? "fr" : "en";
  const localizedPath = buildLocalizedPath(safeLocale, path);
  const alternates = buildAlternates(safeLocale, localizedPath);
  const relativeOrDefault = image || SITE.OG_IMAGE;
  const safeImage = relativeOrDefault.startsWith("http")
    ? relativeOrDefault
    : `${SITE.URL}${relativeOrDefault.startsWith("/") ? relativeOrDefault : `/${relativeOrDefault}`}`;

  const metadata = {
    metadataBase: new URL(SITE.URL),
    ...buildMetadataBase({
      title: name || SITE.NAME,
      description: description || SITE.DESCRIPTION,
      image: safeImage,
      canonical: alternates.canonical,
    }),
    alternates,
  };

  // اختيارية: لوج فالديف
  const canonical = String(metadata?.alternates?.canonical || "");
  if (!canonical.includes(`/${safeLocale}/`)) {
    console.warn(
      `[SEO][DYNAMIC] ⚠️ Invalid canonical for "${safeLocale}" → ${canonical}`,
    );
  }

  return metadata;
}
