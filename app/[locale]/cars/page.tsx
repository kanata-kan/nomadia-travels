// app/[locale]/cars/page.tsx
import { getCars } from "@/lib/api/cars";
import { getMetadataStatic } from "@/lib/metadata/static";
import CarsSection from "@/components/ui_v2/sections/CarsSection";

type PageParams = {
  params: Promise<{ locale: string }>;
};

// 🧠 Static Metadata
export const metadata = getMetadataStatic({
  title: "All Cars",
  description: "Browse all available cars for your Kyrgyzstan adventure.",
  path: "/cars",
});

export default async function CarsPage({ params }: PageParams) {
  const { locale } = await params; // ✅ لازم await

  const cars = await getCars(locale);

  return <CarsSection cars={cars} variant="page" />;
}
