import { createTheme, responsiveFontSizes, type Theme, type Direction } from "@mui/material/styles";
import { getPalette } from "./palette";
import { typography } from "./typography";
import { themeComponents } from "./components";

export const createAppTheme = (mode: "light" | "dark", direction: Direction = "rtl"): Theme => {
  const baseTheme = createTheme({
    direction,
    palette: getPalette(mode),
    typography,
    shape: {
      borderRadius: 8,
    },
    components: themeComponents,
  });

  return responsiveFontSizes(baseTheme);
};

export default createAppTheme;
