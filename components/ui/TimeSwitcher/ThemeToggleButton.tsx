// components/ui/Navbar/ThemeToggleButton.tsx
"use client";

import { useThemeToggle } from "@/hooks/useThemeToggle";
import { IconButton } from "./TimeSwitcher.styled";

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? "☀️" : "🌙"}
    </IconButton>
  );
}
