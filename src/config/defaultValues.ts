import { ITicket } from "../models/ITicket";

export const defaultTicket: ITicket = {
  id: '',
  title: '',
  checked: [],
  reserved: [],
  totalCheckedAmount: 0,
  totalCheckedPrice: 0,
  totalReservedAmount: 0,
}

export const defaultFilter = 'star wars'