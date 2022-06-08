import React from 'react';

import { SearchContainer } from '../../components/Search';
import { MovieCardContainer } from '../../components/MovieCard';
import { Pagination, Typography } from '@mui/material';
import { MainProps } from './interfaces';

export const Main: React.FC<MainProps> = ({
  movies,
  hasMovies,
  currentPage,
  filterHandler,
  changeCurrentPage,
}) => {
  return (
    <>
      <SearchContainer page={currentPage} filterHandler={filterHandler} />
      {hasMovies ? (
        <>
          {movies.map(({ imdbID }) => (
            <MovieCardContainer key={imdbID} id={imdbID} />
          ))}
          <Pagination
            count={10}
            color={'primary'}
            page={currentPage}
            onChange={(e, page) => changeCurrentPage(page)}
          />
        </>
      ) : (
        <>
          <Typography variant="h2">Nothing found</Typography>
          <Typography variant="h2">Please try another one</Typography>
        </>
      )}
    </>
  );
};
