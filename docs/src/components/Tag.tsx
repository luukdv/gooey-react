import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <span
    className={`
      bg-gray-100
      font-medium
      rounded
      px-2
      py-1
    `}
  >
    {children}
  </span>
)
