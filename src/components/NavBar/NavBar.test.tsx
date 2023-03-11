import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import NavBar from './NavBar';

test('renders brand link', () => {
  render(
    <Provider store={store}>
      <Router>
        <NavBar />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/character sheet/i)).toBeInTheDocument();
});
