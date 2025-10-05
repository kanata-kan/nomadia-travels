import { notFound } from "next/navigation";
import { getTravelPackById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import TravelPackDetailsSection from "@/components/ui/TravelPacksSection/TravelPackDetailsSection";

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function TravelPackDetailsPage({ params }: Props) {
  // ✅ ننتظر params لأنه async في Next.js 15
  const { id, locale } = await params;

  // ✅ نجيب الداتا حسب اللغة
  const travelPack = await getTravelPackById(id, locale);

  if (!travelPack) return notFound();

  return <TravelPackDetailsSection travelPack={travelPack} />;
}

// ✅ Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;

  const travelPack = await getTravelPackById(id, locale);
  if (!travelPack) return {};

  return getMetadataDynamic({
    name: travelPack.name,
    description: travelPack.description,
    image: travelPack.coverImage,
    path: `/${locale}/travel-packs/${id}`, // ✅ مهم جدًا نضيف locale فالمسار
  });
}
