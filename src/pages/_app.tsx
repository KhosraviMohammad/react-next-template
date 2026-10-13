import React from "react";
import type { AppProps } from "next/app";
import ClientRootProvider from "@/providers/ClientRootProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientRootProvider>
      <Component {...pageProps} />
    </ClientRootProvider>
  );
}
