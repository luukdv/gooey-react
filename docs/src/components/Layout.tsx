import React from 'react'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'

export default ({ children, noMargin }: { children: React.ReactNode; noMargin?: boolean }) => (
  <>
    <Wrap noMargin={noMargin}>
      <div className="flex flex-col md:flex-row w-full">
        <div className="mt-8 md:mt-0 w-full md:w-1/4 lg:w-1/5 flex-none mr-8 lg:mr-16 order-last md:order-first">
          <div className="bg-gray-100 rounded-md sticky top-8 mt-2">
            Home
            <ul>
              <li>Installation</li>
              <li>Usage</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow flex flex-col items-start">{children}</div>
      </div>
    </Wrap>
    <Footer />
  </>
)
