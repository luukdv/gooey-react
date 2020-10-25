import React from 'react'
import { Link } from 'gatsby'

export default ({ logo = true }: { logo?: boolean }) => (
  <div className="mb-10 flex justify-between items-center">
    <Link to="/" className="flex items-center">
      {logo && (
        <svg
          role="img"
          aria-label="Example of a gooey effect"
          className="w-6 md:w-8 h-6 md:h-8 mr-3 md:mr-4"
          viewBox="0 0 252 283"
        >
          <linearGradient id="gradient" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0" stopColor="darkturquoise" />
            <stop offset="1" stopColor="darkviolet" />
          </linearGradient>
          <path
            d="m258.315439 179.996729c-.541454-14.844748-.0395-25.956076 1.50586-33.333985 5.662109-27.032226 7.972966-50.1991547 7.166992-61.1835933-1.19315-16.2611598-6.937571-28.3700147-11.678711-36.9628906-7.064367-12.8035088-23.776859-30.8355309-46.490235-38.89257815-11.946954-4.23790729-20.305711-7.21837604-38.642578-8.19042969s-34.76003-.47151552-53.753906 3.1875c-9.104492 1.75390625-22.8959532 5.17847613-32.4892577 9.79589844-15.290621 7.3596387-26.4921875 16.8691406-32.1113281 23.0390625-10.2096565 11.2103944-22.1152208 26.898902-29.0488282 48.0234375-3.6014118 10.9723767-5.4056532 21.9920313-6.4131329 36.1815263-1.0074798 14.189495.2686017 22.424805 1.7246564 29.851677 2.9601297 15.09868 8.6591326 28.484375 20.9707031 46.078125 6.2133356 8.879117 15.2060264 16.679431 27.7441406 24.517578 8.4995131 5.313433 19.7355022 10.104053 30.2626953 15.736328 5.2736405 2.821511 13.2163485 7.624897 23.8281255 14.410156 26.972063 18.400702 46.742571 28.465155 59.311523 30.19336 9.496441 1.30574 22.502226.866415 32.958984-2.262696 10.101482-3.022796 16.918665-7.047505 21.107422-10.169921 9.362777-6.979275 22.031957-20.485053 25.552735-43.12793 1.372395-8.826172.870442-24.45638-1.50586-46.890625z"
            fill="url(#gradient)"
            transform="translate(-16 -1)"
          />
        </svg>
      )}
      <div className="font-bold md:text-lg text-cool-gray-800 mr-2">
        gooey-react
      </div>
      <div className="text-cool-gray-500">v1.1.0</div>
    </Link>
    <a
      className="underline text-sm font-semibold text-cool-gray-800 hover:text-purple-600"
      href="https://github.com/luukdv/gooey-react"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      GitHub
    </a>
  </div>
)
