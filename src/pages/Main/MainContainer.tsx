import React, { useEffect } from "react";

import { Main } from "./Main";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";

export const MainContainer: React.FC = () => {
  const { setFilter, setPage, fetchMovies } = useActions();
  const { movies, filter, page } = useAppSelector((state) => state.movies);

  const filterHandler = (value: string) => {
    setFilter(value);
  };

  const changeCurrentPage = (page: number) => {
    fetchMovies({ filter, page });
    setPage(page);
  };

  useEffect(() => {
    setFilter(filter);
    fetchMovies({ filter, page });
  }, [filter, page]);

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
