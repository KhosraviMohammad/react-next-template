import type { PaletteOptions } from "@mui/material/styles";

export const getPalette = (mode: "light" | "dark"): PaletteOptions => ({
  mode,
  primary: {
    main: "#2563eb", // Brand Blue
    light: "#3b82f6",
    dark: "#1d4ed8",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#06b6d4", // Brand Cyan
    light: "#22d3ee",
    dark: "#0891b2",
    contrastText: "#ffffff",
  },
  background: {
    default: mode === "light" ? "#f8fafc" : "#0b1329",
    paper: mode === "light" ? "#ffffff" : "#111c38",
  },
  text: {
    primary: mode === "light" ? "#0f172a" : "#f8fafc",
    secondary: mode === "light" ? "#64748b" : "#94a3b8",
  },
  grey: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  action: {
    hover: mode === "light" ? "#f8fafc" : "rgba(255, 255, 255, 0.04)",
    selected: mode === "light" ? "#f1f5f9" : "rgba(255, 255, 255, 0.08)",
  },
  error: {
    main: "#ef4444",
    light: "#f87171",
    dark: "#dc2626",
  },
  success: {
    main: "#26A17B", // Tether green
    light: "#34d399",
    dark: "#059669",
  },
  warning: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#d97706",
  },
  info: {
    main: "#06b6d4",
    light: "#38bdf8",
    dark: "#0284c7",
  },
  divider: mode === "light" ? "#e2e8f0" : "rgba(255, 255, 255, 0.12)",
});
