import { useState, useEffect } from "react";
import { IconBriefcase, IconCalendar, IconDownload, IconUmbrella } from "@tabler/icons-react";
import biogaseng from "../assets/company/Biogaseng.png"
import Oneshield from "../assets/company/Oneshield.png"
const Exp = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [animatedIds, setAnimatedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const experiences = [
    {
      id: 1,
      company: "Oneshield",
      title: "Associate Software Engineer",
      period: "08/2023 – 08/2024",
      location: "Gurugram, India",
      logo: biogaseng,
      description: [
        "Designed and implemented intuitive user interfaces using OneShield Designer, improving overall usability and user engagement by 15% across 3 major insurance products serving 50,000+ end users.",
        "Collaborated with cross-functional development teams to optimize 25+ UI components, resulting in a 20% improvement in platform performance across mobile and desktop devices.",
        "Expanded automated test suite coverage from 20% to 95% using Selenium and Java for a live project at Utica First Insurance, reducing production defects by 42%.",
        "Led agile practices including sprint planning and daily stand-ups for a team of 7, delivering 20+ features on schedule, reducing bug reports by 30%."
      ],
      technologies: ["OneShield Designer", "Java", "Selenium", "Agile"]
    },
    {
      id: 2,
      company: "Tech Innovators",
      title: "Software Development Intern",
      period: "05/2023 – 07/2023",
      location: "Remote",
      logo: Oneshield,
      description: [
        "Developed responsive web components using React.js that improved page load times by 25%.",
        "Collaborated with senior developers to refactor legacy code, resulting in 30% better maintainability score.",
        "Created comprehensive documentation for new features, reducing onboarding time for new team members by 40%."
      ],
      technologies: ["React.js", "JavaScript", "CSS", "Git"]
    }
  ];

  // Animation on mount with cleanup
  useEffect(() => {
    const timers = experiences.map((exp, index) =>
      setTimeout(() => {
        setAnimatedIds(prev => [...prev, exp.id]);
      }, index * 300)
    );

    // Cleanup timers on unmount
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="py-12 font-['Zen_Kaku_Gothic_New',sans-serif]">
      <style>
        {`
          @keyframes slideInFromLeft {
            0% {
              transform: translateX(-100px);
              -webkit-transform: translateX(-100px);
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
              transform: translateY(10px);
              -webkit-transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              -webkit-transform: translateY(0);
            }
          }
          
          .company-logo {
            transition: transform 0.3s ease;
            -webkit-transition: transform 0.3s ease;
          }
          
          .company-logo:hover {
            transform: scale(1.05);
            -webkit-transform: scale(1.05);
          }

          .slide-in {
            animation: slideInFromLeft 0.7s ease-out forwards;
          }
          
          .fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }

          .expandable-content {
            transition: max-height 0.5s ease, opacity 0.5s ease;
            -webkit-transition: max-height 0.5s ease, opacity 0.5s ease;
          }
        `}
      </style>
      
      <div className="max-w-4xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12 font-['Shojumaru',cursive] relative">
          <span className="relative inline-block">
            EXPERIENCE
            <span className="absolute h-1 w-full bg-[#66d1f3] bottom-[-8px] left-0 transform scale-x-100 origin-left transition-transform duration-500"></span>
          </span>
        </h2>
        
        <div className="flex flex-col gap-8">
          {experiences.map((exp, expIndex) => (
            <div 
              key={exp.id} 
              className={`rounded-lg p-6 shadow-md ${animatedIds.includes(exp.id) ? "slide-in" : ""}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4 items-start">
                  <div className="company-logo w-[100px] h-[100px] rounded-full overflow-hidden flex-shrink-0   p-1">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <IconBriefcase size={14} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center mt-1 text-gray-600">
                      <IconCalendar size={20} className="mr-2" />
                      <span>{exp.period} | {exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => toggleExpand(exp.id)}
                  className="border border-gray-200 rounded-full p-1.5 bg-transparent hover:bg-gray-100 transition-transform duration-300 cursor-pointer"
                  aria-label={expandedId === exp.id ? "Collapse details" : "Expand details"}
                >
                  {expandedId === exp.id ? <IconDownload size={16} /> : <IconUmbrella size={16} />}
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 ml-[76px]">
                {exp.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className={`bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded border border-blue-100 ${animatedIds.includes(exp.id) ? "fade-in" : ""}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div 
                className="expandable-content mt-4 md:ml-[76px] overflow-hidden"
                style={{
                  maxHeight: expandedId === exp.id ? "500px" : "0",
                  opacity: expandedId === exp.id ? 1 : 0
                }}
              >
                <ul className="md:pl-5 list-disc">
                  {exp.description.map((item, index) => (
                    <li 
                      key={index} 
                      className={`mb-2 ${expandedId === exp.id ? "fade-in" : ""}`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export  {Exp};