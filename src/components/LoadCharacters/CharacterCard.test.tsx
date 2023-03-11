import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CharacterCard from './CharacterCard';

test('renders character info', () => {
  render(
    <Provider store={store}>
      <Router>
        <CharacterCard
          key = {0}
          id = {0}
          characterName = {"Aragorn"}
          playerName = {"Ronald"}
          race = {"Human"}
          gender = {"Male"}
          charClass = {"Fighter"}
          level = {1}
        />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/aragorn/i)).toBeInTheDocument();
});
