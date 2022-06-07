import React from 'react';

import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { CinemaSingleSeat } from '../CinemaSingleSeat/CinemaSingleSeat';

import { getStyles } from './styles';

const seatsRows = ['A', 'B', 'C', 'D', 'E'];
const seatsColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const CinemaSeats: React.FC = () => {
  const styles = getStyles();
  return (
    <Table sx={styles.root.seatsTable}>
      <TableBody>
        {seatsRows.map((row) => (
          <TableRow key={row}>
            {seatsColumns.map((column) => (
              <TableCell key={column} sx={styles.root.seatsTableCell}>
                <CinemaSingleSeat isAvailable />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
