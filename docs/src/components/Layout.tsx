import React from 'react'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'

export default ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) => (
  <div className={`flex flex-col ${home ? '' : 'min-h-screen'}`}>
    <Wrap noMargin={home}>
      <div className="flex flex-col md:flex-row w-full">
        <div
          className="
            mt-8
            md:mt-0
            w-full
            md:w-1/4
            lg:w-1/5
            flex-none
            mr-8
            lg:mr-16
            order-last
            md:order-first
          "
        >
          <div className="bg-gray-100 rounded-md md:sticky md:top-8 md:mt-2">
            Home
            <ul>
              <li>Installation</li>
              <li>Usage</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow flex flex-col items-start main">{children}</div>
      </div>
    </Wrap>
    <Footer />
  </div>
)
