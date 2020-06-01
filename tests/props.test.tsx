import React from 'react'
import { render, screen } from '@testing-library/react'
import Goo from '../src'

it(`applies class`, () => {
  const className = 'mt-8'

  render(<Goo className={className}><div /></Goo>)

  expect(screen.getByTestId('element')).toHaveClass(className)
})

it(`applies style`, () => {
  const style = { marginTop : '2rem' }

  render(<Goo style={style}><div /></Goo>)

  expect(screen.getByTestId('element')).toHaveStyle(style)
})

it(`applies id`, () => {
  const id = 'test'

  render(<Goo id={id}><div /></Goo>)

  const filter = screen.getByTestId('filter')

  expect(filter.getAttribute('id')).toBe(id)
})
