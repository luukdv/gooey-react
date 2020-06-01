import React from 'react'
import H1 from '../../components/H1'
import Goo from 'gooey-react'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/examples/dotted-loader/"
    prevLabel="Example: dotted loader"
    next="/examples/random-blob/"
    nextLabel="Example: random blob"
  >
    <H1>Example: rotating loader</H1>
    <div className="border-2 border-cool-gray-200 mb-6 md:mb-8">
      <Goo intensity="strong">
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64"
        >
          <g
            className="origin-center"
            style={{ animation: 'rotate 5s linear infinite' }}
          >
            <circle cx="50%" cy="30%" r="24" fill="blueviolet" />
            <circle cx="70%" cy="50%" r="24" fill="darkorchid" />
            <circle cx="50%" cy="70%" r="24" fill="darkmagenta" />
            <circle cx="30%" cy="50%" r="24" fill="rebeccapurple" />
            <circle
              cx="50%"
              cy="30%"
              r="24"
              fill="hotpink"
              className="origin-center"
              style={{ animation: 'rotate 2.5s linear infinite' }}
            />
            <circle
              cx="50%"
              cy="70%"
              r="24"
              fill="hotpink"
              className="origin-center"
              style={{ animation: 'rotate 2.5s linear infinite' }}
            />
          </g>
        </svg>
      </Goo>
    </div>
  </Layout>
)
