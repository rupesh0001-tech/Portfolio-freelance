"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Code2, Layers, Clock, HeartHandshake, TrendingUp } from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefitsList: BenefitItem[] = [
  {
    title: "Fast Communication",
    description: "Always reachable. I maintain clear, transparent, and prompt updates throughout the project lifecycle.",
    icon: <Zap className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "Clean Code",
    description: "Writing readable, well-documented, and modular code that is easy to maintain, debug, and expand.",
    icon: <Code2 className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "Scalable Architecture",
    description: "Designing systems prepared for growth, handling increased traffic and database scale effortlessly.",
    icon: <Layers className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "On-Time Delivery",
    description: "Strict adherence to schedules and milestones, delivering high-quality results exactly when promised.",
    icon: <Clock className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "Long-Term Support",
    description: "Providing continued support, updates, and maintenance long after the initial launch is completed.",
    icon: <HeartHandshake className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
  {
    title: "Business-Oriented Solutions",
    description: "Designing features tailored to achieve business goals: maximizing conversions, speed, and revenue.",
    icon: <TrendingUp className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function WhyWorkWithMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="why-me" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12">
      
      {/* Section Header */}
      <div className="text-left mb-12 md:mb-16 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3"
        >
          Benefits
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight"
        >
          Why Work With Me?
        </motion.h2>
      </div>

      {/* Benefits Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
      >
        {benefitsList.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            animate={{ 
              opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.45 : 1,
              borderColor: hoveredIndex === index ? "rgba(232,125,54,0.25)" : "rgba(229,229,229,0.5)"
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative bg-white/70 backdrop-blur-md rounded-2xl p-8 border shadow-sm flex flex-col justify-between cursor-pointer overflow-hidden transition-shadow"
          >
            {/* Sliding backdrop follower */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverBg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#e87d36]/[0.03] rounded-2xl -z-10 shadow-[0_8px_30px_rgba(232,125,54,0.03)]"
                  transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                />
              )}
            </AnimatePresence>

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary/5 group-hover:bg-brand-primary flex items-center justify-center mb-6 transition-all duration-500 ease-out group-hover:rotate-[12deg] group-hover:scale-110 shadow-sm group-hover:shadow-md group-hover:shadow-brand-primary/10">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-neutral-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
