import { FunctionComponent } from "react";

import { Box } from "@mui/material";

import { CinemaSingleSeatProps } from "./interfaces";
import { getStyles } from "./styles";

export const CinemaSingleSeat: FunctionComponent<CinemaSingleSeatProps> = ({
  isChecked,
  isReserved,
  addSeat,
}) => {
  const styles = getStyles({ isChecked, isReserved });

  return <Box sx={styles} onClick={addSeat} />;
};
