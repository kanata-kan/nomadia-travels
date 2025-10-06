# 🧩 Kanata UI v2 — Layout System Overview

This document explains the **Spacing & Layout System** architecture used in **Nomadia Travels (UI v2)**.  
It defines how vertical and horizontal rhythm is established across the interface.

---

## 🎯 Purpose

To create a **consistent, scalable visual rhythm** that connects spacing, containers, and grids to typography.  
Every gap, margin, and padding in the project follows a unified logic to ensure predictable alignment and harmony.

---

## ⚙️ Core Components

| Element               | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| **Spacing Tokens**    | Define consistent gaps between elements (`--space-2`, `--space-4`, `--space-8`...) |
| **Layout Containers** | Structural wrappers controlling max-width, horizontal padding, and centering       |
| **Section Variants**  | Vertical spacing presets (`tight`, `default`, `loose`) used for top/bottom padding |
| **Grid System**       | Controls multi-column layouts with defined `gap` and responsive breakpoints        |
| **Alignment Rules**   | Define consistent horizontal & vertical alignment (flex/grid utilities)            |

---

## 🧱 File Structure

```bash
styles/
└── tokens/
    ├── spacing.ts      → numeric spacing scale (base: 8px)
    ├── layout.ts       → containers, grid, and section configs
components/ui_v2/layout/
├── Container.tsx       → fixed max-width & responsive padding
├── SectionWrapper.tsx  → applies vertical spacing variants
└── FullBleed.tsx       → edge-to-edge layouts
docs/UI-V2/LAYOUT_SYSTEM.md
```

## 🧮 Spacing Scale

Token REM PX Usage

```bash
--space-2	0.125rem	2px	minimal gaps (icons, borders)
--space-4	0.25rem	4px	compact UIs
--space-8	0.5rem	8px	base unit (core rhythm)
--space-12	0.75rem	12px	inline elements
--space-16	1rem	16px	component spacing
--space-24	1.5rem	24px	between sections
--space-32	2rem	32px	loose layouts
--space-64	4rem	64px	page-level separation
```

All spacing is rem-based and scales dynamically with typography.

## 🧩 Section Variants

```bash
Defined inside layout.ts and applied via <SectionWrapper variant="tight" | "default" | "loose" />.
Variant	Top / Bottom Padding	Use Case
Tight	var(--space-24)	dense sections like cards or lists
Default	var(--space-48)	general-purpose section
Loose	var(--space-64)	large hero or end sections
```

## 🧠 Design Philosophy

Maintain 8px-based modular scale.
Ensure vertical rhythm aligns with typography line heights.
Avoid arbitrary pixel values — always reference spacing tokens.
Use containers to maintain consistent reading width and section wrappers for vertical flow.
Favor CSS variables for live theming and scaling.

## 🧩 Example Implementation

```bash
import SectionWrapper from "@/components/ui_v2/layout/SectionWrapper";
```
```tsx
export default function LayoutDemoPage() {
return (
<>
<SectionWrapper variant="tight">
<h2>Tight Section</h2>
</SectionWrapper>

      <SectionWrapper>
        <h2>Default Section</h2>
      </SectionWrapper>

      <SectionWrapper variant="loose">
        <h2>Loose Section</h2>
      </SectionWrapper>
    </>

);
}
```
## 🧭 Integration With Theme

All spacing tokens are exposed via CSS variables inside GlobalStyle:

```json
:root {
--space-2: 0.125rem;
--space-4: 0.25rem;
--space-8: 0.5rem;
--space-16: 1rem;
--space-24: 1.5rem;
--space-32: 2rem;
--space-64: 4rem;
}
```
```ts
// Then consumed via theme.spacing in styled-components:

padding: ${({ theme }) => theme.spacing["space-32"]};
```
## 🧩 Future Extensions

Responsive spacing (space-md, space-lg)
Fluid layout scaling (clamp-based)
Adaptive grids (auto-fit minmax)
Content density modes (compact, comfortable)

## ✅ Checklist (Phase Completion)

Spacing tokens defined (spacing.ts)
Layout tokens & variants defined (layout.ts)
SectionWrapper, Container, FullBleed implemented
CSS variables integrated in theme
Layout demo page validated (/layout-demo)
Documentation completed (LAYOUT_SYSTEM.md)
End of Phase 2 — Spacing & Layout System ✅
