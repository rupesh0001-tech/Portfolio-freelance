"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const words = ["Website", "Software", "Web software", "Application"];

export default function Hero({
  subheading = "We help businesses like yours earn more customers, standout from competitors, make more money",
  ctaText = "Get Started",
  ctaHref = "#",
  imageSrc = "/hero-image.png",
  imageAlt = "DesignAGENCY Success Story",
}: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-left z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black leading-[1.15] tracking-tight max-w-xl"
          >
            Turn your idea into a successful{" "}
            <motion.span 
              layout 
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="inline-block relative text-brand-primary overflow-visible"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, scale: 0.9, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -4 }}
                  transition={{ 
                    scale: { type: "spring", stiffness: 300, damping: 25 },
                    y: { type: "spring", stiffness: 300, damping: 25 },
                    opacity: { duration: 0.2 }
                  }}
                  className="inline-block whitespace-nowrap"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </motion.span>{" "}
            today
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-neutral-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl"
          >
            {subheading}
          </motion.p>

          {/* <div className="pt-2 mb-4">
            <Button variant="cta" href={ctaHref}>
              {ctaText}
            </Button>
          </div> */}
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative z-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[580px] lg:max-w-none transition-transform duration-500 hover:scale-[1.02] relative"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={680}
              height={540}
              priority
              className="w-full h-auto object-contain"
            />
            {/* Rupesh Arrow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 15, delay: 0.75 }}
              className="absolute -top-12 right-[80px] md:-top-[30px] md:-right-[45px] w-32 sm:w-[400px] md:w-[600px] z-10 pointer-events-none select-none"
            >
              <Image
                src="/Rupesh (1) (1).png"
                alt="Rupesh (Me)"
                width={400}
                height={400}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
