import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useCurrentMovie } from '../../hooks/useCurrentMovie';
import { setCheckedMovie } from '../../store/reducers/seats/seatsSlicer';

import { MoviePage } from './MoviePage';

const defaultTicketInfo = {
  id: '',
  title: '',
  checked: [],
  reserved: [],
  totalCheckedAmount: 0,
  totalCheckedPrice: 0,
  totalReservedAmount: 0,
};

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
    dispatch(setCheckedMovie({ ...defaultTicketInfo, id: id!, title: Title }));
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
