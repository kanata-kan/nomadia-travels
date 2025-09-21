// lib/validators.ts
import {
  Car,
  GalleryItem,
  TravelPack,
  AboutPage,
  ContactPage,
  HomePage,
} from "@/types";

// ---- Helpers ---- //
function hasValues(obj: Record<string, any>, keys: string[]): boolean {
  return keys.every(
    (key) => obj[key] !== undefined && obj[key] !== null && obj[key] !== "",
  );
}

function validateMetadata(metadata: any): boolean {
  return !!(
    metadata &&
    hasValues(metadata, ["title", "description", "path", "image", "alt"])
  );
}

// ---- Cars ---- //
export function validateCar(car: Car): boolean {
  return !!(
    hasValues(car, [
      "id",
      "name",
      "description",
      "coverImage",
      "price",
      "seats",
      "transmission",
      "fuel",
    ]) &&
    Array.isArray(car.images) &&
    car.images.length >= 2 &&
    validateMetadata(car.metadata)
  );
}

// ---- Gallery ---- //
export function validateGalleryItem(item: GalleryItem): boolean {
  return !!(
    hasValues(item, ["id", "title", "description", "coverImage", "category"]) &&
    Array.isArray(item.images) &&
    item.images.length >= 2 &&
    validateMetadata(item.metadata)
  );
}

// ---- Travel Packs ---- //
export function validateTravelPack(pack: TravelPack): boolean {
  return !!(
    hasValues(pack, [
      "id",
      "name",
      "description",
      "coverImage",
      "price",
      "duration",
    ]) &&
    Array.isArray(pack.images) &&
    pack.images.length >= 2 &&
    Array.isArray(pack.features) &&
    pack.features.length > 0 &&
    validateMetadata(pack.metadata)
  );
}

// ---- About ---- //
export function validateAboutPage(page: AboutPage): boolean {
  return !!(
    hasValues(page, ["id", "heading"]) &&
    Array.isArray(page.content) &&
    Array.isArray(page.team) &&
    page.team.every((member) =>
      hasValues(member, ["id", "name", "role", "bio", "image"]),
    ) &&
    validateMetadata(page.metadata)
  );
}

// ---- Contact ---- //
export function validateContactPage(page: ContactPage): boolean {
  return !!(
    hasValues(page, ["id", "heading"]) &&
    page.info &&
    hasValues(page.info, ["email", "phone", "address", "mapLink"]) &&
    Array.isArray(page.socials) &&
    page.socials.every((s) => hasValues(s, ["platform", "url"])) &&
    validateMetadata(page.metadata)
  );
}

// ---- Home ---- //
export function validateHomePage(page: HomePage): boolean {
  return !!(
    hasValues(page, ["id"]) &&
    page.hero &&
    hasValues(page.hero, [
      "title",
      "subtitle",
      "heroImage",
      "ctaText",
      "ctaLink",
    ]) &&
    Array.isArray(page.sections) &&
    page.sections.every((s) =>
      hasValues(s, ["id", "heading", "description", "linkText", "link"]),
    ) &&
    validateMetadata(page.metadata)
  );
}
