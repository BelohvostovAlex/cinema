import { FunctionComponent } from "react";

import { Box } from "@mui/material";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";

import { styles } from "./styles";
import { NothingFoundProps } from "./interface";

export const NothingFound: FunctionComponent<NothingFoundProps> = ({
  title = "Oooops...",
  subtitle = "Something went wrong",
}) => {
  return (
    <Box sx={styles.nothingFoundWrapper}>
      <NotFoundBlock title={title} subtitle={subtitle} />
    </Box>
  );
};
