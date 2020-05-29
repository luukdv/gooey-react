import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import H2 from '../components/H2'
import Divider from '../components/Divider'
import P from '../components/P'

export default () => (
  <Layout>
    <H1>Considerations</H1>
    <H2>Elements</H2>
    <P moreMargin>
      This library focuses on the graphical part of the effect, which means not
      all HTML tags will be visible within the component. There is a popular
      solution which applies a composite or blend to effectively duplicate all
      original elements on top of the goo, but it greatly diminishes the effect.
      If you want to show elements on top, the best solution is to simply move
      them outside of the component.
    </P>
    <Divider />
    <H2>Performance</H2>
    <P>
      This gooey filter can be resource intensive, so it's recommended to keep
      the paint area as small as possible.
    </P>
  </Layout>
)
