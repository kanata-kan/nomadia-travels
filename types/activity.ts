import { Metadata } from "./common";

export interface Activity {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  duration: string;
  location: string;
  groupSize: string;
  price?: string | null; // optional فـMVP
  images?: string[]; // optional: ممكن يمدّ الكلاينت صور إضافية
  metadata: Metadata;
}
