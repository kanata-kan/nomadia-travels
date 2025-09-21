import { Metadata } from "./common";

export interface Car {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  price: string;
  seats: number;
  transmission: string;
  fuel: string;
  metadata: Metadata;
}
