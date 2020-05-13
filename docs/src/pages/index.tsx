import React from 'react'
import Wrap from '../components/wrap'

export default () => (
  <Wrap>
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
    <p className="max-w-2xl leading-loose text-cool-gray-600 text-lg">
      A tiny package for applying the gooey effect to React components. It's
      optimized to be as sharp/crisp as possible (existing implementations can
      be a bit blurry). It's easy to use, does as little as possible and has a
      footprint of just ~1 KB.
    </p>
  </Wrap>
)
