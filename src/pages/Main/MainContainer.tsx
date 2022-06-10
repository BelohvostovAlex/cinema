import React, { useEffect } from 'react';

import { Main } from './Main';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMovies } from '../../store/reducers/movies/asyncActions/fetchMovies';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setFilter, setPage } from '../../store/reducers/movies/moviesSlicer';

export const MainContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, filter, page } = useAppSelector((state) => state.movies);

  const filterHandler = (value: string) => {
    dispatch(setFilter(value));
  };

  const changeCurrentPage = (page: number) => {
    dispatch(fetchMovies({ filter, page }));
    dispatch(setPage(page));
  };

  useEffect(() => {
    dispatch(setFilter(filter));
    dispatch(fetchMovies({ filter, page }));
  }, [dispatch, filter, page]);

  const hasMovies = !!movies.length;

  return (
    <Main
      movies={movies}
      hasMovies={hasMovies}
      currentPage={page}
      filterHandler={filterHandler}
      changeCurrentPage={changeCurrentPage}
    />
  );
};
