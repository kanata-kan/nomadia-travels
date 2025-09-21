import { Metadata } from "./common";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  category: string;
  metadata: Metadata;
}
