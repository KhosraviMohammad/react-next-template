import React from "react";
import ClientRootProvider from "@/providers/ClientRootProvider";

export const metadata = {
  title: "CAVAX | صرافی آنلاین تتر",
  description: "معاملات امن، سریع و هوشمند تتر با صرافی کاواکس",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Vazirmatn:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientRootProvider>{children}</ClientRootProvider>
      </body>
    </html>
  );
}
