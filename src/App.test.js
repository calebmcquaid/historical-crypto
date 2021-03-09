import { render, screen } from '@testing-library/react';
import App from './App';

describe('menu', () => {
  test('should show about link', () => {
  render(<App />)
  const aboutLink = screen.getByText(/about/i)

  expect(aboutLink).toBeInTheDocument()
})
})