import styled from "styled-components";
import { darken } from "@/lib/colorUtils";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.text.muted};
  border-radius: ${({ theme }) => theme.radii.sm};
  overflow: hidden;
`;

export const LangButton = styled.button<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.background};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.text.inverse : theme.colors.text.primary};
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $active, theme }) =>
      $active
        ? darken(theme.colors.primary, 0.1)
        : darken(theme.colors.background, 0.1)};
  }

  &:active {
    transform: scale(0.95);
  }
`;
