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
    <P smallMargin>Next up, we'll add some elements inside the component. You can use regular HTML elements (like a <Tag>div</Tag>) as well, but here we'll use an SVG for optimal browser support.</P>
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
    <Divider />
    <P smallMargin>We'll want to add some dimensions and color to these elements so they're visible.</P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'svg '}</span>
      <span className="text-purple-700">{'width'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'192 '}</span>
      <span className="text-purple-700">{'height'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'192'}</span>
      <span className="text-blue-700">{'">'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'cx'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'37% '}</span>
      <span className="text-purple-700">{'cy'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'37% '}</span>
      <span className="text-purple-700">{'fill'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'orchid '}</span>
      <span className="text-purple-700">{'r'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'32'}</span>
      <span className="text-blue-700">{'">'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'cx'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'63% '}</span>
      <span className="text-purple-700">{'cy'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'63% '}</span>
      <span className="text-purple-700">{'fill'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'orchid '}</span>
      <span className="text-purple-700">{'r'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'32'}</span>
      <span className="text-blue-700">{'">'}</span>
      <br />
      <span className="text-blue-700">{'</'}</span>
      <span className="text-red-700">{'svg'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
    </Code>
    <P smallMargin>Which will look like the following:</P>
    <div className="border-2 border-cool-gray-200 mb-8 md:mb-12">
      <Goo>
        <svg width="192" height="192">
          <circle cx="34%" cy="34%" fill="orchid" r="32" />
          <circle cx="66%" cy="66%" fill="orchid" r="32" />
        </svg>
      </Goo>
    </div>
    <Divider />
  </Layout>
)
