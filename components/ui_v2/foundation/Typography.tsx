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
}

// 🎨 variant styles (dynamic from theme)
const variantStyles = (theme: DefaultTheme) => ({
  h1: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSizes.h1};
    font-weight: ${theme.typography.fontWeights.bold};
    line-height: ${theme.typography.lineHeights.tight};
  `,
  h2: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSizes.h2};
    font-weight: ${theme.typography.fontWeights.semiBold};
    line-height: ${theme.typography.lineHeights.normal};
  `,
  h3: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSizes.h3};
    font-weight: ${theme.typography.fontWeights.medium};
    line-height: ${theme.typography.lineHeights.normal};
  `,
  body: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: ${theme.typography.fontSizes.body};
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.relaxed};
  `,
  caption: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: ${theme.typography.fontSizes.caption};
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.normal};
  `,
});

// 🧱 styled component
const StyledText = styled.p<{
  $variant: TypographyVariant;
  $align: "left" | "center" | "right";
  $color?: keyof DefaultTheme["colors"]["text"];
}>`
  text-align: ${({ $align }) => $align};
  color: ${({ theme, $color }) =>
    $color ? theme.colors.text[$color] : theme.colors.text.primary};

  ${({ theme, $variant }) => variantStyles(theme)[$variant]};
  margin: 0;
`;

// 🧠 main component
const Typography: React.FC<TypographyProps> = ({
  as = "p",
  variant = "body",
  align = "left",
  color,
  children,
  className,
}) => {
  return (
    <StyledText
      as={as as any}
      $variant={variant}
      $align={align}
      $color={color}
      className={className}
    >
      {children}
    </StyledText>
  );
};

export default Typography;
