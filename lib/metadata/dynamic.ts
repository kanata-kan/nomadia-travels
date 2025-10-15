// ==========================================================
// 🧠 getMetadataDynamic (v3.2 Validator Edition)
// - Builds localized, SEO-ready metadata for dynamic pages ([id])
// - Includes real-time canonical validation
// ==========================================================

import { Metadata } from "next";
import { baseMetadata } from "./base";
import {
  buildMetadataBase,
  buildAlternates,
  buildLocalizedPath,
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
  // Normalize locale
  const safeLocale = locale === "fr" ? "fr" : "en";

  // Build canonical + alternates
  const localizedPath = buildLocalizedPath(safeLocale, path);
  const alternates = buildAlternates(safeLocale, localizedPath);

  // Ensure absolute OG image
  const relativeOrDefault = image || SITE.OG_IMAGE;
  const safeImage = relativeOrDefault.startsWith("http")
    ? relativeOrDefault
    : `${SITE.URL}${
        relativeOrDefault.startsWith("/")
          ? relativeOrDefault
          : `/${relativeOrDefault}`
      }`;

  // Compose metadata
  const metadata = {
    ...baseMetadata,
    ...buildMetadataBase({
      title: name || SITE.NAME,
      description: description || SITE.DESCRIPTION,
      image: safeImage,
      canonical: alternates.canonical,
    }),
    alternates,
  };

  return metadata;
}
