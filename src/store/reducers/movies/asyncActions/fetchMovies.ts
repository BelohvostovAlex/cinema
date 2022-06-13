import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllMovies } from '../../../../services/webService';
import { IParams } from '../moviesTypes';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (params: IParams, thunkAPI) => {
    try {
      const data = await fetchAllMovies(params);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
