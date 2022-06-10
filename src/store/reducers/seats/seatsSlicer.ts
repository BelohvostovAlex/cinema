import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISeat, ITicket } from "../../../models/ITicket"
import { seatsInitialState } from "./seatsTypes"
import {findMovie} from '../../../helpers/findMovie'

const initialState: seatsInitialState = {
    bookedMovies: []
}

export const seatsSlicer = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        setCheckedMovie: (state, action: PayloadAction<ITicket>) => {
            const currentMovie = findMovie(state.bookedMovies, action.payload.id)
            if(currentMovie?.title === action.payload.title) {
                return
            } else {
                state.bookedMovies.push(action.payload)
            }
        },
        addCheckedSeat: (state, action: PayloadAction<ISeat>) => {
            const currentMovie = findMovie(state.bookedMovies, action.payload.id)
            if(currentMovie) {
                const currentReservedSeat = currentMovie.reserved.includes(action.payload.seatNumber)
                if(currentReservedSeat) {
                    return
                }
                const currentCheckedSeat = currentMovie.checked.includes(action.payload.seatNumber)
                if(currentCheckedSeat) {
                    currentMovie.checked = currentMovie.checked.filter(item => item !== action.payload.seatNumber)
                    currentMovie.totalCheckedPrice = currentMovie.totalCheckedPrice - action.payload.price
                    currentMovie.totalCheckedAmount = currentMovie.totalCheckedAmount - 1
                } else {
                    currentMovie.checked.push(action.payload.seatNumber)
                    currentMovie.totalCheckedPrice = currentMovie.totalCheckedPrice + action.payload.price
                    currentMovie.totalCheckedAmount = currentMovie.totalCheckedAmount + 1
                }
            }
        },
        addReservedSeat: (state, action: PayloadAction<string>) => {
            const currentMovie = findMovie(state.bookedMovies, action.payload)
            currentMovie!.reserved = [...currentMovie!.reserved, ...currentMovie!.checked]
            currentMovie!.totalReservedAmount = currentMovie!.reserved.length
            currentMovie!.checked = []
            currentMovie!.totalCheckedPrice = 0
            currentMovie!.totalCheckedAmount = 0
        }
    }
})

export const {setCheckedMovie, addCheckedSeat, addReservedSeat} = seatsSlicer.actions
export default seatsSlicer.reducer