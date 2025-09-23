// app/tests/home/page.tsx
export const dynamic = "force-dynamic"; // Explicit SSR

import HeroSection from "@/components/ui/molecules/Hero";
import CarsSection from "@/components/ui/sections/CarsSection";
import ServicesSectionServer from "@/components/ui/sections/ServicesSection.server";
import { getCars, getHome } from "@/lib/api";

export default async function HomePage() {
  const home = await getHome({ cache: "no-store" }); // دايما fresh
  const cars = await getCars({ cache: "force-cache" });

  return (
    <main>
      <HeroSection {...home.hero} />
      <ServicesSectionServer />
      <CarsSection cars={cars.slice(0, 3)} />
    </main>
  );
}
