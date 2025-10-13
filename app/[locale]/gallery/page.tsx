// ==========================================================
// 📄 app/[locale]/gallery/page.tsx
// ==========================================================
// 🖼️ GalleryPage — Discover Kyrgyzstan’s beauty through curated images
// Keeps the Promise params pattern used in your project
// Adds dynamic SEO metadata (same system as CarsPage & HomePage)
// ==========================================================

export const dynamic = "force-dynamic";

import GallerySection_v2 from "@/components/ui_v2/sections/GallerySection/GallerySection";
import { getGallery } from "@/lib/api/gallery";
import { getMetadataStatic } from "@/lib/metadata/static";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/config/constants";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
// Localized metadata using translations from messages/[locale].json
// Adds OpenGraph & Twitter meta tags dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load translations from the "galleryPage" namespace
  const t = await getTranslations({ locale, namespace: "galleryPage" });

  const title = t("title") || "Gallery | Explore Kyrgyzstan";
  const description =
    t("description") ||
    "Discover the breathtaking landscapes, traditions, and nomadic culture of Kyrgyzstan through our curated photo gallery.";

  // 🖼️ OG image for gallery page (social preview)
  const image = `${SITE.URL}/images/gallery/og-gallery.webp`;

  // ✅ Return SEO metadata object
  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/gallery`,
    image,
  });
}

// --------------------------------------------
// 🖼️ 2. Gallery Page Component
// --------------------------------------------
// Fetches localized gallery data and renders it with GallerySection_v2
// --------------------------------------------
export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const items = await getGallery(locale);

  return <GallerySection_v2 items={items} />;
}
