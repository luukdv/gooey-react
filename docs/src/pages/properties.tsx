import React from 'react'
import H1 from '../components/H1'
import Layout from '../components/Layout'
import P from '../components/P'
import Tag from '../components/Tag'
import Button from '../components/Button'

export default () => (
  <Layout
    prev="/"
    prevLabel="Home"
    next="/properties/intensity/"
    nextLabel="Prop: intensity"
    title="Properties"
    description="The Goo component has a few simple props available for fine-tuning the visual outcome of the filter."
  >
    <H1>Properties</H1>
    <P large smallMargin>
      The <Tag>Goo</Tag> component has a few simple props available for
      fine-tuning the visual outcome of the filter.
    </P>
    <Button href="/properties/intensity/" title="intensity" />
    <Button href="/properties/composite/" title="composite" />
    <Button href="/properties/id/" title="id" />
    <Button href="/properties/classname-style/" title="className" />
    <Button href="/properties/classname-style/" title="style" />
  </Layout>
)
