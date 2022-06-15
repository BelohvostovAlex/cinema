import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { findMovie } from '../../helpers/findMovie';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useCurrentMovie } from '../../hooks/useCurrentMovie';
import { ReservePage } from './ReservePage';
import { defaultTicket } from '../../config/defaultValues';

export const ReservePageContainer: React.FC = () => {
  const { setCheckedMovie } = useActions();

  const { id } = useParams();

  const currentMovie = useCurrentMovie(id!);
  const { Title, imdbID } = currentMovie;

  const { bookedMovies } = useAppSelector((state) => state.seats);
  const checkedMovie = findMovie(bookedMovies, id!);

  let totalCheckedSeats, totalCheckedSeatsPrice;
  if (checkedMovie) {
    const { totalCheckedAmount, totalCheckedPrice } = checkedMovie!;
    totalCheckedSeats = totalCheckedAmount;
    totalCheckedSeatsPrice = totalCheckedPrice;
  }
  useEffect(() => {
    setCheckedMovie({ ...defaultTicket, id: id!, title: Title });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Title, id]);

  return (
    <ReservePage
      title={Title}
      id={imdbID}
      totalAmount={totalCheckedSeats}
      totalPrice={totalCheckedSeatsPrice}
    />
  );
};
