import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import Button from '../components/Button'

export default () => (
  <Layout
    prev="/"
    prevLabel="Home"
    next="/properties/intensity/"
    nextLabel="Prop: intensity"
  >
    <H1>Properties</H1>
    <Button href="/properties/intensity/" title="intensity" />
    <Button href="/properties/composite/" title="composite" />
    <Button href="/properties/id/" title="id" />
    <Button href="/properties/classname-style/" title="className" />
    <Button href="/properties/classname-style/" title="style" />
  </Layout>
)
