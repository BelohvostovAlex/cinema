import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { findMovie } from '../../helpers/findMovie';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useCurrentMovie } from '../../hooks/useCurrentMovie';
import { setCheckedMovie } from '../../store/reducers/seats/seatsSlicer';
import { ReservePage } from './ReservePage';
import { defaultTicket } from '../../config/defaultValues';

export const ReservePageContainer: React.FC = () => {
  const dispatch = useAppDispatch();
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
    dispatch(setCheckedMovie({ ...defaultTicket, id: id!, title: Title }));
  }, [Title, id, dispatch]);

  return (
    <ReservePage
      title={Title}
      id={imdbID}
      totalAmount={totalCheckedSeats}
      totalPrice={totalCheckedSeatsPrice}
    />
  );
};
