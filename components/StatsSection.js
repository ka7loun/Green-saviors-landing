"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

const StatsSection = () => {
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
      { threshold: 0.3 }
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

  const stats = [
    {
      number: "100%",
      label: "Organic Waste Processed",
      description: "All waste is transformed into valuable resources"
    },
    {
      number: "50+",
      label: "Tons Processed Daily",
      description: "Large-scale waste management capacity"
    },
    {
      number: "24/7",
      label: "AI Monitoring",
      description: "Continuous optimization and safety"
    },
    {
      number: "0",
      label: "Waste to Landfill",
      description: "Complete circular economy approach"
    }
  ];

  return (
    <animated.section
      ref={sectionRef}
      style={fadeIn}
      className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Transforming waste management through innovative technology and sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <animated.div
              key={index}
              style={{
                ...fadeIn,
                delay: index * 100,
              }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift group"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.section>
  );
};

export default StatsSection;
