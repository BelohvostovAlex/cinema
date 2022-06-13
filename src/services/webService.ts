import axios from 'axios';
import { API_URL, API_KEY } from '../config/apiConstants';
import { IParams } from '../store/reducers/movies/moviesTypes';

export const fetchAllMovies = async (params: IParams) => {
  try {
    const { filter, page } = params;
    const { data } = await axios.get(
      `${API_URL}?s=${filter}&page=${page}&type=movie&apikey=${API_KEY}`
    );

    if (data.Response === 'False') {
      throw Error(data.Error);
    }
    return data.Search;
  } catch (error) {
    throw error;
  }
};

export const fetchOneMovie = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
    if (data.Response === 'False') {
      return data.Response;
    }
    return data;
  } catch (error) {
    throw new Error('Failed to fetch the movie');
  }
};
