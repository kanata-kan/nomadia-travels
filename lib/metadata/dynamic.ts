import { Metadata } from "next";
import { baseMetadata } from "./base";
import { SITE } from "@/config/constants";

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
    title: `${name} | ${SITE.NAME}`,
    description,
    openGraph: {
      ...baseMetadata.openGraph,
      url: `${SITE.URL}${path}`,
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
      card: "summary_large_image",
      site: SITE.TWITTER,
      title: `${name} | ${SITE.NAME}`,
      description,
      images: [image],
    },
  };
}
