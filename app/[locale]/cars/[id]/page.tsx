// app/[locale]/cars/[id]/page.tsx

import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { getCarById } from "@/lib/api/cars";
import { CarDetailsSection } from "@/components/ui_v2/sections/CarDetailsSection";

type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function CarDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;

  const car = await getCarById(id, locale);
  if (!car) return notFound();

  return <CarDetailsSection car={car} locale={locale} />;
}

// 🧠 Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;

  const car = await getCarById(id, locale);
  if (!car) return {};

  return getMetadataDynamic({
    name: car.name,
    description: car.description,
    image: car.coverImage,
    path: `/${locale}/cars/${id}`,
  });
}
