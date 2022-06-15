import { IMovie } from '../../models/IMovie';

export interface MainProps {
  movies: IMovie[];
  hasMovies: boolean;
  currentPage: number;
  filterHandler: (value: string) => void;
  changeCurrentPage: (page: number) => void;
}