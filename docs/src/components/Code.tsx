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
  <code
    className={`
      block
      shadow-inner
      bg-orange-100
      ${large ? 'px-8 xs:px-12' : 'px-6 xs:px-8'}
      py-5 xs:py-6
      text-cool-gray-700
      rounded-lg
      text-sm
      ${large ? 'text-center' : 'text-left'}
      ${large ? 'xs:text-base lg:text-lg' : ''}
      ${moreMargin ? 'mb-8 md:mb-12' : 'mb-6 md:mb-8'}
    `}
  >
    {children}
  </code>
)
