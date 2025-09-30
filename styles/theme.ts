// styles/theme.ts
import { lightColors, darkColors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { radii } from "./tokens/radii";
import { breakpoints } from "./tokens/breakpoints";
import { layout } from "./tokens/layout";

export const lightTheme = {
  colors: lightColors,
  spacing,
  radii,
  breakpoints,
  layout,
  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0px 10px 15px rgba(0, 0, 0, 0.15)",
    xl: "0px 20px 25px rgba(0, 0, 0, 0.2)",
  },
};

export const darkTheme = {
  colors: darkColors,
  spacing,
  radii,
  breakpoints,
  layout,
  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.2)",
    md: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    lg: "0px 10px 15px rgba(0, 0, 0, 0.4)",
    xl: "0px 20px 25px rgba(0, 0, 0, 0.5)",
  },
};
