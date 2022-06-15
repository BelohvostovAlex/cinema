import React from 'react';

import { findMovie } from '../../helpers/findMovie';
import { useAppSelector } from '../../hooks/useAppSelector';
import { CinemaSeats } from './CinemaSeats';
import { CinemaSeatsContainerProps } from './iterfaces';

const price = {
  A: 8,
  B: 10,
  C: 10,
  D: 10,
  E: 14,
};

export const CinemaSeatsContainer: React.FC<CinemaSeatsContainerProps> = ({
  id,
  title,
}) => {
  const checkPrice = (row: string) => {
    const currentPrice = Object.entries(price).find(([key, value]) => {
      return key === row;
    });
    return currentPrice![1];
  };

  const { bookedMovies } = useAppSelector((state) => state.seats);
  const currentMovie = findMovie(bookedMovies, id);

  const isChecked = (seat: string) => {
    return currentMovie?.checked.includes(seat) ? true : false;
  };

  const isReserved = (seat: string) => {
    return currentMovie?.reserved.includes(seat) ? true : false;
  };

  return (
    <CinemaSeats
      id={id}
      title={title}
      checkPrice={checkPrice}
      isChecked={isChecked}
      isReserved={isReserved}
    />
  );
};
