import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IMovie } from "../../../models/IMovie"
import { allAsyncActions } from "./asyncActions"
import { moviesInitialState } from "./moviesTypes"

const initialState: moviesInitialState = {
  movies: [] as IMovie[],
  isError: '',
  isLoading: false,
  filter: '',
  page: 1
}

const { fetchMovies } = allAsyncActions

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<IMovie[]>) => {
      state.isError = ''
      state.isLoading = false
      state.movies = action.payload
    },
    [fetchMovies.pending.type]: (state) => {
      state.isError = ''
      state.isLoading = true
    },
    [fetchMovies.rejected.type]: (state) => {
      state.isLoading = false
      state.movies = [] as IMovie[]
      state.isError = 'Failed to fetch movies...'
    },
  }
})

export const { setFilter, setPage } = moviesSlicer.actions
export default moviesSlicer.reducer