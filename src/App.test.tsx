import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Ayush portfolio hero', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /ayush mishra/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#projects');
});
