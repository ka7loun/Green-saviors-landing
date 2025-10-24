"use client";
import "intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaMicrochip,
  FaCode,
  FaServer,
  FaBug,
  FaCloudUploadAlt,
  FaRedo,
  FaProjectDiagram,
} from "react-icons/fa";
import "../../app/globals.css";
import styles from "./style.module.css";

const Roadmap = () => {
  const roadmapRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    roadmapRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      if (roadmapRef.current) {
        roadmapRef.current.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const phases = [
    {
      title: "Project Initialization",
      description:
        "Establish project scope, goals, and technical requirements for anaerobic digestion and IoT integration.",
      duration: "August 2024",
      icon: <FaRocket />,
      status: "completed",
    },
    {
      title: "System Design & Architecture",
      description:
        "Design the system architecture, including anaerobic digestion components and IoT sensor integration.",
      duration: "September 2024",
      icon: <FaProjectDiagram />,
      status: "completed",
    },
    {
      title: "IoT Sensor Integration",
      description:
        "Set up and calibrate IoT sensors for monitoring temperature, pH, gas levels, and other parameters in the digestion process.",
      duration: "September - October 2024",
      icon: <FaMicrochip />,
      status: "completed",
    },
    {
      title: "Control System Development",
      description:
        "Develop the control system to manage anaerobic digestion based on IoT sensor data.",
      duration: "October 2024",
      icon: <FaCode />,
      status: "completed",
    },
    {
      title: "Frontend & Backend Development",
      description:
        "Build the user interface and backend for data visualization, control management, and alerts.",
      duration: "October - November 2024",
      icon: <FaServer />,
      status: "completed",
    },
    {
      title: "Testing & Calibration",
      description:
        "Test the system, including IoT sensors and control mechanisms, to ensure accuracy and reliability.",
      duration: "November 2024",
      icon: <FaBug />,
      status: "in-progress",
    },
    {
      title: "Deployment & Monitoring",
      description:
        "Deploy the system in a real-world environment, set up ongoing monitoring, and ensure functionality.",
      duration: "November 2024",
      icon: <FaCloudUploadAlt />,
      status: "upcoming",
    },
    {
      title: "Post-Deployment Analysis & Optimization",
      description:
        "Analyze system performance, gather user feedback, and make iterative improvements for optimization.",
      duration: "December 2024 +",
      icon: <FaRedo />,
      status: "upcoming",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return [
          "[#A9CBB7]",
          "bg-[#e7ffef]",
          "border-4 border-[#afffcc]",
          "text-[#142c12]",
        ];
      case "in-progress":
        return [
          "[#A9CBB7]",
          "bg-[#e7ffef]",
          "border-4 border-[#22c55e]",
          "text-[#142c12]",
        ];
      case "upcoming":
      default:
        return [
          "[#E3E2D3]",
          "bg-[#B7B19E]",
          "border-4 border-[#E3E2D3]",
          "text-[#142c12]",
        ];
    }
  };
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 770);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16" id="roadmap">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          Project Roadmap
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
          Follow our journey as we transform waste management in Tunisia
        </p>
      </div>
      <div className="relative">
        {/* Timeline line - hidden on very small screens */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              ref={(el) => (roadmapRef.current[index] = el)}
              className={`flex flex-col sm:flex-row items-center opacity-0 transform scale-95 transition-all duration-500 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } relative`}
            >
              {!isSmallScreen ? (
                <>
                  <div
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${
                      phase.status === 'completed' ? 'from-green-500 to-green-600' :
                      phase.status === 'in-progress' ? 'from-yellow-500 to-orange-500' :
                      'from-gray-400 to-gray-500'
                    } text-white text-lg sm:text-xl md:text-2xl shadow-lg hover-lift flex-shrink-0`}
                  >
                    {phase.icon}
                  </div>
                  <div
                    className={`flex-grow mt-4 sm:mt-0 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl ${
                      getStatusClass(phase.status)[1]
                    } ${
                      getStatusClass(phase.status)[2]
                    } transition-all duration-500 ease-in-out hover-lift ${
                      index % 2 === 0 ? "sm:mr-4 md:mr-8" : "sm:ml-4 md:ml-8"
                    }`}
                  >
                    <h2
                      className={`text-lg sm:text-xl md:text-2xl font-semibold ${
                        getStatusClass(phase.status)[3]
                      }`}
                    >
                      {phase.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">{phase.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 italic">
                      {phase.duration}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`flex-grow mt-4 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl ${
                      getStatusClass(phase.status)[1]
                    } ${
                      getStatusClass(phase.status)[2]
                    } transition-all duration-500 ease-in-out hover-lift w-full`}
                  >
                    <div className={`flex items-center gap-3 sm:gap-4 mb-3`}>
                      <div
                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${
                          phase.status === 'completed' ? 'from-green-500 to-green-600' :
                          phase.status === 'in-progress' ? 'from-yellow-500 to-orange-500' :
                          'from-gray-400 to-gray-500'
                        } text-white text-lg sm:text-xl shadow-lg hover-lift flex-shrink-0`}
                      >
                        {phase.icon}
                      </div>
                      <h2
                        className={`text-lg sm:text-xl font-semibold ${
                          getStatusClass(phase.status)[3]
                        } leading-tight`}
                      >
                        {phase.title}
                      </h2>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{phase.description}</p>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      {phase.duration}
                    </p>
                  </div>
                </>
              )}
              {index !== 0 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full z-10 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
