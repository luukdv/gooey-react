import React from 'react'
import Goo from '../../../src'
import Wrap from '../components/wrap'

export default () => (
  <Wrap>
    <Goo
      intensity="strong"
      className="flex w-full items-center justify-center relative mb-16"
      style={{ height: '20rem' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" style={{ stopColor: 'darkviolet' }} />
            <stop offset="100%" style={{ stopColor: 'darkturquoise' }} />
          </linearGradient>
        </defs>
        <g style={{ animation: 'rotate 8s linear infinite', transformOrigin: '50%' }}>
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
    <h1
      className={`
        leading-tight
        text-4xl
        md:text-5xl
        lg:text-6xl
        tracking-tighter
        text-cool-gray-800
        font-bold
        font-heading
      `}
    >
      The gooey effect for React
    </h1>
    <p className="max-w-2xl mt-8 leading-loose text-cool-gray-600 text-lg mb-16">
      A tiny package for applying the gooey effect to React components. It's
      optimized to be as sharp/crisp as possible (existing implementations can
      be a bit blurry). It's easy to use and has a footprint of just ~1 KB.
    </p>
    <div className="w-full h-px bg-cool-gray-200 mb-16" />
    <h2
      className={`
        leading-tight
        text-2xl
        md:text-34xl
        lg:text-4xl
        tracking-tighter
        text-cool-gray-800
        font-bold
        font-heading
      `}
    >
      Some examples
    </h2>
    <p className="max-w-2xl mt-8 leading-loose text-cool-gray-600 text-base mb-16">
      
    </p>
  </Wrap>
)
