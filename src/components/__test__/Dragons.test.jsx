import React from 'react';
import { render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import Missions from '../Missions/Missions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Define a mock useDispatch function
const mockUseDispatch = jest.fn();

// Mock the useDispatch hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch, // Use the mocked useDispatch
}));

const initialState = {
  missions: {
    missionData: [],
  },
};

describe('Missions Component', () => {
  it('renders loading message when missions are empty', async () => {
    const store = mockStore(initialState);

    await act(async () => {
      render(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );
    });

    const { queryAllByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const loadingMessages = queryAllByText('Loading missions...');
    expect(loadingMessages).toHaveLength(2);
  });
});
