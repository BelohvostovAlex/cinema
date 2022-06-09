import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISeat, ITicket } from "../../../models/ITicket"
import { seatsInitialState } from "./seatsTypes"

const initialState: seatsInitialState = {
    reserved: [],
    checked: []
}

export const seatsSlicer = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        setCheckedMovie: (state, action: PayloadAction<ITicket>) => {
            const currentMovie = state.checked.find(item => item.id === action.payload.id)
            if(currentMovie) {
                return
            } else {
                state.checked.push(action.payload)
            }
        },
        addCheckedSeat: (state, action: PayloadAction<ISeat>) => {
            const currentMovie = state.checked.find(item => item.id === action.payload.id)
            if(currentMovie) {
                const currentSeat = currentMovie.checked.includes(action.payload.seatNumber)
                if(currentSeat) {
                    currentMovie.checked = currentMovie.checked.filter(item => item !== action.payload.seatNumber)
                    currentMovie.totalPrice = currentMovie.totalPrice - action.payload.price
                    currentMovie.totalAmount = currentMovie.totalAmount - 1
                    if(currentMovie.totalAmount === 0) {
                        state.checked = state.checked.filter(item => item.id !== action.payload.id)
                    }
                } else {
                    currentMovie.checked.push(action.payload.seatNumber)
                    currentMovie.totalPrice = currentMovie.totalPrice + action.payload.price
                    currentMovie.totalAmount = currentMovie.totalAmount + 1
                }
            }
        }
    }
})

export const {setCheckedMovie, addCheckedSeat} = seatsSlicer.actions
export default seatsSlicer.reducer