import React from 'react'
import { render, screen } from '@testing-library/react'
import DeliveryCost from './DeliveryCost'

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
    render(<DeliveryCost />)
    const linkElement = screen.getByText(/Calculate Delivery Cost/i)
    expect(linkElement).toBeInTheDocument()
  })
})
