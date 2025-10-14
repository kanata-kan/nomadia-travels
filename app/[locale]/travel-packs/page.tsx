// ==========================================================
// 📄 app/[locale]/travel-packs/page.tsx
// ==========================================================
// 🧳 TravelPacksPage — Explore curated travel packs
// Uses Smart Metadata Layer + Promise params
// ==========================================================

export const revalidate = 43200; // 12h ISR
export const dynamic = "force-dynamic";

import { BaseSection } from "@/components/ui_v2/sections";
import { getTravelPacks } from "@/lib/api/travel-packs";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "travelPacksPage",
    path: "/travel-packs",
    imagePath: "/images/travel-packs/og-travel-packs.webp",
    fallbackTitle: "All Travel Packs | Explore Kyrgyzstan",
    fallbackDescription:
      "Explore our curated travel packs and discover your next unforgettable adventure across Kyrgyzstan.",
  });
}

// 🧳 Page
export default async function TravelPacksPage({ params }: PageParams) {
  const { locale } = await params;
  const travelPacks = await getTravelPacks(locale);

  return (
    <main>
      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="page"
      />
    </main>
  );
}
