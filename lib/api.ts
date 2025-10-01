// lib/api.ts
import cars from "@/data/content/cars.json";
import gallery from "@/data/content/gallery.json";
import travelPacks from "@/data/content/travel-packs.json";
import contactJson from "@/data/content/contact.json";
import home from "@/data/content/home.json";
import services from "@/data/content/services.json";
import activities from "@/data/content/activities.json";
import ourStory from "@/data/content/our-story.json";

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

// -----------------------------
// 🚗 Cars
// -----------------------------
export async function getCars(): Promise<Car[]> {
  return (cars as Car[])
    .map((car) => ({
      ...car,
      price: Number(car.price),
    }))
    .filter(validateCar);
}

export async function getCarById(id: string): Promise<Car | null> {
  const all = await getCars();
  return all.find((c) => c.id === id) || null;
}

// -----------------------------
// 🖼️ Gallery
// -----------------------------
export async function getGallery(): Promise<GalleryItem[]> {
  return (gallery as GalleryItem[]).filter(validateGalleryItem);
}

export async function getGalleryItemById(
  id: string,
): Promise<GalleryItem | null> {
  const all = await getGallery();
  return all.find((g) => g.id === id) || null;
}

// -----------------------------
// 🎒 Travel Packs
// -----------------------------
export async function getTravelPacks(): Promise<TravelPack[]> {
  return (travelPacks as TravelPack[]).filter(validateTravelPack);
}

export async function getTravelPackById(
  id: string,
): Promise<TravelPack | null> {
  const all = await getTravelPacks();
  return all.find((p) => p.id === id) || null;
}

// -----------------------------
// 📞 Contact
// -----------------------------
export async function getContact(): Promise<ContactPage> {
  // Explicit cast to ContactPage
  const contact = contactJson as ContactPage;

  if (!validateContactPage(contact)) {
    throw new Error("Invalid contact.json data");
  }

  return contact;
}
// -----------------------------
// 🏠 Home
// -----------------------------
export async function getHome(): Promise<HomePage> {
  if (!validateHomePage(home)) throw new Error("Invalid home.json data");
  return home as HomePage;
}

// -----------------------------
// 🛎️ Services
// -----------------------------
export async function getServices(): Promise<Service[]> {
  return (services as Service[]).map(validateService);
}

// -----------------------------
// 🎯 Activities
// -----------------------------
export async function getActivities(): Promise<Activity[]> {
  return (activities as Activity[]).filter(validateActivity);
}

export async function getActivityById(id: string): Promise<Activity | null> {
  const all = await getActivities();
  return all.find((a) => a.id === id) || null;
}

// -----------------------------
// 📖 Our Story
// -----------------------------
export async function getOurStory(): Promise<OurStoryPage> {
  if (!validateOurStoryPage(ourStory))
    throw new Error("Invalid our-story.json data");
  return ourStory as OurStoryPage;
}
