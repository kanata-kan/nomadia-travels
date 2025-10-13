// ==========================================================
// 📄 app/[locale]/cars/page.tsx
// ==========================================================

import { getCars } from "@/lib/api/cars";
import { getMetadataStatic } from "@/lib/metadata/static";
import { BaseSection } from "@/components/ui_v2/sections";
import { getTranslations } from "next-intl/server";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string }>;
};

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "carsPage" });

  const title = t("title") || "All Cars";
  const description =
    t("description") ||
    "Browse all available cars for your Kyrgyzstan adventure.";

  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/cars`,
    image: `${process.env.NEXT_PUBLIC_BASE_URL || "https://explore-kyrgyzstan.vercel.app"}/images/cars/og-cars.webp`,
  });
}

// --------------------------------------------
// 🖼️ 2. Page Component
// --------------------------------------------
export default async function CarsPage({ params }: PageParams) {
  const { locale } = await params;

  const cars = await getCars(locale);

  return (
    <BaseSection
      items={cars}
      namespace="carsSection"
      ctaBasePath="/cars"
      variant="page"
    />
  );
}
