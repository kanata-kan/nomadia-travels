// ==========================================================
// 📄 app/[locale]/travel-packs/[id]/page.tsx
// ==========================================================

import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { TravelPackDetailsSection } from "@/components/ui_v2/sections/TravelPackDetailsSection";
import { getTravelPackById } from "@/lib/api/travel-packs";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

// --------------------------------------------
// 🧩 Page Component
// --------------------------------------------
export default async function TravelPackDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;

  const travelPack = await getTravelPackById(id, locale);
  if (!travelPack) return notFound();

  // ✅ Pass well-structured data to the section
  return <TravelPackDetailsSection travelPack={travelPack} locale={locale} />;
}

// --------------------------------------------
// ⚙️ Dynamic Metadata Builder
// --------------------------------------------
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;

  const travelPack = await getTravelPackById(id, locale);
  if (!travelPack) return {};

  return getMetadataDynamic({
    name:
      travelPack.metadata?.title ||
      travelPack.name ||
      "Kyrgyzstan Adventure Package",
    description:
      travelPack.metadata?.description ||
      travelPack.description ||
      "Discover Kyrgyzstan with our unique travel experiences.",
    image: travelPack.metadata?.image || travelPack.coverImage,
    path: `/${locale}${travelPack.metadata?.path || `/travel-packs/${travelPack.id}`}`,
    locale,
  });
}
