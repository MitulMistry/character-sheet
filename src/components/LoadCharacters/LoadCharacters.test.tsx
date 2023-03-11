import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import LoadCharacters from './LoadCharacters';

test('renders character creation text (when no saved characters', () => {
  render(
    <Provider store={store}>
      <Router>
        <LoadCharacters />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/create a new character/i)).toBeInTheDocument();
});
