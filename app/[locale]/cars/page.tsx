// ==========================================================
// 📄 app/[locale]/cars/page.tsx
// ==========================================================
// 🚗 CarsPage — Browse all cars
// Uses Smart Metadata Layer + Promise params
// ==========================================================

import { getCars } from "@/lib/api/cars";
import { BaseSection } from "@/components/ui_v2/sections";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "carsPage",
    path: "/cars",
    imagePath: "/images/cars/og-cars.webp",
    fallbackTitle: "All Cars",
    fallbackDescription:
      "Browse all available cars for your Kyrgyzstan adventure.",
  });
}

// 🖼️ Page
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
