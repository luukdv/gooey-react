import React from 'react'
import H1 from '../../components/H1'
import Goo from 'gooey-react'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <H1>Dotted loader</H1>
    <div className="border-2 border-cool-gray-200">
      <Goo>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
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
            style={{ animation: 'sway 0.4s -0.4s ease-out infinite alternate' }}
          />
          <circle
            cx="65%"
            cy="50%"
            r="20"
            fill="rebeccapurple"
            style={{ animation: 'sway 0.4s ease-out infinite alternate' }}
          />
        </svg>
      </Goo>
    </div>
  </Layout>
)
