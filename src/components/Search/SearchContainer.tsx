import React from 'react';

import { Search } from './Search';
import { useInput } from '../../hooks/useInput';
import { SearchContainerProps } from './interfaces';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMovies } from '../../store/reducers/movies/asyncActions/fetchMovies';

export const SearchContainer: React.FC<SearchContainerProps> = ({
  page,
  filterHandler,
}) => {
  const dispatch = useAppDispatch();
  const [value, handleValue] = useInput('');

  const getSearchedMovies = () => {
    dispatch(fetchMovies({ filter: value, page }));
    filterHandler(value);
  };

  return (
    <Search
      value={value}
      handleValue={handleValue}
      getMovies={getSearchedMovies}
    />
  );
};
