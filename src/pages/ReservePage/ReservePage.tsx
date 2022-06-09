import React from 'react';

import { Box, Typography } from '@mui/material';
import { CinemaSeats } from '../../components/CinemaSeats/CinemaSeats';
import { ButtonLink } from '../../components/ButtonLink';

import { getStyles } from './styles';
import { ReservePageProps } from './interfaces';

export const ReservePage: React.FC<ReservePageProps> = ({title, id}) => {
  const styles = getStyles();
  return (
    <Box sx={styles.root.reservePageWrapper}>
      <Typography variant="h2" sx={styles.root.reservePageTitle}>
        Choose your place
      </Typography>
      <CinemaSeats title={title} id={id}/>
      <Box sx={styles.root.infoBlock}>
        <Typography variant="h2">{title}</Typography>
        <Box sx={styles.root.infoBlockItem}>
          <Typography variant="h2">Tickets amount:</Typography>
          <Typography variant="h2">{'totalAmount'}</Typography>
        </Box>
        <Box sx={styles.root.infoBlockItem}>
          <Typography variant="h2">Total cost:</Typography>
          <Typography variant="h2">{'totalPrice'}$</Typography>
        </Box>
        <ButtonLink
          path="/user"
          title="Add"
          className={styles.root.infoBlockButton}
        />
      </Box>
    </Box>
  );
};
