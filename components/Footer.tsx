"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/#contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Application", href: "#" },
    { name: "UI/UX Interface Design", href: "#" },
    { name: "Brand Identity & Strategy", href: "#" },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-20 pb-8 border-t border-neutral-900 w-full mt-auto relative z-10 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-900">

          {/* Brand Info Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center">
              <Logo className="text-white hover:text-brand-orange transition-colors duration-300" />
            </div>
            <p className="text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
              Rupesh Jagtap – A passionate software engineer and designer crafting bespoke web applications and high-performance digital experiences tailored to your needs.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-primary transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2.5 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-primary transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-2.5 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Office Details
            </h4>
            <ul className="space-y-4 text-sm font-normal leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Pune, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a
                  href="mailto:rupeshjagtap157@gmail.com"
                  className="hover:text-brand-primary transition-colors"
                >
                  rupeshjagtap157@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright and links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs font-normal">
          <p className="text-neutral-500">
            &copy; {currentYear} Rupesh Jagtap. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
            <a
              href="#"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1 text-brand-primary hover:text-[#cf6721] font-semibold transition-colors"
            >
              <span>Back to top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
