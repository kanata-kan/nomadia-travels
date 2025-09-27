// app/cars/[id]/page.tsx
import { notFound } from "next/navigation";
import { getCarById } from "@/lib/api";
import CarDetailsSection from "@/components/ui/sections/CarDetailsSection";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";

type Props = { params: Promise<{ id: string }> };

export default async function CarDetailsPage({ params }: Props) {
  const { id } = await params;

  const car = await getCarById(id);
  if (!car) return notFound();

  return <CarDetailsSection car={car} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ⬅️ حتى هنا خاص await
  const { id } = await params;

  const car = await getCarById(id);
  if (!car) return {};

  return getMetadataDynamic({
    name: car.name,
    description: car.description,
    image: car.coverImage,
    path: `/cars/${id}`,
  });
}
