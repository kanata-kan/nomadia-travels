export const dynamic = "force-dynamic";

import ActivitiesSection from "@/components/ui/ActivitiesSection/ActivitiesSection";
import CarsSection from "@/components/ui/CarsSection/CarsSection";
import HeroSection from "@/components/ui/molecules/Hero";
import ServicesSectionServer from "@/components/ui/ServicesSection/ServicesSection.server";
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";
import { getActivities, getCars, getHome, getTravelPacks } from "@/lib/api";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const home = await getHome(locale);
  const cars = await getCars(locale);
  const packs = await getTravelPacks(locale);
  const activities = await getActivities(locale);

  return (
    <main>
      <HeroSection {...home.hero} />
      <ServicesSectionServer locale={locale} />
      <CarsSection cars={cars.slice(0, 3)} context="home" />
      <TravelPacksSection
        packs={packs.slice(0, 3)}
        context="home"
        locale={locale}
      />
      <ActivitiesSection activities={activities} context="home" />
    </main>
  );
}
