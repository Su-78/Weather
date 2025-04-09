import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Weather Dashboard title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Weather Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders input and button', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter city name/i);
  const button = screen.getByText(/Search/i);
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('typing in input updates city value', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Enter city name/i);
  fireEvent.change(input, { target: { value: 'Delhi' } });
  expect(input.value).toBe('Delhi');
});
