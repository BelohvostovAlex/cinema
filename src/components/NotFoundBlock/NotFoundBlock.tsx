import { FunctionComponent } from "react";

import { Typography } from "@mui/material";

import { NotFoundBlockProps } from "./interfaces";

export const NotFoundBlock: FunctionComponent<NotFoundBlockProps> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
    </>
  );
};
