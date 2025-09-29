// lib/validators.ts
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
      "seats",
      "transmission",
      "drive",
      "luggage",
      "fuel",
      "currency", // Added for new structure
      "unit", // Added for new structure
    ]) &&
    typeof car.price === "number" && // Ensure price is a number
    (car.images === undefined ||
      (Array.isArray(car.images) && car.images.length >= 2)) &&
    validateMetadata(car.metadata)
  );
}

// ---- Gallery ---- //
export function validateGalleryItem(item: GalleryItem): boolean {
  return !!(
    hasValues(item, ["id", "title", "image", "caption"]) &&
    validateMetadata(item.metadata)
  );
}

// ---- Travel Packs ---- //
export function validateTravelPack(pack: TravelPack): boolean {
  const isValid = !!(
    hasValues(pack, [
      "id",
      "name",
      "description",
      "coverImage",
      "ctaLabel",
      "metadata",
    ]) &&
    // Ensure features is a non-empty array
    Array.isArray(pack.features) &&
    pack.features.length > 0 &&
    // Validate metadata
    validateMetadata(pack.metadata)
  );

  if (!isValid) {
    console.warn("Invalid TravelPack:", pack);
  }

  return isValid;
}

// ---- Contact ---- //
export function validateContactPage(page: ContactPage): boolean {
  return !!(
    hasValues(page, ["id", "heading"]) &&
    page.info &&
    hasValues(page.info, ["email", "phone", "address", "mapLink"]) &&
    Array.isArray(page.socials) &&
    page.socials.every((s) => hasValues(s, ["platform", "url"])) &&
    (page.form === undefined ||
      (Array.isArray(page.form.fields) &&
        page.form.fields.every((f) =>
          hasValues(f, ["name", "label", "type"]),
        ) &&
        typeof page.form.submitText === "string")) &&
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

// ---- Service ---- //
// lib/validators.ts
export function validateService(service: Service): Service {
  if (!service.id || !service.title || !service.description) {
    throw new Error(`Invalid Service: ${JSON.stringify(service)}`);
  }
  return service;
}
// ---- Activities ---- //
export function validateActivity(activity: Activity): boolean {
  return !!(
    hasValues(activity, [
      "id",
      "name",
      "description",
      "coverImage",
      "duration",
      "location",
      "groupSize",
    ]) &&
    // price optional
    (activity.price === undefined || typeof activity.price === "string") &&
    (activity.images === undefined ||
      (Array.isArray(activity.images) && activity.images.length >= 2)) &&
    validateMetadata(activity.metadata)
  );
}

// ---- Our Story ---- //
export function validateOurStoryPage(page: OurStoryPage): boolean {
  return !!(
    hasValues(page, ["id", "heading"]) &&
    Array.isArray(page.content) &&
    page.content.every(
      (block) =>
        typeof block.type === "string" &&
        (block.text === undefined || typeof block.text === "string") &&
        (block.src === undefined || typeof block.src === "string"),
    ) &&
    validateMetadata(page.metadata)
  );
}
