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
 * Builds localized, SEO-ready, and OG-complete metadata for dynamic pages.
 * Ensures image URLs are absolute for WhatsApp / social crawlers.
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

  // ✅ Convert relative image to absolute URL for external crawlers (WhatsApp, FB, etc.)
  const safeImage = image?.startsWith("http")
    ? image
    : `${SITE.URL}${image?.startsWith("/") ? image : `/${image}`}`;

  const safeTitle = name || SITE.NAME;

  return {
    ...baseMetadata,
    ...buildMetadataBase({
      title: safeTitle,
      description: description || SITE.DESCRIPTION,
      image: safeImage,
      path: withBaseUrl(localizedPath),
    }),
    alternates: buildAlternates(safeLocale, localizedPath),
  };
}
