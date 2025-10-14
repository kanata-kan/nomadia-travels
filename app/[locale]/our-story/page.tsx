// ==========================================================
// 📄 app/[locale]/our-story/page.tsx
// ==========================================================
// 🏕️ OurStoryPage — Learn about Nomadia Travels' mission
// Uses Smart Metadata Layer + Promise params
// ==========================================================

export const dynamic = "force-dynamic";

import OurStorySection from "@/components/ui_v2/sections/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api/our-story";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "ourStoryPage",
    path: "/our-story",
    imagePath: "/images/our-story/our-story-og.webp",
    fallbackTitle: "Our Story | Nomadia Travels",
    fallbackDescription:
      "Learn about the journey, vision, and mission of Nomadia Travels — bringing you closer to Kyrgyzstan’s nomadic spirit.",
  });
}

// 🏕️ Page
export default async function OurStoryPage({ params }: PageParams) {
  const { locale } = await params;
  const story = await getOurStory(locale);

  return <OurStorySection data={story} locale={locale} />;
}
