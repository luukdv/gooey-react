import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'
import Button from '../components/Button'

export default () => (
  <Layout
    prev="/properties/classname-style/"
    prevLabel="Props: className & style"
    next="/examples/around-the-web/"
    nextLabel="Examples: around the web"
  >
    <H1>Examples</H1>
    <P smallMargin large>
      The gooey effect might not be the most useful thing on the planet, but it
      can be used to create some cool visuals.
    </P>
    <Button href="/examples/around-the-web/" title="Around the web" />
    <Button href="/examples/dotted-loader/" title="Dotted loader" />
    <Button href="/examples/rotating-loader/" title="Rotating loader" />
    <Button href="/examples/random-blob/" title="Random blob" />
  </Layout>
)
