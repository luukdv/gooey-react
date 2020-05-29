import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <h2
    className={`
      leading-tight
      text-2xl
      md:text-3xl
      lg:text-4xl
      tracking-tighter
      text-cool-gray-800
      font-bold
      font-heading
      mb-4
      md:mb-6
    `}
  >
    {children}
  </h2>
)
