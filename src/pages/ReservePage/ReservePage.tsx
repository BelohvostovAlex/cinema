import React from 'react';

import { Box, Typography } from '@mui/material';
import { CinemaSeats } from '../../components/CinemaSeats/CinemaSeats';
import { ButtonLink } from '../../components/ButtonLink';

import { getStyles } from './styles';

export const ReservePage: React.FC = () => {
  const styles = getStyles();
  return (
    <Box sx={styles.root.reservePageWrapper}>
      <Typography variant="h2" sx={styles.root.reservePageTitle}>
        Choose your place
      </Typography>
      <CinemaSeats />
      <Box sx={styles.root.infoBlock}>
        <Typography variant="h2">Movie name</Typography>
        <Box sx={styles.root.infoBlockItem}>
          <Typography variant="h2">Tickets amount:</Typography>
          <Typography variant="h2">123</Typography>
        </Box>
        <Box sx={styles.root.infoBlockItem}>
          <Typography variant="h2">Total cost:</Typography>
          <Typography variant="h2">1321$</Typography>
        </Box>
        <ButtonLink
          href="/user"
          title="Add"
          className={styles.root.infoBlockButton}
        />
      </Box>
    </Box>
  );
};
