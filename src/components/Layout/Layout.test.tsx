import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Layout from './Layout';

test('renders brand link', () => {
  render(
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/character sheet/i)).toBeInTheDocument();
});
