import React from 'react';

import { Ticket } from './Ticket';
import { TicketContainerProps } from './interfaces';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addReservedSeat } from '../../store/reducers/seats/seatsSlicer';

export const TicketContainer: React.FC<TicketContainerProps> = ({
  id,
  title,
  amount,
  price,
}) => {
  const dispatch = useAppDispatch();
  const addReservedTickets = () => {
    dispatch(addReservedSeat(id));
  };
  return (
    <Ticket
      id={id}
      title={title}
      amount={amount}
      price={price}
      addReservedTickets={addReservedTickets}
    />
  );
};
