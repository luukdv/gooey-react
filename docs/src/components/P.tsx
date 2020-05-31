import React from 'react'

export default ({
  children,
  large,
}: {
  children: React.ReactNode
  large?: boolean
}) => (
  <p
    className={`
      max-w-2xl
      leading-loose
      mb-8
      md:mb-12
      ${large ? 'lg:text-lg' : ''}
    `}
  >
    {children}
  </p>
)
