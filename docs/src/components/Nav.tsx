import React from 'react'
import { Link } from 'gatsby'

export default ({
  prev,
  prevLabel,
  next,
  nextLabel,
}: {
  prev?: string
  prevLabel?: string
  next?: string
  nextLabel?: string
}) =>
  prev || next ? (
    <div
      className={`
        flex
        flex-col
        xs:flex-row
        ${prev ? 'justify-start' : 'justify-end'}
        w-full
        border
        rounded-lg
        mt-8
        md:mt-12
        border-cool-gray-200
      `}
    >
      {prev && (
        <Link
          to={prev}
          className="px-6 xs:px-8 py-5 xs:py-6 xs:w-1/2 group hover:bg-pink-50"
        >
          <div className="text-sm font-bold tracking-wide uppercase mb-1">
            Previous
          </div>
          <div className="text-purple-600 underline group-hover:text-pink-600">
            {prevLabel}
          </div>
        </Link>
      )}
      {next && (
        <Link
          to={next}
          className="
            text-right
            order-first
            xs:order-last
            xs:w-1/2
            px-6
            xs:px-8
            py-5
            xs:py-6
            group
            hover:bg-pink-50
          "
        >
          <div className="text-sm font-bold tracking-wide uppercase mb-1">
            Next
          </div>
          <div className="text-purple-600 underline group-hover:text-pink-600">
            {nextLabel}
          </div>
        </Link>
      )}
    </div>
  ) : null
