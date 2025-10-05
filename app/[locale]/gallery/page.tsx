// app/[locale]/gallery/page.tsx
import GallerySection from "@/components/ui/GallerySection/GallerySection";
import { getGallery } from "@/lib/api";
import { getMetadataStatic } from "@/lib/metadata/static";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  const items = await getGallery(locale);
  return <GallerySection items={items} />;
}

export async function generateMetadata() {
  return getMetadataStatic({
    title: "Gallery | Explore Kyrgyzstan",
    description: "Discover the beauty of Kyrgyzstan through curated images.",
    path: "/gallery",
    image: "/og-gallery.png",
  });
}
