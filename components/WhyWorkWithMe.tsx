"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap, Code2, Layers, Clock, HeartHandshake, TrendingUp,
  MessageSquare, Terminal, CheckCircle2, RefreshCw, LineChart
} from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  visual: React.ReactNode;
}

// ── Detailed Visual Panels ──────────────────────────────────────────

const VisualCommunication = () => (
  <div className="flex flex-col gap-3 w-full px-5 justify-center h-full">
    <div className="self-start max-w-[85%] bg-neutral-100/80 rounded-2xl rounded-tl-none p-3 text-[11px] text-neutral-800 border border-neutral-200/50 shadow-sm">
      <div className="font-semibold text-[8px] text-neutral-400 mb-1 tracking-wider uppercase">CLIENT</div>
      Hi Rupesh! Any updates on the milestone deployment?
    </div>
    <div className="self-end max-w-[85%] bg-brand-primary text-white rounded-2xl rounded-tr-none p-3 text-[11px] border border-brand-primary/20 shadow-md shadow-brand-primary/10">
      <div className="font-semibold text-[8px] text-white/70 mb-1 tracking-wider uppercase">ME</div>
      Yes! All code is clean, compiled, and deployed to staging. Sending link in 1 min.
    </div>
    <div className="flex justify-center items-center mt-2">
      <MessageSquare className="w-3.5 h-3.5 text-brand-primary animate-bounce" />
      <div className="flex gap-1 ml-2">
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
);

