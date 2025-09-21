// app/gallery/page.tsx
export const dynamic = "force-static";

import { getGallery } from "@/lib/api";

export default async function GalleryPage() {
  const gallery = await getGallery({ cache: "force-cache" });
  return (
    <ul>
      {gallery.map((item: any) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
