import { screen } from '@testing-library/react';
import { renderTestApp } from '../../test/helpers/renderTestApp';

import '@testing-library/jest-dom';

describe('cinema seats component', () => {
  test('seats table', () => {
    renderTestApp(null, { route: '/reserve/:id' });
    const seatsTable = screen.getByTestId('seats-table');
    expect(seatsTable).toBeInTheDocument();
  });

  test('seats amount', () => {
    renderTestApp(null, { route: '/reserve/:id' });
    const seats = screen.getAllByTestId('single-seat');
    expect(seats.length).toBe(60);
  });
});
