import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMovie } from '../../../models/IMovie';
import { fetchMovies } from './asyncActions/fetchMovies';
import { moviesInitialState } from './moviesTypes';
import { defaultFilter } from '../../../config/defaultValues';

const initialState: moviesInitialState = {
  movies: [] as IMovie[],
  isError: '',
  isLoading: false,
  filter: defaultFilter,
  page: 1,
};

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<IMovie[]>) => {
      state.isError = '';
      state.isLoading = false;
      state.movies = action.payload;
    },
    [fetchMovies.pending.type]: (state) => {
      state.isError = '';
      state.isLoading = true;
    },
    [fetchMovies.rejected.type]: (state) => {
      state.isLoading = false;
      state.movies = [] as IMovie[];
      state.isError = 'Failed to fetch movies...';
    },
  },
});

export const { setFilter, setPage } = moviesSlicer.actions;

export default moviesSlicer.reducer;
