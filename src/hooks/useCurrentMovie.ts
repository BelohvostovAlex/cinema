import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pathes } from '../components/AppRouter/interfaces';
import { IMovie } from '../models/IMovie';
import { fetchOneMovie } from '../services/webService';

export const useCurrentMovie = (id: string): IMovie => {
  const [currentMovie, setCurrentMovie] = useState({} as IMovie);
  const navigate = useNavigate();

  const getCurrentMovie = useCallback(async () => {
    const data = await fetchOneMovie(id!);

    if (data === 'False') {
      return navigate(Pathes.NOTHING_FOUND);
    } else {
      setCurrentMovie(data);
    }
  }, [id, navigate]);

  useEffect(() => {
    getCurrentMovie();
  }, [getCurrentMovie]);

  return currentMovie;
};
