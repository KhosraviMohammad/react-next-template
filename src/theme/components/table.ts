import { alpha, type Components, type Theme } from "@mui/material/styles";

export const tableTheme: Components<Theme> = {
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: Number(theme.shape.borderRadius) || 8,
      }),
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? alpha(theme.palette.common.white, 0.035)
            : alpha(theme.palette.primary.main, 0.035),
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        fontFamily: "inherit",
      }),
      head: ({ theme }: { theme: Theme }) => ({
        fontWeight: 700,
        fontSize: "0.75rem",
        color: theme.palette.text.secondary,
        whiteSpace: "nowrap",
      }),
      body: {
        fontSize: "0.8125rem",
      },
      sizeSmall: {
        padding: "8px 14px",
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        transition: "background-color 0.15s ease",
        "&.MuiTableRow-hover:hover": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? alpha(theme.palette.common.white, 0.04)
              : alpha(theme.palette.primary.main, 0.035),
        },
        "&.Mui-selected": {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.12),
          },
        },
      }),
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.text.secondary,
        fontSize: "0.8125rem",
      }),
      selectLabel: {
        fontSize: "0.8125rem",
        fontWeight: 500,
      },
      displayedRows: {
        fontSize: "0.8125rem",
        fontWeight: 500,
      },
    },
  },
};

export default tableTheme;
