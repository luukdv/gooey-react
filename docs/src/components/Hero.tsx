import React from 'react'
import Goo from 'gooey-react'

export default () => (
  <Goo intensity="strong" className="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-80 h-80">
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
          x={`${50 - 15.625 / 2}%`}
          y={`${50 - 15.625 / 2}%`}
          rx={`${15.625 * 0.45}%`}
          width={`${15.625}%`}
          height={`${15.625}%`}
          className="origin-center"
          fill="url(#gradient)"
          style={{
            animation: 'hero_one 4s ease-in-out -5s infinite alternate',
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
            animation: 'hero_three 12s ease-in-out -5s infinite alternate',
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
            animation: 'hero_two 8s ease-in-out -5s infinite alternate',
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
            animation: 'hero_four 16s ease-in-out -5s infinite alternate',
          }}
        />
      </g>
    </svg>
  </Goo>
)
