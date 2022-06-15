import React from 'react';

import { CinemaSingleSeatContainerProps } from './interfaces';
import { useActions } from '../../hooks/useActions';
import { CinemaSingleSeat } from './CinemaSingleSeat';

export const CinemaSingleSeatContainer: React.FC<
  CinemaSingleSeatContainerProps
> = ({ isChecked, isReserved, seatNumber, checkPrice, id, title, row }) => {
  const { addCheckedSeat } = useActions();

  const addSeat = () => {
    const price = checkPrice(row);
    addCheckedSeat({ id, title, price: price, seatNumber });
  };

  return (
    <CinemaSingleSeat
      addSeat={addSeat}
      isChecked={isChecked}
      isReserved={isReserved}
    />
  );
};
