"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* 🎨 Theme Tokens as CSS Variables */
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-accent: ${({ theme }) => theme.colors.accent};
    --color-background: ${({ theme }) => theme.colors.background};

    --color-text-primary: ${({ theme }) => theme.colors.text.primary};
    --color-text-secondary: ${({ theme }) => theme.colors.text.secondary};
    --color-text-muted: ${({ theme }) => theme.colors.text.muted};
    --color-text-inverse: ${({ theme }) => theme.colors.text.inverse};

    /* Typography tokens from theme */
    --font-base: ${({ theme }) => theme.typography.fontFamily.base};
    --font-heading: ${({ theme }) => theme.typography.fontFamily.heading};

    --font-size-h1: ${({ theme }) => theme.typography.fontSizes.h1};
    --font-size-h2: ${({ theme }) => theme.typography.fontSizes.h2};
    --font-size-h3: ${({ theme }) => theme.typography.fontSizes.h3};
    --font-size-body: ${({ theme }) => theme.typography.fontSizes.body};
    --font-size-caption: ${({ theme }) => theme.typography.fontSizes.caption};

    --line-height-tight: ${({ theme }) => theme.typography.lineHeights.tight};
    --line-height-normal: ${({ theme }) => theme.typography.lineHeights.normal};
    --line-height-relaxed: ${({ theme }) => theme.typography.lineHeights.relaxed};

    /* Spacing tokens from theme */
    --spacing-xs: ${({ theme }) => theme.spacing.xs};
    --spacing-sm: ${({ theme }) => theme.spacing.sm};
    --container-max-lg: ${({ theme }) => theme.layout.container.maxWidth.lg};
    --section-spacing-default-md: ${({ theme }) => theme.layout.section.spacing.default.md};
  }

  /* 🧩 Modern Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 🧠 Base Typography System */
  body {
    font-family: var(--font-base);
    line-height: var(--line-height-relaxed);
    background-color: var(--color-background);
    color: var(--color-text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* 🏗️ Headings follow heading font */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--color-text-primary);
    line-height: var(--line-height-tight);
    margin-bottom: 0.5em;
  }

  h1 { font-size: var(--font-size-h1); font-weight: 700; }
  h2 { font-size: var(--font-size-h2); font-weight: 600; }
  h3 { font-size: var(--font-size-h3); font-weight: 500; }

  /* 📝 Body Text */
  p {
    margin-bottom: 1rem;
    font-size: var(--font-size-body);
    color: var(--color-text-secondary);
  }

  small, .caption {
    font-size: var(--font-size-caption);
    color: var(--color-text-muted);
  }

  /* 🌐 Links */
  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover {
    text-decoration: underline;
  }

  /* 🔘 Form Elements */
  button, input, textarea, select {
    font: inherit;
    background: none;
    border: none;
    color: inherit;
  }

  /* ♿ Accessibility Focus */
  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

/* 🧩 Utility Classes */
.mb-strong {
  margin-bottom: 2rem !important;
}

/* ✂️ Clamp text to 2 lines (hide overflow) */
.text-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* عدد الأسطر المسموح بها */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

`;
