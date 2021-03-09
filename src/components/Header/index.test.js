import { render, screen } from '@testing-library/react';
import Header from '.';

describe('menu', () => {
  test('should show about link', () => {
    render(<Header />)
    const aboutLink = screen.getByText(/about/i)

    expect(aboutLink).toBeInTheDocument()
    })

    test('should show chart link', () => {
        render(<Header />)
        const chartLink = screen.getByText(/chart/i)

        expect(chartLink).toBeInTheDocument()
    })

    test('should show app title', () => {
        render(<Header />)
        const appTitle = screen.getByText(/Historical Crypto/i)

        expect(appTitle).toBeInTheDocument()
    })
})