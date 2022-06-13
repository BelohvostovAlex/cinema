export interface MoviePageProps {
  id: string;
  title: string;
  actors: string;
  awards: string;
  boxOffice: string;
  director: string;
  genre: string;
  language: string;
  plot: string;
  poster: string;
  metaScore: string;
  imdbRating: string;
  released: string;
  year: string;
  country: string;
  addCurrentMovie: () => void;
}