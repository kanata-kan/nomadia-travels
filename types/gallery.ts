import { Metadata } from "./common";

export interface GalleryItem {
  id: string;
  title: string; // Updated to match GalleryDetailsSection
  description: string; // Added for detailed view
  image: string; // Updated to match GalleryDetailsSection
  images: string[]; // Added for gallery images
  metadata: Metadata;
  caption?: string; // Added for image caption
}
