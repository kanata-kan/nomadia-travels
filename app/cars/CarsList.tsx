// app/cars/CarsList.tsx
import { getCars } from "@/lib/api";
import CarsSection from "@/components/ui/sections/CarsSection";

export default async function CarsList() {
  const cars = await getCars({ revalidate: 60 }); // Revalidate every 60 seconds
  return <CarsSection cars={cars} context="page" />;
}
