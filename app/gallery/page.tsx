// app/gallery/page.tsx
import { getGallery } from "@/lib/api";
import GallerySection from "@/components/ui/sections/GallerySection";
import { getMetadataStatic } from "@/lib/metadata/static";

// Static Metadata (بما أن الصفحة ثابتة)
export const metadata = getMetadataStatic({
  title: "Gallery | Explore Kyrgyzstan",
  description: "Discover the beauty of Kyrgyzstan through curated images.",
  path: "/gallery",
  image: "/og-gallery.png",
});

export const revalidate = 43200;

export default async function GalleryPage() {
  const items = await getGallery({ revalidate: 43200 });
  return <GallerySection items={items} />;
}
