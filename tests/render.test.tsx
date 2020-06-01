import React from 'react'
import { render, screen } from '@testing-library/react'
import Goo from '../src'

it(`renders correctly`, () => {
  render(<Goo><div data-testid="inside" /></Goo>)

  expect(screen.getByTestId('filter')).toBeInTheDocument()
  expect(screen.getByTestId('element')).toBeInTheDocument()
  expect(screen.getByTestId('inside')).toBeInTheDocument()
})

it(`renders a visual filter that doesn't take up space`, () => {
  render(<Goo><div /></Goo>)

  expect(screen.getByTestId('filter')).toBeVisible()
  expect(screen.getByTestId('svg')).toHaveStyle({ pointerEvents: 'none' })
  expect(screen.getByTestId('svg')).toHaveStyle({ position: 'absolute' })
})
