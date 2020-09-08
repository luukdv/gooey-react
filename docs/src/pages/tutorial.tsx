import React from 'react'
import Goo from 'gooey-react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'
import Divider from '../components/Divider'
import Example from '../components/Example'
import Code from '../components/Code'
import Tag from '../components/Tag'
import { Link } from 'gatsby'

export default () => (
  <Layout
    prev="/properties/classname-style/"
    prevLabel="Props: className & style"
    next="/examples/dotted-loader/"
    nextLabel="Example: dotted loader"
    title="Tutorial"
    description="Let's create something simple to show how this library can be used. First, install the dependency with NPM or Yarn."
  >
    <H1>Tutorial</H1>
    <P large smallMargin>
      Let's create something simple to show how this library can be used. First,
      install the dependency with NPM or Yarn.
    </P>
    <Code moreMargin>npm install gooey-react</Code>
    <Divider />
    <P smallMargin>
      Next, we'll add some elements inside the component. You can use regular
      HTML elements (like a <Tag>div</Tag>), but an SVG is used here for optimal
      browser support.
    </P>
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
    <P smallMargin>
      We'll want to add some dimensions and color to these elements so they're
      visible.
    </P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'svg '}</span>
      <span className="text-purple-700">{'width'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'192'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' height'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'192'}</span>
      <span className="text-blue-700">{'">'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'cx'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'34%'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' cy'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'34%'}</span>
      <span className="text-blue-700">{'" '}</span>
      <span className="text-purple-700">{'fill'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'orchid'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' r'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'32'}</span>
      <span className="text-blue-700">{'" />'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'cx'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'66%'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' cy'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'66%'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' fill'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'mediumorchid'}</span>
      <span className="text-blue-700">{'" '}</span>
      <span className="text-purple-700">{'r'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'32'}</span>
      <span className="text-blue-700">{'" />'}</span>
      <br />
      <span className="text-blue-700">{'</'}</span>
      <span className="text-red-700">{'svg'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <P smallMargin>Which will look like the following.</P>
    <Example margin>
      <Goo>
        <svg width="192" height="192">
          <circle cx="34%" cy="34%" fill="orchid" r="32" />
          <circle cx="66%" cy="66%" fill="mediumorchid" r="32" />
        </svg>
      </Goo>
    </Example>
    <Divider />
    <P smallMargin>
      If we move the elements closer together, the effect becomes apparent. You
      can use the{' '}
      <Link
        className="underline text-purple-600 hover:text-pink-600"
        to="/properties/intensity/"
      >
        intensity
      </Link>{' '}
      prop to control how strong the goo is applied.
    </P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'cx'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'37%'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' cy'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'37%"'}</span>
      <span className="text-cool-gray-500 select-none"> …</span>
      <span className="text-blue-700">{' />'}</span>
      <br />
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'cx'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'63%'}</span>
      <span className="text-blue-700">{'"'}</span>
      <span className="text-purple-700">{' cy'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'63%"'}</span>
      <span className="text-cool-gray-500 select-none"> …</span>
      <span className="text-blue-700">{' />'}</span>
    </Code>
    <Example margin>
      <Goo>
        <svg width="192" height="192">
          <circle cx="37%" cy="37%" fill="orchid" r="32" />
          <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />
        </svg>
      </Goo>
    </Example>
    <Divider />
    <P smallMargin>
      We can add animations and transitions with some simple CSS transforms. For
      more complex and engaging movement, an animation library is recommended.
    </P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'g '}</span>
      <span className="text-purple-700">{'style'}</span>
      <span className="text-blue-700">{'={{ '}</span>
      animation
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'left 4s linear infinite'}</span>
      <span className="text-blue-700">{"' }}"}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle '}</span>
      <span className="text-purple-700">{'style'}</span>
      <span className="text-blue-700">{'={{ '}</span>
      animation
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'right 1s linear infinite'}</span>
      <span className="text-blue-700">{"' }}"}</span>
      <span className="text-cool-gray-500 select-none"> …</span>
      <span className="text-blue-700">{' />'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'circle'}</span>
      <span className="text-cool-gray-500 select-none"> …</span>
      <span className="text-blue-700">{' />'}</span>
      <br />
      <span className="text-blue-700">{'</'}</span>
      <span className="text-red-700">{'g'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Code>
      <span className="text-yellow-700">{'svg * '}</span>
      <span className="text-blue-700">{' { '}</span>
      <span className="text-purple-700">{'transform-origin'}</span>
      <span className="text-blue-700">{': '}</span>
      <span className="text-red-700">{'50%'}</span>
      <span className="text-blue-700">{' }'}</span>
      <br />
      <br />
      <span className="text-blue-700">{'@keyframes '}</span>
      left
      <span className="text-blue-700">{' {'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-yellow-700">{'100% '}</span>
      <span className="text-blue-700">{'{ '}</span>
      <span className="text-purple-700">{'transform'}</span>
      <span className="text-blue-700">{': '}</span>
      <span className="text-blue-700">{'rotate'}</span>
      <span className="text-blue-700">{'('}</span>
      <span className="text-red-700">{'-360deg'}</span>
      <span className="text-blue-700">{') } '}</span>
      <br />
      <span className="text-blue-700">{'}'}</span>
      <br />
      <br />
      <span className="text-blue-700">{'@keyframes '}</span>
      right
      <span className="text-blue-700">{' {'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-yellow-700">{'100% '}</span>
      <span className="text-blue-700">{'{ '}</span>
      <span className="text-purple-700">{'transform'}</span>
      <span className="text-blue-700">{': '}</span>
      <span className="text-blue-700">{'rotate'}</span>
      <span className="text-blue-700">{'('}</span>
      <span className="text-red-700">{'360deg'}</span>
      <span className="text-blue-700">{') } '}</span>
      <br />
      <span className="text-blue-700">{'}'}</span>
    </Code>
    <P smallMargin>Which will result in the following.</P>
    <Example margin>
      <Goo>
        <svg width="192" height="192">
          <g style={{ animation: 'rotate_back 4s linear infinite' }}>
            <circle
              style={{ animation: 'rotate 1s linear infinite' }}
              cx="37%"
              cy="37%"
              fill="orchid"
              r="32"
            />
            <circle cx="63%" cy="63%" fill="mediumorchid" r="32" />
          </g>
        </svg>
      </Goo>
    </Example>
    <Divider />
    <P smallMargin>
      Below is a similar example using regular HTML elements, without animation.
    </P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-purple-700">{' style'}</span>
      <span className="text-blue-700">{'={{ '}</span>
      height
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'12rem'}</span>
      <span className="text-blue-700">{"', "}</span>
      position
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'relative'}</span>
      <span className="text-blue-700">{"', "}</span>
      width
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'12rem'}</span>
      <span className="text-blue-700">{"' }}>"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'div '}</span>
      <span className="text-purple-700">{'style'}</span>
      <span className="text-blue-700">{'={{ '}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;background
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'sandybrown'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;borderRadius
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'50%'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;height
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'4rem'}</span>
      <span className="text-blue-700">{"', "}</span>
      width
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'4rem'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;left
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'2.5rem'}</span>
      <span className="text-blue-700">{"', "}</span>
      top
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'5.5rem'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;position
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'absolute'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'}} />'}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'<'}</span>
      <span className="text-red-700">{'div '}</span>
      <span className="text-purple-700">{'style'}</span>
      <span className="text-blue-700">{'={{ '}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;background
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'palevioletred'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;borderRadius
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'50%'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;height
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'4rem'}</span>
      <span className="text-blue-700">{"', "}</span>
      width
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'4rem'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;left
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'5.5rem'}</span>
      <span className="text-blue-700">{"', "}</span>
      top
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'2.5rem'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;position
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">{'absolute'}</span>
      <span className="text-blue-700">{"',"}</span>
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-700">{'}} />'}</span>
      <br />
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Example>
      <Goo
        style={{
          height: '12rem',
          position: 'relative',
          width: '12rem',
        }}
      >
        <div
          style={{
            background: 'sandybrown',
            borderRadius: '50%',
            height: '4rem',
            left: '2.5rem',
            position: 'absolute',
            top: '5.5rem',
            width: '4rem',
          }}
        />
        <div
          style={{
            background: 'palevioletred',
            borderRadius: '50%',
            height: '4rem',
            left: '5.5rem',
            position: 'absolute',
            top: '2.5rem',
            width: '4rem',
          }}
        />
      </Goo>
    </Example>
  </Layout>
)
