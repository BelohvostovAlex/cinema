import { IMovie } from '../../../models/IMovie';

export interface moviesInitialState {
  movies: IMovie[];
  isLoading: boolean;
  isError: string;
  filter: string;
  page: number;
}

export interface IParams {
  filter: string;
  page: number;
}