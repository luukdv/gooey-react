import React from 'react'
import Divider from '../../components/Divider'
import H1 from '../../components/H1'
import Tag from '../../components/Tag'
import Code from '../../components/Code'
import P from '../../components/P'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

export default () => (
  <Layout prev="/properties/intensity/" prevLabel="Prop: intensity" next="/properties/classname-style/" nextLabel="Props: className & style">
    <H1>Prop: id</H1>
    <P moreMargin large>
      If you want to render multiple <Tag>Goo</Tag> components with different{' '}
      <Link
        className="underline text-purple-600 hover:text-pink-600"
        to="/properties/intensity/"
      >
        intensity
      </Link>{' '}
      values, a unique identifier should be supplied to every additional
      instance.
    </P>
    <Divider />
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">intensity</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">weak</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      <br />
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">id</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">{'second'}</span>
      <span className="text-blue-700">{'" '}</span>
      <span className="text-purple-700">intensity</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">strong</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <P moreMargin>
      A different <Tag>id</Tag> is passed to the second instance.
    </P>
    <Divider />
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">intensity</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">strong</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      <br />
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo '}</span>
      <span className="text-purple-700">intensity</span>
      <span className="text-blue-700">{'="'}</span>
      <span className="text-green-700">strong</span>
      <span className="text-blue-700">{'">'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <Code>
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <br />
      <br />
      <span className="text-blue-700">{'<'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
      <span className="text-cool-gray-500"> … </span>
      <span className="text-blue-700">{'</'}</span>
      <span className="text-yellow-700">{'Goo'}</span>
      <span className="text-blue-700">{'>'}</span>
    </Code>
    <P>
      In the two examples above, passing an <Tag>id</Tag> is not necessary since
      the underlying filter will be the same.
    </P>
  </Layout>
)
