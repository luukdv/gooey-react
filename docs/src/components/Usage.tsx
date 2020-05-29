import React from 'react'
import H2 from './H2'
import P from './P'
import Code from './Code'
import Divider from './Divider'

export default () => (
  <>
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
    <P moreMargin>
      You can put regular HTML elements inside the component, but using an SVG
      is recommended for better browser support.
    </P>
    <Divider />
  </>
)
