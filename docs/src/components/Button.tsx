import React from 'react'
import { Link } from 'gatsby'

export default ({ href, title }: { href: string; title: string }) => (
  <Link
    to={href}
    className={`
      text-white
      px-5
      py-3
      rounded
      shadow
      font-semibold
      bg-purple-600
      hover:bg-pink-600
      mb-4
  `}
  >
    {title}
  </Link>
)