const VisualCode = () => (
  <div className="w-full h-full p-4 flex flex-col justify-center">
    <div className="w-full bg-[#1e1e2e] rounded-2xl overflow-hidden border border-neutral-800/80 shadow-lg flex-1 flex flex-col">
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#181825] border-b border-neutral-800/60 shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#f38ba8]" />
        <div className="w-2 h-2 rounded-full bg-[#f9e2af]" />
        <div className="w-2 h-2 rounded-full bg-[#a6e3a1]" />
        <span className="text-[8px] text-neutral-500 font-mono ml-2">metrics.ts</span>
      </div>
      <div className="p-3.5 font-mono text-[9px] sm:text-[10px] text-[#cdd6f4] leading-relaxed overflow-hidden flex-1 flex flex-col justify-center bg-[#1e1e2e]">
        <p className="text-[#a6e3a1]">{"// Type-safe optimization models"}</p>
        <p className="mt-1"><span className="text-[#cba6f7]">interface</span> <span className="text-[#f9e2af]">Props</span> {"{"}</p>
        <p className="pl-3"><span className="text-[#89b4fa]">performance</span>: <span className="text-[#f9e2af]">Metrics</span>;</p>
        <p className="pl-3"><span className="text-[#89b4fa]">onComplete</span>: () =&gt; <span className="text-[#cba6f7]">void</span>;</p>
        <p>{"}"}</p>
        <p className="mt-1.5"><span className="text-[#cba6f7]">export const</span> <span className="text-[#89b4fa]">RenderStats</span> = () =&gt; {"{"}</p>
        <p className="pl-3"><span className="text-[#cba6f7]">return</span> &lt;<span className="text-[#f9e2af]">MetricsDisplay</span> /&gt;;</p>
        <p>{"}"}</p>
        <div className="inline-flex items-center mt-2 text-brand-primary">
          <Terminal className="w-3 h-3 mr-1.5" />
          <span className="w-1.5 h-3 bg-brand-primary animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

const VisualArchitecture = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <div className="relative w-44 h-44 flex flex-col justify-between items-center py-2">
      <div className="w-32 bg-white rounded-xl p-2 border border-neutral-100 shadow-md text-center z-30">
        <span className="text-[7px] font-bold text-brand-primary uppercase tracking-wider">Edge CDN Layer</span>
        <div className="text-[10px] font-semibold text-black mt-0.5">Global Caching</div>
      </div>

      <div className="absolute inset-y-6 w-0.5 border-l-2 border-dashed border-brand-primary/20 left-1/2 -ml-0.5" />

      <motion.div
        animate={{ y: [8, 90, 8] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        className="absolute w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_6px_rgba(232,125,54,0.4)] left-1/2 -ml-1 z-20"
      />

      <div className="w-36 bg-white rounded-xl p-2 border border-neutral-100 shadow-md text-center z-30">
        <span className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider">Backend API</span>
        <div className="text-[10px] font-semibold text-black mt-0.5">Serverless Handler</div>
      </div>

      <div className="w-40 bg-white rounded-xl p-2 border border-neutral-100 shadow-md text-center z-30">
        <span className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider">Distributed DB</span>
        <div className="text-[10px] font-semibold text-black mt-0.5">Multi-Region Storage</div>
      </div>
    </div>
  </div>
);

const VisualDelivery = () => (
  <div className="flex flex-col items-center justify-center w-full h-full relative">
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="64" cy="64" r="50" className="stroke-neutral-100 fill-none" strokeWidth="5" />
        <motion.circle
          cx="64" cy="64" r="50"
          className="stroke-brand-primary fill-none"
          strokeWidth="5"
          strokeDasharray="314"
          initial={{ strokeDashoffset: 314 }}
          animate={{ strokeDashoffset: 314 * 0.15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <CheckCircle2 className="w-6 h-6 text-brand-primary mb-0.5 animate-bounce" />
        <span className="text-lg font-bold text-black font-mono">100%</span>
        <span className="text-[7px] font-bold text-neutral-400 uppercase tracking-wider">On-Time</span>
      </div>
    </div>
    <div className="flex gap-5 mt-3">
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
        <span className="text-[8px] font-semibold text-neutral-500">Milestones</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
        <span className="text-[8px] font-semibold text-neutral-500">Releases</span>
      </div>
    </div>
  </div>
);

const VisualSupport = () => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <div className="relative w-32 h-16 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 50">
        <path
          d="M 25,25 C 10,10 10,40 25,25 C 40,10 60,10 75,25 C 90,40 90,10 75,25 C 60,40 40,40 25,25"
          fill="none" className="stroke-neutral-100" strokeWidth="1.5"
        />
        <motion.path
          d="M 25,25 C 10,10 10,40 25,25 C 40,10 60,10 75,25 C 90,40 90,10 75,25 C 60,40 40,40 25,25"
          fill="none" className="stroke-brand-primary" strokeWidth="1.5"
          strokeDasharray="160"
          animate={{ strokeDashoffset: [-160, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col pt-2">
        <RefreshCw className="w-4 h-4 text-brand-primary animate-spin" style={{ animationDuration: '5s' }} />
        <span className="text-[8px] font-bold text-black uppercase tracking-wider mt-1">Lifecycle Support</span>
      </div>
    </div>
  </div>
);

const VisualBusiness = () => (
  <div className="flex flex-col items-center justify-center w-full h-full px-5">
    <div className="w-full h-28 bg-white border border-neutral-100 shadow-sm rounded-xl p-3 flex flex-col justify-between overflow-hidden relative">
      <div className="flex items-center justify-between shrink-0 mb-1.5">
        <div className="flex items-center gap-1.5">
          <LineChart className="w-3 h-3 text-brand-primary" />
          <span className="text-[9px] font-bold text-black">Business Conversion Rate</span>
        </div>
        <span className="text-[9px] font-bold text-[#a6e3a1] font-mono">+240% YoY</span>
      </div>
      <div className="flex-1 w-full flex items-end gap-2 relative">
        <motion.div
          initial={{ height: 0 }} animate={{ height: "40%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 bg-neutral-100 rounded-t-sm"
        />
        <motion.div
          initial={{ height: 0 }} animate={{ height: "65%" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex-1 bg-brand-primary/20 rounded-t-sm"
        />
        <motion.div
          initial={{ height: 0 }} animate={{ height: "95%" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex-1 bg-brand-primary rounded-t-sm relative shadow-[0_0_10px_rgba(232,125,54,0.1)]"
        />
      </div>
    </div>
  </div>
);

// ── Benefits List ───────────────────────────────────────────────────

const benefitsList: BenefitItem[] = [
  {
    title: "Fast Communication",
    description: "Always reachable. I maintain clear, transparent, and prompt updates throughout the project lifecycle.",
    visual: <VisualCommunication />,
  },
  {
    title: "Clean Code",
    description: "Writing readable, well-documented, and modular code that is easy to maintain, debug, and expand.",
    visual: <VisualCode />,
  },
  {
    title: "Scalable Architecture",
    description: "Designing systems prepared for growth, handling increased traffic and database scale effortlessly.",
    visual: <VisualArchitecture />,
  },
  {
    title: "On-Time Delivery",
    description: "Strict adherence to schedules and milestones, delivering high-quality results exactly when promised.",
    visual: <VisualDelivery />,
  },
  {
    title: "Long-Term Support",
    description: "Providing continued support, updates, and maintenance long after the initial launch is completed.",
    visual: <VisualSupport />,
  },
  {
    title: "Business-Oriented Solutions",
    description: "Designing features tailored to achieve business goals: maximizing conversions, speed, and revenue.",
    visual: <VisualBusiness />,
  },
];

// ── Benefit Card ────────────────────────────────────────────────────

const BenefitCard = ({ benefit }: { benefit: BenefitItem }) => {
  return (
    <div className="flex flex-col shrink-0 group">
      {/* Detailed Visual Graphic Card */}
      <div className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] aspect-[1.3/1] bg-white rounded-[24px] border border-neutral-100/60 flex items-center justify-center relative shadow-sm overflow-hidden cursor-pointer transition-all duration-300 hover:border-brand-primary/20 hover:shadow-md">
        {/* Soft Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-white" />
        <div className="absolute inset-0 bg-[#e87d36]/[0.01] group-hover:bg-[#e87d36]/[0.03] transition-colors duration-300" />

        {/* Detailed Visual Scene */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {benefit.visual}
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

// ── Main Section ────────────────────────────────────────────────────

export default function WhyWorkWithMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollHeight = benefitsList.length * 85;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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

        {/* Horizontal Scroll Track */}
        <div className="flex-1 flex items-center overflow-hidden w-full">
          <motion.div
            style={{ x }}
            className="flex gap-8 sm:gap-12 pl-6 md:pl-12 lg:pl-24 pr-[20vw]"
          >
            {benefitsList.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-6 md:h-12 shrink-0" />
      </div>
    </section>
  );
}
