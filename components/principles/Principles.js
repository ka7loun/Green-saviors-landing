"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./principles.css";

const Principles = () => {
  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    principles: false,
  });
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const principlesRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3, // Trigger when 30% of the target is visible
    });

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (principlesRef.current) observer.observe(principlesRef.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (principlesRef.current) observer.unobserve(principlesRef.current);
    };
  }, []);

  const fadeIn = (visible) =>
    useSpring({
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(50px)",
      config: config.molasses,
    });

  return (
    <div className="containercontent py-12 md:py-16 lg:py-20 items-center flex flex-col justify-around mt-6 px-4">
      <animated.section
        id="section1"
        ref={section1Ref}
        style={fadeIn(isVisible.section1)}
        className="lg:flex lg:flex-row items-center grid grid-cols-1 gap-8 max-w-6xl mx-auto mb-16"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
 
        <img
          src="/images/squareAgrivolt.png"
          className="block mx-auto max-w-[250px] md:max-w-[300px] lg:max-w-[350px] rounded-lg shadow-lg"
          alt="Agrivolt sustainable energy project logo"
        />
               <div className="flex flex-col space-y-4 flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            About our project
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Agrivolt is an innovative initiative aimed at transforming
            agricultural waste into biogas through anaerobic digestion. This
            project is part of a sustainable approach and aims to significantly
            contribute to organic waste management in Tunisia while providing
            clean and accessible energy solutions.
          </p>
        </div>
</div>
      </animated.section>

      <animated.section
        id="section2"
        ref={section2Ref}
        style={fadeIn(isVisible.section2)}
        className="text-base md:text-lg max-w-6xl mx-auto w-full"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Agrivolt aims for a better Tunisia
        </h2>

        <animated.div
          id="principles"
          ref={principlesRef}
          style={fadeIn(isVisible.principles)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          <PrincipleCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#228B22"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-recycle mx-auto"
              >
                <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                <path d="m14 16-3 3 3 3" />
                <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
                <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
                <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
              </svg>
            }
            title="Sustainable"
            description="Transforming waste into valuable resources, promoting a circular Tunisian economy."
          />
          <PrincipleCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#228B22"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lightbulb mx-auto"
              >
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            }
            title="Smart"
            description="Optimizing processes with AI and IoT for efficient anaerobic digestion."
          />
          <PrincipleCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#228B22"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-leaf mx-auto"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            }
            title="Green"
            description="Producing clean biogas and fertilizers for a more sustainable Tunisia."
          />
        </animated.div>
      </animated.section>
    </div>
  );
};

const PrincipleCard = ({ icon, title, description }) => (
  <div className="text-center flex flex-col gap-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover-lift group">
    <div className="mx-auto p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">{title}</h3>
    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{description}</p>
  </div>
);

export default Principles;
