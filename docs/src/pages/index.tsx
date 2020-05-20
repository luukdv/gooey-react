import React from 'react'
import Goo from '../../../src'
import Wrap from '../components/wrap'

export default () => (
  <Wrap>
    <Goo intensity="strong" className="flex w-full items-center justify-center relative" style={{
        height: '50vh'
      }}>
      <div className="w-32 h-32 rounded-full absolute" style={{
        background: 'linear-gradient(to top, darkviolet, darkturquoise)'
      }} />
      <div className="w-16 h-16 ml-16 rounded-full absolute" style={{
        background: 'linear-gradient(to top, darkviolet, darkturquoise)'
      }} />
      <div className="w-48 h-48 mt-32 rounded-full absolute" style={{
        background: 'linear-gradient(to top, darkviolet, darkturquoise)'
      }} />
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
    <p className="max-w-2xl mt-8 leading-loose text-cool-gray-600 text-lg">
      A tiny package for applying the gooey effect to React components. It's
      optimized to be as sharp/crisp as possible (existing implementations can
      be a bit blurry). It's easy to use and has a footprint of just ~1 KB.
    </p>
  </Wrap>
)
