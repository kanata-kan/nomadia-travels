// app/[locale]/gallery/[id]/page.tsx
import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import GalleryDetailsSection from "@/components/ui_v2/sections/GalleryDetailsSection/GalleryDetailsSection";
import { getGalleryItemById } from "@/lib/api/gallery";

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function GalleryDetailsPage({ params }: Props) {
  const { id, locale } = await params;
  const galleryItem = await getGalleryItemById(id, locale);
  if (!galleryItem) return notFound();

  return (
    <GalleryDetailsSection
      galleryItem={{
        title: galleryItem.metadata.title || "Untitled",
        description: galleryItem.metadata.description || "",
        coverImage: galleryItem.metadata.image || "",
        image: galleryItem.image,
      }}
      locale={locale}
    />
  );
}

// ✅ Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const galleryItem = await getGalleryItemById(id, locale);
  if (!galleryItem) return {};

  return getMetadataDynamic({
    name: galleryItem.metadata.title || "Untitled",
    description: galleryItem.metadata.description || "",
    image: galleryItem.metadata.image || "",
    path: `/${locale}/gallery/${id}`,
  });
}
