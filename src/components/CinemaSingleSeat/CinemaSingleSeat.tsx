import React from 'react';

import { Box } from '@mui/material';
import { CinemaSingleSeatProps } from './interfaces';

import { getStyles } from './styles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addCheckedSeat,setCheckedMovie } from '../../store/reducers/seats/seatsSlicer';

export const CinemaSingleSeat: React.FC<CinemaSingleSeatProps> = ({
  isChecked,
  isReserved,
  seatNumber,
  checkPrice,
  id,
  title,
  row
}) => {
  const styles = getStyles({ isChecked, isReserved });

  const dispatch = useAppDispatch()


  const addSeat = () => {
    const price = checkPrice(row)
    dispatch(setCheckedMovie({id, title, checked: [], reserved: [], totalAmount: 0, totalPrice: 0 }))
    dispatch(addCheckedSeat({id, title, price: price, seatNumber}))
  }


  return <Box sx={styles} onClick={addSeat}/>;
};
