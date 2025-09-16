// components/ThemeProviderWrapper.tsx
"use client";

import { ThemeProvider } from "styled-components";
import { ThemeProviderCustom, useThemeToggle } from "@/hooks/useThemeToggle";
import { GlobalStyle } from "@/styles/global";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderCustom>
      <InnerWrapper>{children}</InnerWrapper>
    </ThemeProviderCustom>
  );
}

function InnerWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeToggle();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
