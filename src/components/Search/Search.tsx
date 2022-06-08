import React from 'react';

import { Box, TextField, Button } from '@mui/material';

import { styles } from './styles';
import { SearchProps } from './interfaces';

export const Search: React.FC<SearchProps> = ({
  value,
  handleValue,
  getMovies,
}) => {
  return (
    <Box sx={styles.searchWrapper}>
      <Box sx={styles.searchField}>
        <TextField
          placeholder="Type to search..."
          sx={styles.searchInput}
          value={value}
          onChange={handleValue}
        />
        <Button
          variant="contained"
          size="large"
          sx={styles.searchButton}
          onClick={getMovies}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
