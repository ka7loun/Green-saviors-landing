"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./header.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.5) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, 
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: config.molasses,
  });

  const scaleIn = useSpring({
    transform: isVisible ? "scale(1)" : "scale(0.8)",
    config: config.wobbly,
    delay: isVisible ? 500 : 0,
  });

  return (
    <header
      ref={headerRef}
      className="flex items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] xl:min-h-[700px] py-12 sm:py-16 md:py-20 pt-24 sm:pt-28 md:pt-32"
      id="home"
    >
      <div className={`${poppins.variable} w-full px-4 sm:px-6 md:px-8 lg:px-16 text-center`}>
      <animated.img
          style={fadeIn}
          src="/images/wholeLogo.png"
          alt="Agrivolt - Transforming Waste into Clean Energy"
          className="block mx-auto w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mb-6 sm:mb-8"
        />

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        <animated.h1
          style={fadeIn}
          className="text-center text-textlight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-2 sm:px-4"
        >
          Reduce waste. Generate power. Sustain the future.
        </animated.h1>
        <animated.p
          style={fadeIn}
          className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-textlight font-normal leading-relaxed px-2 sm:px-4 max-w-3xl mx-auto"
        >
          We take businesses' organic waste and transform it from an
          environmental risk into valuable fertilizers that enhance soil quality
          and biogas. With intelligent technology and automation, we're bringing
          a sustainable future in Tunisia closer every day.
        </animated.p>
        
        <animated.div style={scaleIn} className="pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover-lift text-sm sm:text-base"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white border-opacity-30 hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover-lift text-sm sm:text-base"
          >
            Learn More
          </a>
        </animated.div>
        </div>
     

      </div>
    </header>
  );
};

export default Header;
