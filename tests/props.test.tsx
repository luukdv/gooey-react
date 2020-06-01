import React from 'react'
import { render, screen } from '@testing-library/react'
import Goo from '../src'

it(`applies class`, () => {
  const className = 'mt-8'

  render(<Goo className={className}><div /></Goo>)

  expect(screen.getByTestId('element')).toHaveClass(className)
})
