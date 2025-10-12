// app/[locale]/our-story/page.tsx
export const dynamic = "force-dynamic";

import OurStorySection from "@/components/ui_v2/sections/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api";
import { getMetadataStatic } from "@/lib/metadata/static";

// Dynamically generate metadata per locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return getMetadataStatic({
    title: locale === "fr" ? "Notre Histoire" : "Our Story",
    description:
      locale === "fr"
        ? "Découvrez le parcours et la mission de Nomadia Travels."
        : "Learn about the journey and mission of Nomadia Travels.",
    path: `/${locale}/our-story`,
    image: "/images/our-story-og.png",
  });
}

// Main page component
export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const story = await getOurStory(locale);

  return <OurStorySection data={story} locale={locale} />;
}
