// ==========================================================
// 📄 app/[locale]/page.tsx
// ==========================================================
// 🏡 HomePage — Explore Kyrgyzstan main landing page
// Uses Smart Metadata Layer + Promise params
// ==========================================================

export const dynamic = "force-dynamic";

import { SITE } from "@/config/constants";
import { getStaticPageMetadata } from "@/lib/metadata/smart";
import { HeroSection } from "@/components/ui_v2/sections/HeroSection";
import { ServicesSectionServer } from "@/components/ui_v2/sections/ServicesSection";
import { BaseSection } from "@/components/ui_v2/sections";
import { getHome } from "@/lib/api/home";
import { getCars } from "@/lib/api/cars";
import { getTravelPacks } from "@/lib/api/travel-packs";
import { getActivities } from "@/lib/api/activities";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "homePage",
    path: "",
    imagePath: "/images/home/hero-home.webp",
    fallbackTitle: SITE.NAME,
    fallbackDescription:
      SITE.DESCRIPTION ||
      "Explore the majestic landscapes, lakes, and nomadic culture of Kyrgyzstan — powered by Nomadia Travels.",
  });
}

// 🏡 Page
export default async function HomePage({ params }: PageParams) {
  const { locale } = await params;

  const [home, cars, travelPacks, activities] = await Promise.all([
    getHome(locale),
    getCars(locale),
    getTravelPacks(locale),
    getActivities(locale),
  ]);

  return (
    <main>
      <HeroSection {...home.hero} />
      <ServicesSectionServer locale={locale} />

      <BaseSection
        items={cars}
        namespace="carsSection"
        ctaBasePath="/cars"
        variant="home"
        showCTA
      />

      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="alt"
        showCTA
      />

      <BaseSection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="dark"
        showCTA
      />
    </main>
  );
}
