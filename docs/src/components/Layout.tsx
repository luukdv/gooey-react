import React from 'react'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

export default ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) => (
  <div className={`flex flex-col ${home ? '' : 'min-h-screen'}`}>
    <Wrap noMargin={home}>
      {!home && <p className="font-bold text-black mb-8 md:mb-12 lg:mt16">gooey-react</p>}
      <div className="flex flex-col md:flex-row w-full">
        <Sidebar />
        <div className="flex-grow flex flex-col items-start main">
          {children}
        </div>
      </div>
    </Wrap>
    <Footer />
  </div>
)
