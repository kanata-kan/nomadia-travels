// ==========================================================
// 📄 app/[locale]/travel-packs/page.tsx
// ==========================================================
// 🧳 TravelPacksPage — Explore curated travel packs for Kyrgyzstan
// Uses Promise params pattern + localized SEO metadata
// ==========================================================

export const revalidate = 43200; // 12h ISR (refresh twice a day)
export const dynamic = "force-dynamic";

import { getMetadataStatic } from "@/lib/metadata/static";
import { BaseSection } from "@/components/ui_v2/sections";
import { getTravelPacks } from "@/lib/api/travel-packs";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/config/constants";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
// Generates localized title, description, and OG tags per locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load translations from the "travelPacksPage" namespace
  const t = await getTranslations({ locale, namespace: "travelPacksPage" });

  const title = t("title") || "All Travel Packs | Explore Kyrgyzstan";
  const description =
    t("description") ||
    "Explore our curated travel packs and discover your next unforgettable adventure across Kyrgyzstan.";

  // 🖼️ OG image (social preview)
  const image = `${SITE.URL}/images/travel-packs/og-travel-packs.webp`;

  // ✅ Return SEO metadata object
  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/travel-packs`,
    image,
  });
}

// --------------------------------------------
// 🧳 2. Travel Packs Page Component
// --------------------------------------------
// Fetches localized travel packs and renders the BaseSection UI
// --------------------------------------------
export default async function TravelPacksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 📦 Fetch localized travel packs data
  const travelPacks = await getTravelPacks(locale);

  return (
    <main>
      {/* 🧳 Display all travel packs in full-page variant */}
      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="page"
      />
    </main>
  );
}
