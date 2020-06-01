import React from 'react'
import Divider from '../../components/Divider'
import H1 from '../../components/H1'
import Tag from '../../components/Tag'
import Code from '../../components/Code'
import Goo from 'gooey-react'
import P from '../../components/P'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/properties/intensity/"
    prevLabel="Prop: intensity"
    next="/properties/id/"
    nextLabel="Prop: id"
  >
    <H1>Prop: composite</H1>
    <P large smallMargin>
      By default, the effect is applied to everything within the component. With
      this approach, the goo is at its most effective: both shapes and colors
      will merge together. However, certain things (like sharp edges) will end
      up being morphed or invisible.
    </P>
    <P large>
      There are two ways to solve this problem. The recommended way is to simply
      move those elements outside of the component and place them on top. In
      some cases, this isn't practical. The <Tag>composite</Tag> property can be
      used as an alternative. It will essentially duplicate everything inside
      the component, and place it on top without alterations.
    </P>
    <Divider />
    <div className="md:grid md:grid-cols-2 md:gap-4 mb-6 md:mb-8">
      <ExampleOne composite={false} id="example_one_left" />
      <ExampleOne composite={true} id="example_one_right" />
    </div>
    <P>As you can see, colors will not blend when you apply a composite.</P>
    <Divider />
    <div className="md:grid md:grid-cols-2 md:gap-4 mb-6 md:mb-8">
      <ExampleTwo composite={false} id="example_two_left" />
      <ExampleTwo composite={true} id="example_two_right" />
    </div>
    <P>
      On the other hand, a rectangle with still render as expected. As noted,
      this can also be achieved by moving the rectangle outside of the component
      and placing it on top manually.
    </P>
  </Layout>
)

const ExampleOne = ({ composite, id }: { composite: boolean; id: string }) => (
  <div className="flex flex-col items-start">
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      {composite && <span className="text-purple-700">{' composite'}</span>}
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <div className="border-2 border-cool-gray-200">
      <Goo composite={composite} id={id} intensity="strong">
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64"
        >
          <circle cx="34.3%" cy="50%" r="40" fill="deepskyblue" />
          <circle cx="65.7%" cy="50%" r="40" fill="cornflowerblue" />
        </svg>
      </Goo>
    </div>
  </div>
)

const ExampleTwo = ({ composite, id }: { composite: boolean; id: string }) => (
  <div className="flex flex-col items-start">
    <div className="border-2 border-cool-gray-200">
      <Goo composite={composite} id={id}>
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64"
        >
          <circle
            className="origin-center"
            cx="50%"
            cy="60%"
            r="24"
            fill="mediumturquoise"
            style={{
              animation: 'rise 1.5s ease-in infinite alternate',
            }}
          />
          <rect
            x="20%"
            y="47.5%"
            width="60%"
            height="25%"
            fill="mediumturquoise"
          />
        </svg>
      </Goo>
    </div>
  </div>
)
