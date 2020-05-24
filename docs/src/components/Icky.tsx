import React from 'react'

export default () => (
  <a
    className="group"
    href="https://www.youtube.com/watch?v=KK4o5OA6NYg"
    target="_blank"
    rel="nofollow noopener block"
  >
    <figure>
      <img
        loading="lazy"
        width="300"
        height="300"
        className="rounded-t-lg"
        src="/icky.jpeg"
        alt="Super Mario Sunshine"
      />
      <figcaption className="bg-pink-100 transition-colors duration-200 group-hover:bg-pink-200 py-4 px-6 text-sm rounded-b-lg">
        <blockquote className="font-bold">
          &ldquo;What's this icky, paint-like goo?&rdquo;
        </blockquote>
        <cite className="mt-2 block">- Toad, 2002</cite>
      </figcaption>
    </figure>
  </a>
)
