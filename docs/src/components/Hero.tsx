import React from 'react'
import Goo from 'gooey-react'

export default () => (
  <Goo
    intensity="strong"
    className="flex w-full items-center justify-center relative"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '24rem' }}
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" style={{ stopColor: 'darkviolet' }} />
          <stop offset="100%" style={{ stopColor: 'darkturquoise' }} />
        </linearGradient>
      </defs>
      <g
        style={{
          animation: 'rotate 8s linear infinite',
          transformOrigin: '50%',
        }}
      >
        <circle
          r="24"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          style={{
            animation: 'hero_one 4s ease-in-out -4s infinite alternate',
            transformOrigin: '50%',
          }}
        />
        <circle
          r="36"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          style={{
            animation: 'hero_three 12s ease-in-out -4s infinite alternate',
            transformOrigin: '50%',
          }}
        />
        <circle
          r="48"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          style={{
            animation: 'hero_two 8s ease-in-out -4s infinite alternate',
            transformOrigin: '50%',
          }}
        />
        <circle
          r="60"
          fill="url(#gradient)"
          cy="50%"
          cx="50%"
          style={{
            animation: 'hero_four 16s ease-in-out -4s infinite alternate',
            transformOrigin: '50%',
          }}
        />
      </g>
    </svg>
  </Goo>
)
