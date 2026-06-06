"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full bg-neutral-950 rounded-[32px] overflow-hidden border border-neutral-800/60 shadow-2xl p-10 md:p-16 lg:p-20 text-center"
      >
        {/* Animated Background Glowing Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 40, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-brand-primary/20 blur-[80px]"
          />
          <motion.div
            animate={{
              x: [0, -90, 60, 0],
              y: [0, 80, -50, 0],
              scale: [1, 0.85, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-brand-orange/20 blur-[100px]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6 md:space-y-8">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-brand-orange uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            Ready to bring your ideas to life?
          </h2>

          {/* Subheading */}
          <p className="text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-2xl">
            Let's work together to create high-performance web applications and design custom, modern visual identities that stand out.
          </p>

          {/* Call to Action Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="pt-4  cursor-pointer"
          >
            <Button
              variant="cta"
              href="#contact"
              className="flex items-center gap-2 group shadow-[0_10px_30px_rgba(232,125,54,0.25)]"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
