// lib/api.ts
import {
  Car,
  GalleryItem,
  TravelPack,
  ContactPage,
  HomePage,
  Activity,
  OurStoryPage,
} from "@/types";

import {
  validateCar,
  validateGalleryItem,
  validateTravelPack,
  validateContactPage,
  validateHomePage,
  validateService,
  validateActivity,
  validateOurStoryPage,
} from "./validators";
import { Service } from "@/types/Service";

type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
  headers?: Record<string, string>;
};

export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<T> {
  try {
    const { cache, revalidate, headers } = options;
    const url = new URL(`/api/${endpoint}`, process.env.NEXT_PUBLIC_BASE_URL);

    const res = await fetch(url.toString(), {
      cache: cache ?? "force-cache",
      next: revalidate ? { revalidate } : undefined,
      headers,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint} (status: ${res.status})`);
    }

    const json = await res.json();
    if (json.status !== "success") {
      throw new Error(json.message || "Unknown error");
    }

    return json.data as T;
  } catch (error) {
    console.error(`❌ Error in fetchAPI(${endpoint}):`, error);
    throw error;
  }
}

// ---- Wrappers with Validation ---- //
export async function getCars(options?: FetchOptions): Promise<Car[]> {
  const data = await fetchAPI<Car[]>("cars", options);
  return data
    .map((car) => ({
      ...car,
      price: Number(car.price), // Ensure price is a number
    }))
    .filter(validateCar);
}

export async function getGallery(
  options?: FetchOptions,
): Promise<GalleryItem[]> {
  const data = await fetchAPI<GalleryItem[]>("gallery", options);
  return data.filter(validateGalleryItem);
}

export async function getTravelPacks(
  options?: FetchOptions,
): Promise<TravelPack[]> {
  const data = await fetchAPI<TravelPack[]>("travel-packs", options);
  return data.filter(validateTravelPack);
}

export async function getContact(options?: FetchOptions): Promise<ContactPage> {
  const data = await fetchAPI<ContactPage>("contact", options);
  if (!validateContactPage(data)) throw new Error("Invalid contact.json data");
  return data;
}

export async function getHome(options?: FetchOptions): Promise<HomePage> {
  const data = await fetchAPI<HomePage>("home", options);
  if (!validateHomePage(data)) throw new Error("Invalid home.json data");
  return data;
}

export async function getServices(options?: FetchOptions): Promise<Service[]> {
  const data = await fetchAPI<Service[]>("services", options);
  return data.map(validateService);
}

export async function getActivities(
  options?: FetchOptions,
): Promise<Activity[]> {
  const data = await fetchAPI<Activity[]>("activities", options);
  return data.filter(validateActivity);
}

export async function getOurStory(
  options?: FetchOptions,
): Promise<OurStoryPage> {
  const data = await fetchAPI<OurStoryPage>("our-story", options);
  if (!validateOurStoryPage(data))
    throw new Error("Invalid our-story.json data");
  return data;
}

export async function getCarById(
  id: string,
  options?: FetchOptions,
): Promise<Car | null> {
  const cars = await getCars(options);
  return cars.find((car) => car.id === id) || null;
}
