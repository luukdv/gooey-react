import React from 'react'
import H1 from '../../components/H1'
import Example from '../../components/Example'
import Goo from 'gooey-react'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/tutorial/"
    prevLabel="Tutorial"
    next="/examples/rotating-loader/"
    nextLabel="Example: rotating loader"
    title="Example: dotted loader"
  >
    <H1>Example: dotted loader</H1>
    <Example>
      <Goo>
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-64 h-64"
        >
          <g>
            <circle
              cx="25%"
              cy="50%"
              r="20"
              fill="darkorchid"
              style={{ animation: 'sway 0.4s ease-out infinite alternate' }}
            />
            <circle
              cx="45%"
              cy="50%"
              r="20"
              fill="blueviolet"
              style={{
                animation: 'sway 0.4s -0.4s ease-out infinite alternate',
              }}
            />
            <circle
              cx="65%"
              cy="50%"
              r="20"
              fill="rebeccapurple"
              style={{ animation: 'sway 0.4s ease-out infinite alternate' }}
            />
          </g>
        </svg>
      </Goo>
    </Example>
  </Layout>
)
