import React from 'react'

export default ({
  children,
  large,
  moreMargin,
}: {
  children: React.ReactNode
  large?: boolean
  moreMargin?: boolean
}) => (
  <p
    className={`
      max-w-2xl
      leading-loose
      ${large ? 'lg:text-lg' : ''}
      mb-8
      ${moreMargin ? 'md:mb-12 lg:mb-16' : ''}
    `}
  >
    {children}
  </p>
)
