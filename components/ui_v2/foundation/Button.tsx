"use client";

import styled from "styled-components";
import { ReactNode } from "react";

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

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["variant", "size", "fullWidth"].includes(prop as string),
})<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.radii.md};
  box-sizing: border-box;
  position: relative;
  transition: all 0.25s ease;
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};

  /* 🧩 Dynamic size */
  ${({ size, theme }) => {
    switch (size) {
      case "sm":
        return `
          font-size: ${theme.typography.fontSizes.caption};
          padding: ${theme.spacing.sm} ${theme.spacing.md};
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

  /* 🎨 Variants */
  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return `
          background: ${theme.colors.secondary};
          color: ${theme.colors.heroText};
          &:hover {
            background: ${theme.colors.primaryHover};
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
          color: ${theme.colors.heroText};
          &:hover {
            background: #b91c1c;
          }
        `;
      default:
        return `
          background: ${theme.colors.primary};
          color: ${theme.colors.heroText};
          &:hover {
            background: ${theme.colors.primaryHover};
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
