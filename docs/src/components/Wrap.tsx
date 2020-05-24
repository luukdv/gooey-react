import React from 'react'

export default ({ children, noMargin }: { children: React.ReactNode; noMargin?: boolean }) => (
  <div
    className={`
      flex-grow
      mx-auto
      px-5
      sm:px-10
      max-w-screen-xl
      ${noMargin ? '' : 'mt-8 md:mt-12 lg:mt-16'}
    `}
  >
    {children}
  </div>
)
