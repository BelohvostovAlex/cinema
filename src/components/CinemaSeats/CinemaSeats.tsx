import { FunctionComponent } from "react";

import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { CinemaSingleSeat } from "../CinemaSingleSeat";

import { CinemaSeatsProps } from "./iterfaces";
import { styles } from "./styles";

const seatsRows = ["A", "B", "C", "D", "E"];
const seatsColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const CinemaSeats: FunctionComponent<CinemaSeatsProps> = ({
  title,
  id,
  checkPrice,
  isChecked,
  isReserved,
}) => {
  return (
    <Table sx={styles.seatsTable} data-testid="seats-table">
      <TableBody>
        {seatsRows.map((row) => (
          <TableRow key={row}>
            {seatsColumns.map((column) => (
              <TableCell key={column} sx={styles.seatsTableCell}>
                <CinemaSingleSeat
                  seatNumber={row + column}
                  checkPrice={checkPrice}
                  row={row}
                  title={title}
                  id={id}
                  isChecked={isChecked(row + column)}
                  isReserved={isReserved(row + column)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
