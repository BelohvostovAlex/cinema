import { FunctionComponent } from "react";

import { Container } from "@mui/material";
import { Header } from "../components/Header";

import { AppLayoutProps } from "./interface";

export const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth={false}>{children}</Container>
    </>
  );
};
