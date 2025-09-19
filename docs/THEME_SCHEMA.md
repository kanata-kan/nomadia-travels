# 🟦 Detailed Schema — Theme Flow in Project

This document explains how **theme tokens** (colors, spacing, radii) flow through the system into `ThemeProviderWrapper`, and how both **server** and **client** components consume them.

---

## 1. Visual Flow

```css
[ tokens/ ]                                 [ theme.ts ]               [ layout.tsx ]
 colors.ts   ──────┐
   - primary       │
   - secondary     │
   - accent        │──►  lightTheme ──────────┐
   - background    │       darkTheme          │
   - text: {       │                          │
       primary     │                          ▼
       secondary   │               ThemeProviderWrapper
       muted       │                          ▼
       inverse     │              [ All Components in App ]
                   │                          │
 spacing.ts  ──────┼──► spacing: xs, sm, md…  │
 radii.ts    ──────┘                          │
                                              │
                                ┌─────────────┼───────────────┐
                                ▼             ▼               ▼
                      Server Components   Client Components   Shared UI
                     (CSS Variables)      (props.theme)       (both work)

```

---

## 2. Tokens Overview

- **colors.ts**
  - `primary`, `secondary`, `accent`, `background`
  - `text.primary`, `text.secondary`, `text.muted`, `text.inverse`

- **spacing.ts**
  - `xs`, `sm`, `md`, `lg`, `xl`

- **radii.ts**
  - `sm`, `md`, `lg`

---

## 3. Usage Patterns

### 3.1 Client Component (styled-components)

Use `props.theme` from ThemeProvider.

```tsx
const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.lg};
`;
```

3.2 Server Component (CSS Variables)
Use CSS custom properties generated in GlobalStyle.

```ts
<h2 style={{ color: "var(--color-text-primary)" }}>
  Server-Safe Title
</h2>
```

3.3 Variants / Patterns
Button → variant: primary | secondary | danger
Text → size: small | medium | large
(Optional future extension: typography.ts)

4. Key Principles
Centralization → All tokens defined once in /styles/tokens.
Consistency → Components always consume tokens, never hardcoded values.
Scalability → Adding new tokens (e.g., shadows, typography) does not break existing components.
✅ With this schema, any engineer can build new UI components following project-wide design rules, without digging into internal theme files.
