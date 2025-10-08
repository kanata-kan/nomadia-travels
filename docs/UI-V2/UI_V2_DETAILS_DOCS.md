# 📘 UI_V2_DETAILS_DOCS.md — Kanata UI v2 Details Architecture

## 🎯 Purpose
To unify all **Details Pages** (Cars, Travel Packs, Activities) under the **Kanata UI v2 system**, ensuring consistent layout rhythm, typography, and interactive design patterns.

---

## 🏗️ Architecture Overview
Each module (**Car**, **Travel Pack**, **Activity**) shares a unified architecture based on:
- Layout rhythm via `Container` + `Grid`
- Typography system (headings, body text)
- Reusable components (`Button`, `Wrapper`, `InfoSection`, `CTASection`, `BackLink`)
- Hover logic powered by `darken(color, percent)`
- i18n translation through `next-intl`
- Consistent metadata generation using `getMetadataDynamic`

---

## 🧱 Base Foundation — DetailsBase.styled.ts
Defines the shared structural styles:

| Component | Role |
|------------|------|
| `WrapperBase` | Section background and padding |
| `InfoSectionBase` | Layout for detail info |
| `CTASectionBase` | Unified button container |
| `BackLinkBase` | Back navigation style |

> These are imported and extended in each module’s styled file.

---

## 🚗 Cars Module Refactor
Refactored `CarDetailsSection` to inherit from `DetailsBase`.

**Enhancements:**
- Hover transitions using `darken(theme.colors.surface, 8)`
- Image hover (zoom-in + brightness filter)
- Unified metadata, layout, and responsive behavior

---

## 🧳 Travel Pack Module Refactor
`TravelPackDetailsSection` follows the same structure.

**Highlights:**
- Accent-colored checkmark (✔) for features
- Hover states consistent with Kanata UI v2 design language
- Inherits base layout and CTA styling

---

## 🏔️ Activities Module Refactor
`ActivityDetailsSection` created from scratch under UI v2.

**Improvements:**
- Structured icons (`FaClock`, `FaUsers`, `FaMoneyBill`, `FaMapMarkerAlt`)
- Consistent dynamic metadata
- Translation through `next-intl`

---

## 🧠 colorUtils.ts — Darken Utility
Custom `darken()` function to dynamically darken HEX colors for consistent hover states.

```ts
export const darken = (color: string, amount: number): string => { ... };
```

> Ensures reusable hover color logic across all UI elements.

---

## 📄 Listing Pages Simplification
Merged `ActivitiesList` and `page.tsx` into one unified page.

Pattern now reused for:
- `/cars`
- `/travel-packs`
- `/activities`

**Advantages:**
- Cleaner structure
- Easier localization handling
- Reduced file fragmentation

---

## ✅ Result Summary
All **Details Pages** now share the same base layout and style logic.

| Benefit | Description |
|----------|-------------|
| ✅ Consistency | Unified design and layout |
| ✅ Centralization | Shared base for styling |
| ✅ Maintainability | Reduced repetition across modules |
| ✅ Scalability | Faster creation of new detail pages |

---

### 📚 Files Involved
```
components/ui_v2/foundation/DetailsBase.styled.ts
components/ui_v2/styled/CarDetailsSection.styled.ts
components/ui_v2/styled/TravelPackDetailsSection.styled.ts
components/ui_v2/styled/ActivityDetailsSection.styled.ts
lib/colorUtils.ts
app/[locale]/cars/[id]/page.tsx
app/[locale]/travel-packs/[id]/page.tsx
app/[locale]/activities/[id]/page.tsx
```

---

### 🧭 Next Step
Create `UI_V2_DETAILS_MASTER_DOC.md` to consolidate documentation for all detail and listing pages, including visual diagrams and style tokens.
