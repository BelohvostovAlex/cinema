import React from 'react';

import { Box } from '@mui/material';
import { NotFoundBlock } from '../../components/NotFoundBlock/NotFoundBlock';

import { styles } from './styles';

export const NothingFound: React.FC = () => {
  return (
    <Box sx={styles.nothingFoundWrapper}>
      <NotFoundBlock title="Oooops..." subtitle="Something went wrong" />
    </Box>
  );
};
