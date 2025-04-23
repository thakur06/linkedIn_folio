import React from 'react'
import { Link } from 'react-router-dom'
export const Mini_Navbar = () => {
  return (
    <div className="flex  mt-3 w-full flex-row justify-evenly md:gap-4  mb-10">
          <Link
            to=""
            className="px-4 py-2  text-white rounded-lg hover:scale-150 hover:transition-all hover:ease-in-out transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            About
          </Link>
          <Link
            to="services"
            className="px-4 py-2  text-white rounded-lg hover:bg-orange-500 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Experience
          </Link>
          <Link
            to="projects"
            className="px-4 py-2  text-white rounded-lg hover:bg-orange-500 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="px-4 py-2  text-white rounded-lg hover:bg-orange-500 transition-colors duration-200 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Contact
          </Link>
        </div>
        

  )
}
