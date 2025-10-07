// styles/tokens/colors.ts

// 🌞 Light Theme
export const lightColors = {
  primary: "#F97316", // Vibrant orange CTA
  primaryHover: "#EA580C", // Darker hover for contrast
  secondary: "#2563EB", // Clear professional blue
  accent: "#10B981", // Calming green for success or highlights

  background: "#FAFAFA", // Neutral background
  surface: "#FFFFFF", // Card / section base
  surfaceAlt: "#F3F4F6", // Soft grey for subtle separation

  danger: "#DC2626", // Error / alert
  heroText: "#FFFFFF", // Text on dark hero or images

  text: {
    primary: "#111827", // Strong titles
    secondary: "#374151", // Normal content
    muted: "#6B7280", // Low-contrast text
    inverse: "#F9FAFB", // Text on dark backgrounds
    accent: "#10B981",
  },

  divider: "#E5E7EB", // Soft borders
  overlay: "rgba(0, 0, 0, 0.75)", // Modal background
};

// 🌚 Dark Theme
export const darkColors = {
  primary: "#FB923C", // Warm orange CTA
  primaryHover: "#F97316", // Slightly deeper tone
  secondary: "#3B82F6", // Blue that reads well on dark
  accent: "#22C55E", // Brighter green for visibility

  background: "#0F172A", // Deep navy base
  surface: "#1E293B", // Slightly lighter surface
  surfaceAlt: "#334155", // Mid-grey for cards

  danger: "#F87171",
  heroText: "#FFFFFF",

  text: {
    primary: "#F9FAFB", // White text for headers
    secondary: "#E2E8F0", // Softer white for content
    muted: "#94A3B8", // Muted tone for captions
    inverse: "#111827", // Inverse for light-on-dark
    accent: "#22C55E", // Brighter green for visibility
  },

  divider: "#475569",
  overlay: "rgba(0, 0, 0, 0.65)",
};
