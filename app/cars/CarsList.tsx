// app/cars/CarsList.tsx
import CarsSection from "@/components/ui/CarsSection/CarsSection";
import { getCars } from "@/lib/api";

export default async function CarsList() {
  const cars = await getCars({ revalidate: 60 }); // Revalidate every 60 seconds
  return <CarsSection cars={cars} context="page" />;
}
