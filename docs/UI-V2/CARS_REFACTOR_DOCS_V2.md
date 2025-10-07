# 🚗 Kanata UI v2 — Cars Refactor & Data Layer Integration

This document explains the **Cars Module Refactor** within **Kanata UI v2**,  
covering the complete transformation from the old `ui/` structure to the new **UI-V2 architecture**.  
It consolidates all steps from **data layer refactor → UI migration → i18n & metadata integration**.

---

## 🎯 Purpose

The Cars Refactor aimed to achieve a **unified architecture** across:

- **Data layer** (`lib/api`, `validators`, `metadata`)
- **UI layer** (`components/ui_v2`)
- **Localization & Metadata system**

By doing so, the module now provides a **consistent, typed, and easily maintainable** structure  
for both `/cars` and `/cars/[id]` pages, supporting full i18n and dynamic metadata.

---

## 🧩 Phase 1 — Data Layer Refactor

### ✅ Goal

Rebuild the cars fetching logic into modular, locale-aware, and type-safe functions.

### 🔧 Implementation

- Replaced static imports with `loadLocalizedJSON(locale, "cars")`
- Introduced `getCars()` and `getCarById()` in `lib/api/cars.ts`
- Added schema validation via **Zod** in `lib/validators/cars.ts`
- Each car entry now includes a nested `metadata` object:
  ```json
  {
    "title": "Toyota Land Cruiser Prado Rental",
    "description": "Perfect SUV for off-road and mountain trips in Kyrgyzstan.",
    "path": "/cars/car-1",
    "image": "/images/cars/land-cruiser.jpg",
    "alt": "Toyota Land Cruiser Prado available for rental"
  }
  ```

---

## 🧠 Phase 2 — Metadata Integration

### ✅ Goal

Centralize SEO metadata using reusable utilities.

### 🔧 Implementation

- Added `getMetadataDynamic()` and `getMetadataStatic()` in `lib/metadata/`
- Updated `[id]/page.tsx`:
  ```ts
  export async function generateMetadata({ params }) {
    const { id, locale } = await params;
    const car = await getCarById(id, locale);
    return getMetadataDynamic({
      name: car.name,
      description: car.description,
      image: car.coverImage,
      path: `/${locale}/cars/${id}`,
    });
  }
  ```
- Ensured OpenGraph + Twitter tags consistency across locales.

---

## 🎨 Phase 3 — UI v2 Migration

### ✅ Goal

Rebuild all UI elements using **Kanata UI v2 design system**:
foundation, tokens, spacing, and dark/light mode.

### 🔧 Components Rebuilt

| Component           | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `CarsSection`       | Displays all cars using `Grid`, `Typography`, and `SectionWrapper` |
| `CarCard`           | New visual card with icons, shadows, and `text-clamp`              |
| `CarDetailsSection` | Two-column layout with main image, specs, CTA, and back link       |
| `CarGallerySection` | Optional gallery grid for additional photos                        |

### 🧱 Example

```tsx
<Grid columns={3} gap="xl">
  {cars.map((car) => (
    <CarCard key={car.id} car={car} />
  ))}
</Grid>
```

---

## 🌍 Phase 4 — i18n & Translations

### ✅ Goal

Provide localized strings for every textual element.

### 🔧 Implementation

- Added `carsSection`, `carDetails`, and `carGallery` in `en.json` & `fr.json`
- Example:
  ```json
  "carGallery": {
    "title": "Gallery of {name}",
    "empty": "No additional photos available for this car."
  }
  ```
- All components now use `useTranslations()` hook with scoped namespaces.

---

## ⚙️ Phase 5 — Integration & Testing

### ✅ Pages Updated

| Path                  | Description                                    |
| --------------------- | ---------------------------------------------- |
| `/[locale]/cars`      | Uses `CarsSection` for list view               |
| `/[locale]/cars/[id]` | Uses `CarDetailsSection` + `CarGallerySection` |

### 🧾 Validation

- Verified SSR for dynamic metadata.
- Tested light/dark layouts.
- Fixed Next/Image aspect ratio warnings.
- Checked responsiveness on all breakpoints.

---

## 🧭 Outcome

- Fully modular, typed, and localized Cars module.
- Aligned with **Kanata UI v2 design tokens** and **spacing rhythm**.
- Ready for CMS integration (Strapi or API-based content).

---

## 🔗 Related Docs

- `DATA_LAYER.md`
- `LAYOUT_SYSTEM.md`
- `UI_COMPONENTS.md`
- `THEME_SCHEMA.md`
