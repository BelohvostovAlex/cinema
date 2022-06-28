import React from 'react';

import { Box, TextField, Button } from '@mui/material';
import { SearchProps } from './interfaces';

import { styles } from './styles';

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
          data-testid="search-input"
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
