export interface CinemaSingleSeatProps {
  isChecked?: boolean,
  isReserved?: boolean,
  seatNumber: string,
  checkPrice: (row: string) => number,
  row: string,
  title: string,
  id: string,
}