import { alpha, type Components, type Theme } from "@mui/material/styles";

export const drawerTheme: Components<Theme> = {
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }: { theme: Theme }) => ({
        borderRight: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        backgroundImage: "none",
        boxSizing: "border-box",
      }),
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        paddingTop: 4,
        paddingBottom: 4,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderRadius: 8,
        padding: "8px 8px",
        minHeight: 44,
        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
        border: "1px solid transparent",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
          color: theme.palette.primary.main,
          "& .MuiListItemIcon-root": {
            color: theme.palette.primary.main,
          },
        },
        "&.Mui-selected": {
          color: theme.palette.primary.main,
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          borderColor: alpha(theme.palette.primary.main, 0.2),
          fontWeight: 700,
          "& .MuiListItemIcon-root": {
            color: theme.palette.primary.main,
          },
          "& .MuiListItemText-primary": {
            fontWeight: 700,
          },
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.14),
          },
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: "inherit",
        minWidth: 38,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.2s ease",
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {
        fontSize: "0.875rem",
        fontWeight: 600,
        whiteSpace: "nowrap",
      },
    },
  },
};

export default drawerTheme;
