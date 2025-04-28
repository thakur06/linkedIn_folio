import { useEffect, useState } from "react";
import sign from "../assets/icons/signature.png";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className=" flex  justify-center ">
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

          .signature-hover {
            transition: transform 0.3s ease, filter 0.3s ease;
            -webkit-transition: transform 0.3s ease, filter 0.3s ease;
          }

          .signature-hover:hover {
            transform: scale(1.1) rotate(2deg);
            -webkit-transform: scale(1.1) rotate(2deg);
            filter: brightness(1.2);
          }
        `}
      </style>
      
      <div className="max-w-2xl w-full space-y-5">
        <h1 
          className={`text-4xl sm:text-5xl font-bold text-[#c4ff41] font-['Shojumaru',cursive] tracking-tight ${
            isVisible ? "animate-slideInFromLeft" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "slideInFromLeft 0.7s ease-out forwards" : "none" }}
        >
          Hey! 👋
        </h1>
        
        <p 
          className={`text-lg sm:text-xl text-gray-300 leading-relaxed  p-6 rounded-lg shadow-lg  ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.3s forwards" : "none" }}
        >
          As a frontend developer, I specialize in crafting intuitive and responsive user interfaces. My expertise in <span className="text-[#c4ff41] font-semibold">React.js</span>, <span className="text-[#c4ff41] font-semibold">Tailwind CSS</span>, and <span className="text-[#c4ff41] font-semibold">JavaScript</span> allows me to translate complex design specifications into seamless, high-performance web experiences. I focus on optimizing performance, ensuring cross-device compatibility, and maintaining clean, modular code. My passion for design and meticulous attention to detail drive me to create interfaces that are both visually stunning and functionally robust.
        </p>
        
        <h2 
          className={`text-2xl sm:text-3xl font-semibold text-gray-200 font-['Zen_Kaku_Gothic_New',sans-serif] ${
            isVisible ? "animate-fadeIn" : "opacity-0"
          }`}
          style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.6s forwards" : "none" }}
        >
          Stay awesome!
        </h2>
        
        <div className="flex justify-center">
          <img 
            src={sign} 
            alt="Signature" 
            className={`h-32 w-32 sm:h-40 sm:w-40 object-contain signature-hover ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.9s forwards" : "none" }}
          />
        </div>
      </div>
    </section>
  );
}