"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./nnav.css";

const Nav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sideNavRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        setIsSideNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navAnimation = useSpring({
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? "translateY(0)" : "translateY(-50px)",
    config: config.gentle,
  });

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <div className="containernav">
      <animated.nav
        style={navAnimation}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-xl border-b border-green-200' 
            : 'bg-white/70 backdrop-blur-md'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center" aria-label="Go to home section">
                <img 
                  src="/images/wholeLogo.png" 
                  alt="Agrivolt Logo" 
                  className="h-10 w-auto sm:h-12 md:h-14" 
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-50"
                >
                  About
                </a>
                <a
                  href="#team"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-50"
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-50"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* CTA Button & Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61569630766278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-green-50"
                  aria-label="Facebook"
                >
                  <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/agri.vot/profilecard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-green-50"
                  aria-label="Instagram"
                >
                  <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-green-50"
                  aria-label="LinkedIn"
                >
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contact"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleSideNav}
                className="text-gray-700 hover:text-green-600 p-2 rounded-md transition-colors duration-300"
                aria-label="Open navigation menu"
                aria-expanded={isSideNavOpen}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </animated.nav>

      {/* Mobile Navigation Overlay */}
      {isSideNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleSideNav}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        ref={sideNavRef}
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSideNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 sm:p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <img src="/images/wholeLogo.png" alt="Agrivolt Logo" className="h-8 sm:h-10" />
            <button
              onClick={toggleSideNav}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={toggleSideNav}
                  className="block px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={toggleSideNav}
                  className="block px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={toggleSideNav}
                  className="block px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleSideNav}
                  className="block px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="mb-4 sm:mb-6">
            <a
              href="#contact"
              onClick={toggleSideNav}
              className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-center font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              Get Started
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-medium">Follow us</p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61569630766278"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-green-50"
                aria-label="Facebook"
              >
                <img src="/facebook.svg" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/agri.vot/profilecard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-green-50"
                aria-label="Instagram"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 p-2 rounded-full hover:bg-green-50"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
