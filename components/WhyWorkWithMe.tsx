"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Code2, Layers, Clock, HeartHandshake, TrendingUp } from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const benefitsList: BenefitItem[] = [
  {
    title: "Fast Communication",
    description: "Always reachable. I maintain clear, transparent, and prompt updates throughout the project lifecycle.",
    icon: Zap,
  },
  {
    title: "Clean Code",
    description: "Writing readable, well-documented, and modular code that is easy to maintain, debug, and expand.",
    icon: Code2,
  },
  {
    title: "Scalable Architecture",
    description: "Designing systems prepared for growth, handling increased traffic and database scale effortlessly.",
    icon: Layers,
  },
  {
    title: "On-Time Delivery",
    description: "Strict adherence to schedules and milestones, delivering high-quality results exactly when promised.",
    icon: Clock,
  },
  {
    title: "Long-Term Support",
    description: "Providing continued support, updates, and maintenance long after the initial launch is completed.",
    icon: HeartHandshake,
  },
  {
    title: "Business-Oriented Solutions",
    description: "Designing features tailored to achieve business goals: maximizing conversions, speed, and revenue.",
    icon: TrendingUp,
  },
];

const BenefitCard = ({ benefit }: { benefit: BenefitItem }) => {
  const Icon = benefit.icon;
  
  return (
    <div className="flex flex-col shrink-0 group">
      {/* Icon Card Graphic */}
      <div className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] aspect-[1.3/1] bg-white rounded-[24px] border border-neutral-100/60 flex items-center justify-center relative shadow-sm overflow-hidden group cursor-pointer transition-colors duration-300 hover:border-brand-primary/20">
        {/* Soft Background Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white -z-10" />
        <div className="absolute inset-0 bg-[#e87d36]/[0.01] group-hover:bg-[#e87d36]/[0.03] transition-colors duration-300" />
        
        {/* Glowing aura on hover */}
        <div className="absolute w-32 h-32 bg-brand-primary/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating icon */}
        <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 group-hover:bg-brand-primary flex items-center justify-center transition-all duration-500 ease-out group-hover:rotate-[12deg] group-hover:scale-110 shadow-sm group-hover:shadow-md group-hover:shadow-brand-primary/10 relative z-10">
          <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      
      {/* Benefit Info Below */}
      <div className="mt-5 px-2">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black tracking-tight group-hover:text-brand-primary transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-neutral-500 text-xs sm:text-sm mt-1.5 max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[440px] leading-relaxed font-normal">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default function WhyWorkWithMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollHeight = benefitsList.length * 85; // Smooth scroll height

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Translate horizontal track leftwards based on vertical scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section 
      ref={containerRef}
      id="why-me" 
      className="relative"
      style={{ height: `${scrollHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col justify-between py-12 md:py-16">
        
        {/* Fixed Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left w-full shrink-0">
          <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight max-w-2xl">
            Why Work With Me?
          </h2>
        </div>

        {/* Horizontal Scroll Track Wrapper */}
        <div className="flex-1 flex items-center overflow-hidden w-full">
          <motion.div
            style={{ x }}
            className="flex gap-8 sm:gap-12 pl-6 md:pl-12 lg:pl-24 pr-[20vw]"
          >
            {benefitsList.map((benefit, index) => (
              <BenefitCard
                key={index}
                benefit={benefit}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Spacer to balance vertical alignment */}
        <div className="h-6 md:h-12 shrink-0" />
      </div>
    </section>
  );
}
