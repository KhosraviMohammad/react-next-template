import React, { Suspense } from "react";
import SamplePage from "@/pages/SamplePage";
import { Box, CircularProgress } from "@mui/material";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400 }}>
          <CircularProgress />
        </Box>
      }
    >
      <SamplePage />
    </Suspense>
  );
}
