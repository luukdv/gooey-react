import React from 'react'
import H1 from '../../components/H1'
import Layout from '../../components/Layout'

export default () => (
  <Layout
    prev="/examples/rotating-loader/"
    prevLabel="Example: rotating loader"
    next="/browser-support/"
    nextLabel="Browser support"
  >
    <H1>Examples: around the web</H1>
    <Link title="Blobs by Misaki Nakano" href="https://codepen.io/mnmxmx/full/VjjvEq" />
    <Link title="Button bubble by Adrien Grsmto" href="https://codepen.io/Grsmto/full/RPQPPB" />
    <Link title="Chat app by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/index.html" />
    <Link title="Circle by Nadieh Bremer" href="http://bl.ocks.org/nbremer/69808ec7ec07542ed7df" />
    <Link title="Collision detection by Nadieh Bremer" href="http://bl.ocks.org/nbremer/e627a8fced026a9286932c6c0a02d71b" />
    <Link title="Gooey effect by Mikael Ainalem" href="https://codepen.io/ainalem/full/mLqvee/" />
    <Link title="Gooey menu by Lucas Bebber" href="https://codepen.io/lbebber/full/LELBEo" />
    <Link title="Hexagon by Nadieh Bremer" href="http://bl.ocks.org/nbremer/3da658e9a21cd3c71d0819f9698f3bfa" />
    <Link title="Hover menu by Michael Leonard" href="https://codepen.io/mikel301292/full/dMYRYZ" />
    <Link title="Loader by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/send.html" />
    <Link title="Menu by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/menu.html" />
    <Link title="Music visualizer by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/player.html" />
    <Link title="Pagination by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/pagination.html" />
    <Link title="Rectangle by Nadieh Bremer" href="http://bl.ocks.org/nbremer/a3684c52fb527c8fa415" />
    <Link title="Selection by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/select.html" />
    <Link title="Share button by Lucas Bebber" href="https://tympanus.net/Development/CreativeGooeyEffects/share.html" />
  </Layout>
)

const Link = ({ href, title }: { href: string; title: string }) => (
  <div className="flex items-center mb-4">
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
