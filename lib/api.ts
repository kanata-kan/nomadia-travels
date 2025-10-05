// lib/api.ts
import fs from "fs/promises";
import path from "path";

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

import {
  Car,
  GalleryItem,
  TravelPack,
  ContactPage,
  HomePage,
  Activity,
  OurStoryPage,
} from "@/types";
import { Service } from "@/types/Service";

// 🧠 Helper — load any JSON dynamically by locale
async function loadLocalizedJSON<T>(
  locale: string,
  filename: string,
): Promise<T> {
  const filePath = path.join(
    process.cwd(),
    "data",
    "content",
    locale,
    filename,
  );
  try {
    const file = await fs.readFile(filePath, "utf-8");
    return JSON.parse(file) as T;
  } catch (error) {
    console.error(`❌ Missing or invalid translation file: ${filePath}`);
    throw error;
  }
}

// -----------------------------
// 🚗 Cars
// -----------------------------
export async function getCars(locale: string = "en"): Promise<Car[]> {
  const cars = await loadLocalizedJSON<Car[]>(locale, "cars.json");
  return cars
    .map((car) => ({ ...car, price: Number(car.price) }))
    .filter(validateCar);
}

export async function getCarById(
  id: string,
  locale: string = "en",
): Promise<Car | null> {
  const all = await getCars(locale);
  return all.find((c) => c.id === id) || null;
}

// -----------------------------
// 🖼️ Gallery
// -----------------------------
export async function getGallery(
  locale: string = "en",
): Promise<GalleryItem[]> {
  const items = await loadLocalizedJSON<GalleryItem[]>(locale, "gallery.json");
  return items.filter(validateGalleryItem);
}

export async function getGalleryItemById(
  id: string,
  locale: string = "en",
): Promise<GalleryItem | null> {
  const all = await getGallery(locale);
  return all.find((g) => g.id === id) || null;
}

// -----------------------------
// 🎒 Travel Packs
// -----------------------------
export async function getTravelPacks(
  locale: string = "en",
): Promise<TravelPack[]> {
  const packs = await loadLocalizedJSON<TravelPack[]>(
    locale,
    "travel-packs.json",
  );
  return packs.filter(validateTravelPack);
}

export async function getTravelPackById(
  id: string,
  locale: string = "en",
): Promise<TravelPack | null> {
  const all = await getTravelPacks(locale);
  return all.find((p) => p.id === id) || null;
}

// -----------------------------
// 📞 Contact
// -----------------------------
export async function getContact(locale: string = "en"): Promise<ContactPage> {
  const contact = await loadLocalizedJSON<ContactPage>(locale, "contact.json");
  if (!validateContactPage(contact))
    throw new Error("Invalid contact.json data");
  return contact;
}

// -----------------------------
// 🏠 Home
// -----------------------------
export async function getHome(locale: string = "en"): Promise<HomePage> {
  const data = await loadLocalizedJSON<HomePage>(locale, "home.json");
  if (!validateHomePage(data)) throw new Error("Invalid home.json data");
  return data;
}

// -----------------------------
// 🛎️ Services
// -----------------------------
export async function getServices(locale: string = "en"): Promise<Service[]> {
  const services = await loadLocalizedJSON<Service[]>(locale, "services.json");
  return services.map(validateService);
}

// -----------------------------
// 🎯 Activities
// -----------------------------
export async function getActivities(
  locale: string = "en",
): Promise<Activity[]> {
  const activities = await loadLocalizedJSON<Activity[]>(
    locale,
    "activities.json",
  );
  return activities.filter(validateActivity);
}

export async function getActivityById(
  id: string,
  locale: string = "en",
): Promise<Activity | null> {
  const all = await getActivities(locale);
  return all.find((a) => a.id === id) || null;
}

// -----------------------------
// 📖 Our Story
// -----------------------------
export async function getOurStory(
  locale: string = "en",
): Promise<OurStoryPage> {
  const data = await loadLocalizedJSON<OurStoryPage>(locale, "our-story.json");
  if (!validateOurStoryPage(data))
    throw new Error("Invalid our-story.json data");
  return data;
}
