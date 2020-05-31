import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'
import Button from '../components/Button'
import Divider from '../components/Divider'

export default () => (
  <Layout
    prev="/properties/classname-style/"
    prevLabel="Props: className & style"
    next="/examples/dotted-loader/"
    nextLabel="Example: dotted loader"
  >
    <H1>Examples</H1>
    <P large>The gooey effect might not be the most useful thing on the planet, but it can be used to create some amazing visuals.</P>
    <Divider />
    <Button href="/examples/dotted-loader/" title="Dotted loader" />
    <Button href="/examples/rotating-loader/" title="Rotating loader" />
    <Button href="/examples/random-blob/" title="Random blob" />
  </Layout>
)
