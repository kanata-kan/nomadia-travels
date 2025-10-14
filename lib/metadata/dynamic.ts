// lib/metadata/dynamic.ts
import { Metadata } from "next";
import { baseMetadata } from "./base";
import {
  buildMetadataBase,
  buildAlternates,
  buildLocalizedPath,
} from "./utils";
import { SITE } from "@/config/constants";

/**
 * 🧠 getMetadataDynamic
 * Builds localized, SEO-ready metadata for dynamic pages ([id]).
 * Ensures OG/Twitter images are absolute (for WhatsApp/Facebook/Twitter).
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
  image?: string; // may be relative; we'll absolutize
  path: string; // relative to locale (e.g. "/cars/{id}")
  locale?: string;
}): Metadata {
  const safeLocale = locale === "fr" ? "fr" : "en";
  const localizedPath = buildLocalizedPath(safeLocale, path);

  // ✅ convert relative to absolute (social crawlers need absolute)
  const relativeOrDefault = image || SITE.OG_IMAGE;
  const safeImage = relativeOrDefault.startsWith("http")
    ? relativeOrDefault
    : `${SITE.URL}${relativeOrDefault.startsWith("/") ? relativeOrDefault : `/${relativeOrDefault}`}`;

  const safeTitle = name || SITE.NAME;

  return {
    ...baseMetadata,
    ...buildMetadataBase({
      title: safeTitle,
      description: description || SITE.DESCRIPTION,
      image: safeImage,
      path: localizedPath, // ✅ pass relative; base builder resolves canonical
    }),
    alternates: buildAlternates(safeLocale, localizedPath),
  };
}
