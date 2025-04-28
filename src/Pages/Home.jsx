import React,{useState,useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Hero } from '../Components/Hero';
import { IconBriefcase } from '@tabler/icons-react';
import { IconCake } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
import { Mini_Navbar } from '../Components/Mini_Navbar';
import bg_image from "../assets/icons/half_character.png"
import { Header } from '../Components/Header';
// import { JaggedPath } from './JaggedPath'; // From artifact ID d48d4f55-0be5-4a69-b7fb-01966eb94aaf
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (<>
  <Hero/>
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* <JaggedPath className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[600px] sm:max-w-[800px] opacity-20" /> */}
      <div className="relative z-10  sm:px-6  mx-auto py-16 animate-fade-in">
      <Header/>
      <section className="">
      <style>
        {`
          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-50px);
              -webkit-transform: translateX(-50px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              -webkit-transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
              -webkit-transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              -webkit-transform: translateY(0);
            }
          }

          .info-item-hover {
            transition: transform 0.3s ease, color 0.3s ease;
            -webkit-transition: transform 0.3s ease, color 0.3s ease;
          }

          .info-item-hover:hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            color: #c4ff41;
          }

          .icon-hover {
            transition: transform 0.3s ease, stroke 0.3s ease;
            -webkit-transition: transform 0.3s ease, stroke 0.3s ease;
          }

          .info-item-hover:hover .icon-hover {
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            stroke: #c4ff41;
          }
        `}
      </style>

      <div className="max-w-lg ">
        <div 
          className={`flex flex-row gap-4 sm:gap-6 h-20 w-full p-4 ${
            isVisible ? "animate-slideInFromLeft" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "slideInFromLeft 0.7s ease-out forwards" : "none" }}
        >
          <div 
            className={`flex items-center gap-2 info-item-hover ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.3s forwards" : "none" }}
          >
            <IconBriefcase className="icon-hover" stroke="grey" height={30} width={30} />
            <span className="text-sm sm:text-lg text-gray-200">Available</span>
          </div>
          <div 
            className={`flex items-center gap-2 info-item-hover ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.6s forwards" : "none" }}
          >
            <IconCake className="icon-hover" stroke="grey" height={30} width={30} />
            <span className="text-sm sm:text-lg text-gray-200">October 6th</span>
          </div>
          <div 
            className={`flex items-center gap-2 info-item-hover ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.9s forwards" : "none" }}
          >
            <IconCalendarWeek className="icon-hover" stroke="grey" height={30} width={30} />
            <span className="text-sm sm:text-lg text-gray-200">Joined April 2025</span>
          </div>
        </div>
      </div>
    </section>
<Mini_Navbar/>
<div
  className="animate-fade-in relative p-5 ">
  <Outlet />
</div>

              </div>
    </div>
    </>
  );
}