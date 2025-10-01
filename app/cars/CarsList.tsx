// app/cars/ CarsList.tsx
import CarsSection from "@/components/ui/CarsSection/CarsSection";
import { getCars } from "@/lib/api";
export const dynamic = "force-dynamic";

export default async function CarsList() {
  const cars = await getCars();
  return <CarsSection cars={cars} context="page" />;
}
