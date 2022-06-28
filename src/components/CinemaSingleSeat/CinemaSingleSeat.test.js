import { fireEvent, screen } from '@testing-library/react';
import { renderTestApp } from '../../test/helpers/renderTestApp';

import '@testing-library/jest-dom';

describe('single seat component', () => {
  test('checked seat', () => {
    renderTestApp(null, { route: '/reserve/:id' });
    const seat = screen.getAllByTestId('single-seat');
    expect(seat[0]).toHaveStyle('border: 3px solid #85ff91');
    fireEvent.click(seat[0]);
  });
});
