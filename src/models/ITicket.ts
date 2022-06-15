export interface ITicket {
  id: string;
  title: string;
  reserved: string[];
  checked: string[];
  totalCheckedPrice: number;
  totalCheckedAmount: number;
  totalReservedAmount: number;
}