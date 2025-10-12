import { Metadata } from "next";
import { baseMetadata } from "./base";
import { SITE } from "@/config/constants";

export function getMetadataStatic({
  title,
  description,
  image,
  path,
}: {
  title: string;
  description?: string;
  image?: string;
  path?: string;
}): Metadata {
  return {
    ...baseMetadata,
    title: `${title} | ${SITE.NAME}`,
    description: description || SITE.DESCRIPTION,
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${SITE.URL}${path || ""}`,
      images: [
        {
          url: image || SITE.OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.TWITTER,
      title: `${title} | ${SITE.NAME}`,
      description: description || SITE.DESCRIPTION,
      images: [image || SITE.OG_IMAGE],
    },
  };
}
