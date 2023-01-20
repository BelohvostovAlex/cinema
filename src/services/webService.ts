import axios from "axios";

import { IParams } from "../store/reducers/movies/moviesTypes";

export const fetchAllMovies = async (params: IParams) => {
  try {
    const { filter, page } = params;
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}?s=${filter}&page=${page}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`
    );

    if (data.Response === "False") {
      throw Error(data.Error);
    }
    return data.Search;
  } catch (error) {
    throw error;
  }
};

export const fetchOneMovie = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
    );
    if (data.Response === "False") {
      return data.Response;
    }
    return data;
  } catch (error) {
    throw new Error("Failed to fetch the movie");
  }
};
