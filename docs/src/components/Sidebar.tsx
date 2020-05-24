import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div
    className="
      mt-8
      md:mt-0
      w-full
      md:w-1/4
      lg:w-1/5
      flex-none
      tracking-wide
      mr-8
      lg:mr-16
      order-last
      md:order-first
    "
  >
    <div className="bg-gray-100 rounded-md md:sticky md:top-8 md:mt-2 p-6">
      <A href="/" title="Home" upper />
      <ul className="ml-4">
        <li>
          <A href="/" title="Installation" />
        </li>
        <li>
          <A href="/" title="Usage" />
        </li>
      </ul>
      <A href="/properties/intensity/" title="Properties" upper margin />
      <ul className="ml-4">
        <li>
          <A href="/properties/intensity/" title="intensity" />
          <A href="/properties/id/" title="id" />
          <A href="/properties/classname-style/" title="className" />
          <A href="/properties/classname-style/" title="style" />
        </li>
      </ul>
      <A href="/support/" title="Support" upper margin />
    </div>
  </div>
)

const A = ({
  href,
  title,
  upper,
  margin,
}: {
  href: string
  title: string
  upper?: boolean
  margin?: boolean
}) => (
  <Link
    to={href}
    className={`hover:text-purple-600 block py-1 ${margin ? 'mt-6' : ''} ${
      upper ? 'text-sm font-bold uppercase mb-1' : ''
    }`}
  >
    {title}
  </Link>
)
