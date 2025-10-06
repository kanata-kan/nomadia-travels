// config/constants.ts
export const SITE = {
  NAME: process.env.NEXT_PUBLIC_SITE_NAME || "Nomadia Travels",
  DESCRIPTION:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Discover the beauty of Kyrgyzstan with Nomadia Travels",
  URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  TWITTER: process.env.NEXT_PUBLIC_SITE_TWITTER || "@nomadia_travels",
  CONTACT_EMAIL:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nomadia-travels.com",
  CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+996-700-123-456",
  DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en",
  SUPPORTED_LOCALES: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(",") || [
    "en",
    "fr",
  ],
  OG_IMAGE: "/og-image.png",
  VERSION: "1.0.0",
  AUTHOR: "Kanata",
  COPYRIGHT: `© ${new Date().getFullYear()} Nomadia Travels. All rights reserved.`,
};
