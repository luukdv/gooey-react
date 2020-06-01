import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import H2 from '../components/H2'
import Divider from '../components/Divider'
import P from '../components/P'

export default () => (
  <Layout prev="/browser-support/" prevLabel="Browser support">
    <H1>Considerations</H1>
    <H2>Performance</H2>
    <P>
      Shape blobbing can be resource intensive, so it's recommended to keep the
      paint area as small as possible.
    </P>
  </Layout>
)
