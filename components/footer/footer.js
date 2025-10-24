"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src="/images/wholeLogo.png" alt="Agrivolt Logo" className="h-16 w-auto mb-4" />
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Transforming organic waste into clean energy and valuable fertilizers. 
                Building a sustainable future for Tunisia through innovative technology.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61569630766278" 
                aria-label="Facebook"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/agri.vot/profilecard/"
                aria-label="Instagram"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-white bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span className="text-gray-300">info@agrivolt.tn</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-300">Tunisia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Agrivolt. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
