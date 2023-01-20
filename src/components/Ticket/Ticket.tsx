import { FunctionComponent } from "react";

import { Box, Button, Typography } from "@mui/material";
import { RegularLink } from "../RegularLink/RegularLink";

import { TicketProps } from "./interfaces";
import { styles } from "./styles";

export const Ticket: FunctionComponent<TicketProps> = ({
  id,
  title,
  amount,
  price,
  addReservedTickets,
}) => {
  return (
    <Box sx={styles.ticketWrapper}>
      <Box sx={styles.ticketInfo}>
        <RegularLink
          path={`/movie/${id}`}
          title={`${title}:`}
          style={styles.ticketTitle}
        />
        <Typography variant="h2">
          {amount} {amount > 1 ? "tickets" : "ticket"}
        </Typography>
      </Box>
      <Box sx={styles.ticketInfo}>
        <Typography variant="h2">Total cost:</Typography>
        <Typography variant="h2">{price}$</Typography>
      </Box>
      <Box sx={styles.ticketButtonWrapper}>
        <Button variant="contained" onClick={addReservedTickets}>
          Reserve
        </Button>
      </Box>
    </Box>
  );
};
