import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IMovie } from '../../models/IMovie';
import { fetchOneMovie } from '../../services/webService';
import { MoviePage } from './MoviePage';

export const MoviePageContainer: React.FC = () => {
  const { id } = useParams();

  const [currentMovie, setCurrentMovie] = useState({} as IMovie);

  const getCurrentMovie = useCallback(async () => {
    const data = await fetchOneMovie(id!);

    setCurrentMovie(data);
  }, [id]);

  useEffect(() => {
    getCurrentMovie();
  }, [getCurrentMovie]);

  const {
    Title,
    Actors,
    Awards,
    BoxOffice,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Metascore,
    imdbRating,
    Released,
    Year,
    Country,
  } = currentMovie;

  return (
    <MoviePage
      title={Title}
      actors={Actors}
      awards={Awards}
      boxOffice={BoxOffice}
      director={Director}
      genre={Genre}
      language={Language}
      plot={Plot}
      poster={Poster}
      metaScore={Metascore}
      imdbRating={imdbRating}
      released={Released}
      year={Year}
      country={Country}
    />
  );
};
