// lib/metadata/dynamic.ts
import { Metadata } from "next";
import { baseMetadata } from "./base";
import {
  buildMetadataBase,
  buildAlternates,
  buildLocalizedPath,
  withBaseUrl,
} from "./utils";
import { SITE } from "@/config/constants";

/**
 * 🧠 getMetadataDynamic
 * Builds localized, SEO-ready metadata for dynamic pages ([id]).
 */
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

  return {
    ...baseMetadata,
    ...buildMetadataBase({
      title: name || SITE.NAME,
      description: description || SITE.DESCRIPTION,
      image: safeImage,
      canonical: alternates.canonical, // ✅ always locale-matching
    }),
    alternates, // ✅ no duplication
  };
}
