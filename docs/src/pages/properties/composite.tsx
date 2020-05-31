import React from 'react'
import Divider from '../../components/Divider'
import H1 from '../../components/H1'
import Tag from '../../components/Tag'
import Code from '../../components/Code'
import Goo from 'gooey-react'
import P from '../../components/P'
import Layout from '../../components/Layout'

export default () => (
  <Layout prev="/properties/intensity/" prevLabel="Prop: intensity" next="/properties/id/" nextLabel="Prop: id">
    <H1>Prop: composite</H1>
    <P large>
      By default, the effect is applied to everything within the component. With this approach, the goo is at its most effective: both shapes and colors will merge together. However, certain elements (like text or sharp edges) will end up being morphed or invisible. There are two ways to solve this problem. The first is to simply move those elements outside of the component and place them on top. The second one is by using the <Tag>composite</Tag> property.
    </P>
    <Divider />
    <div className="md:grid md:grid-cols-2 md:gap-4 mb-6 md:mb-8">
      <Example composite={false} />
      <Example composite={true} />
    </div>
    <P>
      As you can see, colors will not blend when you apply a composite. On the other hand, text that has been added inside the component will still be visible.
    </P>
  </Layout>
)

const Example = ({ composite }: { composite: boolean }) => (
  <div className="flex flex-col items-start">
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      {composite && <span className="text-purple-700">{' composite'}</span>}
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <div className="border-2 border-cool-gray-200">
      <Goo composite={composite}>
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64"
        />
      </Goo>
    </div>
  </div>
)
