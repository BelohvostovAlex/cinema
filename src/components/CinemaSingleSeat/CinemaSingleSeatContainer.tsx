import { FunctionComponent } from "react";

import { useActions } from "../../hooks/useActions";
import { CinemaSingleSeat } from "./CinemaSingleSeat";

import { CinemaSingleSeatContainerProps } from "./interfaces";

export const CinemaSingleSeatContainer: FunctionComponent<
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
