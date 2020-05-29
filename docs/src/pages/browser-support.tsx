import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'

export default () => (
  <Layout>
    <H1>Browser support</H1>
    <P large>
      This package is not supported in Internet Explorer. If you experience
      problems in other browsers, make sure you're using an SVG instead of
      regular HTML elements in the component.
    </P>
  </Layout>
)
