import React from 'react'
import H2 from './H2'
import P from './P'
import Code from './Code'
import Tag from './Tag'

export default () => (
  <>
    <div className="w-full h-px bg-cool-gray-200 mb-16" />
    <H2>Properties</H2>
    <P>
      Asides from the possibility to add a <Tag>className</Tag> and{' '}
      <Tag>style</Tag> prop, the only available property is <Tag>intensity</Tag>
      . You can use this to control how strong the gooey effect is applied. It
      has three possible values: <Tag>weak</Tag>, <Tag>medium</Tag> (which is
      the default) and <Tag>strong</Tag>.
    </P>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">{'intensity'}</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'weak'}</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
  </>
)
