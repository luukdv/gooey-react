import React from 'react'
import Divider from '../../components/Divider'
import H1 from '../../components/H1'
import Tag from '../../components/Tag'
import Code from '../../components/Code'
import Goo from 'gooey-react'
import P from '../../components/P'
import Layout from '../../components/Layout'

export default () => (
  <>
    <Layout>
      <H1>Intensity</H1>
      <P moreMargin large>
        You can use <Tag>intensity</Tag> to control how strong the gooey effect
        is applied. It has three possible values: <Tag>weak</Tag>,{' '}
        <Tag>medium</Tag> (which is the default) and <Tag>strong</Tag>.
      </P>
      <Divider />
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col items-start">
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
          <div className="border-2 border-cool-gray-200">
            <Goo intensity="weak" id="prop-weak">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
                <circle
                  cx="50%"
                  cy="31.25%"
                  r="30"
                  fill="salmon"
                  className="origin-center"
                  style={{
                    animation: 'drop 1.5s ease-in -0.75s infinite alternate',
                  }}
                />
                <circle
                  cx="71.875%"
                  cy="50%"
                  r="24"
                  fill="salmon"
                  className="origin-center"
                />
                <circle
                  cx="50%"
                  cy="31.25%"
                  r="48"
                  fill="lightsalmon"
                  className="origin-center"
                />
              </svg>
            </Goo>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Code>
            <span className="text-blue-700">{'<'}</span>
            <span className="text-yellow-700">{'Goo '}</span>
            <span className="text-purple-700">{'intensity'}</span>
            <span className="text-blue-700">{'="'}</span>
            <span className="text-green-700">{'strong'}</span>
            <span className="text-blue-700">{'">'}</span>
            <span className="text-cool-gray-500"> … </span>
            <span className="text-blue-700">{'</'}</span>
            <span className="text-yellow-700">{'Goo'}</span>
            <span className="text-blue-700">{'>'}</span>
          </Code>
          <div className="border-2 border-cool-gray-200">
            <Goo intensity="strong" id="prop-strong">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-64 h-64">
                <circle
                  cx="50%"
                  cy="31.25%"
                  r="30"
                  fill="salmon"
                  className="origin-center"
                  style={{
                    animation: 'drop 1.5s ease-in -0.75s infinite alternate',
                  }}
                />
                <circle
                  cx="71.875%"
                  cy="50%"
                  r="24"
                  fill="salmon"
                  className="origin-center"
                />
                <circle
                  cx="50%"
                  cy="31.25%"
                  r="48"
                  fill="lightsalmon"
                  className="origin-center"
                />
              </svg>
            </Goo>
          </div>
        </div>
      </div>
    </Layout>
  </>
)