"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface BenefitItem {
  title: string;
  description: React.ReactNode;
  visual: React.ReactNode;
}

// ── Detailed Visual Panels ──────────────────────────────────────────

const VisualCommunication = () => (
  <div className="w-full h-full relative">
    <Image src="/why_me_communication.png" alt="Fast Communication" fill className="object-cover" />
  </div>
);

const VisualCode = () => (
  <div className="w-full h-full relative">
    <Image src="/why_me_code.png" alt="Clean Code" fill className="object-cover" />
  </div>
);

const VisualArchitecture = () => (
  <div className="w-full h-full relative">
    <Image src="/why_me_architecture.png" alt="Scalable Architecture" fill className="object-cover" />
  </div>
);

const VisualDelivery = () => (
  <div className="w-full h-full relative">
    <Image src="/why_me_delivery.png" alt="On-Time Delivery" fill className="object-cover" />
  </div>
);

// ── Benefits List ───────────────────────────────────────────────────

const benefitsList: BenefitItem[] = [
  {
    title: "Fast Communication",
    description: (
      <>
        Always reachable. I maintain clear, transparent<br />
        and prompt updates throughout the project lifecycle.
      </>
    ),
    visual: <VisualCommunication />,
  },
  {
    title: "Clean Code",
    description: (
      <>
        Writing readable, well-documented, and modular code<br />
        that is easy to maintain, debug, and expand.
      </>
    ),
    visual: <VisualCode />,
  },
  {
    title: "Scalable Architecture",
    description: (
      <>
        Designing systems prepared for growth, handling<br />
        increased traffic and database scale effortlessly.
      </>
    ),
    visual: <VisualArchitecture />,
  },
  {
    title: "On-Time Delivery",
    description: (
      <>
        Strict adherence to schedules and milestones,<br />
        delivering high-quality results exactly when promised.
      </>
    ),
    visual: <VisualDelivery />,
  },
];

// ── Benefit Card ────────────────────────────────────────────────────

const BenefitCard = ({ benefit }: { benefit: BenefitItem }) => {
  return (
    <div className="flex flex-col shrink-0 w-full lg:w-auto group">
      {/* Detailed Visual Graphic Card */}
      <div className="w-full lg:w-[400px] xl:w-[460px] h-[300px] sm:h-[360px] lg:h-[50vh] lg:max-h-[360px] bg-white rounded-[24px] border border-neutral-100/60 flex items-center justify-center relative shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:border-brand-primary/20 hover:shadow-md">
        {/* Soft Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white" />
        <div className="absolute inset-0 bg-[#e87d36]/[0.01] group-hover:bg-[#e87d36]/[0.03] transition-colors duration-300" />

        {/* Detailed Visual Scene */}
        <div className="relative z-10 w-full h-full p-2 lg:p-4">
          <div className="w-full h-full relative rounded-xl overflow-hidden shadow-sm">
            {benefit.visual}
          </div>
        </div>
      </div>

      {/* Benefit Info Below */}
      <div className="mt-5 px-2">
        <h3 className="text-xl md:text-2xl font-semibold text-black tracking-tight group-hover:text-brand-primary transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-neutral-500 text-sm mt-1.5 leading-relaxed font-normal">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

// ── Main Section ────────────────────────────────────────────────────

export default function WhyWorkWithMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section
      ref={containerRef}
      id="why-me"
      className="relative h-auto lg:h-[340vh]"
    >
      <div className="w-full bg-background flex flex-col py-12 md:py-16 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        
        {/* Fixed Header */}
        <div className="max-w-7xl mb-8 lg:mb-10 mx-auto px-6 md:px-12 text-left w-full shrink-0">
          <span className="text-sm font-bold tracking-wider text-brand-primary uppercase block mb-3">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight max-w-2xl">
            Why Work With Me?
          </h2>
        </div>

        {/* Horizontal Scroll Track / Vertical List */}
        <div className="flex-1 w-full min-h-0 relative">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center overflow-hidden h-full">
            <motion.div
              style={{ x }}
              className="flex gap-12 pl-12 lg:pl-24 pr-[20vw]"
            >
              {benefitsList.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </motion.div>
          </div>

          {/* Mobile View */}
          <div className="flex lg:hidden flex-col gap-10 px-6 md:px-12 max-w-7xl mx-auto">
            {benefitsList.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
