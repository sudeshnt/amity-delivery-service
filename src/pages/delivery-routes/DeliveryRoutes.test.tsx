import React from 'react'
import { render, screen } from '@testing-library/react'
import DeliveryRoutes from './DeliveryRoutes'

describe('Test', () => {
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

  test('renders learn react link', () => {
    render(<DeliveryRoutes />)
    const linkElement = screen.getByText(/List Delivery Routes/i)
    expect(linkElement).toBeInTheDocument()
  })
})
