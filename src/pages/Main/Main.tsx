import React from 'react';

import { Search } from '../../components/Search';
import { MovieCardContainer } from '../../components/MovieCard';
import { Pagination } from '@mui/material';
import { MainProps } from './interfaces';
import { NotFoundBlock } from '../../components/NotFoundBlock/NotFoundBlock';

export const Main: React.FC<MainProps> = ({
  movies,
  hasMovies,
  currentPage,
  filterHandler,
  changeCurrentPage,
}) => {
  return (
    <>
      <Search page={currentPage} filterHandler={filterHandler} />
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
        <NotFoundBlock
          title="Nothing found"
          subtitle="Please try another one"
        />
      )}
    </>
  );
};
