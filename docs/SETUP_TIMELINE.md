# 🛠️ Setup Timeline — Nomadia Travels

## 🎯 Purpose

This document tracks the **setup journey** of the project, step by step.  
It helps new engineers understand what’s already done and what’s next.

---

## ✅ Completed Steps

1. **Task 1.1 — Setup Next.js + TypeScript**
   - Bootstrapped project with Next.js 13 App Router + TS.
   - Verified baseline app runs with `pnpm dev`.

2. **Task 1.2 — styled-components Integration**
   - Added `ThemeProviderWrapper` with Light theme.
   - Created `theme.ts`, `styled.d.ts`, and `global.ts`.
   - Verified button sample with primary color.

3. **Task 1.3 — ESLint + Prettier + Husky**
   - Installed and configured linting/formatting tools.
   - Added pre-commit hook with `lint-staged`.
   - Ensured clean commits only.

4. **Task 1.4 — Advanced Theme System**
   - Added Light/Dark theme toggle.
   - Improved `GlobalStyle` and design tokens (`colors`, `spacing`, `radii`).
   - Verified developer experience with styled-components DevTools.

5. **Task 2.1 — Global Layout + Metadata Base**
   - Moved metadata config to `lib/metadata.ts`.
   - Connected fonts (GeistSans, GeistMono).
   - Wrapped children with `ThemeProviderWrapper` in `layout.tsx`.
   - Verified hydration safety + suppress warnings.

6. **Task 2.2 — Navbar Setup**
   - Built responsive `NavbarDesktop` + `NavbarResponsive` components.
   - Added `ThemeToggleButton` + `LanguageSwitcher`.
   - Centralized navigation links in `data/navLinks.json`.
   - Styled Drawer with smooth fade/slide animations.
   - Verified routing + UI/UX across devices.

- **Task 2.3 — Build Footer**
  - Added `components/ui/Footer` (client component).
  - Created `Footer.styled.tsx` with styled-components + theme tokens.
  - Added `footer.data.ts` (Company / Support / Legal links).
  - Built responsive grid (4 → 2 → 1).
  - Newsletter form with validation + feedback.
  - Social icons placeholders.
  - Integrated into `app/layout.tsx`.

- **Task 2.4 — Add `metadata.ts**
- Created folder structure: `lib/metadata/`.
- Added `base.ts` with **baseMetadata** (site-wide defaults).
- Implemented `getMetadataStatic` for static pages.
- Implemented `getMetadataDynamic` for dynamic pages.
- Added `index.ts` to re-export all helpers (clean imports).
- Configured `.env.local` to hold `NEXT_PUBLIC_SITE_URL` for canonical URLs.
- Verified integration in `app/layout.tsx` and example pages.
- Result: Centralized, scalable SEO-ready metadata system.

---

**Task 5.1 – Define JSON Schemas**

- Designed JSON structures for all content resources:
  - `cars.json`, `gallery.json`, `travel-packs.json`, `about.json`, `contact.json`, `home.json`.
- Organized under `data/content/`.
- Metadata handled separately (lib/metadata).
- Result: Consistent, client-friendly schemas (clear separation static/dynamic).

---

**Task 5.2 – API Wrapper & Fetch**

- Created API Routes for each resource under `/app/api/{resource}`.
- Standardized response contract: `{ status, data }` or `{ status, message }`.
- Built generic `fetchAPI<T>()` in `lib/api.ts`.
- Implemented wrappers: `getCars`, `getGallery`, `getTravelPacks`, `getAbout`, `getContact`, `getHome`.
- Tested caching strategies (SSG, ISR, SSR) with demo pages under `/app/tests/{resource}`.
- Result: Scalable data layer with clean, reusable API interface.

---

**Task 5.3 – Validation & Type Safety**

- Defined TypeScript interfaces under `types/` (Car, GalleryItem, TravelPack, AboutPage, ContactPage, HomePage).
- Added `lib/validators.ts` with validation functions (`validateCar`, `validateGallery`, ...).
- Connected validators to API wrappers (ensuring type safety).
- Flow: JSON → API → fetchAPI<T> → Types → Validators → Pages.
- Result: Strong type safety + validation before data reaches UI.

---

**Task 7.1 — Foundation Wrappers**

- Built 3 base UI wrappers under `components/ui/`:
  - `Container` → responsive max-width + gutters.
  - `SectionWrapper` → vertical rhythm (tight, default, loose) + background tokens.
  - `FullBleed` → edge-to-edge layout with optional inner container.
- Connected to `theme.layout` + fixed React prop warnings.

_Result:_ Solid baseline for consistent, production-ready layouts.

---

---

**Task 7.2 — Hero Component**

- Built `HeroSection` (HeroContainer, HeroInner, HeroTitle, HeroSubtitle, HeroCTA).
- Connected to `home.json` → title, subtitle, heroImage, ctaText, ctaLink.
- Overlay logic (`dark | light | auto`) ensures text readability in both themes.
- CTA uses Next.js `Link` with auto-detect (internal vs external).
- Used transient props (`$bgImage`, `$overlay`, `$align`) to avoid React warnings.
- Result: Production-ready Hero, responsive & dynamic.

---

---

## 🧭 Notes for Future Engineers

- Every task is documented both in **code** and in **docs/**.
- Follow timeline in order to avoid missing dependencies.
- Use this file to add notes after finishing each task.
