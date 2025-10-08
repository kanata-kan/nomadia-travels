// app/[locale]/travel-packs/page.tsx
export const revalidate = 43200; // 12h ISR

import { getMetadataStatic } from "@/lib/metadata/static";
import { getTravelPacks } from "@/lib/api";
import CategorySection from "@/components/ui_v2/sections/CategorySection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return getMetadataStatic({
    title: locale === "fr" ? "Tous les forfaits de voyage" : "All Travel Packs",
    description:
      locale === "fr"
        ? "Découvrez nos formules de voyage soigneusement sélectionnées pour votre prochaine aventure."
        : "Explore our curated travel packs for your next adventure.",
    path: `/${locale}/travel-packs`,
    image: "/og-travel-packs.png",
  });
}

export default async function TravelPacksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🧠 Fetch data directly here
  const travelPacks = await getTravelPacks(locale);

  // 🧱 Render directly inside the same file
  return (
    <main>
      <CategorySection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="page"
      />
    </main>
  );
}
