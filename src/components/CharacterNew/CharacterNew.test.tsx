import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import CharacterNew from './CharacterNew';

test('renders character name text', () => {
  render(
    <Provider store={store}>
      <Router>
        <CharacterNew />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/character name/i)).toBeInTheDocument();
});
