import { FunctionComponent } from "react";

import { motion } from "framer-motion";
import { Search } from "../../components/Search";
import { MovieCardContainer } from "../../components/MovieCard";
import { NotFoundBlock } from "../../components/NotFoundBlock/NotFoundBlock";

import { Pagination } from "@mui/material";

import { MainProps } from "./interfaces";

export const Main: FunctionComponent<MainProps> = ({
  movies,
  hasMovies,
  currentPage,
  filterHandler,
  changeCurrentPage,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Search page={currentPage} filterHandler={filterHandler} />
      {hasMovies ? (
        <>
          {movies.map(({ imdbID }) => (
            <MovieCardContainer key={imdbID} id={imdbID} />
          ))}
          <Pagination
            count={10}
            color={"primary"}
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
    </motion.div>
  );
};
