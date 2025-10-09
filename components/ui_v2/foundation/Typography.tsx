"use client";

import React from "react";
import styled, { css, DefaultTheme } from "styled-components";

export type TypographyVariant = "h1" | "h2" | "h3" | "body" | "caption";

interface TypographyProps {
  as?: keyof JSX.IntrinsicElements;
  variant?: TypographyVariant;
  align?: "left" | "center" | "right";
  color?: keyof DefaultTheme["colors"]["text"];
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/* ---------------------------------------------
   Responsive variant styles using clamp()
--------------------------------------------- */
const variantStyles = (theme: DefaultTheme) => ({
  h1: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
    font-weight: ${theme.typography.fontWeights.bold};
    line-height: ${theme.typography.lineHeights.tight};
  `,
  h2: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(1.75rem, 3vw + 0.8rem, 2.75rem);
    font-weight: ${theme.typography.fontWeights.semiBold};
    line-height: ${theme.typography.lineHeights.normal};
  `,
  h3: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: clamp(1.25rem, 2.2vw + 0.5rem, 2rem);
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: ${theme.typography.lineHeights.normal};
  `,
  body: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: clamp(0.95rem, 1vw + 0.6rem, 1.125rem);
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.relaxed};
  `,
  caption: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: clamp(0.8rem, 0.6vw + 0.5rem, 0.9rem);
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.relaxed};
    opacity: 0.85;
  `,
});

const StyledText = styled.p<{
  $variant: TypographyVariant;
  $align: "left" | "center" | "right";
  $color?: keyof DefaultTheme["colors"]["text"];
}>`
  margin: 0;
  text-align: ${({ $align }) => $align};
  color: ${({ theme, $color }) =>
    $color ? theme.colors.text[$color] : theme.colors.text.primary};

  ${({ theme, $variant }) =>
    variantStyles(theme)[$variant] as ReturnType<typeof css>};

  transition:
    color 0.25s ease-in-out,
    font-size 0.25s ease;
`;

const Typography = ({
  as: Component = "p",
  variant = "body",
  align = "left",
  color,
  children,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledText
      as={Component as any}
      $variant={variant}
      $align={align}
      $color={color}
      className={className}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export default Typography;
