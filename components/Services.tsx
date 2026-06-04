"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesList: ServiceItem[] = [
  {
    title: "Web Development",
    description: "We build fast, secure, and beautiful websites tailored to your business needs, using modern frameworks.",
    icon: (
      <svg
        className="w-8 h-8 text-brand-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Mobile Application",
    description: "High-performance native and cross-platform mobile apps designed for smooth user experience.",
    icon: (
      <svg
        className="w-8 h-8 text-brand-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Interface Design",
    description: "User-centric design solutions that make your product intuitive, accessible, and delightful.",
    icon: (
      <svg
        className="w-8 h-8 text-brand-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122A3 3 0 0010.5 21.5h3a3 3 0 00.97-5.378m-4.44-11.244a3 3 0 00-4.44 11.244M13.5 3.75a3 3 0 004.44 11.244M1.5 12h21"
        />
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    description: "Stand out from competitors with a memorable logo, consistent visual language, and brand strategy.",
    icon: (
      <svg
        className="w-8 h-8 text-brand-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.343 7.243A8 8 0 114.657 17.93m10.686-10.686A8 8 0 0117.93 17.93m-10.686 0L10.5 15.5m7.43 2.43L15.5 15.5M10.5 15.5A3 3 0 1113.5 12.5"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Section Header */}
      <div className="text-left mb-12 md:mb-16 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight"
        >
          We Provide Best Web & Software Services
        </motion.h2>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-2xl p-8 border border-neutral-100/50 shadow-sm hover:shadow-md hover:border-brand-primary/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
