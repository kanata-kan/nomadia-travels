// app/travel-packs/TravelPacksList.tsx
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";
import CategorySection from "@/components/ui_v2/sections/CategorySection";
import { getTravelPacks } from "@/lib/api";

export const dynamic = "force-dynamic";

type Props = {
  locale: string;
};

export default async function TravelPacksList({ locale }: Props) {
  const travelPacks = await getTravelPacks(locale);

  return (
    <CategorySection
      items={travelPacks}
      namespace="travelPacks"
      ctaBasePath="/travel-packs"
      variant="page"
    />
  );
}
