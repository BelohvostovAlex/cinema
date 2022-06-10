import React from 'react';

import { Search } from './Search';
import { useInput } from '../../hooks/useInput';
import { SearchContainerProps } from './interfaces';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMovies } from '../../store/reducers/movies/asyncActions/fetchMovies';
import { defaultFilter } from '../../config/defaultValues';

export const SearchContainer: React.FC<SearchContainerProps> = ({
  page,
  filterHandler,
}) => {
  const dispatch = useAppDispatch();
  const [value, handleValue] = useInput('');

  const getSearchedMovies = () => {
    dispatch(
      fetchMovies({ filter: value.length > 0 ? value : defaultFilter, page })
    );
    filterHandler(value.length > 0 ? value : defaultFilter);
  }; // should check it

  return (
    <Search
      value={value}
      handleValue={handleValue}
      getMovies={getSearchedMovies}
    />
  );
};
