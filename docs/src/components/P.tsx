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
      ${moreMargin ? 'mb-8 md:mb-12 lg:mb-16' : 'mb-6 md:mb-8'}
    `}
  >
    {children}
  </p>
)
