// ==========================================================
// 📄 app/[locale]/gallery/page.tsx
// ==========================================================
// 🖼️ GalleryPage — Curated images of Kyrgyzstan
// Uses Smart Metadata Layer + Promise params
// ==========================================================

export const dynamic = "force-dynamic";

import GallerySection_v2 from "@/components/ui_v2/sections/GallerySection/GallerySection";
import { getGallery } from "@/lib/api/gallery";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "galleryPage",
    path: "/gallery",
    imagePath: "/images/gallery/og-gallery.webp",
    fallbackTitle: "Gallery | Explore Kyrgyzstan",
    fallbackDescription:
      "Discover the breathtaking landscapes, traditions, and nomadic culture of Kyrgyzstan through our curated photo gallery.",
  });
}

// 🖼️ Page
export default async function GalleryPage({ params }: PageParams) {
  const { locale } = await params;
  const items = await getGallery(locale);

  return <GallerySection_v2 items={items} />;
}
