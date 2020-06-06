import React from 'react'
import Goo from 'gooey-react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'
import Divider from '../components/Divider'
import Code from '../components/Code'
import Tag from '../components/Tag'

export default () => (
  <Layout
    prev="/properties/classname-style/"
    prevLabel="Props: className & style"
    next="/examples/around-the-web/"
    nextLabel="Examples: around the web"
    title="Tutorial"
    description="Let's create something simple to show how to use this library."
  >
    <H1>Tutorial</H1>
    <P smallMargin>Let's create something simple to show how to use this library. First, install the dependency with NPM or Yarn.</P>
    <Code moreMargin>npm install gooey-react</Code>
    <Divider />
    <P smallMargin>Next up, we'll add some elements inside the component. You can use regular HTML elements (like <Tag>div</Tag>s) as well, but here we'll use an SVG for optimal browser support.</P>
    <Code moreMargin>
    <span className="text-blue-700">import</span> Goo{' '}
      <span className="text-blue-700">from '</span>
      <span className="text-green-700">gooey-react</span>
      <span className="text-blue-700">'</span>
      <br />
      <br />
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'svg'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle'}</span>
      <span className="text-blue-700">{' />'}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle'}</span>
      <span className="text-blue-700">{' />'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'</'}</span>
      <span className="text-red-700">{'svg'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
  </Layout>
)
