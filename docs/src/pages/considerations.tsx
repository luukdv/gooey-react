import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import H2 from '../components/H2'
import Divider from '../components/Divider'
import P from '../components/P'

export default () => (
  <Layout
    prev="/browser-support/"
    prevLabel="Browser support"
    title="Considerations"
    description="The various examples in the documentation use simple CSS keyframes. It's worth checking out libraries like anime.js or react-spring for more interesting animations and interactions."
  >
    <H1>Considerations</H1>
    <H2>Animations</H2>
    <P>
      The various examples in the documentation use simple CSS keyframes. It's
      worth checking out libraries like{' '}
      <a
        className="text-purple-600 underline hover:text-pink-600"
        rel="nofollow noopener noreferrer"
        target="_blank"
        href="https://github.com/juliangarnier/anime"
      >
        anime.js
      </a>{' '}
      or{' '}
      <a
        className="text-purple-600 underline hover:text-pink-600"
        rel="nofollow noopener noreferrer"
        target="_blank"
        href="https://github.com/react-spring/react-spring"
      >
        react-spring
      </a>{' '}
      for more interesting animations and interactions.
    </P>
    <Divider />
    <H2>Performance</H2>
    <P>
      Shape blobbing can be resource intensive, so it's recommended to keep the
      paint area as small as possible.
    </P>
  </Layout>
)
