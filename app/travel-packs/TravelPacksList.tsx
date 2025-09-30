// app/travel-packs/TravelPacksList.tsx
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";
import { getTravelPacks } from "@/lib/api";

export default async function TravelPacksList() {
  const packs = await getTravelPacks({ revalidate: 60 }); // Revalidate every 60 seconds

  return <TravelPacksSection packs={packs} context="page" />;
}
