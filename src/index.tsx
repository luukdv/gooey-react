import React, { Fragment, ReactNode } from 'react'

const shift = 64

const Goo = ({
  children
}: {
  children: ReactNode
}) => (
  <Fragment>
    <svg
      style={{
        pointerEvents: 'none',
        position: 'absolute',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="gooey-react">
          <feGaussianBlur
            stdDeviation="12"
          />
          <feColorMatrix
            values={`
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 ${shift} ${shift / -2}
            `}
          />
        </filter>
      </defs>
    </svg>
    <div
      style={{
        filter: 'url(#gooey-react)',
      }}
    >
      {children}
    </div>
  </Fragment>
)

export default Goo
