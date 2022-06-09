import { useCallback, useEffect, useState } from "react";
import { IMovie } from "../models/IMovie";
import { fetchOneMovie } from "../services/webService";

export const useCurrentMovie = (id: string): IMovie => {
  const [currentMovie, setCurrentMovie] = useState({} as IMovie);

  const getCurrentMovie = useCallback(async () => {
    const data = await fetchOneMovie(id!);

    setCurrentMovie(data);
  }, [id]);

  useEffect(() => {
    getCurrentMovie();
  }, [getCurrentMovie]);

  return currentMovie;
};
