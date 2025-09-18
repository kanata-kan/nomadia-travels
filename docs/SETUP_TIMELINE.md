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

---

## ⏳ Pending Steps

7. **Task 2.3 — Footer Setup** // TODO
8. **Task 2.4 — Metadata Refactor** // TODO
9. **Task 2.5 — Global Error & Loading UI** // TODO
10. **Task 2.6 — i18n EN/FR Setup** // TODO

---

## 🧭 Notes for Future Engineers

- Every task is documented both in **code** and in **docs/**.
- Follow timeline in order to avoid missing dependencies.
- Use this file to add notes after finishing each task.
