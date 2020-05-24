import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <h1
    className={`
      leading-tight
      text-4xl
      mb-6
      md:mb-8
      md:text-5xl
      xl:text-6xl
      tracking-tighter
      text-cool-gray-800
      font-bold
      font-heading
    `}
  >
    {children}
  </h1>
)
