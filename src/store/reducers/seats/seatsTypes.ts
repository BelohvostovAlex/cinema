import { ITicket } from "../../../models/ITicket";

export interface seatsInitialState {
    reserved: ITicket[],
    checked: ITicket[],
}