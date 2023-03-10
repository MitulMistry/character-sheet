import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Footer from './Footer';

test('renders footer text', () => {
  render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );

  expect(screen.getByText(/github repo/i)).toBeInTheDocument();
});
