import type { Components, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export const iconButtonTheme: Components<Theme> = {
  MuiIconButton: {
    defaultProps: {
      size: "medium",
    },
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderRadius: 8,
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        color: theme.palette.text.secondary,
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light"
              ? alpha(theme.palette.primary.main, 0.08)
              : alpha(theme.palette.primary.main, 0.15),
          color: theme.palette.primary.main,
        },
      }),
      sizeSmall: ({ theme }: { theme: Theme }) => ({
        width: 36,
        height: 36,
        padding: 6,
        borderRadius: 8,
        fontSize: "1.125rem",
      }),
      sizeMedium: ({ theme }: { theme: Theme }) => ({
        width: 42,
        height: 42,
        padding: 8,
        borderRadius: 10,
        fontSize: "1.25rem",
      }),
      sizeLarge: ({ theme }: { theme: Theme }) => ({
        width: 48,
        height: 48,
        padding: 10,
        borderRadius: 12,
        fontSize: "1.5rem",
      }),
      colorPrimary: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.12),
        },
      }),
      colorSecondary: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.secondary.main, 0.12),
        },
      }),
      colorError: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.error.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.error.main, 0.12),
        },
      }),
      colorSuccess: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.success.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.success.main, 0.12),
        },
      }),
      colorWarning: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.warning.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.warning.main, 0.12),
        },
      }),
      colorInfo: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.info.main,
        "&:hover": {
          backgroundColor: alpha(theme.palette.info.main, 0.12),
        },
      }),
    },
  },
};

export default iconButtonTheme;
