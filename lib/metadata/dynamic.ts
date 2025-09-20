// lib/metadata/dynamic.ts
import { Metadata } from "next";
import { baseMetadata } from "./base";
import { siteConfig } from "@/lib/config";

export function getMetadataDynamic({
  name,
  description,
  image,
  path,
}: {
  name: string;
  description: string;
  image: string;
  path: string;
}): Metadata {
  return {
    ...baseMetadata,
    title: `${name} | ${siteConfig.name}`,
    description,
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${siteConfig.url}${path}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      images: [image],
    },
  };
}
