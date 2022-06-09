import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { CinemaSingleSeat } from '../CinemaSingleSeat/CinemaSingleSeat';
import {CinemaSeatsProps} from './iterfaces'

import { getStyles } from './styles';

const seatsRows = ['A', 'B', 'C', 'D', 'E'];
const price = {
  A: 8,
  B: 10,
  C: 10,
  D: 10,
  E: 14,
};
const seatsColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const CinemaSeats: React.FC<CinemaSeatsProps> = ({title, id}) => {
  const styles = getStyles();
  
  const checkPrice = (row: string) => {
    const currentPrice =  Object.entries(price).find(([key,value]) => {
      return key === row
    })
    return currentPrice![1]
  }



  return (
    <Table sx={styles.root.seatsTable}>
      <TableBody>
        {seatsRows.map((row) => (
          <TableRow key={row}>
            {seatsColumns.map((column) => (
              <TableCell key={column} sx={styles.root.seatsTableCell}>
                <CinemaSingleSeat seatNumber={row+column} checkPrice={checkPrice} row={row} title={title} id={id} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
