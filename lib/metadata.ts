// lib/metadata.ts
import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://nomadia-travels.com"), // <-- من بعد غادي تحط دومين ديالك الحقيقي
  title: "Nomadia Travels",
  description: "Explore the world with Nomadia Travels",
  openGraph: {
    title: "Nomadia Travels",
    description: "Explore the world with Nomadia Travels",
    url: "https://nomadia-travels.com",
    siteName: "Nomadia Travels",
    images: [
      {
        url: "/og-image.png", // حط صورة داخل public
        width: 1200,
        height: 630,
        alt: "Nomadia Travels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomadia Travels",
    description: "Explore the world with Nomadia Travels",
    images: ["/og-image.png"],
  },
};
