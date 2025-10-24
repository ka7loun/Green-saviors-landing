"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./team.css";

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  const teamMembers = [
    {
      name: "Ahmed Kahloun",
      image: "/images/team/Ahmed Kahloun.jpeg"
    },
    {
      name: "Bedie Dhaouadi",
      image: "/images/team/Bedie Dhaouadi.png"
    },
    {
      name: "Mohamed Khabecha",
      image: "/images/team/Mohamed Khabecha.jpeg"
    }
  ];

  return (
    <animated.section
      ref={sectionRef}
      style={fadeIn}
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-green-50"
      id="team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Passionate professionals dedicated to transforming waste management and building a sustainable future for Tunisia
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Want to Join Our Mission?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference in sustainable waste management and clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@agrivolt.tn"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.section>
  );
};

const TeamMemberCard = ({ member, index, isVisible }) => {
  const cardAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: config.gentle,
    delay: index * 200,
  });

  return (
    <animated.div
      style={cardAnimation}
      className="team-card bg-white rounded-xl sm:rounded-2xl shadow-lg group overflow-hidden"
    >
      {/* Profile Image */}
      <div className="relative h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="p-4 sm:p-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
          {member.name}
        </h3>
      </div>
    </animated.div>
  );
};

export default TeamSection;
