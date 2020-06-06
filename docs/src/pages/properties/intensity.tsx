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
    prev="/"
    prevLabel="Home"
    next="/properties/composite/"
    nextLabel="Prop: composite"
    title="Prop: intensity"
    description="You can use intensity to control how strong the gooey effect is applied. It has three possible values: weak, medium (which is the default) and strong.    "
  >
    <H1>Prop: intensity</H1>
    <P large>
      You can use <Tag>intensity</Tag> to control how strong the gooey effect is
      applied. It has three possible values: <Tag>weak</Tag>, <Tag>medium</Tag>{' '}
      (which is the default) and <Tag>strong</Tag>.
    </P>
    <Divider />
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      <Example intensity="weak" margin />
      <Example intensity="strong" />
    </div>
  </Layout>
)

const Example = ({
  intensity,
  margin,
}: {
  intensity: 'weak' | 'strong'
  margin?: boolean
}) => (
  <div
    className={`
    flex
    flex-col
    items-start
    ${margin ? 'mb-8 md:mb-12 lg:mb-0' : ''}
  `}
  >
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">{'intensity'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{intensity}</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <div className="border-2 border-cool-gray-200">
      <Goo intensity={intensity} id={intensity}>
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-64 h-64"
        >
          <g
            className="origin-center"
            style={{ animation: 'sway 3s ease-in-out infinite alternate' }}
          >
            <circle
              cx="45%"
              cy="30%"
              r="30"
              fill="lightcoral"
              className="origin-center"
              style={{
                animation: 'drop 1.5s ease-in -0.75s infinite alternate',
              }}
            />
            <circle
              cx="65%"
              cy="52.5%"
              r="24"
              fill="salmon"
              className="origin-center"
            />
            <circle
              cx="45%"
              cy="30%"
              r="48"
              fill="lightsalmon"
              className="origin-center"
            />
          </g>
        </svg>
      </Goo>
    </div>
  </div>
)
