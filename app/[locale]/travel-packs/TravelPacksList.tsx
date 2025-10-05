// app/travel-packs/TravelPacksList.tsx
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";
import { getTravelPacks } from "@/lib/api";

export const dynamic = "force-dynamic";

type Props = {
  locale: string;
};

export default async function TravelPacksList({ locale }: Props) {
  const packs = await getTravelPacks(locale);

  return <TravelPacksSection packs={packs} context="page" locale={locale} />;
}
