import { Metadata } from "next";
import { baseMetadata } from "./base";
import {
  buildMetadataBase,
  buildAlternates,
  buildLocalizedPath,
  withBaseUrl,
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
  const safeDescription = description ?? SITE.DESCRIPTION;

  return {
    ...baseMetadata,
    ...buildMetadataBase({
      title,
      description: safeDescription,
      image,
      path: withBaseUrl(localizedPath),
    }),
    alternates: buildAlternates(safeLocale, localizedPath),
  };
}
