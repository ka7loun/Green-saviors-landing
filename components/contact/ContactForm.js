"use client";

import { useRef, useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import "./contact.css";
import emailjs from "@emailjs/browser";

export function ContactForm({ title = "Contact us" }) {
  const form = useRef();
  const sectionRef = useRef(null);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    setIsSuccess(false);
    setIsError(false);
    setIsSending(true);
    emailjs
      .sendForm(
        "service_b3257wh",
        "template_hu0drwk",
        form.current,
        "gdNseXvFX-5R4yWTP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsError(true);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <animated.section
      style={fadeIn}
      className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-green-900"
      id="contact"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white px-2">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Let us know what you need and we will get back to you in no time.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-xl sm:rounded-2xl bg-white shadow-2xl border border-gray-200">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-4 sm:p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  First name *
                </label>
                <input
                  required
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="John"
                  className="block w-full rounded-lg border-2 border-gray-300 p-3 text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  defaultValue=""
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Last name *
                </label>
                <input
                  required
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Doe"
                  className="block w-full rounded-lg border-2 border-gray-300 p-3 text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email address *
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@company.com"
                className="block w-full rounded-lg border-2 border-gray-300 p-3 text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                defaultValue=""
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Subject *
              </label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                className="block w-full rounded-lg border-2 border-gray-300 p-3 text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                placeholder="How can we help you?"
                defaultValue=""
              />
            </div>
            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message *
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={5}
                className="block w-full rounded-lg border-2 border-gray-300 p-3 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none resize-none"
                placeholder="Tell us more about your needs..."
                defaultValue={""}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center sm:justify-between mt-6 sm:mt-8">
              <button
                className={`w-full sm:w-auto rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 sm:px-8 py-3 sm:py-4 text-center text-sm sm:text-base font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover-lift flex items-center justify-center gap-2 ${
                  isSending ? "opacity-75 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </div>
            
            {isSuccess && (
              <div
                className="mt-6 rounded-lg bg-green-100 border-2 border-green-500 p-4 text-sm text-green-800 animate-fadeIn"
                role="alert"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Message sent successfully!</span>
                </div>
                <p className="mt-1">Thank you for reaching out. We'll get back to you shortly.</p>
              </div>
            )}
            
            {isError && (
              <div
                className="mt-6 rounded-lg bg-red-100 border-2 border-red-500 p-4 text-sm text-red-800 animate-fadeIn"
                role="alert"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold">Failed to send message.</span>
                </div>
                <p className="mt-1">Please try again or contact us directly via email.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </animated.section>
  );
}
