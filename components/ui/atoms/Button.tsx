// components/ui/atoms/Button.tsx
"use client";
import styled from "styled-components";

type ButtonProps = {
  $variant?: "primary" | "secondary" | "danger";
};

const StyledButton = styled.button<ButtonProps>`
  background: ${({ theme, $variant }) => {
    switch ($variant) {
      case "secondary":
        return theme.colors.secondary;
      case "danger":
        return theme.colors.danger;
      default:
        return theme.colors.primary;
    }
  }};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
}) {
  return <StyledButton $variant={variant}>{children}</StyledButton>;
}
