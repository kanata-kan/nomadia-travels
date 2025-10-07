export const dynamic = "force-dynamic";

import ActivitiesSection from "@/components/ui/ActivitiesSection/ActivitiesSection";
import HeroSection from "@/components/ui/molecules/Hero";
import ServicesSectionServer from "@/components/ui/ServicesSection/ServicesSection.server";
import TravelPacksSection from "@/components/ui/TravelPacksSection/TravelPacksSection";
import { getActivities, getHome, getTravelPacks } from "@/lib/api";
import CategorySection from "@/components/ui_v2/sections/CategorySection";
import { getCars } from "@/lib/api/cars";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const home = await getHome(locale);
  const cars = await getCars(locale);
  const travelPacks = await getTravelPacks(locale);
  const activities = await getActivities(locale);

  return (
    <main>
      <HeroSection {...home.hero} />
      <ServicesSectionServer locale={locale} />
      <CategorySection
        items={cars}
        namespace="carsSection"
        ctaBasePath="/cars"
        variant="home"
      />
      <CategorySection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="home"
      />
      <CategorySection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="home"
      />
    </main>
  );
}
