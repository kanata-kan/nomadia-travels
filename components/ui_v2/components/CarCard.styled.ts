// components/ui_v2/components/CarCard.styled.ts
"use client";

import styled from "styled-components";
import { darken } from "@/lib/colorUtils";

/* --------------------------------------------
   🧱 Card Layout
-------------------------------------------- */
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 520px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) =>
    theme.isDark
      ? darken(theme.colors.surface, -4)
      : darken(theme.colors.surface, 2)};
  border: 1px solid
    ${({ theme }) =>
      theme.isDark
        ? darken(theme.colors.surface, 10)
        : darken(theme.colors.surface, -10)};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.isDark
        ? darken(theme.colors.surface, 8)
        : darken(theme.colors.surface, -4)};
    box-shadow: 0 10px 20px ${({ theme }) => darken(theme.colors.primary, -25)};
    transform: translateY(-4px);
  }
`;

/* --------------------------------------------
   ⚙️ Specs Grid
-------------------------------------------- */
export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    color: ${({ theme }) => darken(theme.colors.primary, -10)};
    font-size: 1rem;
    filter: drop-shadow(0 0 3px rgba(255, 140, 0, 0.2));
    transition: color 0.3s ease;
  }

  span {
    display: block;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.muted};
    margin-top: 3px;
  }

  ${CardWrapper}:hover & svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
