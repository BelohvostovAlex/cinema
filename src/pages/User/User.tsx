import React from 'react';

import { Box, Typography } from '@mui/material';
import { Ticket } from '../../components/Ticket/Ticket';

import { styles } from './styles';

export const User: React.FC = () => {
  return (
    <Box sx={styles.userWrapper}>
      <Typography variant="h2" sx={styles.userTitle}>
        Your tickets:
      </Typography>
      <Ticket />
      <Ticket />
      <Box sx={styles.userSummaryBlock}>
        <Typography variant="h2">Reserved tickets</Typography>
        <Box sx={styles.userSummaryBlockInfo}>
          <Typography variant="h2">Movie name:</Typography>
          <Typography variant="h2">123 tickets</Typography>
        </Box>
        <Box sx={styles.userSummaryBlockInfo}>
          <Typography variant="h2">Movie name:</Typography>
          <Typography variant="h2">25 tickets</Typography>
        </Box>
      </Box>
    </Box>
  );
};
