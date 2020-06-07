import React from 'react'

export default ({
  absolute,
  children,
  noMargin,
}: {
  absolute?: boolean
  children: React.ReactNode
  noMargin?: boolean
}) => (
  <div
    className={`
      flex-grow
      w-full
      left-0
      right-0
      mx-auto
      px-5
      sm:px-10
      max-w-screen-xl
      z-10
      ${noMargin ? '' : 'mt-6 md:mt-10'}
      ${absolute ? 'absolute' : ''}
    `}
  >
    {children}
  </div>
)
