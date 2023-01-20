import { FunctionComponent } from "react";

import { Box, Typography } from "@mui/material";
import { Ticket } from "../../components/Ticket";
import { UserSummaryBlock } from "../../components/UserSummaryBlock";

import { UserProps } from "./interfaces";
import { styles } from "./styles";

export const User: FunctionComponent<UserProps> = ({ movies }) => {
  return (
    <Box sx={styles.userWrapper}>
      <Typography variant="h2" sx={styles.userTitle}>
        Your tickets:
      </Typography>
      {movies.map(({ id, title, totalCheckedAmount, totalCheckedPrice }) => (
        <Ticket
          key={id}
          id={id}
          title={title}
          amount={totalCheckedAmount}
          price={totalCheckedPrice}
        />
      ))}
      <UserSummaryBlock />
    </Box>
  );
};
