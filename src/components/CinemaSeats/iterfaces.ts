export interface CinemaSeatsContainerProps {
  title: string;
  id: string;
}

export interface CinemaSeatsProps {
  title: string;
  id: string;
  checkPrice: (row: string) => number;
  isChecked: (seat: string) => boolean;
  isReserved: (seat: string) => boolean;
}
