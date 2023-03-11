import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders brand link', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  const navBar = screen.getByRole('navbar');

  expect(within(navBar).getByText(/character sheet/i)).toBeInTheDocument();
});
