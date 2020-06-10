import React from 'react'
import H2 from './H2'
import P from './P'
import Code from './Code'
import Divider from './Divider'
import Tag from './Tag'
import { Link } from 'gatsby'

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
      <span className="text-cool-gray-500 select-none"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <P>
      You can put regular HTML elements inside <Tag>Goo</Tag>, but using an SVG
      is recommended for better browser support. Shape blobbing will be applied
      to everything within the component. See the{' '}
      <Link
        className="text-purple-600 underline hover:text-pink-600"
        to="/properties/"
      >
        properties
      </Link>{' '}
      section for more information about usage, or dive right into the{' '}
      <Link
        className="text-purple-600 underline hover:text-pink-600"
        to="/tutorial/"
      >
        tutorial
      </Link>
      .
    </P>
  </>
)
