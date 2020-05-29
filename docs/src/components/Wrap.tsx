import React from 'react'

export default ({
  children,
  noMargin,
}: {
  children: React.ReactNode
  noMargin?: boolean
}) => (
  <div
    className={`
      flex-grow
      w-full
      mx-auto
      px-5
      sm:px-10
      max-w-screen-xl
      ${noMargin ? '' : 'mt-6 md:mt-10'}
    `}
  >
    {children}
  </div>
)
