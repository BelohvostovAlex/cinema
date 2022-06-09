import React from 'react'
import { CinemaSeats } from './CinemaSeats'
import {CinemaSeatsContainerProps} from './iterfaces'

export const CinemaSeatsContainer: React.FC<CinemaSeatsContainerProps> = ({id, title}) => {
  return (
    <CinemaSeats id={id} title={title}/>
  )
}
