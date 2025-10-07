// app/cars/ CarsList.tsx
import CarsSection from "@/components/ui/CarsSection/CarsSection";
import { getCars } from "@/lib/api/cars";
export const dynamic = "force-dynamic";

export default async function CarsList({ locale }: { locale: string }) {
  const cars = await getCars(locale);

  return <CarsSection cars={cars} context="page" />;
}
