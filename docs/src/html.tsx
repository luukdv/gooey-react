import React from 'react'

export default (props: {
  body: string
  headComponents: React.ReactNode
  postBodyComponents: React.ReactNode
  preBodyComponents: React.ReactNode
}) => (
  <html lang="en" className="antialiased">
    <head>
      <title>The gooey effect for React</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="A tiny package for applying the gooey effect to React components."
      />
      <meta
        property="og:description"
        content="A tiny package for applying the gooey effect to React components."
      />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image" content="" />
      <meta property="og:title" content="The gooey effect for React" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {props.headComponents}
    </head>
    <body className="text-cool-gray-600 xs:text-center">
      {props.preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)
