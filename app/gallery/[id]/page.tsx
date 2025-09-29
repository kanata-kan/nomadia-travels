// app/gallery/[id]/page.tsx
import { notFound } from "next/navigation";
import { getGalleryItemById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import GalleryDetailsSection from "@/components/ui/GallerySection/GalleryDetailsSection";

type Props = { params: Promise<{ id: string }> };

export default async function GalleryDetailsPage({ params }: Props) {
  const { id } = await params;

  const galleryItem = await getGalleryItemById(id);

  if (!galleryItem) return notFound();

  return (
    <GalleryDetailsSection
      galleryItem={{
        title: galleryItem.metadata.title || "Untitled", // Updated from 'name' to 'title'
        description: galleryItem.metadata.description || "", // Fallback for null
        coverImage: galleryItem.metadata.image || "", // Fallback for null
        images: galleryItem.images,
      }}
    />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const galleryItem = await getGalleryItemById(id);
  if (!galleryItem) return {};

  return getMetadataDynamic({
    name: galleryItem.metadata.title || "Untitled", // Corrected to use `name`
    description: galleryItem.metadata.description || "", // Fallback for null
    image: galleryItem.metadata.image || "", // Fallback for null
    path: `/gallery/${id}`,
  });
}
