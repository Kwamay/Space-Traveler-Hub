import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import RocketList from '../rocket/RocketList';

const mockStore = configureStore([thunk]);

test('it renders the RocketList component', () => {
  const store = mockStore({ rockets: { rockets: [], isLoading: false } });

  render(
    <Provider store={store}>
      <RocketList />
    </Provider>,
  );
});
