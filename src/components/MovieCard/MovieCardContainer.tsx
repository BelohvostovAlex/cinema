import { FunctionComponent } from "react";

import { MovieCard } from "./MovieCard";

import { checkTagLength } from "../../helpers/checkTagLength";
import { useCurrentMovie } from "../../hooks/useCurrentMovie";

import { MovieCardContainerProps } from "./interfaces";

export const MovieCardContainer: FunctionComponent<MovieCardContainerProps> = ({
  id,
}) => {
  const currentMovie = useCurrentMovie(id);
  const { Actors, Runtime, Genre, Plot, Poster, Year, Title } = currentMovie;

  const genres = checkTagLength(Genre);

  return (
    <MovieCard
      id={id}
      title={Title}
      actors={Actors}
      runtime={Runtime}
      genre={genres!}
      plot={Plot}
      poster={Poster}
      year={Year}
    />
  );
};
