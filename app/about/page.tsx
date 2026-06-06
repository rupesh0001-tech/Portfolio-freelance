"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, Smartphone, Palette, ShieldCheck, Cpu, Database, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const skills = [
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Bun", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "Git & GitHub", category: "Tool" },
    { name: "Figma", category: "Design" },
  ];

  const expertises = [
    {
      title: "Web & Software Engineering",
      description: "Building reactive, high-performance web applications using Modern React/Next.js frameworks and robust modular code structures.",
      icon: <Code2 className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "Scalable Architecture",
      description: "Designing efficient backend integrations, edge-cached content models, microservices, and database configurations prepared for scale.",
      icon: <Cpu className="w-6 h-6 text-brand-primary" />,
    },
    {
      title: "UI/UX Interface Design",
      description: "Crafting beautiful interfaces, seamless user flows, fluid micro-interactions, and visual design systems that build brand loyalty.",
      icon: <Palette className="w-6 h-6 text-brand-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-mint/60 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-28 md:pt-36">
        
        {/* Back to Home Link */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-4 -mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-brand-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Intro Hero Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Bio Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col space-y-6 text-left"
            >
              <motion.span 
                variants={itemVariants}
                className="text-sm font-bold tracking-wider text-brand-primary uppercase block"
              >
                About Me
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black tracking-tight leading-[1.15] max-w-2xl"
              >
                Building products with technical precision.
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              >
                Hi, I'm Rupesh Jagtap. I design and build high-performance web applications, responsive software systems, and memorable digital experiences. My mission is to bridge the gap between technical scalability and user-centric aesthetics.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
              >
                Based in Pune, India, I specialize in crafting clean code, creating highly custom interface animations, and designing fluid systems that solve real problems.
              </motion.p>

              {/* Quick Call to Action */}
              <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-4">
                <Button variant="primary" href="/#contact" className="inline-flex items-center gap-2">
                  <span>Work With Me</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" href="/#services">
                  Explore Services
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: Profile Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center w-full relative"
            >
              <div className="relative w-full max-w-[380px] aspect-square rounded-[32px] bg-white border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white" />
                <div className="absolute inset-0 bg-[#e87d36]/[0.01]" />
                
                {/* Visual Avatar */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src="/Rupesh (1) (1).png"
                    alt="Rupesh Jagtap Profile"
                    width={320}
                    height={320}
                    priority
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-white border-y border-neutral-100/50 py-10 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5+", label: "Years Experience" },
              { num: "100+", label: "Projects Completed" },
              { num: "100%", label: "On-Time Delivery" },
              { num: "99.9%", label: "Uptime Achieved" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <h3 className="text-3xl md:text-4xl font-bold text-brand-primary">{stat.num}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="text-left mb-12 md:mb-16 max-w-2xl">
            <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
              My Technical Focus & Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 border border-neutral-100/60 shadow-sm hover:shadow-lg hover:border-brand-primary/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="pb-20 md:pb-28 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="w-full bg-neutral-950 rounded-[32px] overflow-hidden border border-neutral-800/60 shadow-xl p-8 md:p-12 lg:p-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/40 via-transparent to-brand-primary/[0.02] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Skills Title */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                  Tech Stack
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
                  My Toolkit & Technologies
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base font-normal leading-relaxed">
                  I choose robust, contemporary toolings that guarantee application speed, maintainability, and safe scaling.
                </p>
              </div>

              {/* Skills List */}
              <div className="lg:col-span-8 flex flex-wrap gap-2.5 sm:gap-3.5 pt-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-semibold text-neutral-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
