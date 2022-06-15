export interface TicketContainerProps {
  title: string;
  addButton?: boolean;
  id: string;
  amount: number;
  price: number;
}

export interface TicketProps {
  title: string;
  addButton?: boolean;
  id: string;
  amount: number;
  price: number;
  addReservedTickets: () => void;
}
