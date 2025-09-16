// components/ThemeToggleButton.tsx
"use client";

import styled from "styled-components";
import { useThemeToggle } from "@/hooks/useThemeToggle";

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  cursor: pointer;
  border: none;
`;

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeToggle();
  return (
    <Button onClick={toggleTheme}>{isDark ? "☀️ Light" : "🌙 Dark"}</Button>
  );
}
