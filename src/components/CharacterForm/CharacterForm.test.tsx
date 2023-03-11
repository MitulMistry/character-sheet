import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CharacterForm from './CharacterForm';

test('renders character name text', () => {
  render(
    <Provider store={store}>
      <Router>
        <CharacterForm />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/character name/i)).toBeInTheDocument();
});
