import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../test/helpers/renderTestApp';

import '@testing-library/jest-dom';

describe('Search component', () => {
  test('search input value', () => {
    renderTestApp(null, { route: '/' });
    const input = screen.getByPlaceholderText(/type to search/i);
    expect(input).toHaveValue('');
    userEvent.type(input, 'Batman');
    expect(input).toHaveValue('Batman');
  });
});
