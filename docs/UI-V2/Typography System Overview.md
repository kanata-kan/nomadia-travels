# ✨ Kanata UI v2 — Typography System Overview

Unified typography system for **Nomadia Travels (MVP V1)**,  
built on scalable theme tokens and responsive font hierarchy.  
Ensures **visual consistency**, **readability**, and **token-driven design** across both light/dark themes.

---

## 🎯 Purpose

Typography defines the visual rhythm and brand voice of **Nomadia Travels**.  
The goal of this system is to:

- Centralize **font management** through theme tokens.
- Unify **heading + body text hierarchy** across all sections.
- Ensure **accessibility & scalability** with CSS variables.
- Maintain **consistency** between dark/light themes.

---

## 🧩 System Architecture

```css
styles/
├── tokens/
│ ├── typography.ts # Font families, sizes, weights, line heights
│ ├── colors.ts # Text color tokens (primary, secondary, muted)
│ ├── spacing.ts # Layout spacing tokens
│ └── ...
├── theme.ts # Connects typography tokens to global theme
├── GlobalStyle.tsx # Injects CSS variables for font tokens
└── styled.d.ts # TypeScript typing for theme access
```

---

## 🧠 Conceptual Model

| Layer                    | Responsibility                           | Example                                   |
| ------------------------ | ---------------------------------------- | ----------------------------------------- |
| **Design Tokens**        | Define all font variables and sizes      | `fontSizes.h1 = "2.5rem"`                 |
| **Theme Layer**          | Connects tokens with light/dark palettes | `theme.typography.fontFamily.heading`     |
| **Global CSS Variables** | Expose tokens globally                   | `--font-size-h1: 2.5rem`                  |
| **Components Layer**     | Consume variables consistently           | `h1 { font-family: var(--font-heading) }` |

---

## ✏️ Font Hierarchy

### 🔹 Headings

| Level  | Token          | Font                  | Weight | Usage                      |
| ------ | -------------- | --------------------- | ------ | -------------------------- |
| **H1** | `fontSizes.h1` | `var(--font-heading)` | 700    | Page titles, hero sections |
| **H2** | `fontSizes.h2` | `var(--font-heading)` | 600    | Section titles             |
| **H3** | `fontSizes.h3` | `var(--font-heading)` | 500    | Subtitles, cards           |

### 🔹 Body & Caption

| Type          | Token               | Font               | Weight | Usage                    |
| ------------- | ------------------- | ------------------ | ------ | ------------------------ |
| **Body Text** | `fontSizes.body`    | `var(--font-base)` | 400    | Paragraphs, descriptions |
| **Caption**   | `fontSizes.caption` | `var(--font-base)` | 400    | Footnotes, metadata      |

---

## 🎨 Typography Tokens Example

```ts
// styles/tokens/typography.ts
export const typography = {
  fontFamily: {
    base: "'Inter', sans-serif",
    heading: "'Plus Jakarta Sans', sans-serif",
  },
  fontSizes: {
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    body: "1rem",
    caption: "0.875rem",
  },
  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
};
```

## 🌍 GlobalStyle Integration

```ts
// All typography tokens are automatically converted into CSS variables via GlobalStyle:
--font-base: ${({ theme }) => theme.typography.fontFamily.base};
--font-heading: ${({ theme }) => theme.typography.fontFamily.heading};

--font-size-h1: ${({ theme }) => theme.typography.fontSizes.h1};
--line-height-relaxed: ${({ theme }) => theme.typography.lineHeights.relaxed};

// Accessible anywhere inside styled-components or raw CSS.
```

## 🧱 Component Example (Typography.tsx)

```tsx
<Heading variant="h2" align="center" color="secondary">
  Explore Kyrgyz Culture
</Heading>

<Paragraph color="muted">
  Experience authentic nomadic traditions and breathtaking mountain landscapes.
</Paragraph>

//Each variant pulls directly from the typography tokens via theme.
```

## 🧩 Design Principles

```bash
Scalable — Any change to tokens updates all components automatically.
Readable — Line heights and color contrast optimized for accessibility.
Consistent — Font hierarchy unified across dark/light themes.
Tokenized — Every property (font, size, line-height) is a theme variable.
```

## ✅ Summary

```bash
Typography is centralized under styles/tokens/typography.ts.
GlobalStyle converts tokens into CSS variables for universal access.
Components (like Typography.tsx) consume tokens dynamically.
Supports Light/Dark themes with consistent font hierarchy.
This system allows Nomadia Travels to scale typography effortlessly, maintain design harmony, and simplify future redesigns.
```
