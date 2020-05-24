import React from 'react'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Properties from '../components/Properties'
import H1 from '../components/H1'
import P from '../components/P'
import Usage from '../components/Usage'
import Installation from '../components/Installation'

export default () => (
  <>
  <Hero />
  <Wrap>
    <div className="flex flex-col md:flex-row w-full">
      <div className="order-last md:order-first">
        <div className="w-32 bg-gray-200 rounded-md mr-16">
          Sidebar
        </div>
      </div>
      <div className="flex-grow flex flex-col items-center">
        <H1>The gooey effect for React</H1>
        <P large moreMargin>
          The 'gooey effect' has been made popular by various (amazing) blogposts
          over the years. This tiny package makes it easy to use within React, and
          has improved the implementation as much as possible. It's optimized to
          be as sharp/crisp as possible, since existing implementations can be a
          bit blurry. Safari support (which can be notorious, and is usually
          missing) has been added as well.
        </P>
        <Installation />
        <Usage />
        <Properties />
      </div>
    </div>
  </Wrap>
  <Footer />
  </>
)
