import seatReducer, { addCheckedSeat, addReservedSeat } from '../seatsSlicer';

describe('seat reducer', () => {
  test('add checked seat', () => {
    expect(
      seatReducer(
        {
          bookedMovies: [
            {
              id: 'tt0076759',
              title: 'Star Wars',
              checked: [],
              reserved: [],
              totalCheckedAmount: 0,
              totalCheckedPrice: 0,
              totalReservedAmount: 0,
            },
          ],
        },
        addCheckedSeat({
          id: 'tt0076759',
          title: 'Star Wars',
          price: 8,
          seatNumber: 'A1',
        })
      )
    ).toEqual({
      bookedMovies: [
        {
          id: 'tt0076759',
          title: 'Star Wars',
          checked: ['A1'],
          reserved: [],
          totalCheckedAmount: 1,
          totalCheckedPrice: 8,
          totalReservedAmount: 0,
        },
      ],
    });
  });

  test('add reserved seat', () => {
    expect(
      seatReducer(
        {
          bookedMovies: [
            {
              id: 'tt0076759',
              title: 'Star Wars',
              checked: ['A1'],
              reserved: [],
              totalCheckedAmount: 1,
              totalCheckedPrice: 8,
              totalReservedAmount: 0,
            },
          ],
        },
        addReservedSeat('tt0076759')
      )
    ).toEqual({
      bookedMovies: [
        {
          id: 'tt0076759',
          title: 'Star Wars',
          checked: [],
          reserved: ['A1'],
          totalCheckedAmount: 0,
          totalCheckedPrice: 0,
          totalReservedAmount: 1,
        },
      ],
    });
  });
});
