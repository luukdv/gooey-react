import React, { CSSProperties, Fragment, ReactNode } from 'react'

const Goo = ({
  children,
  intensity = 'medium',
  className,
  style,
}: {
  children: ReactNode;
  intensity?: 'weak' | 'medium' | 'strong';
  className?: string;
  style?: CSSProperties;
}) => {
  const blur = intensity === 'weak' ? 8 : intensity === 'strong' ? 16 : 12
  const alpha = blur * 6
  const shift = alpha / -2
  const r = '1 0 0 0 0'
  const g = '0 1 0 0 0'
  const b = '0 0 1 0 0'
  const a = `0 0 0 ${alpha} ${shift}`

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
          <filter
            colorInterpolationFilters="sRGB"
            id="gooey-filter"
          >
            <feGaussianBlur
              stdDeviation={blur}
              result="blur"
            />
            <feColorMatrix
              values={`${r} ${g} ${b} ${a}`}
            />
          </filter>
        </defs>
      </svg>
      <div
        className={className}
        id="gooey"
        style={{
          ...style,
          filter: 'url(#gooey-filter)',
        }}
      >
        {children}
      </div>
    </Fragment>
  )
}

export default Goo
