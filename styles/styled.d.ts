import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;

    colors: {
      // 🎨 Core palette
      primary: string;
      primaryHover: string;
      secondary: string;
      accent: string;

      // 🧱 Surfaces & backgrounds
      background: string;
      backgroundAlt: string; // 👈 NEW
      surface: string;
      surfaceAlt: string;
      sectionAlt: string; // 👈 NEW

      // ⚠️ States & helpers
      danger: string;
      heroText: string;

      // 🧠 Text tokens
      text: {
        primary: string;
        secondary: string;
        muted: string;
        inverse: string;
        accent: string;
        onPrimary?: string; // 👈 NEW (text color above gradients or primary areas)
      };

      divider: string;
      overlay?: string;
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

    typography: {
      fontFamily: {
        base: string;
        heading: string;
      };
      fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        body: string;
        caption: string;
      };
      fontWeights: {
        bold: number;
        semiBold: number;
        medium: number;
        regular: number;
      };
      lineHeights: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
  }
}

// ✅ Optional JSX Fix (for polymorphic styled components)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
