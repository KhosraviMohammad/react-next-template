import type { Components, Theme } from "@mui/material/styles";

export const cardTheme: Components<Theme> = {
  MuiCard: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }),
    },
  },
};
