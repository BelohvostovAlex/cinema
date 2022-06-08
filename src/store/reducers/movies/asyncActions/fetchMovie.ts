import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOneMovie } from '../../../../services/webService';

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovie',
  async (id: string, thunkAPI) => {
    try {
      const data = await fetchOneMovie(id)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);