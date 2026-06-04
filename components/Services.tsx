"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Target, ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesList: ServiceItem[] = [
  {
    title: "Web Development",
    description: "We build fast, secure, and beautiful websites tailored to your business needs, using modern frameworks.",
    icon: <Code2 className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "Mobile Application",
    description: "High-performance native and cross-platform mobile apps designed for smooth user experience.",
    icon: <Smartphone className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "UI/UX Interface Design",
    description: "User-centric design solutions that make your product intuitive, accessible, and delightful.",
    icon: <Palette className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "Brand Identity",
    description: "Stand out from competitors with a memorable logo, consistent visual language, and brand strategy.",
    icon: <Target className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
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
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group bg-white rounded-2xl p-8 border border-neutral-100/50 shadow-sm hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary/5 group-hover:bg-brand-primary group-hover:rotate-6 flex items-center justify-center mb-6 transition-all duration-300">
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

            {/* Learn More Link */}
            <div className="mt-6 flex items-center text-sm font-semibold text-brand-primary">
              <span className="mr-1.5 group-hover:underline">Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
