import {
  addCheckedSeat,
  addReservedSeat,
  setCheckedMovie,
} from './seats/seatsSlicer';
import { setFilter, setPage } from './movies/moviesSlicer';
import { fetchMovies } from './movies/asyncActions/fetchMovies';

export const allActionCreators = {
  fetchMovies,
  setFilter,
  setPage,
  addCheckedSeat,
  addReservedSeat,
  setCheckedMovie,
};
