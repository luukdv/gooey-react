import React from 'react'

export default ({
  children,
  large,
}: {
  children: React.ReactNode
  large?: boolean
}) => (
  <code
    className={`
      bg-orange-100
      ${large ? 'px-12' : 'px-8'}
      py-6
      text-cool-gray-700
      rounded-lg
      text-left
      ${large ? 'text-lg' : 'text-sm'}
      ${large ? 'mb-16' : 'mb-8'}
    `}
  >
    {children}
  </code>
)
