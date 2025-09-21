import { Metadata } from "./common";

export interface TravelPack {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  price: string;
  duration: string;
  features: string[];
  metadata: Metadata;
}
