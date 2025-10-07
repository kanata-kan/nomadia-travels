// lib/validators/cars.ts
import { z } from "zod";

export const CarSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  price: z.number(),
  currency: z.string(),
  unit: z.string(),
  seats: z.number(),
  transmission: z.string(),
  drive: z.string(),
  luggage: z.string(),
  fuel: z.string(),
  metadata: z.object({
    title: z.string(),
    description: z.string(),
    path: z.string(),
    image: z.string(),
    alt: z.string(),
  }),
});

export type Car = z.infer<typeof CarSchema>;

export function validateCarArray(data: unknown[]): Car[] {
  const valid: Car[] = [];
  for (const item of data) {
    const parsed = CarSchema.safeParse(item);
    if (parsed.success) valid.push(parsed.data);
    else console.warn("❌ Invalid Car:", parsed.error);
  }
  return valid;
}
