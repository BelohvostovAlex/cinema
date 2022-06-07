import React from 'react';

import { Box, TextField, Button } from '@mui/material';

import { styles } from './styles';

export const Search: React.FC = () => {
  return (
    <Box sx={styles.searchWrapper}>
      <Box sx={styles.searchField}>
        <TextField placeholder="Type to search..." sx={styles.searchInput} />
        <Button variant="contained" size="large" sx={styles.searchButton}>
          Search
        </Button>
      </Box>
    </Box>
  );
};
