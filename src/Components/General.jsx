import React,{useEffect,useState} from 'react'
import { IconBriefcase } from '@tabler/icons-react';
import { IconCake } from '@tabler/icons-react';
import { IconCalendarWeek } from '@tabler/icons-react';
export const General = () => {
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        setIsVisible(true);
      }, []);
    
  return (
    <div>
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
    </div>
  )
}
