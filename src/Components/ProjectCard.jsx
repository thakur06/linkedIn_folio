"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Calender from "../assets/Project/Calender.png"
import Tic from "../assets/Project/Tic.png"
import Shopvilla from "../assets/Project/shopVilla.png"
import Portal from "../assets/Project/Portal.png"
export function ProjectCard() {
  const [active, setActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false); // Added isVisible state
  const projectsPerPage = 5;
  const ref = useRef(null);
  const id = useId();

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Pagination logic
  const totalProjects = cards.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = cards.slice(startIndex, startIndex + projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="flex justify-center min-w-full  px-4 sm:px-6 lg:px-8">
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

          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            -webkit-transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: scale(1.03);
            -webkit-transform: scale(1.03);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          }

          .button-hover {
            transition: transform 0.3s ease, background-color 0.3s ease;
            -webkit-transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .button-hover:hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            background-color: #22c55e;
          }
        `}
      </style>

      <div className=" w-full space-y-8">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-center text-[#27a3e0] font-['Shojumaru',cursive] mb-12 ${
            isVisible ? "animate-slideInFromLeft" : "opacity-0"
          }`}
          
        >
          Projects
        </h2>

        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.ul
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-4 w-full"
            >
              {currentProjects.map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={`card-${card.title}-${id}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  onClick={() => setActive(card)}
                  className="p-4 flex flex-col md:flex-row justify-between items-center  hover:bg-gray-700 rounded-xl cursor-pointer card-hover"
                >
                  <div className="flex gap-4 flex-col md:flex-row">
                    <motion.div layoutId={`image-${card.title}-${id}`}>
                      <img
                       
                        src={card.src}
                        alt={card.title}
                        className="h-40 w-full md:h-14 md:w-14 rounded-lg object-cover object-top"
                      />
                    </motion.div>
                    <div>
                      <motion.h3
                        layoutId={`title-${card.title}-${id}`}
                        className="font-medium text-[#c4ff41] text-center md:text-left"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${id}`}
                        className="text-gray-400 text-center md:text-left"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.button
                    layoutId={`button-${card.title}-${id}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-600 text-white hover:bg-green-500 mt-4 md:mt-0 button-hover"
                  >
                    {card.ctaText}
                  </motion.button>
                </motion.div>
              ))}
            </motion.ul>
          </AnimatePresence>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full font-medium text-white ${
                currentPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-[#291c3a] button-hover"
              } ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.3s forwards" : "none" }}
            >
              Previous
            </button>
            <span
              className={`text-gray-200 font-medium ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.6s forwards" : "none" }}
            >
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full font-medium text-white ${
                currentPage === totalPages ? "bg-gray-600 cursor-not-allowed" : "bg-[#291c3a] button-hover"
              } ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animation: isVisible ? "fadeIn 0.7s ease-out 0.9s forwards" : "none" }}
            >
              Next
            </button>
          </div>
        </div>

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20  mt-10 w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 mt-14 md:mt-5 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-5 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  md:h-fit md:max-h-[90%] flex flex-col bg-gray-800 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                  
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>
                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-[#c4ff41]"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-gray-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white button-hover"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function" ? active.content() : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src:Calender,
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music style...
      </p>
    ),
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: Tic,
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: Shopvilla,
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Metallica, an iconic American heavy metal band, is renowned for their powerful sound and intense performances...
      </p>
    ),
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: Portal,
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Led Zeppelin, a legendary British rock band, is renowned for their innovative sound and profound impact...
      </p>
    ),
  },
  

];