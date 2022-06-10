import React from 'react';

import { Box } from '@mui/material';
import { CinemaSingleSeatProps } from './interfaces';

import { getStyles } from './styles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addCheckedSeat } from '../../store/reducers/seats/seatsSlicer';

export const CinemaSingleSeat: React.FC<CinemaSingleSeatProps> = ({
  isChecked,
  isReserved,
  seatNumber,
  checkPrice,
  id,
  title,
  row,
}) => {
  const styles = getStyles({ isChecked, isReserved });

  const dispatch = useAppDispatch();

  const addSeat = () => {
    const price = checkPrice(row);
    dispatch(addCheckedSeat({ id, title, price: price, seatNumber }));
  };

  return <Box sx={styles} onClick={addSeat} />;
};
