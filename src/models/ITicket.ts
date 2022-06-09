export interface ITicket {
    id: string,
    title: string,
    reserved: string[],
    checked: string[],
    totalPrice: number,
    totalAmount: number
}

export interface ISeat {
    id: string,
    title: string,
    seatNumber: string,
    price: number
}