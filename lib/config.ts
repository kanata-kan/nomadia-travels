// lib/config.ts
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Nomadia Travels",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Default description for Nomadia Travels website",
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  twitter: process.env.NEXT_PUBLIC_SITE_TWITTER || "@nomadia_travels",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@nomadia.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+000000000",
  },
  ogImage: "@/images/og-image.png",
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en",
    supportedLocales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES?.split(",") || [
      "en",
    ],
  },
};
