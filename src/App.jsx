import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet,Link } from 'react-router-dom';
import Home from './Pages/Home'; 
import { Footer } from './Components/Footer';
import About from './Pages/About';
import { Projects } from './Pages/Projects';
import Navbar from './Components/Navbar';
import bg_image from "./assets/icons/half_character.png"
import { Contact } from './Pages/Contact';
// Layout component with static Navbar and Outlet
function Layout() {
  return (
    
        <div className="relative overflow-hidden">
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 bg-no-repeat bg-right-bottom bg-contain lg:opacity-10 opacity-5 pointer-events-none"
            style={{ backgroundImage: `url(${bg_image})`, zIndex: -1 }}
          ></div>
    
          {/* Main Content */}
          <div className="max-h-screen overflow-y-scroll scrollbar-hide relative z-10">
            <Navbar />
            <div className="mt-26 md:px-6 max-w-3xl mx-auto">
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      );
    }
    


// Placeholder route components


function Services() {
  return (
    <div className="text-center py-10 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My Services</h1>
      <p className="text-lg text-gray-600">Explore the services I offer.</p>
    </div>
  );
}




// Router configuration
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          { path: '', element: <About /> },
          { path: 'services', element: <Services /> },
          { path: 'projects', element: <Projects /> },
          { path: 'contact', element: <Contact /> },
        ],
      },
    ],
  },
]);

// Main App component
export default function AppRouter() {
  return <RouterProvider router={router} />;
}