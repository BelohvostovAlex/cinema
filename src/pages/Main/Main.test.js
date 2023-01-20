import { screen } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { renderTestApp } from '../../test/helpers/renderTestApp';
import { Main } from './Main';
import userEvent from '@testing-library/user-event';

jest.mock('axios');

describe('main page', () => {
  let response;
  beforeEach(() => {
    response = {
      data: {
        Search: [
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
      },
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('main page', async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Main />);
    const movieCards = await screen.findAllByTestId('movie-card');
    expect(movieCards.length).toBe(3);
  });

  test('card link', async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Main />);
    const links = await screen.findAllByTestId('card-link');
    userEvent.click(links[2]);
    expect(screen.getByTestId('card-details-page')).toBeInTheDocument();
  });
});
