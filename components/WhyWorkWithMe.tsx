"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, Code2, Layers, Clock, HeartHandshake, TrendingUp,
  MessageSquare, Terminal, Server, CheckCircle2, RefreshCw, LineChart,
  Workflow
} from "lucide-react";

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

// Interactive Visual Scenes for Left Panel
const VisualDefault = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center justify-center h-full w-full relative"
  >
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-56 h-56 bg-brand-primary/5 rounded-full filter blur-2xl animate-pulse" />
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-16 h-16 rounded-2xl bg-white border border-neutral-100 shadow-[0_8px_24px_rgba(0,0,0,0.03)] flex items-center justify-center mb-5">
        <Workflow className="w-8 h-8 text-brand-primary animate-spin" style={{ animationDuration: '10s' }} />
      </div>
      <h4 className="text-base font-semibold text-black mb-1">Interactive Core</h4>
      <p className="text-neutral-500 text-[11px] text-center max-w-[200px] leading-relaxed">
        Hover over any benefit on the right to preview my workflow
      </p>
    </div>
    {/* Orbiting Ring */}
    <div className="absolute w-44 h-44 border border-dashed border-neutral-200 rounded-full animate-spin" style={{ animationDuration: '24s' }}>
      <div className="absolute -top-1.5 left-1/2 -ml-1.5 w-3 h-3 bg-brand-primary rounded-full shadow-sm" />
      <div className="absolute -bottom-1.5 left-1/2 -ml-1.5 w-2 h-2 bg-brand-primary/40 rounded-full" />
    </div>
  </motion.div>
);

const VisualCommunication = () => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col gap-3.5 w-full px-6 justify-center h-full"
  >
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="self-start max-w-[85%] bg-neutral-100/80 rounded-2xl rounded-tl-none p-3.5 text-xs text-neutral-800 border border-neutral-200/50 shadow-sm"
    >
      <div className="font-semibold text-[9px] text-neutral-400 mb-1 tracking-wider uppercase">CLIENT</div>
      Hi Rupesh! Any updates on the milestone deployment?
    </motion.div>
    <motion.div 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="self-end max-w-[85%] bg-brand-primary text-white rounded-2xl rounded-tr-none p-3.5 text-xs border border-brand-primary/20 shadow-md shadow-brand-primary/10"
    >
      <div className="font-semibold text-[9px] text-white/70 mb-1 tracking-wider uppercase">ME</div>
      Yes! All code is clean, compiled, and deployed to staging. Sending link in 1 min.
    </motion.div>
    <div className="flex justify-center items-center mt-3">
      <MessageSquare className="w-4 h-4 text-brand-primary animate-bounce" />
      <div className="flex gap-1 ml-2">
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </motion.div>
);

