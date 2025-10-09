# 🧭 UI_V2_DOCS_DETAILS_Cars_Travel_Activities.md

### **Nomadia Travels — Details Page System (Cars, Travel Packs, Activities)**

---

## 🧩 Overview

The **Details Section System** defines a unified architecture for **individual detail pages**  
of Cars, Travel Packs, and Activities — each one extending the foundation from `DetailsBaseSection.tsx`.

Every details page (e.g. `/cars/[id]`, `/travel-packs/[id]`, `/activities/[id]`)  
renders a specialized UI component (`CarDetailsSection`, `TravelPackDetailsSection`, `ActivityDetailsSection`)  
which builds upon a **single shared structure** for layout, i18n, and metadata.

---

## 🏗️ Architectural Flow

```
📂 components/
└── ui_v2/
    ├── sections/
    │   ├── base/
    │   │   ├── DetailsBaseSection.tsx     → Shared structure for all detail pages
    │   │   └── DetailsBase.styled.ts      → Styling + layout grid
    │   ├── CarDetailsSection/
    │   │   ├── CarDetailsSection.tsx      → Car-specific UI (Specs, price, etc.)
    │   │   └── CarDetailsSection.styled.ts
    │   ├── TravelPackDetailsSection/
    │   │   ├── TravelPackDetailsSection.tsx
    │   │   └── TravelPackDetailsSection.styled.ts
    │   └── ActivityDetailsSection/
    │       ├── ActivityDetailsSection.tsx
    │       └── ActivityDetailsSection.styled.ts
```

---

## ⚙️ Core Concept: `DetailsBaseSection`

The **DetailsBaseSection** component provides the **shared visual and layout foundation**  
used by every individual details page.

It handles:

- Hero image with overlay
- Title, description, and back link
- CTA button (e.g. “Book this Car”)
- Flexible details grid for specs / metadata

---

## 🧠 Props Interface

```ts
type Props = {
  imageSrc: string;
  title: string;
  description?: string;
  backHref: string;
  cta?: ReactNode;
  details?: ReactNode;
  locale: string;
};
```

| Prop          | Type        | Description                            |
| ------------- | ----------- | -------------------------------------- |
| `imageSrc`    | `string`    | Path to cover image                    |
| `title`       | `string`    | Item name (Car, Travel Pack, Activity) |
| `description` | `string`    | Short descriptive text                 |
| `backHref`    | `string`    | Link to parent section (e.g. `/cars`)  |
| `cta`         | `ReactNode` | CTA button, dynamically rendered       |
| `details`     | `ReactNode` | Specs grid or metadata list            |
| `locale`      | `string`    | Used for i18n and direction handling   |

---

## 🚗 Example: Car Details Page

### File: `app/[locale]/cars/[id]/page.tsx`

```tsx
import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { getCarById } from "@/lib/api/cars";
import { CarDetailsSection } from "@/components/ui_v2/sections/CarDetailsSection";

export default async function CarDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const car = await getCarById(id, locale);
  if (!car) return notFound();

  return <CarDetailsSection car={car} locale={locale} />;
}
```

### File: `components/ui_v2/sections/CarDetailsSection/CarDetailsSection.tsx`

```tsx
"use client";
import { useTranslations } from "next-intl";
import { Car } from "@/types";
import { FaCarSide } from "react-icons/fa";
import { Button } from "../../foundation";
import { SpecsGrid } from "./CarDetailsSection.styled";
import { DetailsBaseSection } from "../base/DetailsBaseSection";

type Props = { car: Car; locale: string };

export default function CarDetailsSection({ car, locale }: Props) {
  const t = useTranslations("carDetails");

  return (
    <DetailsBaseSection
      imageSrc={car.coverImage}
      title={car.name}
      description={car.description}
      backHref="/cars"
      locale={locale}
      cta={
        <Button variant="primary" fullWidth>
          <FaCarSide style={{ marginRight: 8 }} />
          {t("book")}
        </Button>
      }
      details={
        <SpecsGrid>
          <div>🚘 {car.transmission}</div>
          <div>⛽ {car.fuel}</div>
          <div>💺 {car.seats}</div>
          <div>💰 {car.price}</div>
        </SpecsGrid>
      }
    />
  );
}
```

---

## 🏕️ Example: Travel Pack Details Page

Follows the same logic:

```tsx
<DetailsBaseSection
  imageSrc={pack.coverImage}
  title={pack.name}
  description={pack.description}
  backHref="/travel-packs"
  locale={locale}
  cta={<Button>{t("bookPack")}</Button>}
  details={<PackFeaturesGrid features={pack.features} />}
/>
```

---

## 🏞️ Example: Activity Details Page

```tsx
<DetailsBaseSection
  imageSrc={activity.coverImage}
  title={activity.name}
  description={activity.description}
  backHref="/activities"
  locale={locale}
  cta={<Button>{t("bookNow")}</Button>}
  details={
    <SpecsGrid>
      <div>🕓 {activity.duration}</div>
      <div>📍 {activity.location}</div>
      <div>👥 {activity.groupSize}</div>
      <div>💰 {activity.price}</div>
    </SpecsGrid>
  }
/>
```

---

## 🎨 Theming & Layout

All details pages inherit visual consistency via `DetailsBase.styled.ts`:

| Element        | Role                                     |
| -------------- | ---------------------------------------- |
| `Wrapper`      | Main container with background & spacing |
| `ImageWrapper` | Hero image holder with shadow & overlay  |
| `InfoSection`  | Title + description zone                 |
| `CTASection`   | Button area                              |
| `DetailsGrid`  | Flexible metadata grid                   |

Colors, radii, and spacing are derived from the global theme (`theme.ts`).

---

## 🧩 Data Flow Summary

```bash
┌───────────────────────────────────┐
│  API Layer (lib/api/*.ts)         │
│  getCarById(), getPackById()      │
└──────────┬────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────────┐
│ CarDetailsSection / TravelPackDetailsSection    │
│ - Uses i18n + local props                       │
│ - Injects data into DetailsBaseSection          │
└──────────┬──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────┐
│  DetailsBaseSection.tsx      │
│  - Unified layout & styling  │
│  - Common CTA / back button  │
└──────────────────────────────┘
```

---

## 🧱 Key Takeaways

- 🧩 **Single Base Structure**: All detail pages share the same core layout.
- 🌍 **Localized Texts**: Each details section has its own i18n namespace (`carDetails`, `travelPackDetails`, `activityDetails`).
- ⚙️ **Reusable Layout**: `DetailsBaseSection` ensures identical visual hierarchy across sections.
- 💅 **Theme-driven Styling**: All colors and spacings respect the main design tokens.
- 🧠 **Consistent DX**: New detail pages can be created by simply importing the base and passing new props.
