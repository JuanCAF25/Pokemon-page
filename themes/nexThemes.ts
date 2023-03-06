// 1. Import `createTheme`
import { createTheme, NextUIProvider } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {}, // optional
  },
});

export const darksTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // optional
  },
});
