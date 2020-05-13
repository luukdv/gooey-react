import React, { Fragment, ReactNode } from 'react'

const Goo = ({
  children,
  intensity = 'medium',
}: {
  children: ReactNode;
  intensity?: 'weak' | 'medium' | 'strong';
}) => {
  const blur = intensity === 'weak' ? 8 : intensity === 'strong' ? 16 : 12
  const shift = blur * 6

  return (
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
              stdDeviation={blur}
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
}

export default Goo
