import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { TravelPackDetailsSection } from "@/components/ui_v2/sections/TravelPackDetailsSection";
import { getTravelPackById } from "@/lib/api/travel-packs";

type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function TravelPackDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;

  const travelPack = await getTravelPackById(id, locale);
  if (!travelPack) return notFound();

  return <TravelPackDetailsSection travelPack={travelPack} locale={locale} />;
}

// 🧠 Dynamic Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;

  const travelPack = await getTravelPackById(id, locale);
  if (!travelPack) return {};

  return getMetadataDynamic({
    name: travelPack.name,
    description: travelPack.description,
    image: travelPack.coverImage,
    path: `/${locale}/travel-packs/${id}`,
  });
}
