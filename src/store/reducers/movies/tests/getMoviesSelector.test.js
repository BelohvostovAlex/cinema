import { Main } from '../../../../pages/Main/Main';
import { renderTestApp } from '../../../../test/helpers/renderTestApp';
import * as reduxHooks from 'react-redux';

const getMovies = (state) => state?.movies?.movies || 0;
const movies = {
  movies: [
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
      Title: 'Star Wars',
      Type: 'movie',
      Year: '1977',
      imdbID: 'tt0076759',
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Title: 'Star Wars: Episode V - The Empire Strikes Back',
      Type: 'movie',
      Year: '1980',
      imdbID: 'tt0080684',
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Type: 'movie',
      Year: '1983',
      imdbID: 'tt0086190',
    },
  ],
};

jest.mock('react-redux');

describe('movies selector', () => {
  test('movies', () => {
    expect(getMovies({})).toBe(0);
  });

  test('batman movies', () => {
    renderTestApp(<Main />);
    expect(
      getMovies({
        movies: movies,
      })
    ).toHaveLength(3);
  });

  test('should create movies', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(movies);
    renderTestApp(<Main />);
  });
});
