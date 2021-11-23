import { render, screen } from '@testing-library/react';
import App from './App';

test('render appbar title', () => {
  render(<App />);
  const linkElement = screen.getByText(/NY Times Most Popular/i);
  expect(linkElement).toBeInTheDocument();
});
