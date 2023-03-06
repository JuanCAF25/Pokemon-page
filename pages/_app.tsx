import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme, darksTheme } from "../themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darksTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}
