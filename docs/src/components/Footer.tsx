import React from 'react'
import Wrap from './Wrap'

export default () => (
  <div className="bg-cool-gray-100 w-full text-cool-gray-600 text-sm mt-16">
    <Wrap>
      <p className="text-center py-16">
        gooey-react is a project by{' '}
        <a
          className="underline font-medium"
          href="https://www.luuk.site"
          target="_blank"
          rel="noopener"
        >
          Luuk
        </a>
        .
      </p>
    </Wrap>
  </div>
)
