# 📘 Data Layer — Epic 5 (Nomadia Travels)

This document explains how the **Data Layer** is designed and implemented.  
It helps any engineer quickly understand the **flow, architecture, and contracts** between JSON → API → Fetch → Validation → UI.

---

## 1. Purpose

- Provide a **clear contract** between frontend and backend (even if backend = JSON for now).
- Ensure **type safety** and **data validation**.
- Keep the system **scalable** (easily switch from JSON → CMS/DB in the future).
- Guarantee **data quality** before reaching the UI.

---

## 2. Folder Structure

```yaml
data/content/ → Raw JSON (cars, gallery, travel-packs, about, contact, home)
app/api/\* → API Routes wrapping JSON (standard responses)
lib/api.ts → fetchAPI<T>() + wrappers (getCars, getHome…)
types/ → TypeScript interfaces (Car, TravelPack, …)
lib/validators.ts → Validation logic (check required fields, metadata…)
tests/ → Validation tests (valid/invalid cases)
```

---

## 3. Tasks Breakdown

### **5.1 — JSON Schemas**

```yaml
- Defined schemas for all resources:
  - `cars.json`, `gallery.json`, `travel-packs.json`, `about.json`, `contact.json`, `home.json`
- Rule: JSON contains **content only**, SEO metadata handled separately.
- Example (car):


{
  "id": "car-1",
  "name": "Luxury SUV",
  "description": "Comfortable SUV for mountain trips",
  "coverImage": "/images/cars/suv.jpg",
  "images": ["/images/cars/s1.jpg", "/images/cars/s2.jpg"],
  "price": "80$/day",
  "seats": 5,
  "transmission": "Automatic",
  "fuel": "Petrol"
}
```

### 5.2 — API Wrapper & Fetch

Created API routes in /app/api/{resource}/route.ts returning:

```json
{ "status": "success", "data": [...] }
```

```ts
Built fetchAPI<T>() inside lib/api.ts:

Supports SSR, SSG, ISR via options { cache, revalidate }.

Added wrappers:

getCars(), getGallery(), getTravelPacks(), getAbout(), getContact(), getHome().

Tested caching strategies:

Cars → ISR (1m)

Travel Packs → ISR (12h)

Gallery, About, Contact → SSG

Home → SSR
```

5.3 — Validation & Type Safety

Added types/ for each schema (Car, GalleryItem, …).

Added validators.ts:

Checks required fields (id, title, path, …).

Ensures arrays not empty (images, features).

Confirms metadata exists (title, description, image, alt).

Connected validators with wrappers inside lib/api.ts.

Built tests (tests/data-validation.test.ts) for valid/invalid cases.

4. Data Flow

```css
 flowchart TD
 A[data/content/*.json] --> B[API Routes (/api/*)]
 B --> C[lib/api.ts<br/>fetchAPI<T>() + wrappers]
 C --> D[types/<br/>interfaces]
 C --> E[lib/validators.ts<br/>validate*()]
 D --> F[Pages (app/*)]
 E --> F[Pages (app/*)]
```

Example Flow: getCars()

fetchAPI<Car[]>("cars") → fetch JSON.
Run validateCar() on each item.
Return safe Car[] to the UI.

5. Engineering Wins
   Consistency → unified response format.

Type Safety → TypeScript enforces schema.
Validation → catch invalid data before UI.
Scalability → swap JSON → CMS/DB with minimal changes.
Clarity → any engineer can understand the flow in < 5 minutes.

6. Status
   ✅ Completed: Tasks 5.1 → 5.3
   🔜 Next step: Integrate with real backend (Strapi / MongoDB).

```

```
