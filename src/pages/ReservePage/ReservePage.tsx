import React from 'react';

import { Box, Typography } from '@mui/material';
import { CinemaSeats } from '../../components/CinemaSeats';
import { ButtonLink } from '../../components/ButtonLink';
import { RegularLink } from '../../components/RegularLink/RegularLink';
import { ReservePageProps } from './interfaces';
import { motion } from 'framer-motion';

import { styles } from './styles';

export const ReservePage: React.FC<ReservePageProps> = ({
  title,
  id,
  totalAmount,
  totalPrice,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={styles.reservePageWrapper}>
        <Typography variant="h2" sx={styles.reservePageTitle}>
          Choose your place
        </Typography>
        <CinemaSeats title={title} id={id} />
        <Box sx={styles.infoBlock}>
          <RegularLink path={`/movie/${id}`} title={title} />
          <Box sx={styles.infoBlockItem}>
            <Typography variant="h2">Tickets amount:</Typography>
            <Typography variant="h2">{totalAmount}</Typography>
          </Box>
          <Box sx={styles.infoBlockItem}>
            <Typography variant="h2">Total cost:</Typography>
            <Typography variant="h2">{totalPrice}$</Typography>
          </Box>
          <ButtonLink path="/user" title="Add" style={styles.infoBlockButton} />
        </Box>
      </Box>
    </motion.div>
  );
};
