// lib/metadata/static.ts
import { Metadata } from "next";
import { baseMetadata } from "./base";
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
  image?: string; // may be relative; we'll absolutize below
  path?: string; // should be relative (e.g. "/cars")
  locale?: string;
}): Metadata {
  const safeLocale = locale === "fr" ? "fr" : "en";
  const localizedPath = buildLocalizedPath(safeLocale, path);
  const safeDescription = description ?? SITE.DESCRIPTION;

  // ✅ absolutize image for external crawlers
  const safeImage = image?.startsWith("http")
    ? image
    : `${SITE.URL}${image?.startsWith("/") ? image : `/${image}`}`;

  return {
    ...baseMetadata,
    ...buildMetadataBase({
      title,
      description: safeDescription,
      image: safeImage,
      path: localizedPath, // ✅ pass relative; base builder resolves canonical
    }),
    alternates: buildAlternates(safeLocale, localizedPath), // ✅ single source of truth
  };
}
