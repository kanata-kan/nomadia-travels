// styles/styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
      surfaceAlt: string;

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
    };
  }
}
