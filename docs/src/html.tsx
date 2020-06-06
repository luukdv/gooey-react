import React from 'react'

export default (props: {
  body: string
  headComponents: React.ReactNode
  postBodyComponents: React.ReactNode
  preBodyComponents: React.ReactNode
}) => (
  <html lang="en" className="antialiased">
    <head>
      <meta charSet="utf-8" />
      <meta
        name="google-site-verification"
        content="hkk4wkaOZz21saZHvuprBp5BPLO5amYybHqKJcA07no"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
      <meta
        property="og:image:secure_url"
        content="https://gooey-react.netlify.app/gooey-react.png"
      />
      <meta
        property="og:image"
        content="https://gooey-react.netlify.app/gooey-react.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      {props.headComponents}
    </head>
    <body className="text-cool-gray-600">
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
