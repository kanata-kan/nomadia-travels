// ==========================================================
// 📄 app/[locale]/gallery/[id]/page.tsx
// ==========================================================

import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import GalleryDetailsSection from "@/components/ui_v2/sections/GalleryDetailsSection/GalleryDetailsSection";
import { getGalleryItemById } from "@/lib/api/gallery";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

// --------------------------------------------
// 🖼️ Page Component
// --------------------------------------------
export default async function GalleryDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;

  const galleryItem = await getGalleryItemById(id, locale);
  if (!galleryItem) return notFound();

  // ✅ تمرير البيانات المهيكلة للمكون
  return (
    <GalleryDetailsSection
      galleryItem={{
        title: galleryItem.metadata?.title || galleryItem.title || "Untitled",
        description:
          galleryItem.metadata?.description ||
          galleryItem.caption ||
          "Image from Kyrgyzstan",
        coverImage: galleryItem.metadata?.image || galleryItem.image,
        image: galleryItem.image,
      }}
      locale={locale}
    />
  );
}

// --------------------------------------------
// 🧠 Dynamic Metadata Builder
// --------------------------------------------
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;

  const galleryItem = await getGalleryItemById(id, locale);
  if (!galleryItem) return {};

  return getMetadataDynamic({
    name: galleryItem.metadata?.title || galleryItem.title || "Untitled",
    description:
      galleryItem.metadata?.description ||
      galleryItem.caption ||
      "Explore Kyrgyzstan through our gallery.",
    image: galleryItem.metadata?.image || galleryItem.image,
    path: `/${locale}${galleryItem.metadata?.path || `/gallery/${galleryItem.id}`}`,
    locale,
  });
}
