import React from 'react';

import { SearchContainer } from '../../components/Search';
import { MovieCardContainer } from '../../components/MovieCard';
import { Pagination } from '@mui/material';

export const Main: React.FC = () => {
  return (
    <>
      <SearchContainer />
      {[1, 2].map((item) => (
        <MovieCardContainer />
      ))}
      <Pagination count={10} color={'primary'} />
    </>
  );
};
