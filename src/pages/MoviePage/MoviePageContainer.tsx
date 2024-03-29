import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { MoviePage } from "./MoviePage";

import { useActions } from "../../hooks/useActions";
import { useCurrentMovie } from "../../hooks/useCurrentMovie";
import { defaultTicket } from "../../config/defaultValues";

export const MoviePageContainer: FunctionComponent = () => {
  const { setCheckedMovie } = useActions();

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
    setCheckedMovie({ ...defaultTicket, id: id!, title: Title });
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