const VisualCode = () => (
  <motion.div 
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full p-4 flex flex-col justify-center"
  >
    <div className="w-full bg-[#1e1e2e] rounded-2xl overflow-hidden border border-neutral-800/80 shadow-lg flex-1 flex flex-col">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#181825] border-b border-neutral-800/60 shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#f38ba8]" />
        <div className="w-2 h-2 rounded-full bg-[#f9e2af]" />
        <div className="w-2 h-2 rounded-full bg-[#a6e3a1]" />
        <span className="text-[9px] text-neutral-500 font-mono ml-2">metrics.ts</span>
      </div>
      <div className="p-4 font-mono text-[10px] sm:text-xs text-[#cdd6f4] leading-relaxed overflow-hidden flex-1 flex flex-col justify-center bg-[#1e1e2e]">
        <p className="text-[#a6e3a1]">// Type-safe optimization models</p>
        <p className="mt-1"><span className="text-[#cba6f7]">interface</span> <span className="text-[#f9e2af]">Props</span> &#123;</p>
        <p className="pl-4"><span className="text-[#89b4fa]">performance</span>: <span className="text-[#f9e2af]">Metrics</span>;</p>
        <p className="pl-4"><span className="text-[#89b4fa]">onComplete</span>: () =&gt; <span className="text-[#cba6f7]">void</span>;</p>
        <p>&#125;</p>
        <p className="mt-1.5"><span className="text-[#cba6f7]">export const</span> <span className="text-[#89b4fa]">RenderStats</span> = (&#123; <span className="text-[#89b4fa]">performance</span> &#125;: <span className="text-[#f9e2af]">Props</span>) =&gt; &#123;</p>
        <p className="pl-4"><span className="text-[#cba6f7]">const</span> &#123; <span className="text-[#89b4fa]">speed</span>, <span className="text-[#89b4fa]">efficiency</span> &#125; = <span className="text-[#89b4fa]">performance</span>;</p>
        <p className="pl-4"><span className="text-[#cba6f7]">return</span> &lt;<span className="text-[#f9e2af]">MetricsDisplay</span> <span className="text-[#89b4fa]">score</span>=&#123;<span className="text-[#89b4fa]">speed</span> * <span className="text-[#89b4fa]">efficiency</span>&#125; /&gt;;</p>
        <p>&#125;;</p>
        <div className="inline-flex items-center mt-2.5 text-brand-primary">
          <Terminal className="w-3.5 h-3.5 mr-1.5" />
          <span className="w-1.5 h-3 bg-brand-primary animate-pulse" />
        </div>
      </div>
    </div>
  </motion.div>
);

const VisualArchitecture = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full flex items-center justify-center relative"
  >
    <div className="relative w-52 h-52 flex flex-col justify-between items-center py-2">
      <motion.div 
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-36 bg-white rounded-xl p-2.5 border border-neutral-100 shadow-md text-center z-30"
      >
        <span className="text-[8px] font-bold text-brand-primary uppercase tracking-wider">Edge CDN Layer</span>
        <div className="text-[11px] font-semibold text-black mt-0.5">Global Caching</div>
      </motion.div>

      <div className="absolute inset-y-8 w-0.5 border-l-2 border-dashed border-brand-primary/20 left-1/2 -ml-0.5" />

      <motion.div 
        animate={{ y: [10, 110, 10] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        className="absolute w-2.5 h-2.5 bg-brand-primary rounded-full shadow-[0_0_8px_rgba(232,125,54,0.4)] left-1/2 -ml-1.25 z-20"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="w-40 bg-white rounded-xl p-2.5 border border-neutral-100 shadow-md text-center z-30"
      >
        <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Backend API Server</span>
        <div className="text-[11px] font-semibold text-black mt-0.5">Serverless Handler</div>
      </motion.div>

      <motion.div 
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="w-44 bg-white rounded-xl p-2.5 border border-neutral-100 shadow-md text-center z-30"
      >
        <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">Distributed DB</span>
        <div className="text-[11px] font-semibold text-black mt-0.5">Multi-Region Storage</div>
      </motion.div>
    </div>
  </motion.div>
);

const VisualDelivery = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center justify-center w-full h-full relative"
  >
    <div className="relative w-36 h-36 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle 
          cx="72" 
          cy="72" 
          r="56" 
          className="stroke-neutral-100 fill-none" 
          strokeWidth="6"
        />
        <motion.circle 
          cx="72" 
          cy="72" 
          r="56" 
          className="stroke-brand-primary fill-none" 
          strokeWidth="6"
          strokeDasharray="352"
          initial={{ strokeDashoffset: 352 }}
          animate={{ strokeDashoffset: 352 * 0.15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <CheckCircle2 className="w-8 h-8 text-brand-primary mb-0.5 animate-bounce" />
        <span className="text-xl font-bold text-black font-mono">100%</span>
        <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-wider">On-Time</span>
      </div>
    </div>
    <div className="flex gap-6 mt-4">
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
        <span className="text-[9px] font-semibold text-neutral-500">Milestones</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full" />
        <span className="text-[9px] font-semibold text-neutral-500">Releases</span>
      </div>
    </div>
  </motion.div>
);

const VisualSupport = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center justify-center w-full h-full"
  >
    <div className="relative w-36 h-20 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 50">
        <path 
          d="M 25,25 C 10,10 10,40 25,25 C 40,10 60,10 75,25 C 90,40 90,10 75,25 C 60,40 40,40 25,25" 
          fill="none" 
          className="stroke-neutral-100" 
          strokeWidth="1.5"
        />
        <motion.path 
          d="M 25,25 C 10,10 10,40 25,25 C 40,10 60,10 75,25 C 90,40 90,10 75,25 C 60,40 40,40 25,25" 
          fill="none" 
          className="stroke-brand-primary" 
          strokeWidth="1.5"
          strokeDasharray="160"
          animate={{ strokeDashoffset: [-160, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col pt-2.5">
        <RefreshCw className="w-5 h-5 text-brand-primary animate-spin" style={{ animationDuration: '5s' }} />
        <span className="text-[9px] font-bold text-black uppercase tracking-wider mt-1.5">Lifecycle Support</span>
      </div>
    </div>
  </motion.div>
);

const VisualBusiness = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col items-center justify-center w-full h-full px-5"
  >
    <div className="w-full h-32 bg-white border border-neutral-100 shadow-sm rounded-xl p-3.5 flex flex-col justify-between overflow-hidden relative">
      <div className="flex items-center justify-between shrink-0 mb-2">
        <div className="flex items-center gap-1.5">
          <LineChart className="w-3.5 h-3.5 text-brand-primary" />
          <span className="text-[10px] font-bold text-black">Business Conversion Rate</span>
        </div>
        <span className="text-[10px] font-bold text-[#a6e3a1] font-mono">+240% YoY</span>
      </div>

      <div className="flex-1 w-full flex items-end gap-2.5 relative">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.03]">
          <div className="w-full border-t border-black" />
          <div className="w-full border-t border-black" />
        </div>

        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "40%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 bg-neutral-100 rounded-t-sm"
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "65%" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex-1 bg-brand-primary/20 rounded-t-sm"
        />
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "95%" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex-1 bg-brand-primary rounded-t-sm relative shadow-[0_0_10px_rgba(232,125,54,0.1)]"
        />
      </div>
    </div>
  </motion.div>
);

export default function WhyWorkWithMe() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderVisual = () => {
    switch (hoveredIndex) {
      case 0:
        return <VisualCommunication key="comm" />;
      case 1:
        return <VisualCode key="code" />;
      case 2:
        return <VisualArchitecture key="arch" />;
      case 3:
        return <VisualDelivery key="del" />;
      case 4:
        return <VisualSupport key="sup" />;
      case 5:
        return <VisualBusiness key="bus" />;
      default:
        return <VisualDefault key="def" />;
    }
  };

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

      {/* Interactive Split-Screen Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start relative">
        
        {/* Left Column: Sticky Showcase Display (Static/Sticky on Desktop) */}
        <div className="col-span-1 md:col-span-5 md:sticky md:top-24 h-[35vh] md:h-[45vh] lg:h-[50vh] w-full z-20 flex items-center justify-center p-6 lg:p-8 bg-gradient-to-br from-neutral-50/80 to-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            {renderVisual()}
          </AnimatePresence>
        </div>

        {/* Right Column: Sleek List of Interactive Benefits */}
        <div 
          className="col-span-1 md:col-span-7 flex flex-col gap-2"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {benefitsList.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                animate={{ 
                  opacity: hoveredIndex !== null && !isHovered ? 0.35 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className="group flex gap-5 p-5 sm:p-6 rounded-2xl border border-transparent hover:border-neutral-100/70 hover:bg-white/60 cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Highlight Line */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-brand-primary rounded-r-md scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                {/* Sliding indicator background */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      layoutId="listHoverBg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-neutral-50/30 -z-10 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {/* Number / Morphing Icon Container */}
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-200/50 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  {isHovered ? (
                    <motion.div 
                      initial={{ scale: 0.5, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-white"
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <span className="text-xs font-bold text-neutral-400 font-mono">
                      0{index + 1}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black mb-1.5 group-hover:text-brand-primary transition-colors duration-250">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
