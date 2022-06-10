import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

import { User } from './User';

export const UserContainer: React.FC = () => {
  const { bookedMovies } = useAppSelector((state) => state.seats);

  const movies = bookedMovies.filter((item) => item.checked.length);

  return <User movies={movies} />;
};
