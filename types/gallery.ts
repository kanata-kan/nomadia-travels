import { Metadata } from "./common";

export interface GalleryItem {
  id: string;
  title: string;
  image: string; // وحدة بدل coverImage + images[]
  caption: string; // نص قصير للعرض
  metadata: Metadata;
}
