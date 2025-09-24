import { Metadata } from "./common";

export interface Car {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images?: string[]; // optional for now
  price?: string | null; // optional in MVP
  seats: number;
  transmission: string;
  drive: string; // e.g., "4x4", "AWD", "2WD"
  luggage: string; // e.g., "Small", "Medium", "Large"
  fuel: string;
  metadata: Metadata;
}
