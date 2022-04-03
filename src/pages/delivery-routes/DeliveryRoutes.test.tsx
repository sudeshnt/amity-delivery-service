import React from 'react'
import { render, screen } from '@testing-library/react'
import DeliveryRoutesPage from './DeliveryRoutes'

describe('Delivery Routes Page', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {},
        }
      },
    })
  })

  test('renders title', () => {
    render(<DeliveryRoutesPage />)
    const linkElement = screen.getByText(/List Delivery Routes/i)
    expect(linkElement).toBeInTheDocument()
  })
})
