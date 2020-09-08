import React from 'react'
import H1 from '../../components/H1'
import Layout from '../../components/Layout'
import P from '../../components/P'

export default () => (
  <Layout
    prev="/examples/random-blob/"
    prevLabel="Example: random blob"
    next="/browser-support/"
    nextLabel="Browser support"
    title="Examples: around the web"
    description="A few links with some inspiring shape blobbing action."
  >
    <H1>Examples: around the web</H1>
    <P large smallMargin>
      A few links with some inspiring shape blobbing action.
    </P>
    <Link
      title="Blobs by Misaki Nakano"
      href="https://codepen.io/mnmxmx/full/VjjvEq"
    />
    <Link
      title="Button bubble by Adrien Grsmto"
      href="https://codepen.io/Grsmto/full/RPQPPB"
    />
    <Link
      title="Creative gooey effects by Lucas Bebber"
      href="https://tympanus.net/Development/CreativeGooeyEffects/"
    />
    <Link
      title="Gooey buttons by Garet McKinley"
      href="https://codepen.io/garetmckinley/full/KJooOq"
    />
    <Link
      title="Gooey effect by Mikael Ainalem"
      href="https://codepen.io/ainalem/full/mLqvee/"
    />
    <Link
      title="Gooey loader by Kaitlyn Stahl"
      href="https://codepen.io/kaista/full/WPNBRg"
    />
    <Link
      title="Gooey menu by Lucas Bebber"
      href="https://codepen.io/lbebber/full/LELBEo"
    />
    <Link
      title="Hexagon by Nadieh Bremer"
      href="http://bl.ocks.org/nbremer/3da658e9a21cd3c71d0819f9698f3bfa"
    />
    <Link
      title="Hover menu by Michael Leonard"
      href="https://codepen.io/mikel301292/full/dMYRYZ"
    />
    <Link
      title="Liquid loader by Mikael Ainalem"
      href="https://codepen.io/ainalem/full/eYmGLyp"
    />
    <Link
      title="Rectangle by Nadieh Bremer"
      href="http://bl.ocks.org/nbremer/a3684c52fb527c8fa415"
    />
  </Layout>
)

const Link = ({ href, title }: { href: string; title: string }) => (
  <div className="flex items-center mb-3">
    <div className="mr-2">👉</div>
    <a
      className="text-purple-600 underline hover:text-pink-600"
      rel="nofollow noopener noreferrer"
      target="_blank"
      href={href}
    >
      {title}
    </a>
  </div>
)
