// ==========================================================
// 📄 app/[locale]/cars/[id]/page.tsx
// ==========================================================

import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { getCarById } from "@/lib/api/cars";
import { CarDetailsSection } from "@/components/ui_v2/sections/CarDetailsSection";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

// --------------------------------------------
// 🧩 Page Component
// --------------------------------------------
export default async function CarDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const car = await getCarById(id, locale);
  if (!car) return notFound();

  return <CarDetailsSection car={car} locale={locale} />;
}

// --------------------------------------------
// ⚙️ Dynamic Metadata Builder
// --------------------------------------------
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;

  const car = await getCarById(id, locale);
  if (!car) return {};

  // ✅ Use metadata from JSON if available, else fallback
  return getMetadataDynamic({
    name: car.metadata?.title || car.name,
    description: car.metadata?.description || car.description,
    image: car.metadata?.image || car.coverImage,
    path: `/${locale}${car.metadata?.path || `/cars/${car.id}`}`,
    locale,
  });
}
