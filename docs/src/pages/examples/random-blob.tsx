import React from 'react'
import H1 from '../../components/H1'
import Example from '../../components/Example'
import Goo from 'gooey-react'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/examples/rotating-loader/"
    prevLabel="Example: rotating loader"
    next="/examples/around-the-web/"
    nextLabel="Examples: around the web"
    title="Example: random blob"
  >
    <H1>Example: random blob</H1>
    <Example>
      <Goo intensity="strong">
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-64 h-64"
        >
          <g style={{ animation: 'rotate_back 9s linear infinite' }}>
            <circle
              cx="50%"
              cy="50%"
              r="42"
              fill="lightseagreen"
              style={{
                animation: 'blob_four 12s ease-in-out -3s infinite alternate',
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="36"
              fill="mediumaquamarine"
              style={{
                animation: 'blob_three 9s ease-in-out -3s infinite alternate',
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="30"
              fill="palegreen"
              style={{
                animation: 'blob_two 6s ease-in-out -3s infinite alternate',
              }}
            />
            <circle
              cx="50%"
              cy="50%"
              r="24"
              fill="mediumspringgreen"
              style={{
                animation: 'blob_one 3s ease-in-out -3s infinite alternate',
              }}
            />
          </g>
        </svg>
      </Goo>
    </Example>
  </Layout>
)
