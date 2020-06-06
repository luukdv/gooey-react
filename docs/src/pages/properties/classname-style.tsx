import React from 'react'
import Divider from '../../components/Divider'
import H1 from '../../components/H1'
import Tag from '../../components/Tag'
import Code from '../../components/Code'
import P from '../../components/P'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/properties/id/"
    prevLabel="Prop: id"
    next="/tutorial/"
    nextLabel="Tutorial"
    title="Props: className & style"
    description="You can forward a className and/or style property to the component, which will be applied to the top-level element."
  >
    <H1>Props: className & style</H1>
    <P large>
      You can forward a <Tag>className</Tag> and/or <Tag>style</Tag> property to
      the component, which will be applied to the top-level element.
    </P>
    <Divider />
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">className</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">mt-8</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500 select-none"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">style</span>
      <span className="text-blue-700">{'={{ '}</span>
      <span className="text-yellow-700">{'marginTop '}</span>
      <span className="text-blue-700">{": '"}</span>
      <span className="text-green-700">2rem</span>
      <span className="text-blue-700">{"' }}>"}</span>
      <span className="text-cool-gray-500 select-none"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
  </Layout>
)
