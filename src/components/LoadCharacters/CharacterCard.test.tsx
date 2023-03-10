import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CharacterCard from './CharacterCard';

test('renders brand link', () => {
  render(
    <Provider store={store}>
      <CharacterCard />
    </Provider>
  );

  expect(screen.getByText(/character sheet/i)).toBeInTheDocument();
});
