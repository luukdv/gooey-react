import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default () => (
  <Layout>
    <H1>Examples</H1>
    <Button href="/examples/dotted-loader/" title="Dotted loader" />
    <Button href="/examples/rotating-loader/" title="Rotating loader" />
    <Button href="/examples/random-blob/" title="Random blob" />
  </Layout>
)
