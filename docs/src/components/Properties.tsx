import React from 'react'
import Goo from '../../../src'
import H2 from './H2'
import P from './P'
import Code from './Code'
import Tag from './Tag'

export default () => (
  <>
    <div className="w-full h-px bg-cool-gray-200 mb-16" />
    <H2>Properties</H2>
    <P>
      You can use <Tag>intensity</Tag> to control how strong the gooey effect is
      applied. It has three possible values: <Tag>weak</Tag>, <Tag>medium</Tag>{' '}
      (which is the default) and <Tag>strong</Tag>.
    </P>
    <div className="md:grid md:grid-cols-2 md:gap-8 w-full">
      <div className="flex flex-col items-center">
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
        <div className="border-2 border-cool-gray-200 w-full">
          <Goo intensity="weak" id="prop-weak">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-64">
              <circle
                cx="50%"
                cy="31.25%"
                r="30"
                fill="salmon"
                className="origin-center"
                style={{
                  animation: 'drop 2s ease-in -1s infinite alternate',
                }}
              />
              <circle
                cx="62.5%"
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
      <div className="flex flex-col items-center">
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
        <div className="border-2 border-cool-gray-200 w-full">
          <Goo intensity="strong" id="prop-strong">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-64">
              <circle
                cx="50%"
                cy="31.25%"
                r="30"
                fill="salmon"
                className="origin-center"
                style={{
                  animation: 'drop 2s ease-in -1s infinite alternate',
                }}
              />
              <circle
                cx="62.5%"
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
  </>
)
