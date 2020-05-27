import React from 'react'
import H1 from '../../components/H1'
import P from '../../components/P'
import Goo from 'gooey-react'
import Layout from '../../components/Layout'

export default () => (
  <Layout>
    <H1>Rotating loader</H1>
    <div className="border-2 border-cool-gray-200 mb-6 md:mb-8">
      <Goo intensity="strong">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64"
        >
          <g
        className="origin-center"
        style={{ animation: 'rotate 4s linear infinite' }}
      >
          <circle
            cx="50%"
            cy="30%"
            r="24"
            fill="blueviolet"
          />
          <circle
            cx="70%"
            cy="50%"
            r="24"
            fill="darkorchid"
          />
          <circle
            cx="50%"
            cy="70%"
            r="24"
            fill="darkmagenta"
          />
          <circle
            cx="30%"
            cy="50%"
            r="24"
            fill="rebeccapurple"
          />
          <circle
            cx="50%"
            cy="30%"
            r="24"
            fill="hotpink"
            className="origin-center"
            style={{ animation: 'rotate 2s linear infinite' }}
          />
          <circle
            cx="50%"
            cy="70%"
            r="24"
            fill="hotpink"
            className="origin-center"
            style={{ animation: 'rotate 2s linear infinite' }}
          />
          </g>
        </svg>
      </Goo>
    </div>
    <P>Inspired by <a className="underline text-purple-600 hover:text-pink-600" target="_blank" rel="nofollow noopener noreferrer" href="https://www.visualcinnamon.com/2016/06/fun-data-visualizations-svg-gooey-effect.html">this article</a> from Nadieh Bremer.</P>
  </Layout>
)
