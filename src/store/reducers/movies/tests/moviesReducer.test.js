import moviesReducer, { setFilter, setPage } from '../moviesSlicer';

describe('movies reducer', () => {
  test('set filter, page', () => {
    expect(
      moviesReducer(
        {
          movies: [],
          isError: '',
          isLoading: false,
          filter: 'star wars',
          page: 1,
        },
        setFilter('batman')
      )
    ).toEqual({
      movies: [],
      isError: '',
      isLoading: false,
      filter: 'batman',
      page: 1,
    });

    expect(
      moviesReducer(
        {
          movies: [],
          isError: '',
          isLoading: false,
          filter: 'star wars',
          page: 1,
        },
        setPage(2)
      )
    ).toEqual({
      movies: [],
      isError: '',
      isLoading: false,
      filter: 'star wars',
      page: 2,
    });
  });
});
