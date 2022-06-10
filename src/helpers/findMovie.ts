import { ITicket } from "../models/ITicket";

export const findMovie = (movies: ITicket[], id: string) => {
  return movies?.find((item) => item.id === id);
}