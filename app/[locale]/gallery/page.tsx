// app/gallery/page.tsx
import GallerySection from "@/components/ui/GallerySection/GallerySection";
import { getGallery } from "@/lib/api";
import { getMetadataStatic } from "@/lib/metadata/static";

// Static Metadata
export const metadata = getMetadataStatic({
  title: "Gallery | Explore Kyrgyzstan",
  description: "Discover the beauty of Kyrgyzstan through curated images.",
  path: "/gallery",
  image: "/og-gallery.png",
});

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const items = await getGallery();
  return <GallerySection items={items} />;
}
