// 🧱 app/[local]/page.tsx

export const dynamic = "force-dynamic";

import HeroSection from "@/components/ui/molecules/Hero";
import { BaseSection } from "@/components/ui_v2/sections";
import { ServicesSectionServer } from "@/components/ui_v2/sections/ServicesSection";
import { getActivities, getHome, getTravelPacks } from "@/lib/api";
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
      <BaseSection
        items={cars}
        namespace="carsSection"
        ctaBasePath="/cars"
        variant="home"
        showCTA
      />

      <BaseSection
        items={travelPacks}
        namespace="travelPacks"
        ctaBasePath="/travel-packs"
        variant="alt"
        showCTA
      />

      <BaseSection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="dark"
        showCTA
      />
    </main>
  );
}
