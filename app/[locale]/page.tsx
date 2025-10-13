// ==========================================================
// 📄 app/[locale]/page.tsx
// ==========================================================
// 🏡 HomePage — Explore Kyrgyzstan main landing page
// Keeps the old working structure with Promise params
// Adds dynamic SEO metadata (same system as CarsPage)
// ==========================================================

export const dynamic = "force-dynamic";

import { BaseSection } from "@/components/ui_v2/sections";
import { HeroSection } from "@/components/ui_v2/sections/HeroSection";
import { ServicesSectionServer } from "@/components/ui_v2/sections/ServicesSection";
import { getActivities } from "@/lib/api/activities";
import { getCars } from "@/lib/api/cars";
import { getHome } from "@/lib/api/home";
import { getTravelPacks } from "@/lib/api/travel-packs";

import { getTranslations } from "next-intl/server";
import { getMetadataStatic } from "@/lib/metadata/static";
import { SITE } from "@/config/constants";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
// This keeps your working Promise params structure.
// Generates localized metadata for the home page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load localized messages from the "homePage" namespace
  const t = await getTranslations({ locale, namespace: "homePage" });

  const title = t("title") || SITE.NAME;
  const description =
    t("description") ||
    SITE.DESCRIPTION ||
    "Explore the majestic landscapes, lakes, and nomadic culture of Kyrgyzstan — powered by Nomadia Travels.";

  // 🖼️ OG image for social media preview
  const image = `${SITE.URL}/images/home/hero-home.webp`;

  // ✅ Return SEO metadata with OpenGraph + Twitter tags
  return getMetadataStatic({
    title,
    description,
    path: `/${locale}`,
    image,
  });
}

// --------------------------------------------
// 🏡 2. HomePage Component
// --------------------------------------------
// Uses the same working pattern as before (Promise params)
// --------------------------------------------
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 📦 Load all data for the homepage
  const home = await getHome(locale);
  const cars = await getCars(locale);
  const travelPacks = await getTravelPacks(locale);
  const activities = await getActivities(locale);

  return (
    <main>
      {/* 🏔️ Hero Section */}
      <HeroSection {...home.hero} />

      {/* 🧭 Services Section */}
      <ServicesSectionServer locale={locale} />

      {/* 🚗 Cars Section */}
      <BaseSection
        items={cars}
        namespace="carsSection"
        ctaBasePath="/cars"
        variant="home"
        showCTA
      />

      {/* 🧳 Travel Packs Section */}
      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="alt"
        showCTA
      />

      {/* 🏞️ Activities Section */}
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
