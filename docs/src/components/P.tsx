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
      ${moreMargin ? 'mb-16' : 'mb-8'}
    `}
  >
    {children}
  </p>
)
