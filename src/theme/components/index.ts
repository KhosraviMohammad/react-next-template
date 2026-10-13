import type { Components, Theme } from "@mui/material/styles";
import { buttonTheme } from "./button";
import { iconButtonTheme } from "./iconButton";
import { inputTheme } from "./input";
import { cardTheme } from "./card";
import { paperTheme } from "./paper";
import { drawerTheme } from "./drawer";
import { tableTheme } from "./table";
import { chipTheme } from "./chip";

export const themeComponents: Components<Theme> = {
  ...buttonTheme,
  ...iconButtonTheme,
  ...inputTheme,
  ...cardTheme,
  ...paperTheme,
  ...drawerTheme,
  ...tableTheme,
  ...chipTheme,
};

export {
  buttonTheme,
  iconButtonTheme,
  inputTheme,
  cardTheme,
  paperTheme,
  drawerTheme,
  tableTheme,
  chipTheme,
};
