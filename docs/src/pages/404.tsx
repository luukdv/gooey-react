import React from 'react'
import Layout from '../components/Layout'
import H1 from '../components/H1'
import Button from '../components/Button'
import Divider from '../components/Divider'
import P from '../components/P'

export default () => (
  <Layout
    title="Not found"
    description="That's too bad. What brought you here?"
  >
    <H1>Not found</H1>
    <P large>That's too bad. What brought you here?</P>
    <Divider />
    <Button href="/" title="Back to home" />
  </Layout>
)
