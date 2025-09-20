// lib/metadata/static.ts
import { Metadata } from "next";
import { baseMetadata } from "./base";
import { siteConfig } from "@/lib/config";

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
    title: `${title} | ${siteConfig.name}`,
    description: description || siteConfig.description,
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${siteConfig.url}${path || ""}`,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      images: [image || siteConfig.ogImage],
    },
  };
}
