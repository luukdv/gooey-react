import React from 'react'
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import H1 from '../components/H1'
import H2 from '../components/H2'
import Code from '../components/Code'
import P from '../components/P'
import Usage from '../components/Usage'
import Icky from '../components/Icky'
import Layout from '../components/Layout'

export default () => (
  <>
    <Hero />
    <Layout home next="/properties/intensity/" nextLabel="Prop: intensity">
      <H1>The gooey effect for React</H1>
      <P large>
        The 'gooey effect' has been made popular by various (amazing) blogposts
        over the years. This tiny package makes it easy to use within React, and
        has improved the implementation as much as possible. It's optimized to
        be as sharp/crisp as possible, since existing implementations can be a
        bit blurry. Support for Safari on macOS (which can be notorious, and is
        usually missing) has been added as well.
      </P>
      <Divider />
      <H2>Installation (±0.5 KB)</H2>
      <Code large moreMargin>
        npm install gooey-react
      </Code>
      <Divider />
      <Usage />
      <Icky />
    </Layout>
  </>
)
