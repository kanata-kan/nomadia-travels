// styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string; // Added hover state for primary
      secondary: string;
      accent: string;
      background: string;
      surface: string;
      surfaceAlt: string;
      overlay?: string;

      danger: string;
      heroText: string;
      text: {
        primary: string;
        secondary: string;
        muted: string;
        inverse: string;
      };
      divider: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      full: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    layout: {
      container: {
        padding: {
          mobile: string;
          md: string;
          lg: string;
        };
        maxWidth: {
          md: string;
          lg: string;
          xl: string;
          "2xl": string;
        };
      };
      section: {
        spacing: {
          tight: { mobile: string; md: string; lg: string };
          default: { mobile: string; md: string; lg: string };
          loose: { mobile: string; md: string; lg: string };
        };
      };
      nav: {
        height: {
          sm: string;
          md: string;
          lg: string;
        };
      };
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
