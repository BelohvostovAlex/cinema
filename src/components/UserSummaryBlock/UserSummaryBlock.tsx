import { FunctionComponent } from "react";

import { Box, Typography } from "@mui/material";
import { RegularLink } from "../RegularLink/RegularLink";

import { UserSummaryBlockProps } from "./interfaces";
import { styles } from "./styles";

export const UserSummaryBlock: FunctionComponent<UserSummaryBlockProps> = ({
  movies,
}) => {
  return (
    <Box sx={styles.summaryBlock}>
      <Typography variant="h2">Reserved tickets</Typography>
      {movies.map(({ id, title, totalReservedAmount }) => (
        <Box sx={styles.summaryBlockInfo} key={id}>
          <RegularLink
            path={`/movie/${id}`}
            title={`${title}:`}
            style={styles.summaryBlockMovieTitle}
          />
          <Typography variant="h2">
            {totalReservedAmount}
            {totalReservedAmount > 1 ? " tickets" : " ticket"}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
