import React, { useCallback, useEffect, useState } from 'react';

import { checkTagLength } from '../../helpers/checkTagLength';
import { IMovie } from '../../models/IMovie';
import { fetchOneMovie } from '../../services/webService';
import { MovieCardContainerProps } from './interfaces';
import { MovieCard } from './MovieCard';

export const MovieCardContainer: React.FC<MovieCardContainerProps> = ({
  id,
}) => {
  const [currentMovie, setCurrentMovie] = useState({} as IMovie);

  const getMovie = useCallback(async () => {
    const data = await fetchOneMovie(id);
    setCurrentMovie(data);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

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
