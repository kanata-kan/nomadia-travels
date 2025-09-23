// app/home/page.tsx
export const dynamic = "force-dynamic";
import { getHome } from "@/lib/api";
import ServicesSectionServer from "@/components/ui/sections/ServicesSection.server";
import HeroSection from "@/components/ui/molecules/Hero";

export default async function HomePage() {
  const home = await getHome({ cache: "no-store" });

  return (
    <main>
      <HeroSection
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        heroImage={home.hero.heroImage}
        ctaText={home.hero.ctaText}
        ctaLink={home.hero.ctaLink}
        align="center"
        overlay="dark"
      />
      <ServicesSectionServer />
    </main>
  );
}
