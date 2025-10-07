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

const variantStyles = (theme: DefaultTheme) => ({
  h1: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSizes.h1};
    font-weight: ${theme.typography.fontWeights.bold};
  `,
  h2: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSizes.h2};
    font-weight: ${theme.typography.fontWeights.semiBold};
  `,
  h3: css`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSizes.h3};
    font-weight: ${theme.typography.fontWeights.medium};
  `,
  body: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: ${theme.typography.fontSizes.body};
    font-weight: ${theme.typography.fontWeights.regular};
  `,
  caption: css`
    font-family: ${theme.typography.fontFamily.base};
    font-size: ${theme.typography.fontSizes.caption};
    font-weight: ${theme.typography.fontWeights.regular};
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
  ${({ theme, $variant }) => variantStyles(theme)[$variant]};
`;

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
