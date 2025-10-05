// app/[locale]/cars/[id]/page.tsx
import { notFound } from "next/navigation";
import { getCarById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import CarDetailsSection from "@/components/ui/CarsSection/CarDetailsSection";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

// 🧩 Page
export default async function CarDetailsPage({ params }: Props) {
  const { id, locale } = await params;

  const car = await getCarById(id, locale);
  if (!car) return notFound();

  return <CarDetailsSection car={car} />;
}

// 🧠 Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id, locale } = await params;

  const car = await getCarById(id, locale);
  if (!car) return {};

  return getMetadataDynamic({
    name: car.name,
    description: car.description,
    image: car.coverImage,
    path: `/${locale}/cars/${id}`,
  });
}
