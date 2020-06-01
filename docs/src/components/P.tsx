import React from 'react'

export default ({
  children,
  large,
  smallMargin,
}: {
  children: React.ReactNode
  large?: boolean
  smallMargin?: boolean
}) => (
  <p
    className={`
      max-w-2xl
      leading-loose
      ${smallMargin ? 'mb-6 md:mb-8' : 'mb-8 md:mb-12'}
      ${large ? 'lg:text-lg' : ''}
    `}
  >
    {children}
  </p>
)
