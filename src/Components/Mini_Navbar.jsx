import React from 'react'
import { Link } from 'react-router-dom'

export const Mini_Navbar = () => {
  return (
    <div className="flex mt-3 w-full text-2xl font-extrabold flex-row flex-wrap justify-evenly items-center gap-2 sm:gap-4 mb-10">
      <Link
        to=""
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs md:text-2xl  hover:scale-110 transition-all duration-200 ease-in-out text-center"
        style={{ animationDelay: '0.1s' }}
      >
        About
      </Link>
      <Link
        to="exp"
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs md:text-2xl  hover:bg-[#66d1f3] hover:scale-110 transition-all duration-200 ease-in-out text-center"
        style={{ animationDelay: '0.2s' }}
      >
        Experience
      </Link>
      <Link
        to="projects"
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs md:text-2xl   hover:bg-[#66d1f3] hover:scale-110 transition-all duration-200 ease-in-out text-center"
        style={{ animationDelay: '0.3s' }}
      >
        Projects
      </Link>
      <Link
        to="contact"
        className="px-2 sm:px-4 py-1 sm:py-2 text-white text-xs md:text-2xl   hover:bg-[#66d1f3] hover:scale-110 transition-all duration-200 ease-in-out text-center"
        style={{ animationDelay: '0.4s' }}
      >
        Contact
      </Link>
    </div>
  )
}
