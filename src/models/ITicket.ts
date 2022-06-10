export interface ITicket {
    id: string,
    title: string,
    reserved: string[],
    checked: string[],
    totalCheckedPrice: number,
    totalCheckedAmount: number,
    totalReservedAmount: number
}

export interface ISeat {
    id: string,
    title: string,
    seatNumber: string,
    price: number
}