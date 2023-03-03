import { Box, Container } from "@mui/material";
import React from "react";
import { Footer } from "../components/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}
export function Layout(props: ILayoutProps) {
  return (
    <>
      <Box sx={{ backgroundColor: "#8D1D1D", padding: "0 30px" }}>
        <Container>{props.children}</Container>
      </Box>
      <Footer />
    </>
  );
}
