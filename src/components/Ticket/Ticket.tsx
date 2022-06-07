import React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { TicketProps } from './interfaces';

import { getStyles } from './styles';

export const Ticket: React.FC<TicketProps> = () => {
  const styles = getStyles();

  return (
    <Box sx={styles.root.ticketWrapper}>
      <Box sx={styles.root.ticketInfo}>
        <Typography variant="h2">Movie name:</Typography>
        <Typography variant="h2">123 tickets</Typography>
      </Box>
      <Box sx={styles.root.ticketInfo}>
        <Typography variant="h2">Total cost:</Typography>
        <Typography variant="h2">1321$</Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => console.log('reserved')}
        sx={styles.root.ticketButton}
      >
        Reserve
      </Button>
    </Box>
  );
};
