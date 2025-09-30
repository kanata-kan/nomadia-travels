// app/page.tsx
export const dynamic = "force-dynamic"; // this page will always be server-side rendered

import ActivitiesSection from "@/components/ui/ActivitiesSection/ActivitiesSection";
import CarsSection from "@/components/ui/CarsSection/CarsSection";
import HeroSection from "@/components/ui/molecules/Hero";
import ServicesSectionServer from "@/components/ui/ServicesSection/ServicesSection.server";
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";

import { getActivities, getCars, getHome, getTravelPacks } from "@/lib/api";
//import cars from "@/data/content/cars.json";
export default async function HomePage() {
  const home = await getHome({ cache: "no-store" });
  const cars = await getCars({ cache: "no-store" });
  const packs = await getTravelPacks({ cache: "no-store" });
  const activities = await getActivities({ revalidate: 60 }); // Revalidate every 60 seconds

  return (
    <main>
      <HeroSection {...home.hero} />
      <ServicesSectionServer />
      <CarsSection cars={cars.slice(0, 3)} context="home" />
      <TravelPacksSection packs={packs.slice(0, 3)} context="home" />
      <ActivitiesSection activities={activities} context="home" />
    </main>
  );
}
