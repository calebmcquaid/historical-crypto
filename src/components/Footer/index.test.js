import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('footer', () => {
  test('should show a small blurb', () => {
    render(<Footer />)
    const blurb = screen.getByText(/Made for fun/i)

    expect(blurb).toBeInTheDocument()
    })
})