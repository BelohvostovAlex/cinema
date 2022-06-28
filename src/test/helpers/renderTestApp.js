import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../components/AppRouter/AppRouter';

import { store } from '../../store';

export const renderTestApp = (component, options) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
