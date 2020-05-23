import React from 'react'
import Goo from 'gooey-react'

export default () => (
  <Goo
    intensity="strong"
    className="
      left-1/2
      flex
      w-96
      h-96
      items-center
      justify-center
      relative
      transform
      -translate-x-1/2
    "
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" style={{ stopColor: 'darkviolet' }} />
          <stop offset="100%" style={{ stopColor: 'darkturquoise' }} />
        </linearGradient>
      </defs>
      <g
        className="origin-center"
        style={{ animation: 'rotate 8s linear infinite' }}
      >
        <rect
          x={`${50 - 12.5 / 2}%`}
          y={`${50 - 12.5 / 2}%`}
          rx={`${12.5 * 0.45}%`}
          width={`${12.5}%`}
          height={`${12.5}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_one 4s ease-in-out -4s infinite alternate',
          }}
        />
        <rect
          x={`${50 - 18.75 / 2}%`}
          y={`${50 - 18.75 / 2}%`}
          rx={`${18.75 * 0.45}%`}
          width={`${18.75}%`}
          height={`${18.75}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_three 12s ease-in-out -4s infinite alternate',
          }}
        />
        <rect
          x={`${50 - 25 / 2}%`}
          y={`${50 - 25 / 2}%`}
          rx={`${25 * 0.45}%`}
          width={`${25}%`}
          height={`${25}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_two 8s ease-in-out -4s infinite alternate',
          }}
        />
        <rect
          x={`${50 - 31.25 / 2}%`}
          y={`${50 - 31.25 / 2}%`}
          rx={`${31.25 * 0.45}%`}
          width={`${31.25}%`}
          height={`${31.25}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_four 16s ease-in-out -4s infinite alternate',
          }}
        />
      </g>
    </svg>
  </Goo>
)
