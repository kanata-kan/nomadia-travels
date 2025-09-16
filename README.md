# Nomadia Travels (MVP V1)

## 🌍 Vision & Scope

Nomadia Travels is an MVP for a global travel website: elegant, multilingual (EN/FR), and scalable.

- **Current phase:** MVP V1 (Static JSON + API Routes)
- **Future roadmap:** Strapi CMS → Authentication → Payments

---

## 🚀 Tech Stack

- **Next.js 13+ (App Router)** → Routing, ISR, Metadata, Error/Loading UI
- **React** → UI Components
- **TypeScript** → Types & Interfaces
- **styled-components** → CSS-in-JS + ThemeProvider
- **Static JSON (data/)** → Initial content
- **API Routes (app/api/)** → Proxy layer (future Strapi integration)
- **i18n (next-intl / next-i18next)** → EN/FR support
- **Vercel Hosting** → Fast deploy + ISR

---

## 📌 Recent Progress

- [x] **Task 1.1:** Setup Next.js + TypeScript
- [x] **Task 1.2:** Add styled-components
  - Installed and configured styled-components with Next.js 13 App Router.
  - Added `ThemeProviderWrapper` with Light theme.
  - Created `theme.ts`, `styled.d.ts` for type safety, and `global.ts` for CSS variables.
  - Successfully tested a sample button with primary color.
  - Next step: Document learnings in Notion & prepare for dark mode toggle (future task).

---

## 📂 Project Structure (Planned)

nomadia-travels/
├─ app/
│ ├─ layout.tsx # Root Layout
│ ├─ page.tsx # Home
│ ├─ cars/ # Cars listing & details (ISR)
│ ├─ gallery/ # Gallery page
│ ├─ about/ # About page
│ ├─ contact/ # Contact form + handler
│ └─ api/ # Proxy API Routes
├─ components/ # UI + Layout
├─ styles/ # theme + GlobalStyle
├─ types/ # TypeScript interfaces
├─ data/ # JSON content
├─ locales/ # EN/FR translations
├─ lib/ # fetchData, metadata, constants
└─ public/ # Images, icons

---

## 🔀 GitHub Strategy

- **Default branch:** `main`
- **Feature branches:**

  - `feature/setup-nextjs` → Next.js + TypeScript setup
  - `feature/styled-components-setup` → Add styled-components
  - `chore/add-pr-template` → Add PR Template

- **Branch rules:**

  - Each feature in a dedicated branch
  - Merge via Pull Request only
  - Code Review is mandatory

- **Commit style:** Conventional (`feat`, `chore`, `fix`, …)

---

## ✅ Completed Setup Tasks

- [x] Define vision & scope
- [x] Write architecture reference
- [x] Prepare Notion task database
- [x] Setup GitHub repo & branch strategy
