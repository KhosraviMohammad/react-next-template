"use client";

import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

const drawerWidth = 240;
const collapsedWidth = 64;

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopDrawerToggle = () => {
    setDesktopOpen(!desktopOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header
        onDrawerToggle={handleDrawerToggle}
        onDesktopDrawerToggle={handleDesktopDrawerToggle}
        desktopOpen={desktopOpen}
        drawerWidth={drawerWidth}
        collapsedWidth={collapsedWidth}
      />

      <Sidebar
        drawerWidth={drawerWidth}
        collapsedWidth={collapsedWidth}
        mobileOpen={mobileOpen}
        desktopOpen={desktopOpen}
        onDrawerToggle={handleDrawerToggle}
        onDesktopDrawerToggle={handleDesktopDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
