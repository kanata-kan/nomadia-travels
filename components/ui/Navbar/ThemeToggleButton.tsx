// components/ui/Navbar/ThemeToggleButton.tsx
"use client";

import styled from "styled-components";
import { useThemeToggle } from "@/hooks/useThemeToggle";

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: rotate(8deg) scale(1.05);
  }
`;

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
      {isDark ? "☀️" : "🌙"}
    </IconButton>
  );
}
