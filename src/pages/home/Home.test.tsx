import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from './Home'

describe('Home Page', () => {
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
    render(<HomePage />)
    const linkElement = screen.getByText(/Amity Delivery Service/i)
    expect(linkElement).toBeInTheDocument()
  })
})
