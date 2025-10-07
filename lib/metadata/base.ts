// lib/metadata/base.ts

import { Metadata } from "next";
import { SITE } from "@/config/constants";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: {
    default: SITE.NAME,
    template: `%s | ${SITE.NAME}`,
  },
  description: SITE.DESCRIPTION,
  keywords: [
    "Kyrgyzstan",
    "Nomadia Travels",
    "Travel",
    "Tours",
    "Central Asia",
    "Hiking",
    "Cars rental",
    "Adventure",
    "Explore Kyrgyzstan",
  ],
  openGraph: {
    title: SITE.NAME,
    description: SITE.DESCRIPTION,
    url: SITE.URL,
    siteName: SITE.NAME,
    images: [
      {
        url: SITE.OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE.NAME,
      },
    ],
    locale: "en_US",
  },
};
