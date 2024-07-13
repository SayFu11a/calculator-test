import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/C/i);
  expect(linkElement).toBeInTheDocument();
});

test('calculates expression correctly', () => {
  render(<App />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByText('3')).toBeInTheDocument();
});
