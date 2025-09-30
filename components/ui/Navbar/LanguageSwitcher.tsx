// components/ui/Navbar/LanguageSwitcher.tsx
"use client";

import { useState } from "react";
import styled from "styled-components";
import { darken } from "@/lib/colorUtils"; // Moved darken to a shared utility file

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.text.muted};
  border-radius: ${({ theme }) => theme.radii.sm};
  overflow: hidden;
`;

const LangButton = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.background};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.text.inverse : theme.colors.text.primary};
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $active, theme }) =>
      $active
        ? darken(theme.colors.primary, 0.1)
        : darken(theme.colors.background, 0.1)};
    color: ${({ $active, theme }) =>
      $active ? theme.colors.text.inverse : theme.colors.text.primary};
  }

  &:active {
    background: ${({ $active, theme }) =>
      $active
        ? darken(theme.colors.primary, 0.2)
        : darken(theme.colors.background, 0.2)};
    transform: scale(0.95);
  }
`;

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  return (
    <Wrapper>
      <LangButton
        $active={lang === "en"}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </LangButton>

      <LangButton
        $active={lang === "fr"}
        onClick={() => setLang("fr")}
        aria-label="Passer au Français"
      >
        FR
      </LangButton>
    </Wrapper>
  );
}
