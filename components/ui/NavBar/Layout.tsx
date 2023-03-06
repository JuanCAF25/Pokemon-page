import { FC } from "react";
import { Box } from "./Box";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);
