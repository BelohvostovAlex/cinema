import { FunctionComponent } from "react";

import { Search } from "./Search";

import { useInput } from "../../hooks/useInput";
import { useActions } from "../../hooks/useActions";
import { defaultFilter } from "../../config/defaultValues";

import { SearchContainerProps } from "./interfaces";

export const SearchContainer: FunctionComponent<SearchContainerProps> = ({
  page,
  filterHandler,
}) => {
  const { fetchMovies } = useActions();
  const [value, handleValue] = useInput("");

  const getSearchedMovies = () => {
    fetchMovies({ filter: value.length > 0 ? value : defaultFilter, page });
    filterHandler(value.length > 0 ? value : defaultFilter);
  };

  return (
    <Search
      value={value}
      handleValue={handleValue}
      getMovies={getSearchedMovies}
    />
  );
};
