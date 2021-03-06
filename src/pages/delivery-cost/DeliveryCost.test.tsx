import React from 'react'
import { render, screen } from '@testing-library/react'
import DeliveryCostPage from './DeliveryCost'

describe('Delivery Cost Page', () => {
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
    render(<DeliveryCostPage />)
    const linkElement = screen.getByText(/Calculate Delivery Cost/i)
    expect(linkElement).toBeInTheDocument()
  })
})
