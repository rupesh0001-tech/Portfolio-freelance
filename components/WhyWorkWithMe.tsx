"use client";

import React from "react";
import { motion } from "framer-motion";
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {benefitsList.map((benefit, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            className="group bg-white rounded-2xl p-8 border border-neutral-100/50 shadow-sm hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary/5 group-hover:bg-brand-primary group-hover:rotate-6 flex items-center justify-center mb-6 transition-all duration-300">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
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
