# ⚙️ UI_V2_METADATA_System

## 🌍 Overview

The **Metadata System** in `Kanata UI v2` provides a unified, locale-aware, and SEO-optimized architecture for dynamically generating metadata across all pages.  
It leverages **Next.js App Router (v13+)** capabilities, integrating with the **i18n system** and **static/dynamic metadata generators**.

This mechanism ensures:
- **Localized titles and descriptions** per page (via `next-intl`).
- **Automatic Open Graph (OG) and Twitter Cards**.
- **Scalable configuration** that avoids manual duplication across routes.

---

## 🎯 Objectives

- Provide a **centralized and typed metadata API** (`getMetadataStatic`, `getMetadataDynamic`).
- Ensure **consistency across locales** (EN / FR).
- Keep the **SEO and social media previews synchronized** with actual page content.
- Enable developers to extend metadata without editing page logic.

---

## 🧱 Architecture

```bash
lib/
 ├─ metadata/
 │   ├─ static.ts        # Handles static page metadata (no dynamic params)
 │   ├─ dynamic.ts       # Handles dynamic pages (e.g. [id])
 │   ├─ utils.ts         # Shared OG/Twitter builder + helper functions
 │   └─ types.ts         # Centralized metadata types (TS-safe)
 │
 ├─ api/
 │   └─ content/         # Provides localized content fetched from JSON / CMS
 │
 └─ config/
     └─ constants.ts     # SITE constants: NAME, URL, DESCRIPTION, DEFAULT_IMAGE
```

Each `page.tsx` file imports a suitable function:
- `getMetadataStatic()` → for static routes (home, about, contact, etc.)
- `getMetadataDynamic()` → for dynamic routes (cars/[id], activities/[id])

---

## ⚙️ Mechanism

### 1. Static Pages

```ts
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "homePage" });

  return getMetadataStatic({
    title: t("title"),
    description: t("description"),
    path: `/${locale}`,
    image: "/og-home.png",
  });
}
```

✅ Automatically localizes title + description  
✅ Attaches full Open Graph and Twitter schema  
✅ Follows centralized SITE constants

---

### 2. Dynamic Pages

```ts
export async function generateMetadata({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id, locale } = await params;
  const item = await getCarById(id, locale);

  if (!item) return {};

  return getMetadataDynamic({
    name: item.name,
    description: item.description,
    image: item.coverImage,
    path: `/${locale}/cars/${id}`,
  });
}
```

✅ Extracts localized metadata directly from fetched content  
✅ Avoids redundancy inside UI components  
✅ Safe fallback if data missing

---

## 🧩 Core Features

| Feature | Description |
|----------|--------------|
| 🧭 i18n Integration | Uses `next-intl` to pull localized titles/descriptions |
| 🖼️ OG / Twitter | Auto-generates meta images, alt tags, and social previews |
| 🧱 Static + Dynamic | Unified interface between static and dynamic routes |
| 🧩 Type Safety | Metadata strictly typed through `MetadataProps` |
| ⚡ Performance | No client-side duplication — rendered fully server-side |
| 🔄 Scalability | Easy to extend to new pages with minimal setup |

---

## 🧠 Developer Workflow

1. **Create** translation keys for metadata under `/messages/[locale].json`
   ```json
   "carsPage": {
     "title": "All Cars",
     "description": "Browse all available cars for your Kyrgyzstan adventure."
   }
   ```
2. **Import** `getMetadataStatic` in your `page.tsx`
3. **Use** the proper namespace key for translations (`carsPage`, `galleryPage`, etc.)
4. **Set** the OG image path from `/public/og-*.png`
5. **Done** → SEO + social previews now fully automated 🎯

---

## 🧩 Example Directory Usage

| Page | Function Used | Namespace | OG Image |
|------|----------------|------------|-----------|
| `/[locale]` | `getMetadataStatic` | `homePage` | `/og-home.png` |
| `/[locale]/cars` | `getMetadataStatic` | `carsPage` | `/og-cars.png` |
| `/[locale]/gallery` | `getMetadataStatic` | `galleryPage` | `/og-gallery.png` |
| `/[locale]/activities` | `getMetadataStatic` | `activitiesPage` | `/og-activities.png` |
| `/[locale]/our-story` | `getMetadataStatic` | `ourStoryPage` | `/og-our-story.png` |

---

## 🧭 Design Philosophy

> “Metadata should never be written twice.”

This system follows the **Kanata UI v2 principle** of *modularity, safety, and aesthetic precision* —  
metadata becomes a **shared architectural layer**, not an afterthought.

---

## 🧱 Future Enhancements

- [ ] Integrate with Strapi CMS for automatic meta injection.  
- [ ] Add `generateSitemap()` hook for localized routes.  
- [ ] Add `meta schema.org` structured data for travel packs and cars.  

---

## 🧾 Credits

**Author:** Kanata (عبدالإله)  
**Version:** 2.0  
**Last Updated:** 2025-10-13  
**Repository:** `nomadia-travels-app`  
**Category:** UI_V2 Architecture Documentation  
**Purpose:** Ensure all engineers can extend and maintain SEO/i18n metadata effortlessly.
