import { notFound } from "next/navigation";
import { getTravelPackById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import TravelPackDetailsSection from "@/components/ui/TravelPacksSection/TravelPackDetailsSection";

type Props = { params: Promise<{ id: string }> };

export default async function TravelPackDetailsPage({ params }: Props) {
  const { id } = await params;

  const travelPack = await getTravelPackById(id);
  if (!travelPack) return notFound();

  return <TravelPackDetailsSection travelPack={travelPack} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const travelPack = await getTravelPackById(id);
  if (!travelPack) return {};

  return getMetadataDynamic({
    name: travelPack.name,
    description: travelPack.description,
    image: travelPack.coverImage,
    path: `/travel-packs/${id}`,
  });
}
