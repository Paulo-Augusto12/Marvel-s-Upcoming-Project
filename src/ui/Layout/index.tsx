import { Box, Container } from "@mui/material";
import React from "react";
import { Footer } from "../components/Footer";

interface ILayoutProps {
  children: React.ReactNode;
}
export function Layout(props: ILayoutProps) {
  return (
    <>
      <Box sx={{ height: "90vh", backgroundColor: '#8D1D1D', width: '100%' }}>
        <Container>{props.children}</Container>
      </Box>
      <Footer />
    </>
  );
}
