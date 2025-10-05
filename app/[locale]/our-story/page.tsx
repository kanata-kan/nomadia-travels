export const dynamic = "force-dynamic";

import OurStorySection from "@/components/ui/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api";
import { getMetadataStatic } from "@/lib/metadata/static";

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

export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const story = await getOurStory(locale);

  return <OurStorySection ourStory={story} locale={locale} />;
}
