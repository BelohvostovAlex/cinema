import { FunctionComponent } from "react";

import { Ticket } from "./Ticket";

import { useActions } from "../../hooks/useActions";

import { TicketContainerProps } from "./interfaces";

export const TicketContainer: FunctionComponent<TicketContainerProps> = ({
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
