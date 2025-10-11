// components/ui_v2/foundation/Button/Button.tsx
"use client";

import styled from "styled-components";
import { ReactNode } from "react";

// -------------------------------------------------------------
// 🧱 Button Component — Kanata UI v2
// Responsive, theme-aware, and architecturally clean
// -------------------------------------------------------------

interface ButtonProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

// --- Styled Core ---
const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "size", "fullWidth"].includes(prop as string),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  position: relative;
  transition: all 0.25s ease;
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  /* 🧩 Dynamic size */
  ${({ size, theme }) => {
    switch (size) {
      case "sm":
        return `
          font-size: ${theme.typography.fontSizes.caption};
          padding: ${theme.spacing.xs} ${theme.spacing.md};
        `;
      case "lg":
        return `
          font-size: ${theme.typography.fontSizes.h3};
          padding: ${theme.spacing.md} ${theme.spacing.xl};
        `;
      default:
        return `
          font-size: ${theme.typography.fontSizes.body};
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
        `;
    }
  }}

  /* 🎨 Variants (theme-aware) */
  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return `
          background: ${theme.isDark ? "#334155" : "#E2E8F0"};
          color: ${theme.isDark ? "#F1F5F9" : "#111827"};
          &:hover {
            background: ${theme.isDark ? "#475569" : "#CBD5E1"};
          }
        `;
      case "ghost":
        return `
          background: transparent;
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.divider};
          &:hover {
            background: ${theme.colors.surfaceAlt};
          }
        `;
      case "danger":
        return `
          background: ${theme.colors.danger};
          color: ${theme.colors.text.onPrimary};
          &:hover {
            background: #b91c1c;
          }
        `;
      default:
        return `
          background: ${theme.colors.brand.main};
          color: ${theme.colors.text.onPrimary};
          &:hover {
            background: ${theme.colors.brand.hover};
          }
        `;
    }
  }}

  /* 🔒 Disabled */
  ${({ disabled, theme }) =>
    disabled &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
      background: ${theme.colors.divider};
      color: ${theme.colors.text.muted};
      box-shadow: none;
    `}

  /* 🧠 Focus / Active feedback */
  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }
`;

// --- Component Wrapper ---
export default function Button({
  children,
  as: Tag = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  className,
}: ButtonProps) {
  return (
    <StyledButton
      as={Tag}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
