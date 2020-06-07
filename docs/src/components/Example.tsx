import React from 'react'

export default ({
  children,
  margin,
}: {
  margin?: boolean
  children: React.ReactNode
}) => (
  <div
    className={`
    border-2
    border-cool-gray-200
    ${margin ? 'mb-8 md:mb-12' : ''}
  `}
  >
    {children}
  </div>
)
