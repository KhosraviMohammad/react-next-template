import type { Components, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export const chipTheme: Components<Theme> = {
  MuiChip: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        fontFamily: "Vazirmatn, sans-serif",
        fontWeight: 700,
        borderRadius: 6,
        transition: "all 0.2s ease-in-out",
        "&.MuiChip-clickable": {
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-1px)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
      },
      label: {
        paddingLeft: 8,
        paddingRight: 8,
        letterSpacing: "normal",
      },
      icon: {
        fontSize: "1rem",
        marginLeft: 4,
        marginRight: -4,
      },
      deleteIcon: ({ theme }: { theme: Theme }) => ({
        fontSize: "1rem",
        marginRight: 4,
        marginLeft: -4,
        color: alpha(theme.palette.text.secondary, 0.7),
        transition: "color 0.2s ease",
        "&:hover": {
          color: theme.palette.error.main,
        },
      }),
      sizeSmall: {
        height: 24,
        fontSize: "0.72rem",
        "& .MuiChip-icon": {
          fontSize: "0.875rem",
        },
        "& .MuiChip-deleteIcon": {
          fontSize: "0.875rem",
        },
      },
      sizeMedium: {
        height: 32,
        fontSize: "0.8125rem",
        borderRadius: 8,
      },
      // Base outlined slot
      outlined: ({ theme }: { theme: Theme }) => ({
        borderColor:
          theme.palette.mode === "light"
            ? alpha(theme.palette.grey[400], 0.4)
            : alpha(theme.palette.common.white, 0.15),
        backgroundColor: "transparent",
      }),
    },
    variants: [
      // Outlined Variants
      {
        props: { variant: "outlined", color: "primary" },
        style: ({ theme }: { theme: Theme }) => ({
          borderColor: alpha(theme.palette.primary.main, 0.4),
          color: theme.palette.primary.main,
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.mode === "light" ? 0.04 : 0.08,
          ),
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.15),
            borderColor: theme.palette.primary.main,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "secondary" },
        style: ({ theme }: { theme: Theme }) => ({
          borderColor: alpha(theme.palette.secondary.main, 0.4),
          color: theme.palette.secondary.main,
          backgroundColor: alpha(
            theme.palette.secondary.main,
            theme.palette.mode === "light" ? 0.04 : 0.08,
          ),
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.secondary.main, 0.15),
            borderColor: theme.palette.secondary.main,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "success" },
        style: ({ theme }: { theme: Theme }) => ({
          borderColor: alpha(theme.palette.success.main, 0.4),
          color: theme.palette.success.main,
          backgroundColor: alpha(
            theme.palette.success.main,
            theme.palette.mode === "light" ? 0.05 : 0.1,
          ),
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.success.main, 0.18),
            borderColor: theme.palette.success.main,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "warning" },
        style: ({ theme }: { theme: Theme }) => ({
          borderColor: alpha(theme.palette.warning.main, 0.4),
          color: theme.palette.warning.main,
          backgroundColor: alpha(
            theme.palette.warning.main,
            theme.palette.mode === "light" ? 0.05 : 0.1,
          ),
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.warning.main, 0.18),
            borderColor: theme.palette.warning.main,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "error" },
        style: ({ theme }: { theme: Theme }) => ({
          borderColor: alpha(theme.palette.error.main, 0.4),
          color: theme.palette.error.main,
          backgroundColor: alpha(
            theme.palette.error.main,
            theme.palette.mode === "light" ? 0.05 : 0.1,
          ),
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.error.main, 0.18),
            borderColor: theme.palette.error.main,
          },
        }),
      },
      {
        props: { variant: "outlined", color: "info" },
        style: ({ theme }: { theme: Theme }) => ({
          borderColor: alpha(theme.palette.info.main, 0.4),
          color: theme.palette.info.main,
          backgroundColor: alpha(
            theme.palette.info.main,
            theme.palette.mode === "light" ? 0.05 : 0.1,
          ),
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.info.main, 0.18),
            borderColor: theme.palette.info.main,
          },
        }),
      },
      // Filled Variants
      {
        props: { variant: "filled", color: "primary" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          "&.MuiChip-clickable:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
      {
        props: { variant: "filled", color: "secondary" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          "&.MuiChip-clickable:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }),
      },
      {
        props: { variant: "filled", color: "success" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? alpha(theme.palette.success.main, 0.12)
              : alpha(theme.palette.success.main, 0.2),
          color:
            theme.palette.mode === "light"
              ? theme.palette.success.dark
              : theme.palette.success.light,
          border: `1px solid ${alpha(theme.palette.success.main, 0.25)}`,
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.success.main, 0.3),
          },
        }),
      },
      {
        props: { variant: "filled", color: "warning" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? alpha(theme.palette.warning.main, 0.12)
              : alpha(theme.palette.warning.main, 0.2),
          color:
            theme.palette.mode === "light"
              ? theme.palette.warning.dark
              : theme.palette.warning.light,
          border: `1px solid ${alpha(theme.palette.warning.main, 0.25)}`,
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.warning.main, 0.3),
          },
        }),
      },
      {
        props: { variant: "filled", color: "error" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? alpha(theme.palette.error.main, 0.12)
              : alpha(theme.palette.error.main, 0.2),
          color:
            theme.palette.mode === "light" ? theme.palette.error.dark : theme.palette.error.light,
          border: `1px solid ${alpha(theme.palette.error.main, 0.25)}`,
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.error.main, 0.3),
          },
        }),
      },
      {
        props: { variant: "filled", color: "info" },
        style: ({ theme }: { theme: Theme }) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? alpha(theme.palette.info.main, 0.12)
              : alpha(theme.palette.info.main, 0.2),
          color:
            theme.palette.mode === "light" ? theme.palette.info.dark : theme.palette.info.light,
          border: `1px solid ${alpha(theme.palette.info.main, 0.25)}`,
          "&.MuiChip-clickable:hover": {
            backgroundColor: alpha(theme.palette.info.main, 0.3),
          },
        }),
      },
    ],
  },
};

export default chipTheme;
