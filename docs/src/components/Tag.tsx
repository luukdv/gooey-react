import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <span
    className={`
      bg-cool-gray-100
      font-medium
      rounded-md
      px-2
      py-1
    `}
  >
    {children}
  </span>
)
