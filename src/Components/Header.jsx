import React, { useState, useEffect } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex p-3 md:p-0">
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

          .name-hover {
            transition: transform 0.3s ease, text-shadow 0.3s ease;
            -webkit-transition: transform 0.3s ease, text-shadow 0.3s ease;
          }

          .name-hover:hover {
            transform: scale(1.05);
            -webkit-transform: scale(1.05);
            text-shadow: 0 0 10px rgba(196, 255, 65, 0.8);
          }

          .text-hover {
            transition: color 0.3s ease;
            -webkit-transition: color 0.3s ease;
          }

          .text-hover:hover {
            color: #66d1f3;
          }
        `}
      </style>

      <div className="space-y-4">
        <h1 
          className={`text-4xl sm:text-5xl font-extrabold text-[#66d1f3] font-['Shojumaru',cursive] name-hover ${
            isVisible ? "animate-slideInFromLeft" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "slideInFromLeft 0.7s ease-out forwards" : "none" }}
        >
          Abhishek Thakur
        </h1>
        <p 
          className={`text-lg sm:text-xl text-gray-200 italic font-['Zen_Kaku_Gothic_New',sans-serif] text-hover ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.3s forwards" : "none" }}
        >
          Brings ideas to life with code! ✨
        </p>
        <p 
          className={`text-sm sm:text-base text-gray-400 text-wrap font-['Zen_Kaku_Gothic_New',sans-serif] text-hover leading-relaxed ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.6s forwards" : "none" }}
        >
          Associate Software Engineer. Frontend Developer. React.js Specialist. Creative Innovator.
        </p>
      </div>
    </section>
  );
}