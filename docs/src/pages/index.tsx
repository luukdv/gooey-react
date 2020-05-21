import React from 'react'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Code from '../components/Code'
import H1 from '../components/H1'
import P from '../components/P'
import H2 from '../components/H2'

export default () => (
  <>
    <Wrap>
      <Hero />
      <H1>The gooey effect for React</H1>
      <P large moreMargin>
        The 'gooey effect' has been made popular by various (amazing) blogposts
        over the years. This tiny package makes it easy to use within React, and
        has improved the implementation as much as possible. It's optimized to
        be as sharp/crisp as possible, since existing implementations can be a
        bit blurry. Safari support (which can be notorious, and is usually
        missing) has been added as well.
      </P>
      <div className="w-full h-px bg-cool-gray-200 mb-16" />
      <H2>Installation (1 kb)</H2>
      <Code large>npm install gooey-react</Code>
      <div className="w-full h-px bg-cool-gray-200 mb-16" />
      <H2>Usage</H2>
      <Code>
        <span className="text-blue-700">import</span> Goo{' '}
        <span className="text-blue-700">from '</span>
        <span className="text-green-700">gooey-react</span>
        <span className="text-blue-700">'</span>
        <br />
        <br />
        <span className="text-blue-700">{'<'}</span>
        <span className="text-yellow-700">{'Goo'}</span>
        <span className="text-blue-700">{'>'}</span>
        <span className="text-cool-gray-500"> … </span>
        <span className="text-blue-700">{'</'}</span>
        <span className="text-yellow-700">{'Goo'}</span>
        <span className="text-blue-700">{'>'}</span>
      </Code>
      <P>
        You can put regular HTML elements inside the component, but using an SVG
        is recommended for better browser support.
      </P>
      <P moreMargin>
        <em className="text-sm">
          This library focuses on the graphical part of the effect, which means
          not all HTML tags will be visible within the component. There is a
          popular solution which applies a composite or blend to effectively
          duplicate all original elements on top of the goo, which greatly
          diminishes the effect. If you want to show elements on top, the best
          solution is to simply move them outside of the component.
        </em>
      </P>
      <div className="w-full h-px bg-cool-gray-200 mb-16" />
      <H2>Properties</H2>
      <P>
        Asides from the possibility to add a `className` and `style` prop, the
        only available property is `intensity`. You can use this to control how
        strong the gooey effect is applied. It has three possible values:
        'weak', 'medium' (which is the default) and 'strong'.
      </P>
      <Code>
        <span className="text-blue-700">{'<'}</span>
        <span className="text-yellow-700">{'Goo '}</span>
        <span className="text-purple-700">{'intensity'}</span>
        <span className="text-blue-700">{'="'}</span>
        <span className="text-green-700">{'weak'}</span>
        <span className="text-blue-700">{'">'}</span>
        <span className="text-cool-gray-500"> … </span>
        <span className="text-blue-700">{'</'}</span>
        <span className="text-yellow-700">{'Goo'}</span>
        <span className="text-blue-700">{'>'}</span>
      </Code>
    </Wrap>
    <Footer />
  </>
)
