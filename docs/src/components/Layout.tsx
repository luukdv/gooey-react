import React from 'react'
import { Helmet } from 'react-helmet'
import Wrap from '../components/Wrap'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

export default ({
  children,
  description,
  home,
  next,
  nextLabel,
  prev,
  prevLabel,
  title,
}: {
  children: React.ReactNode
  description?: string
  home?: boolean
  next?: string
  nextLabel?: string
  prev?: string
  prevLabel?: string
  title?: string
}) => {
  const subtitle = 'The gooey effect for React'
  const ogTitle = title ? `${title} • ${subtitle}` : subtitle
  const ogDescription = description
    ? description
    : 'A tiny React component for applying a gooey effect, also known as shape blobbing or metaballs.'

  return (
    <>
      <Helmet>
        <title>{ogTitle}</title>
        <meta name="description" content={ogDescription} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:title" content={ogTitle} />
      </Helmet>
      <div className={`flex flex-col ${home ? '' : 'min-h-screen'}`}>
        <Wrap noMargin={home}>
          {!home && <Header />}
          <div className="flex flex-col md:flex-row w-full">
            <Sidebar />
            <div className="flex-grow">
              <div className="main flex flex-col items-start">{children}</div>
              <Nav
                prev={prev}
                prevLabel={prevLabel}
                next={next}
                nextLabel={nextLabel}
              />
            </div>
          </div>
        </Wrap>
        <Footer />
      </div>
    </>
  )
}
