import React from 'react';

import { Box } from '@mui/material';
import { CinemaSingleSeatProps } from './interfaces';

import { getStyles } from './styles';

export const CinemaSingleSeat: React.FC<CinemaSingleSeatProps> = ({
  isAvailable,
  isChecked,
  isReserved,
}) => {
  const styles = getStyles({ isAvailable, isChecked, isReserved });
  return <Box sx={styles} />;
};
