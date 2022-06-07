import React from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './styles';

export const NotFound: React.FC = () => {
  return (
    <Box sx={styles.notFoundWrapper}>
      <Typography variant="h2" sx={styles.notFoundTitle}>
        Page not found
      </Typography>
    </Box>
  );
};
