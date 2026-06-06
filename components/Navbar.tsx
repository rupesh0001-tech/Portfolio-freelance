"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-mint/90 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo
        <Logo /> */}

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-neutral-800 font-medium text-base">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center space-x-1.5 hover:text-brand-primary transition-colors duration-200 py-2 cursor-pointer focus:outline-none"
            >
              <span>Services</span>
              <svg
                className={`w-4.5 h-4.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50 origin-top-left"
                >
                  <a
                    href="/#services"
                    className="block px-5 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-primary font-medium transition-colors"
                  >
                    Web Development
                  </a>
                  <a
                    href="/#services"
                    className="block px-5 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-primary font-medium transition-colors"
                  >
                    Mobile Application
                  </a>
                  <a
                    href="/#services"
                    className="block px-5 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-primary font-medium transition-colors"
                  >
                    UI/UX Interface Design
                  </a>
                  <a
                    href="/#services"
                    className="block px-5 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-brand-primary font-medium transition-colors"
                  >
                    Brand Identity & Strategy
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="/about"
            className="hover:text-brand-primary transition-colors duration-200 py-2"
          >
            About Us
          </a>
          <a
            href="/#contact"
            className="hover:text-brand-primary transition-colors duration-200 py-2"
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop Call to Actions */}
        <div className="hidden md:flex items-center space-x-4">

          <Button variant="primary" href="/#contact">
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-800 hover:text-brand-primary focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6.5 h-6.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6.5 h-6.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-neutral-100 px-6 py-6 absolute top-full left-0 right-0 shadow-lg space-y-4 flex flex-col z-40"
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between items-center text-neutral-800 font-semibold py-2 text-left"
            >
              <span>Services</span>
              <svg
                className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-2 border-l-2 border-neutral-100 py-1">
                <a href="/#services" className="block text-neutral-600 py-1.5 text-sm">
                  Web Development
                </a>
                <a href="/#services" className="block text-neutral-600 py-1.5 text-sm">
                  Mobile Application
                </a>
                <a href="/#services" className="block text-neutral-600 py-1.5 text-sm">
                  UI/UX Interface Design
                </a>
                <a href="/#services" className="block text-neutral-600 py-1.5 text-sm">
                  Brand Identity & Strategy
                </a>
              </div>
            )}

            <a href="/about" className="text-neutral-800 font-semibold py-2">
              About Us
            </a>
            <a href="/#contact" className="text-neutral-800 font-semibold py-2">
              Contact Us
            </a>

            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="primary" href="/#contact" className="py-3">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
