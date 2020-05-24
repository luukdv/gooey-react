import React from 'react'
import { render, screen } from '@testing-library/react'
import Goo from '../src'

it(`renders correctly`, () => {
  render(<Goo><div data-testid="inside" /></Goo>)

  expect(screen.getByTestId('filter')).toBeInTheDocument()
  expect(screen.getByTestId('element')).toBeInTheDocument()
  expect(screen.getByTestId('inside')).toBeInTheDocument()
})
