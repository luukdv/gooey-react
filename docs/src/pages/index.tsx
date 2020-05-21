import React from 'react'
import Wrap from '../components/Wrap'
import Hero from '../components/Hero'

export default () => (
  <Wrap>
    <Hero />
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
