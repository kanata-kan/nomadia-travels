import {
  validateCar,
  validateGalleryItem,
  validateTravelPack,
  validateAboutPage,
  validateContactPage,
  validateHomePage,
} from "@/lib/validators";

import { Car } from "@/types/car";
import { GalleryItem } from "@/types/gallery";
import { TravelPack } from "@/types/travelPack";
import { AboutPage } from "@/types/about";
import { ContactPage } from "@/types/contact";
import { HomePage } from "@/types/home";

// ---------- Cars ----------
const validCar: Car = {
  id: "car-1",
  name: "Luxury SUV",
  description: "Comfortable SUV",
  coverImage: "/images/cars/suv.jpg",
  images: ["/images/cars/s1.jpg", "/images/cars/s2.jpg"],
  price: "80$/day",
  seats: 5,
  transmission: "Automatic",
  fuel: "Petrol",
  metadata: {
    title: "Luxury SUV Rental",
    description: "SUV for mountain trips",
    path: "/cars/car-1",
    image: "/images/cars/suv-og.png",
    alt: "Luxury SUV",
  },
};

const invalidCar: any = {
  id: "car-2",
  name: "Economy Sedan",
  description: "Cheap car",
  coverImage: "/images/cars/sedan.jpg",
  images: [], // ❌ no images
  price: "40$/day",
  seats: 4,
  fuel: "Diesel",
};

// ---------- Gallery ----------
const validGallery: GalleryItem = {
  id: "gallery-1",
  title: "Mountain Adventure",
  description: "Stunning mountains",
  coverImage: "/images/gallery/mtn.jpg",
  images: ["/images/gallery/1.jpg", "/images/gallery/2.jpg"],
  category: "Nature",
  metadata: {
    title: "Mountain Adventure Gallery",
    description: "Beautiful views",
    path: "/gallery/gallery-1",
    image: "/images/gallery/mtn-og.png",
    alt: "Mountain Adventure",
  },
};

const invalidGallery: any = {
  id: "gallery-2",
  title: "Bad Gallery",
  description: "Missing metadata", // ❌ missing metadata
  coverImage: "/images/gallery/bad.jpg",
  images: ["/images/gallery/bad.jpg"],
  category: "Test",
};

// ---------- Travel Packs ----------
const validPack: TravelPack = {
  id: "pack-1",
  name: "Silk Road Tour",
  description: "7-day adventure",
  coverImage: "/images/packs/silk.jpg",
  images: ["/images/packs/1.jpg", "/images/packs/2.jpg"],
  price: "1200$",
  duration: "7 days",
  features: ["Hotel", "Guide"],
  metadata: {
    title: "Silk Road Tour",
    description: "7-day Silk Road trip",
    path: "/travel-packs/pack-1",
    image: "/images/packs/silk-og.png",
    alt: "Silk Road Pack",
  },
};

const invalidPack: any = {
  id: "pack-2",
  name: "Broken Pack",
  description: "Missing features",
  coverImage: "/images/packs/bad.jpg",
  images: ["/images/packs/1.jpg"], // ❌ only 1 image
  price: "500$",
  duration: "3 days",
};

// ---------- About ----------
const validAbout: AboutPage = {
  id: "about-page",
  heading: "About Us",
  content: [{ type: "paragraph", text: "We love Kyrgyzstan" }],
  team: [
    {
      id: "team-1",
      name: "Aizada",
      role: "Guide",
      bio: "Expert",
      image: "/images/team/aizada.jpg",
    },
  ],
  metadata: {
    title: "About Us",
    description: "Learn about us",
    path: "/about",
    image: "/images/about-og.png",
    alt: "About page",
  },
};

const invalidAbout: any = {
  id: "about-page",
  heading: "About Us",
  content: [], // ❌ empty content
  team: [],
};

// ---------- Contact ----------
const validContact: ContactPage = {
  id: "contact-page",
  heading: "Contact Us",
  content: [{ type: "paragraph", text: "Reach out!" }],
  info: {
    email: "info@test.com",
    phone: "123456",
    address: "Bishkek",
    mapLink: "https://maps.test",
  },
  socials: [{ platform: "Facebook", url: "https://fb.com" }],
  metadata: {
    title: "Contact Us",
    description: "Get in touch",
    path: "/contact",
    image: "/images/contact-og.png",
    alt: "Contact page",
  },
};

const invalidContact: any = {
  id: "contact-page",
  heading: "Contact Us",
  info: { email: "", phone: "", address: "", mapLink: "" }, // ❌ empty info
  socials: [],
};

// ---------- Home ----------
const validHome: HomePage = {
  id: "home-page",
  hero: {
    title: "Explore Kyrgyzstan",
    subtitle: "Nature and culture",
    heroImage: "/images/home/hero.jpg",
    ctaText: "Start Now",
    ctaLink: "/travel-packs",
  },
  sections: [
    {
      id: "services",
      heading: "Our Services",
      description: "We offer great tours",
      linkText: "View Services",
      link: "/services",
    },
  ],
  metadata: {
    title: "Home Page",
    description: "Discover Kyrgyzstan",
    path: "/",
    image: "/images/home-og.png",
    alt: "Home hero",
  },
};

const invalidHome: any = {
  id: "home-page",
  hero: { title: "Missing fields" }, // ❌ missing subtitle, image, etc
  sections: [],
};

// ---------- Run Tests ----------
console.log("Cars:", validateCar(validCar), validateCar(invalidCar));
console.log(
  "Gallery:",
  validateGalleryItem(validGallery),
  validateGalleryItem(invalidGallery),
);
console.log(
  "TravelPack:",
  validateTravelPack(validPack),
  validateTravelPack(invalidPack),
);
console.log(
  "About:",
  validateAboutPage(validAbout),
  validateAboutPage(invalidAbout),
);
console.log(
  "Contact:",
  validateContactPage(validContact),
  validateContactPage(invalidContact),
);
console.log(
  "Home:",
  validateHomePage(validHome),
  validateHomePage(invalidHome),
);
