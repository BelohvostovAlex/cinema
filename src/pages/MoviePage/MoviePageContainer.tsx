import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useCurrentMovie } from '../../hooks/useCurrentMovie';
import { setCheckedMovie } from '../../store/reducers/seats/seatsSlicer';
import { defaultTicket } from '../../config/defaultValues';

import { MoviePage } from './MoviePage';

export const MoviePageContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const currentMovie = useCurrentMovie(id!);

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
    imdbID,
  } = currentMovie;

  const addCurrentMovie = () => {
    dispatch(setCheckedMovie({ ...defaultTicket, id: id!, title: Title }));
  };

  return (
    <MoviePage
      title={Title}
      id={imdbID}
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
      addCurrentMovie={addCurrentMovie}
    />
  );
};
