import React from 'react';

import { Ticket } from './Ticket';
import { TicketContainerProps } from './interfaces';
import { useActions } from '../../hooks/useActions';

export const TicketContainer: React.FC<TicketContainerProps> = ({
  id,
  title,
  amount,
  price,
}) => {
  const { addReservedSeat } = useActions();

  const addReservedTickets = () => {
    addReservedSeat(id);
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
