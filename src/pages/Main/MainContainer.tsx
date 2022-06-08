import React, { useEffect } from 'react';

import { Main } from './Main';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMovies } from '../../store/reducers/movies/asyncActions/fetchMovies';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setFilter, setPage } from '../../store/reducers/movies/moviesSlicer';

export const MainContainer: React.FC = () => {
  // const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();
  const { movies, filter, page } = useAppSelector((state) => state.movies);
  const filterHandler = (value: string) => {
    dispatch(setFilter(value));
  };
  const changeCurrentPage = (page: number) => {
    // setCurrentPage(page);
    dispatch(fetchMovies({ title: filter, page: page }));
    dispatch(setPage(page));
  };

  useEffect(() => {
    dispatch(fetchMovies({ title: filter, page: page }));
    dispatch(setFilter(filter ? filter : 'star wars'));
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
