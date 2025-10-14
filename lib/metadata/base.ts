import { Metadata } from "next";
import { SITE } from "@/config/constants";
import { DEFAULT_SEO } from "@/config/seo";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: {
    default: SITE.NAME,
    template: `%s | ${SITE.NAME}`,
  },
  description: SITE.DESCRIPTION,
  // ✅ Centralized keywords from DEFAULT_SEO
  keywords: DEFAULT_SEO.keywords,
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
