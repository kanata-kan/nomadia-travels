// app/travel-packs/TravelPacksList.tsx
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";
import { getTravelPacks } from "@/lib/api";
export const dynamic = "force-dynamic";

export default async function TravelPacksList() {
  const packs = await getTravelPacks();

  return <TravelPacksSection packs={packs} context="page" />;
}
