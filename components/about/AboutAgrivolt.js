"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./aboutagri.css";

const AboutAgrivolt = () => {
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

  return (
    <animated.div ref={sectionRef} style={fadeIn} className="containercontent">
      <ProcessSection />
      <AISection />
    </animated.div>
  );
};

const ProcessSection = () => {
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

  const slideIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-50px)",
    config: config.gentle,
    delay: 300,
  });

  return (
    <animated.section ref={sectionRef} style={slideIn} id="about">
      <div className="lg:flex grid grid-cols-1 items-center mt-8 sm:mt-12 lg:mt-14 justify-between gap-6 sm:gap-8" >
        <div className="paragraph text-base sm:text-lg order-2 lg:order-1 w-full lg:w-1/2 space-y-3 sm:space-y-4">
          <p className="italic text-green-700 text-sm sm:text-base">
            Financial growth while thriving for international renewable goals.
          </p>
          <h2 className="text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            We prevent environmental degradation by transforming waste to value
          </h2>
          <p className="text text-gray-700 text-sm sm:text-base leading-relaxed">
            We take organic waste and transform it into biogas and soil quality
            enhancers. This collaboration offers multiple benefits:
          </p>
          <ul
            id="callab-benifits"
            className="list-disc ml-4 sm:ml-6 md:ml-8 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base"
          >
            <li className="leading-relaxed">
              <strong className="text-green-700">Turn Waste into Profit: </strong>
              Collaborators earn from their waste instead of paying for
              disposal.
            </li>
            <li className="leading-relaxed">
              <strong className="text-green-700">Boost Crop Yields: </strong>
              Our high quality organic fertilizers enhance soil health and
              productivity.
            </li>
            <li className="leading-relaxed">
              <strong className="text-green-700">Clean Energy, Lower Costs: </strong>
              Renewable energy reduces carbon footprint and energy expenses.
            </li>
            <li className="leading-relaxed">
              <strong className="text-green-700">Embrace Circular Economy: </strong>
              We minimize waste and maximize resource efficiency together.
            </li>
          </ul>
        </div>

        <animated.img
          style={slideIn}
          src="recycle.png"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl order-1 lg:order-2 mx-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl hover-lift animate-float"
          alt="Recycling and waste transformation process illustration"
        />
      </div>
    </animated.section>
  );
};

const AISection = () => {
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

  const slideIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(50px)",
    config: config.gentle,
    delay: 300,
  });

  return (
    <animated.section
      ref={sectionRef}
      style={slideIn}
      className="items-center text-sm sm:text-base md:text-lg"
    >
      <div className="lg:flex grid grid-cols-1 items-center mt-8 sm:mt-12 lg:mt-14 justify-between gap-6 sm:gap-8">
        <div className="imagerecycl order-1 lg:order-1">
          <animated.img
          style={slideIn}
          src="safety.jpeg"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-lg shadow-lg"
          alt="Safety and technology in waste processing facility"
        />
        </div>
        <div className="paragraph text-base sm:text-lg order-2 lg:order-2 w-full lg:w-1/2 space-y-3 sm:space-y-4">
          
          <p className="text italic text-green-700 text-sm sm:text-base">
            Operating in guaranteed security to meet regulatory standards
          </p>
          <h2 className="text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            We ensure safety and efficiency via advanced technology
          </h2>
          <p className="text text-gray-700 leading-relaxed text-sm sm:text-base">
            Agrivolt harnesses AI to ensure a safe and efficient process
            alongside IoT to gather the needed data for real-time monitoring and
            decision making. By investing in advanced data collection and
            processing, we're not just improving our operations - we're
            enhancing the credibility of our produce. Our clients can trust in
            the superior quality of our products and our unwavering commitment
            to environmental stewardship.
          </p>
          </div>
         
       
      </div>
    </animated.section>
  );
};

export default AboutAgrivolt;
