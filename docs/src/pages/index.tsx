import React from 'react'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default () => (
  <>
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
      <p className="max-w-2xl mt-8 leading-loose text-lg mb-16">
        The 'gooey effect' has been made popular by various (amazing) blogposts
        over the years. This tiny package makes it easy to use within React, and
        has improved the implementation as much as possible. It's optimized to
        be as sharp/crisp as possible, since existing implementations can be a
        bit blurry. Support for Safari (which can be notorious regarding SVG
        filter animations) is added as well.
      </p>
      <div className="w-full h-px bg-cool-gray-200 mb-16" />
      <h2
        className={`
          leading-tight
          text-2xl
          md:text-3xl
          lg:text-4xl
          tracking-tighter
          text-cool-gray-800
          font-bold
          font-heading
          mb-8
        `}
      >
        Installation (1 kb)
      </h2>
      <code className="bg-orange-100 px-12 py-6 text-cool-gray-700 rounded-lg text-lg mb-16">
        npm install gooey-react
      </code>
      <div className="w-full h-px bg-cool-gray-200 mb-16" />
      <h2
        className={`
          leading-tight
          text-2xl
          md:text-3xl
          lg:text-4xl
          tracking-tighter
          text-cool-gray-800
          font-bold
          font-heading
          mb-8
        `}
      >
        Usage
      </h2>
      <code className="text-left bg-orange-100 px-8 py-6 text-cool-gray-700 text-sm rounded-lg mb-12">
        <span className="text-blue-700">import</span> Goo{' '}
        <span className="text-blue-700">from '</span>
        <span className="text-green-700">gooey-react</span>
        <span className="text-blue-700">'</span>
        <br />
        <br />
        <span className="text-yellow-700">{'<Goo>'}</span>
        <span className="text-cool-gray-500"> … </span>
        <span className="text-yellow-700">{'</Goo>'}</span>
      </code>
    </Wrap>
    <Footer />
  </>
)
