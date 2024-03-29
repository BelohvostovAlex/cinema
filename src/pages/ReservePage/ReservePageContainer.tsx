import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ReservePage } from "./ReservePage";

import { findMovie } from "../../helpers/findMovie";
import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useCurrentMovie } from "../../hooks/useCurrentMovie";
import { defaultTicket } from "../../config/defaultValues";

export const ReservePageContainer: FunctionComponent = () => {
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
