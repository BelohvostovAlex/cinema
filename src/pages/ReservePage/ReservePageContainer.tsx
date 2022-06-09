import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useCurrentMovie } from '../../hooks/useCurrentMovie';

import { ReservePage } from './ReservePage';

export const ReservePageContainer: React.FC = () => {
  const {id} = useParams()

  const currentMovie = useCurrentMovie(id!)
  const {Title, imdbID, } = currentMovie
  
  // const {checked} = useAppSelector(state => state.seats)
  // const checkedMovie = checked?.find(item => item.id === id)
  // const {totalAmount, totalPrice} = checkedMovie!

  return <ReservePage title={Title} id={imdbID} />;
};
