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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
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
        <circle
          r="24"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          className="origin-center"
          style={{ animation: 'hero_one 4s ease-in-out -4s infinite alternate' }}
        />
        <circle
          r="36"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          className="origin-center"
          style={{ animation: 'hero_three 12s ease-in-out -4s infinite alternate' }}
        />
        <circle
          r="48"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          className="origin-center"
          style={{ animation: 'hero_two 8s ease-in-out -4s infinite alternate' }}
        />
        <circle
          r="60"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          className="origin-center"
          style={{ animation: 'hero_four 16s ease-in-out -4s infinite alternate' }}
        />
      </g>
    </svg>
  </Goo>
)
