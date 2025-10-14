import { Metadata } from "next";
import { baseMetadata } from "./base";
import {
  buildMetadataBase,
  buildAlternates,
  buildLocalizedPath,
  withBaseUrl,
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
  const safeImage = image || SITE.OG_IMAGE;
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
