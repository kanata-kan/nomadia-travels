// ==========================================================
// 📄 app/[locale]/our-story/page.tsx
// ==========================================================
// 🏕️ OurStoryPage — Learn about Nomadia Travels' mission
// Uses localized metadata (SEO + i18n) and Promise params
// ==========================================================

export const dynamic = "force-dynamic";

import OurStorySection from "@/components/ui_v2/sections/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api/our-story";
import { getMetadataStatic } from "@/lib/metadata/static";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/config/constants";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
// Uses translation namespace "ourStoryPage" for localized metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load translations
  const t = await getTranslations({ locale, namespace: "ourStoryPage" });

  const title = t("title") || "Our Story | Nomadia Travels";
  const description =
    t("description") ||
    "Learn about the journey, vision, and mission of Nomadia Travels — bringing you closer to Kyrgyzstan’s nomadic spirit.";

  // 🖼️ OG image for preview
  const image = `${SITE.URL}/images/our-story/our-story-og.webp`;

  // ✅ Return SEO metadata
  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/our-story`,
    image,
  });
}

// --------------------------------------------
// 🏕️ 2. Page Component
// --------------------------------------------
// Fetches localized “Our Story” content and renders it
// --------------------------------------------
export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const story = await getOurStory(locale);

  return <OurStorySection data={story} locale={locale} />;
}
