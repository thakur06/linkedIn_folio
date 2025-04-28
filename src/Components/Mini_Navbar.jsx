import React from 'react'
import { Link } from 'react-router-dom'

export const Mini_Navbar = () => {
  return (
    <div className="flex mt-3 w-full flex-row flex-wrap justify-center gap-2 sm:gap-4 px-2 mb-10">
      <Link
        to=""
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm rounded-lg hover:scale-110 transition-all duration-200 animate-fade-in text-center"
        style={{ animationDelay: '0.1s' }}
      >
        About
      </Link>
      <Link
        to="exp"
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm rounded-lg hover:bg-orange-500 transition-colors duration-200 animate-fade-in text-center"
        style={{ animationDelay: '0.2s' }}
      >
        Experience
      </Link>
      <Link
        to="projects"
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm rounded-lg hover:bg-orange-500 transition-colors duration-200 animate-fade-in text-center"
        style={{ animationDelay: '0.3s' }}
      >
        Projects
      </Link>
      <Link
        to="contact"
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm rounded-lg hover:bg-orange-500 transition-colors duration-200 animate-fade-in text-center"
        style={{ animationDelay: '0.4s' }}
      >
        Contact
      </Link>
    </div>
  )
}
